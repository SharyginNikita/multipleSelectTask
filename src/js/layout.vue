<script>
import SelectQ from "./select.vue";

export default {
  components: {
    selectQ: SelectQ
  },
  data() {
    return {
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      selected: []
    };
  },
  computed: {
    computedOptions() {
      return this.options.filter(option => !this.selected.includes(option));
    }
  },
  mounted() {
    this.$on("changeSelected", selected => {
      this.selected = this.selected.concat(selected);
    });
  }
};
</script>

<template lang="pug">
    .wrapper
        selectQ(:options="computedOptions")
        selectQ(:options="computedOptions")
        selectQ(:options="computedOptions")
        selectQ(:options="computedOptions")
</template>

<style lang="scss">
@import "../../node_modules/quasar/dist/quasar.min.css";
</style>
