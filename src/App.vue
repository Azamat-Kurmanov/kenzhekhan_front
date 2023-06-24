<template>
  <div id="app" class="main-container">
      <WarehouseView/>
  </div>
</template>

<script>
import WarehouseView from './modules/warehouse/WarehouseView.vue'

export default {
  name: 'App',
  components: {
    WarehouseView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
