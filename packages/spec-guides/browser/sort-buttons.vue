<template>
  <div>
    <button
      type="button"
      :class="{ active: activeDirection === 'asc' }"
      :disabled="activeDirection === 'asc'"
      @click="setDirection('asc')"
    >
      Asc <span v-if="activeDirection === 'asc'">*</span>
    </button>
    <button
      type="button"
      :class="{ active: activeDirection === 'desc' }"
      :disabled="activeDirection === 'desc'"
      @click="setDirection('desc')"
    >
      Desc <span v-if="activeDirection === 'desc'">*</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    colKey: {
      type: String,
      required: true,
    },
    selected: {
      type: String,
      default: null,
    },
  },

  data: () => ({
    activeDirection: null,
  }),

  computed: {
    active() {
      return this.colKey === this.selected;
    },
  },

  watch: {
    active(newV) {
      if (newV === false) this.activeDirection = null;
    },
  },

  methods: {
    setDirection(direction) {
      this.activeDirection = direction;
      this.$emit('click', { key: this.colKey, direction });
    },
  },
};
</script>
