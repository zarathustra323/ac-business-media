<template>
  <div>
    <form>
      <field-search
        :columns="visibleColumnList"
        :selected="selectedSearchKey"
        :disabled="isLoading"
        :phrase="searchPhrase"
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
              <sort-buttons :col-key="col.key" :selected="selectedSortKey" @click="setSortKey" />
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
              {{ row[col.key].displayValue }}
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
import parseNumber from './utils/parse-number';
import MeasureSelect from './measure-select.vue';
import FieldSearch from './field-search.vue';
import SortButtons from './sort-buttons.vue';

const { isArray } = Array;
const { keys } = Object;

export default {
  /**
   *
   */
  components: {
    MeasureSelect,
    FieldSearch,
    SortButtons,
  },

  /**
   *
   */
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

  /**
   *
   */
  data: () => ({
    isLoading: false,
    error: null,
    activeMeasureKey: null,
    activeSearchKey: null,
    selectedSortKey: null,
    searchPhrase: null,
    rows: [],
  }),

  /**
   *
   */
  computed: {
    /**
     *
     */
    selectedMeasureKey() {
      const { activeMeasureKey } = this;
      if (activeMeasureKey) return activeMeasureKey;
      return this.initialMeasureKey;
    },

    /**
     *
     */
    selectedSearchKey() {
      const { activeSearchKey } = this;
      if (activeSearchKey) return activeSearchKey;
      return this.initialSearchKey;
    },

    /**
     *
     */
    measureList() {
      const { measures } = this;
      const measureKeys = keys(measures);
      return measureKeys.map((key) => {
        const measure = measures[key];
        return { ...measure, key, label: measure.label || key };
      });
    },

    /**
     *
     */
    selectedMeasure() {
      const { selectedMeasureKey } = this;
      if (!selectedMeasureKey) return undefined;
      return this.measures[selectedMeasureKey];
    },

    /**
     *
     */
    columnList() {
      const { columns } = this;
      const colKeys = keys(columns);
      return colKeys.map((key) => {
        const col = columns[key];
        return { ...col, key, label: col.label || key };
      });
    },

    allColumnsMap() {
      return this.columnList.reduce((map, col) => {
        const { type } = col;
        map.set(col.key, { type, root: col });
        if (this.hasRange(col.range)) {
          const [lowKey, highKey] = col.range;
          map.set(lowKey, { type });
          map.set(highKey, { type });
        }
        return map;
      }, new Map());
    },

    /**
     *
     */
    visibleColumnList() {
      const { columnList, selectedMeasure, selectedMeasureKey } = this;
      if (!selectedMeasure) return columnList.slice();
      const visible = columnList.filter(col => !col.measure || col.measure === selectedMeasureKey);
      return visible;
    },

    /**
     *
     */
    filteredRows() {
      const { searchPhrase, selectedSearchKey } = this;
      if (!searchPhrase) return this.rows;
      const column = this.getColumn(selectedSearchKey);
      if (column.type === 'number') return this.filterByNumber({ key: selectedSearchKey, phrase: searchPhrase });
      return this.filterByRegex({ key: selectedSearchKey, phrase: searchPhrase });
    },
  },

  /**
   *
   */
  created() {
    this.loadData();
  },

  /**
   *
   */
  methods: {
    /**
     *
     */
    setSelectedMeasureKey(key) {
      this.activeMeasureKey = key;
      const { selectedSearchKey } = this;
      if (selectedSearchKey) {
        const col = this.getColumn(selectedSearchKey);
        if (col && col.measure) this.searchPhrase = null;
      }
    },

    /**
     *
     */
    setSelectedSearchKey(key) {
      this.activeSearchKey = key;
      this.searchPhrase = null;
    },

    /**
     *
     */
    setSearchPhrase(phrase) {
      this.searchPhrase = phrase;
    },

    setSortKey({ key }) {
      this.selectedSortKey = key;
    },

    /**
     *
     */
    getColumn(key) {
      return this.columns[key];
    },

    /**
     *
     */
    getDisplayValue(col, row) {
      const { range, key } = col;
      if (this.hasRange(range)) {
        const [lowKey, highKey] = range;
        const rangeValue = this.getRangeValue({ lowKey, highKey, row });
        if (rangeValue === '') return this.getValueFor({ key, row });
        return rangeValue;
      }
      return this.getValueFor({ key, row });
    },

    /**
     *
     */
    hasRange(range) {
      return isArray(range) && range.length === 2;
    },

    /**
     *
     */
    getValueFor({ key, row }) {
      const value = get(row, key);
      if (!value) return '';
      if (value.isRange) return `${value.min} - ${value.max}`;
      if (value.min != null) return value.min;
      return value.raw;
    },

    getRangeValueFor({ key, row, prop }) {
      const value = get(row, key);
      if (!value) return null;
      return value[prop] == null ? null : value[prop];
    },

    getMinValueFor({ key, row }) {
      return this.getRangeValueFor({ key, row, prop: 'min' });
    },

    getMaxValueFor({ key, row }) {
      return this.getRangeValueFor({ key, row, prop: 'max' });
    },

    /**
     *
     */
    getRangeValue({ lowKey, highKey, row }) {
      const values = [
        this.getMinValueFor({ key: lowKey, row }),
        this.getMaxValueFor({ key: highKey, row }),
      ];
      return values.filter(v => v).join(' - ');
    },

    /**
     *
     */
    filterByRegex({ key, phrase }) {
      const { rows } = this;
      if (!phrase) return rows;
      const tokens = escapeRegex(phrase).replace(/\s\s+/, ' ').split(' ');
      const pattern = new RegExp(`${tokens.join('|')}`, 'i');
      return this.rows.filter((row) => {
        const { displayValue } = get(row, key);
        return pattern.test(displayValue);
      });
    },

    /**
     *
     */
    filterByNumber({ key, phrase }) {
      const tuple = parseNumber({ value: phrase });
      if (tuple == null) return [];
      const [n] = tuple;

      const exponent = `${parseInt(Math.abs(n), 10)}`.length - 1;
      const drift = (10 ** exponent) / this.driftPercent;
      const min = n - drift;
      const max = n + drift;

      return this.rows.filter((row) => {
        const val = get(row, key);
        if (!val) return false;
        if (val.isRange) {
          return (min >= val.min && min <= val.max) || (max >= val.min && max <= val.max);
        }
        return val.min >= min && val.min <= max;
      });
    },

    /**
     *
     */
    async loadData() {
      this.error = null;
      this.isLoading = true;

      try {
        const { sheetSrc } = this;
        if (!sheetSrc) throw new Error('No data source was provided.');
        const res = await fetch(sheetSrc);
        if (!res.ok) throw new Error('Network error encountered when retrieving data.');
        const json = await res.json();
        let rows = get(json, 'feed.entry');
        const colKeys = [...this.allColumnsMap.keys()];

        // Format/simplify the raw data.
        this.rows = isArray(rows) ? rows.map((row) => {
          const newRow = colKeys.reduce((o, key) => {
            const col = this.allColumnsMap.get(key);
            const raw = get(row, `gsx$${key}.$t`);
            const values = { raw };
            if (col.type === 'number') {
              const range = parseNumber({ value: raw });
              if (range) {
                const [min, max] = range;
                values.min = min;
                values.max = max;
                values.isRange = min !== max;
              }
            }
            return { ...o, [key]: values };
          }, {});

          // calculate display value off of formatted row.
          this.columnList.forEach((col) => {
            const displayValue = this.getDisplayValue(col, newRow);
            newRow[col.key].displayValue = displayValue;
          });
          return newRow;
        }) : [];
        // clear the rows after mapping to allow for gc.
        rows = [];
      } catch (e) {
        this.error = e;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
