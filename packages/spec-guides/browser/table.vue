<template>
  <!-- <table>
    <thead>
      <tr>
        <th>hp</th>
      </tr>
    </thead>
    <tbody />
  </table> -->
  <div>
    <form>
      <measure-select
        :measures="measureList"
        :selected="selectedMeasureKey"
        @change="setSelectedMeasure"
      />
    </form>
    <h5>All Measures</h5>
    <p v-for="measure in measureList" :key="measure.key">
      {{ measure.label }}
    </p>
    <hr>
    <h5>All Columns</h5>
    <p v-for="col in columnList" :key="`${col.key}-all`">
      {{ col.label }}
    </p>
    <hr>
    <h5>Visible Columns</h5>
    <p v-for="col in visibleColumnList" :key="`${col.key}-visible`">
      {{ col.label }}
    </p>
  </div>
</template>


<script>
import $ from '@base-cms/marko-web/browser/jquery-full';
import dt from 'datatables.net';
import MeasureSelect from './measure-select.vue';

dt(window, $);

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
    table: null,
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

  mounted() {
    // this.table = $(this.$el).DataTable({
    //   sAjaxDataProp: 'feed.entry',
    //   ajax: 'https://spreadsheets.google.com/feeds/list/10EKomL-SVMZ4imnCaoO86t48T7ngVaopWXie04AveUo/4/public/values?alt=json',
    //   columns: [
    //     { mDataProp: this.pathFor('hp-low'), sType: 'num' },
    //   ],
    // });
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
