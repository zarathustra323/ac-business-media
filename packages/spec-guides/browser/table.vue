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
    <h5>All Columns</h5>
    <p v-for="col in columnList" :key="col.key">
      {{ col.label || col.key }}
    </p>
    <hr>
    <h5>Visible Columns</h5>
    <p v-for="col in visibleColumnList" :key="col.key">
      {{ col.label || col.key }}
    </p>
  </div>
</template>


<script>
import $ from '@base-cms/marko-web/browser/jquery-full';
import dt from 'datatables.net';

dt(window, $);

const { keys } = Object;

export default {
  props: {
    columns: {
      type: Object,
      default: () => ({}),
    },
    measures: {
      type: Object,
      default: () => ({}),
    },
    selectedMeasureKey: {
      type: String,
      default: null,
    },
  },

  data: () => ({
    table: null,
  }),

  computed: {
    selectedMeasure() {
      const { selectedMeasureKey } = this;
      if (!selectedMeasureKey) return undefined;
      return this.measures[selectedMeasureKey];
    },
    columnList() {
      const { columns } = this;
      const colKeys = keys(this.columns);
      return colKeys.map(key => ({ ...columns[key], key }));
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
    pathFor(column) {
      return `gsx$${column}.$t`;
    },
  },
};
</script>
