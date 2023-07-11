<template>
  <b-container>
    <div class="container">
      <div class="row">
        <div class="col-sm" style="text-align:left;">
          <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
            <b-dropdown class="filter-dropdown" variant="default" ref="drop">
              <template #button-content>
                <span class="lc"><i class="icon icon-filter"></i> Фильтр</span><span class="rc"><i class="icon icon-keyboard"></i></span>
              </template>
              <div class="filter-body">
                  <div class="top-content">
                    <span>Параметры фильтра</span>
                    <i class="icon icon-close" @click="$refs.drop.hide(true)"></i>
                  </div>
                  <div class="filter-block">
                    <b-form-group :label="goodsTypeTxt" class="small">
                      <multiselect
                          v-model="goodsType"
                          track-by="title"
                          label="title"
                          placeholder="Тип товара"
                          :options="goodsTypeArr"
                          :searchable="true"
                          :allow-empty="true"
                          :show-labels="false"
                          @input="loadGoods"
                          ref="goodsTypeRef"
                      >
                      </multiselect>
                    </b-form-group>
                  </div>
                  <div class="filter-block">
                    <b-form-group :label="seasonTxt" class="small">
                      <multiselect
                          v-model="seasons"
                          track-by="title"
                          label="title"
                          placeholder="Сезон"
                          :options="seasonsArr"
                          :searchable="true"
                          :allow-empty="false"
                          :show-labels="false"
                          @input="loadGoods"
                          ref="seasonRef"
                      >
                      </multiselect>
                    </b-form-group>
                  </div>
                  <div class="filter-block">
                    <b-form-group :label="warehouseTxt" class="small">
                      <multiselect
                          v-model="storage"
                          track-by="title"
                          label="title"
                          placeholder="Склад"
                          :options="storageArr"
                          :searchable="true"
                          :allow-empty="false"
                          :show-labels="false"
                          @input="loadGoods"
                          ref="pressInStockRef"
                      >
                      </multiselect>
                    </b-form-group>
                  </div>
                  <div class="filter-block">
                    <b-form-group :label="pressTxt" class="small">
                    <multiselect
                        v-model="pressInStock"
                        track-by="title"
                        label="title"
                        placeholder="№ Пресса"
                        :options="pressInStockArr"
                        :searchable="true"
                        :allow-empty="false"
                        :show-labels="false"
                        @input="loadGoods"
                        ref="pressInStockRef"
                    >
                    </multiselect>
                  </b-form-group>
                  </div>
                  <div class="filter-block">
                    <b-form-group :label="articleTxt" class="small">
                      <multiselect
                          v-model="article"
                          track-by="title"
                          label="title"
                          placeholder="Артикул"
                          :options="articleArr"
                          :searchable="true"
                          :allow-empty="false"
                          :show-labels="false"
                          @input="loadGoods"
                          ref="articleRef"
                      >
                      </multiselect>
                    </b-form-group>
                  </div>
              </div>
            </b-dropdown>
            <b-button-group class="mx-1">
              <b-button>Поставщик</b-button>
              <b-button>Категория</b-button>
              <b-button>Справочники</b-button>
            </b-button-group>
          </b-button-toolbar>
        </div>
      </div>
    </div>
  <div class="container">
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
          <img src="img/1.jpg" class="imgGoods"/>
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
import KenzhekhanService from '../../services/KenzhekhanService'

export default {
  name: 'WarehouseView',
  components: {
    'multiselect': Multiselect
  },
  props: {},
  data() {
    return {
      title: 'Товары по складам',
      seasons: null,
      goodsType: null,
      pressInStock: null,
      storage: null,
      article: null,
      tbls: ['seasons', 'warehouse', 'goodsKind', 'typeOfGoods', 'subTypeOfGoods', 'gender'],
      goodsArr: [],
      seasonsArr: [],
      goodsTypeArr: [],
      pressInStockArr: [],
      storageArr: [],
      articleArr: [],
      goodsInStockTxt: 'Товары по складам',
      seasonTxt: 'Сезон',
      goodsTypeTxt: 'Тип товара',
      pressTxt: '№ пресса',
      articleTxt: 'Артикул',
      warehouseTxt: 'Склад',
      collapseAll: true,
      API: process.env.API
    }
  },
  computed: {},
  methods: {
    loadGoods(){
      return null
    },

    async getDicts() {
      if (this.tbls) {
        try {
          console.log('KenzhekhanService.getMainLink(): ' + KenzhekhanService.getMainLink() + '/api/v1/values/' + this.tbls[0]);
          const seasons = fetch(KenzhekhanService.getMainLink() + '/api/v1/values/' + this.tbls[0]); // ---извлекает справочник Сезоны
          const stores = fetch(KenzhekhanService.getMainLink() + '/api/v1/values/' + this.tbls[1]);  // ---извлекает справочник Складов
          const goodsType = fetch(KenzhekhanService.getMainLink() + '/api/v1/values/' + this.tbls[2]);
          Promise.all([seasons, stores, goodsType]) // ---метод позволяющий одновременно обращаться через ajax по двум ссылкам
              .then(values => {
                return Promise.all(values.map(resp => resp.json()));
              }).then(async ([seasonsList, storesList, goodsTypeList]) => {
            this.seasonsArr = seasonsList;
            this.storageArr = storesList;
            this.goodsTypeArr = goodsTypeList;
            // console.log('seasonsList: ' + JSON.stringify(seasonsList));
            // console.log('storesList: ' + JSON.stringify(storesList));
            // console.log('goodsTypeList: ' + JSON.stringify(goodsTypeList));
          });
        } catch (error) {
          this.makeToast('danger', 'Ошибка запроса по Справочникам', error.toString());
        }
      }
    },

    makeToast(title, tostbody) {
      this.$bvToast.toast(tostbody, {
        title: title,
        autoHideDelay: 5000,
        appendToast: true
      });
    }, // сообщение с ошибкой
  },
  watch: {},
  created() {
    this.getDicts();
  }
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
    width: 140px;
  }
  .filter-dropdown{
    border: 1px solid #e2e5eb;
    width: 200px;
    background-color: #f7f9fc;
    color: #5c7f96;
  }
  .dropdown-menu{
    width: 440px;
    background-color: #f7f9fc;
    border: 1px solid #e2e5eb;
    padding: 20px;
    box-shadow: 7px 7px 7px rgba(0,0,0,.15);
    top: 1px!important;
  }
  .form-group legend {
    color: #5c7f96;
    padding: 2px;
    margin-top: 12px;
  }
  .top-content span{
    color: #5c7f96;
  }
  //.filter-dropdown{
  //  height: 33px;
  //}
  .btn-secondary{
    background-color: #f7f9fc;
    border: 1px solid #e2e5eb;
    color: #5c7f96;
  }
  .row{
    padding-top: 30px;
  }
</style>