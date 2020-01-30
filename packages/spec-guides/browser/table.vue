<template>
  <div>
    <form>
      <field-search
        :columns="visibleColumnList"
        :selected="selectedSearchKey"
        :disabled="isLoading"
        @field-change="setSelectedSearchKey"
        @phrase-change="setSearchPhrase"
      />
      <measure-select
        :measures="measureList"
        :selected="selectedMeasureKey"
        :disabled="isLoading"
        @change="setSelectedMeasureKey"
      />
    </form>
    <div class="table-responsive">
      <table ref="table" class="table table-striped table-hover table-sm" style="min-width: 100%;">
        <thead class="thead-dark">
          <tr>
            <th v-for="col in visibleColumnList" :key="`${col.key}-header`" class="text-center">
              {{ col.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="isLoading">
            <td :colspan="visibleColumnList.length">
              Loading data...
            </td>
          </tr>
          <tr v-else-if="error">
            <td :colspan="visibleColumnList.length">
              Error: {{ error.message }}
            </td>
          </tr>
          <tr v-for="(row, index) in filteredRows" v-else :key="index">
            <td
              v-for="col in visibleColumnList"
              :key="`${col.key}-row-${index}`"
              class="text-center"
            >
              {{ getValue(col, row) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import { get } from 'object-path';
import escapeRegex from './utils/escape-regex';
import MeasureSelect from './measure-select.vue';
import FieldSearch from './field-search.vue';

const { isArray } = Array;
const { keys } = Object;

export default {
  components: {
    MeasureSelect,
    FieldSearch,
  },

  props: {
    sheetSrc: {
      type: String,
      required: true,
    },
    columns: {
      type: Object,
      default: () => ({}),
    },
    measures: {
      type: Object,
      default: () => ({}),
    },
    initialMeasureKey: {
      type: String,
      default: function defaultKey() {
        return keys(this.measures)[0];
      },
    },
    initialSearchKey: {
      type: String,
      default: function defaultKey() {
        return keys(this.columns)[0];
      },
    },
    driftPercent: {
      type: Number,
      default: 10,
    },
  },

  data: () => ({
    isLoading: false,
    error: null,
    activeMeasureKey: null,
    activeSearchKey: null,
    searchPhrase: null,
    rows: [],
  }),

  computed: {
    selectedMeasureKey() {
      const { activeMeasureKey } = this;
      if (activeMeasureKey) return activeMeasureKey;
      return this.initialMeasureKey;
    },
    selectedSearchKey() {
      const { activeSearchKey } = this;
      if (activeSearchKey) return activeSearchKey;
      return this.initialSearchKey;
    },
    measureList() {
      const { measures } = this;
      const measureKeys = keys(measures);
      return measureKeys.map((key) => {
        const measure = measures[key];
        return { ...measure, key, label: measure.label || key };
      });
    },
    selectedMeasure() {
      const { selectedMeasureKey } = this;
      if (!selectedMeasureKey) return undefined;
      return this.measures[selectedMeasureKey];
    },
    columnList() {
      const { columns } = this;
      const colKeys = keys(columns);
      return colKeys.map((key) => {
        const col = columns[key];
        return { ...col, key, label: col.label || key };
      });
    },
    visibleColumnList() {
      const { columnList, selectedMeasure, selectedMeasureKey } = this;
      if (!selectedMeasure) return columnList.slice();
      return columnList.filter(col => !col.measure || col.measure === selectedMeasureKey);
    },
    filteredRows() {
      const { searchPhrase, selectedSearchKey } = this;
      if (!searchPhrase) return this.rows;
      const column = this.getColumn(selectedSearchKey);
      if (column.type === 'number') return this.filterByNumber({ key: selectedSearchKey, phrase: searchPhrase, range: column.range });
      return this.filterByRegex({ key: selectedSearchKey, phrase: searchPhrase });
    },
  },

  created() {
    this.loadData();
  },

  methods: {
    setSelectedMeasureKey(event) {
      this.activeMeasureKey = event.target.value;
    },

    setSelectedSearchKey(event) {
      this.activeSearchKey = event.target.value;
      this.searchPhrase = null;
    },

    setSearchPhrase(event) {
      this.searchPhrase = event.target.value;
    },

    getColumn(key) {
      return this.columns[key];
    },

    getValue(col, row) {
      const { range, key } = col;
      if (this.hasRange(range)) {
        const [low, high] = range;
        return this.getRangeValue({ low, high, row });
      }
      return this.getValueFor({ key, row });
    },

    hasRange(range) {
      return isArray(range) && range.length === 2;
    },

    getValueFor({ key, row }) {
      return get(row, `gsx$${key}.$t`, '');
    },

    getRangeValue({ low, high, row }) {
      const values = [
        this.getValueFor({ key: low, row }),
        this.getValueFor({ key: high, row }),
      ];
      return values.filter(v => v).join(' - ');
    },

    filterByRegex({ key, phrase }) {
      const { rows } = this;
      if (!phrase) return rows;
      const tokens = escapeRegex(phrase).replace(/\s\s+/, ' ').split(' ');
      const pattern = new RegExp(`${tokens.join('|')}`, 'i');
      return this.rows.filter(row => pattern.test(this.getValueFor({ key, row })));
    },

    filterByNumber({ key, phrase, range }) {
      const n = this.parseFloat({ value: phrase });
      if (n == null) return [];
      if (this.hasRange(range)) {
        // @todo implement
        return this.rows;
      }

      const exponent = `${parseInt(Math.abs(n), 10)}`.length - 1;
      const drift = (10 ** exponent) / this.driftPercent;
      const min = n - drift;
      const max = n + drift;

      return this.rows.filter((row) => {
        const val = this.getValueFor({ key, row });
        if (!val) return false;
        const parsed = this.parseFloat({ value: val });
        if (parsed == null) return false;
        return parsed >= min && parsed <= max;
      });
    },

    parseFloat({ value, whenRange = 'high' }) {
      if (!value) return null;
      const v = this.pickRangeValue({ value, choice: whenRange });
      if (!v) return null;
      // parse and remove commas
      const parsed = parseFloat(v.replace(/,/g, ''));
      return Number.isNaN(parsed) ? null : parsed;
    },

    pickRangeValue({ value, choice = 'high' }) {
      if (!value) return null;
      if (!/-/.test(value)) return value;
      const parts = value.split('-').map(v => v.trim()).filter(v => v);
      if (!parts.length) return null;
      if (parts.length === 1) return parts[0];
      const index = choice === 'high' ? 1 : 0;
      return parts[index];
    },

    async loadData() {
      this.error = null;
      this.isLoading = true;

      try {
        const { sheetSrc } = this;
        if (!sheetSrc) throw new Error('No data source was provided.');
        const res = await fetch(sheetSrc);
        if (!res.ok) throw new Error('Network error encountered when retrieving data.');
        const json = await res.json();
        const rows = get(json, 'feed.entry');
        this.rows = isArray(rows) ? rows : [];
      } catch (e) {
        this.error = e;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
