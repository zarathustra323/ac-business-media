<template>
  <div v-if="columns.length">
    <select :disabled="disabled" @change="emitFieldChange">
      <option
        v-for="col in columns"
        :key="col.key"
        :value="col.key"
        :selected="col.key === selected"
      >
        {{ col.label }}
      </option>
    </select>
    <input
      :value="phrase"
      :disabled="disabled"
      :type="type"
      placeholder="Enter search value..."
      @input="emitPhraseChange(...arguments)"
    >
  </div>
</template>

<script>
import { debounce } from 'debounce';

export default {
  props: {
    phrase: {
      type: String,
      default: null,
    },
    selected: {
      type: String,
      default: null,
    },
    columns: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    selectedColumn() {
      return this.columns.find(col => col.key === this.selected);
    },

    type() {
      const { selectedColumn } = this;
      if (!selectedColumn || selectedColumn.type !== 'number') return 'text';
      return 'number';
    },
  },

  methods: {
    emitFieldChange(event) {
      this.$emit('field-change', event);
    },
    emitPhraseChange: debounce(function emit(event) {
      this.$emit('phrase-change', event);
    }, 250),
  },
};
</script>
