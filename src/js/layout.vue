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
   mounted() {
    this.$on("changeSelectedMore", optionsIds => {

      optionsIds.forEach(id => {
        let test = this.options.find(prop => prop.id === id);
        this.$set(test, 'inactive', true);
      })
    });

    this.$on("changeSelectedLess", optionsIds => {
      optionsIds.forEach(id => {
        let test = this.options.find(prop => prop.id === id);
        this.$set(test, 'inactive', false);
      })
    });
  }
};
</script>

<template lang="pug">
    .wrapper
        selectQ(:options="options")
        selectQ(:options="options")
        selectQ(:options="options")
        selectQ(:options="options")
</template>

<style lang="scss">
@import "../../node_modules/quasar/dist/quasar.min.css";
</style>
