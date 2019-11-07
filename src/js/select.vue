<script>
export default {
  props: ["options"],
  data() {
    return {
      selected: [],
      lastSelected: [],
      currentOpt: JSON.parse(JSON.stringify(this.options))
    };
  },
  computed: {
    multiple: {
      get() {
        return this.selected;
      },
      set(value) {
        this.selected = value;

        if (this.selected.length < this.lastSelected.length) {
          let arrLess = [];
          let diff = this.lastSelected.filter(x => !this.selected.includes(x));
          diff.forEach(option => {
            arrLess.push(option.id);
          });
          this.$parent.$emit("changeSelectedLess", arrLess);
        } else {
          let arrMore = [];
          value.forEach(option => {
            arrMore.push(option.id);
          });
          this.$parent.$emit("changeSelectedMore", arrMore);
        }
      }
    }
  },
  methods: {},

  watch: {
    options: {
      handler: function(val) {
        this.currentOpt = JSON.parse(JSON.stringify(val));

        this.selected.forEach(desc => {
          let test = this.currentOpt.find(prop => prop.desc === desc.desc);
          this.$set(test, "inactive", false);
        });

        if (this.lastSelected.length !== this.selected.length) {
          this.lastSelected = this.selected;
        }
      },
      deep: true
    }
  }
};
</script>

<template lang="pug">
.select-wrapper
    q-select(
        filled
        v-model="multiple"
        multiple
        :options="currentOpt"
        option-value="id"
        option-label="desc"
        option-disable="inactive"
        label="Multiple")
</template>
