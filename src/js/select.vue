<script>
export default {
  props: ["options"],
  data() {
    return {
      selected: [],
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

        let arr = [];
        value.forEach(option => {
          arr.push(option.id);
        });
        console.log(arr);

        //this.$parent.$emit("deleteSelected", arr);
        
        this.$parent.$emit("changeSelected", arr);
      }
    }
  },
  methods: {},

  watch: {
    options: {
      handler: function(val) {
        console.log("working?");
        this.currentOpt = JSON.parse(JSON.stringify(val));
        this.selected.forEach(desc => {
          let test = this.currentOpt.find(prop => prop.desc === desc.desc);
          this.$set(test, "inactive", false);
        });
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
