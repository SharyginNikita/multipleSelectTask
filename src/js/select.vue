<script>
export default {
  data() {
    return {
      selected: []
    }
  },
  props: ["options"],
  computed: {
    multiple: {
      get() {
        return this.selected;
      },
      set(value) {
        this.selected = value;
        this.$parent.$emit('changeSelected', this.selected);
      }
    }
  }
};
</script>

<template lang="pug">
    q-select(
        filled
        v-model="multiple"
        multiple
        :options="options"
        label="Multiple")
</template>
