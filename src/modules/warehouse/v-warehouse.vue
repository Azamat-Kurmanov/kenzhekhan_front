<template>
  <div class="v-warehouse">
    {{ title }}
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: "v-warehouse",
  components: {},
  props: {},
  data() {
    return {
      title: 'Склады'
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {}
}
</script>

<style lang="scss">
  .v-warehouse {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
  }
</style>