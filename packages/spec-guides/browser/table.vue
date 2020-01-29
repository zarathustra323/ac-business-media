<template>
  <div>
    <form>
      <measure-select
        :measures="measureList"
        :selected="selectedMeasureKey"
        @change="setSelectedMeasure"
      />
    </form>
    <table ref="table" class="table">
      <thead>
        <tr>
          <th v-for="col in visibleColumnList" :key="`${col.key}-header`">
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody />
    </table>
  </div>
</template>


<script>
import MeasureSelect from './measure-select.vue';

const { keys } = Object;

export default {
  components: {
    MeasureSelect,
  },

  props: {
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
    activeMeasureKey: null,
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

  methods: {
    setSelectedMeasure(event) {
      this.activeMeasureKey = event.target.value;
    },
    pathFor(column) {
      return `gsx$${column}.$t`;
    },
  },
};
</script>
