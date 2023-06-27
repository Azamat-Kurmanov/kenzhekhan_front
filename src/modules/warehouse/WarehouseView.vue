<template>
  <b-container>
    <div class="container">
      <div class="row">
        <div class="col-sm" style="text-align:left;">
          <b-dropdown text="Фильтр">
            <b-dropdown-item class="dropdown-item-class">
              <div class="form-group">
                <b-form-group :label="seasonTxt" class="small">
                  <multiselect
                      v-model="goodsInStock"
                      :options="goodsArr"
                      placeholder="Сезон"
                      :allow-empty="false"
                      :show-labels="false"
                      width="100%"
                      @input="loadGoods"
                  />
                </b-form-group>
              </div>
            </b-dropdown-item>
            <b-dropdown-item class="dropdown-item-class">
              <div class="form-group">
                <b-form-group :label="articleTxt" class="small">
                  <multiselect
                      v-model="goodsInStock"
                      :options="goodsArr"
                      placeholder="Артикул"
                      :allow-empty="false"
                      :show-labels="false"
                      width="100%"
                      @input="loadGoods"
                  />
                </b-form-group>
              </div>
            </b-dropdown-item>
            <b-dropdown-item class="dropdown-item-class">
              <div class="form-group">
                <b-form-group :label="pressTxt" class="small">
                  <multiselect
                      v-model="goodsInStock"
                      :options="goodsArr"
                      placeholder="Пресс"
                      :allow-empty="false"
                      :show-labels="false"
                      width="100%"
                      @input="loadGoods"
                  />
                </b-form-group>
              </div>
            </b-dropdown-item>
            <b-dropdown-item class="dropdown-item-class">
              <div class="form-group">
                <b-form-group :label="warehouseTxt" class="small">
                  <multiselect
                      v-model="goodsInStock"
                      :options="goodsArr"
                      placeholder="Склад"
                      :allow-empty="false"
                      :show-labels="false"
                      width="100%"
                      @input="loadGoods"
                  />
                </b-form-group>
              </div>
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="col-sm" style="text-align:right;">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">Склад</button>
            <button type="button" class="btn btn-secondary">Поставщик</button>
            <button type="button" class="btn btn-secondary">Категория</button>
          </div>
        </div>
      </div>
    </div>
  <div class="container">
    <div class="row">
      <div class="col">
        <p>{{ title }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Введите наименование товара..." aria-label="Наименование товара" aria-describedby="button-addon2">
        </div>
      </div>
    </div>
    <div class="row" style="padding-top: 3%"></div>
    <div class="row">
      <div class="col">
        <div class="table-container">
          <div class="b-table-sticky-header table-responsive-true">
            <table class="table b-table table-bordered b-table-no-border-collapse">
              <thead>
              <tr>
                <th>№</th>
                <th>Наименование</th>
                <th>Сезон</th>
                <th>Артикул</th>
                <th>Размер</th>
                <th>Цена</th>
                <th>Цвет</th>
                <th>Количество</th>
                <th>Описание</th>
                <th>№ пресса</th>
                <th>Склад</th>
                <th>Поставщик</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Куртка</td>
                <td>Зима</td>
                <td>123</td>
                <td>54-67</td>
                <td>5784</td>
                <td>Синий</td>
                <td>48</td>
                <td>дфлвоа</td>
                <td>154</td>
                <td>новый склад</td>
                <td>Варвара</td>
              </tr>
              </tbody>
              </table>
            </div>
          </div>
      </div>
      <div class="col">
        <div class="container-picture">
          <img src="src/assets/img/1.jpg">
        </div>
      </div>
    </div>
  </div>
  </b-container>
</template>

<script>
import Multiselect from 'vue-multiselect';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'WarehouseView',
  components: {
    'multiselect': Multiselect
  },
  props: {},
  data() {
    return {
      title: 'Товары по складам',
      goodsInStock: null,
      goodsArr: [],
      goodsInStockTxt: 'Товары по складам',
      seasonTxt: 'Сезон',
      articleTxt: 'Артикул',
      pressTxt: '№ пресса',
      warehouseTxt: 'Склад',
      collapseAll: true
    }
  },
  computed: {},
  methods: {
    loadGoods(){
      return null
    }
  },
  watch: {},
  mounted() {}
}
</script>

<style lang="scss">
  .warehouse-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
  .container {
    //border: 1px solid black;
  }
  .container-picture{
    border: 1px solid black;
  }
  .warehouse-menu{
    text-align: left;
  }
  .warehouse-bar-buttons{
    text-align: right;
  }
  .dropdown-item-class{
    width: 350px;
  }
  .table-container {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .imgGoods {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
  }
</style>