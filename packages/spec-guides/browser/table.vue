<template>
  <div>
    <form>
      <measure-select
        :measures="measureList"
        :selected="selectedMeasureKey"
        @change="setSelectedMeasure"
      />
    </form>
    <table ref="table" class="table table-striped table-hover table-sm">
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
        <tr v-for="(row, index) in rows" v-else :key="index">
          <td v-for="col in visibleColumnList" :key="`${col.key}-row-${index}`" class="text-center">
            {{ getValue(col, row) }}
          </td>
        </tr>
      </tbody>
      <tfoot />
    </table>
  </div>
</template>


<script>
import { get } from 'object-path';
import MeasureSelect from './measure-select.vue';

const { isArray } = Array;
const { keys } = Object;

export default {
  components: {
    MeasureSelect,
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
  },

  data: () => ({
    isLoading: false,
    error: null,
    activeMeasureKey: null,
    rows: [],
  }),

  computed: {
    selectedMeasureKey() {
      const { activeMeasureKey } = this;
      if (activeMeasureKey) return activeMeasureKey;
      return this.initialMeasureKey;
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
  },

  created() {
    this.loadData();
  },

  methods: {
    setSelectedMeasure(event) {
      this.activeMeasureKey = event.target.value;
    },

    getValue(col, row) {
      return get(row, `gsx$${col.key}.$t`, '');
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
