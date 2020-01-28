const SpecGuideTable = () => import(/* webpackChunkName: "spec-guide-table" */ './table.vue');

export default (Browser) => {
  Browser.registerComponent('SpecGuideTable', SpecGuideTable);
};
