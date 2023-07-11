<template>
  <div class="inner-container initial-form">
    <div class="section-title program"><span><img src="img/1j.png" class="imgLogo"/></span>
    <span class="subTitle">Товары по складам</span></div>
    <warehouse-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import WarehouseView from './WarehouseView.vue'
export default {
  name: "initForm",
  components: {
    'warehouse-view': WarehouseView
  }
}
</script>

<style>
  .imgLogo{
    height: 100px;
  }
  .section-title{
    text-align: left;
  }
  .subTitle{
    padding-left: 100px;
    text-transform: uppercase;
    font-family: system-ui;
    font-style: oblique;
    font-size: xx-large;
  }
</style>