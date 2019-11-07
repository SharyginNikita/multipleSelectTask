<script>
import SelectQ from "./select.vue";

export default {
  components: {
    selectQ: SelectQ
  },
  data() {
    return {
      options: [
        {
          id: 'goog',
          desc: 'Google',
          inactive: false
        },
        {
          id: 'fb',
          desc: 'Facebook',
          inactive: false
        },
        {
          id: 'twt',
          desc: 'Twitter',
          inactive: false
        },
        {
          id: 'app',
          desc: 'Apple',
          inactive: false
        },
        {
          id: 'ora',
          desc: 'Oracle',
          inactive: false
        }
      ],
      selected: []
    };
  },
  computed: {
    computedOptions() {
      // return this.options.filter(option => !this.selected.includes(option));
      return this.options;
    }
  },
   mounted() {
    this.$on("changeSelected", optionsIds => {

      optionsIds.forEach(id => {
        let test = this.options.find(prop => prop.id === id);
        this.$set(test, 'inactive', true);
      })
      //let test = this.options.find(prop => prop.id === option.id);
      //this.options = options;
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
