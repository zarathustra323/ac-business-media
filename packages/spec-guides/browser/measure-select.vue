<template>
  <select v-if="measures.length" :disabled="disabled" @change="emitChange">
    <option
      v-for="measure in measures"
      :key="measure.key"
      :value="measure.key"
      :selected="measure.key === selected"
    >
      {{ measure.label }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    selected: {
      type: String,
      default: null,
    },
    measures: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    emitChange(event) {
      this.$emit('change', event);
    },
  },
};
</script>
