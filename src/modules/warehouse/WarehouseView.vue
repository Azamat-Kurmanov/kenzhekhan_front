<template>
  <div class="warehouse-wrapper">
    <p>{{ title }}</p>
  </div>
</template>

<script>
import {watch} from "vue";

export default {
  name: "WarehouseView",
  components: {},
  props: {},
  data() {
    return {
      title: 'This is the main page of warehouse'
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {}
}
</script>

<style scoped>
  .warehouse-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  }
</style>