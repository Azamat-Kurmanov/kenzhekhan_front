<template>
  <div id="app" class="main-container">
    <initial-form/>
<!--      <WarehouseView/>-->
  </div>
</template>

<script>
import initForm from "@/modules/warehouse/initForm";
// import WarehouseView from './modules/warehouse/WarehouseView.vue'

export default {
  name: 'App',
  components: {
    'initial-form': initForm
    // ,
    // WarehouseView
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
  margin-top: 10px;
}
</style>
