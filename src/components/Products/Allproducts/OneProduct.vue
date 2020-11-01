<template>
  <transition
    name="router-anim"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeInRight"
  >
    <div class="page">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div id="main-img" class="main-img">
              <img v-bind:src="img">
            </div>
          </div>
          <!--  -->
          <div class="col-md-4">
            <div class="data data2">
              <h4>{{product.name}}</h4>
              <p>{{" السعر" + product.price + " " + product.currency}}</p>
              <p>{{product.describ}}</p>
            </div>
          </div>
          <div class="col-md-4">
            <h4>لطلب المنتج</h4>
            <ul class="list-group list-group-flush">
              <li class="contact">
                <i class="fa fa-mobile fa-lg" aria-hidden="true"></i> 0096599825279
              </li>
              <li class="contact">
                <i class="fa fa-mobile fa-lg" aria-hidden="true"></i> 0096551199352
              </li>
              <li class="contact">
                <i class="fa fa-mobile fa-lg" aria-hidden="true"></i> 00201123101350
              </li>
              <li class="contact">
                <a href="#">
                  <i class="fa fa-facebook"></i> فيس بوك
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- <app-related-products></app-related-products> -->
        <!-- <router-view :key="$route.fullPath"></router-view> -->
        <h2>منتجات ذات صلة</h2>
        <div class="row">
          <div
            class="col-md-3"
            v-for="(productt, index) in products"
            v-if="index <= 4"
            v-on:click="push"
          >
            <router-link :to="{name: 'onepro2', params: { id: productt.id, d:productt.depart.id }}">
              <div class="f_p_item">
                <div class="f_p_img">
                  <img class="img-fluid previmg" :src="site+productt.images__link[0].link" alt>
                </div>
                <a href="#">
                  <h3>{{productt.name}}</h3>
                  <p>{{productt.describ}}</p>
                </a>
                <h5>{{productt.describ + productt.currency}}</h5>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
// import homeProductes from "../../Home/children/homeProductes.vue";
// import RelatedProducts from "../Allproducts/RelatedProducts.vue";

import axios from "axios";
export default {
  // components: {
  //   appHomeProductes: homeProductes,
  //   appRelatedProducts: RelatedProducts
  // },
  data() {
    return {
      product: null,
      products: null,
      token: this.$cookie.get("token"),
      message: {},
      images: "",
      productid: this.$route.params.id,
      depart: this.$route.params.d,
      img: null,
      site: "http://website22.pythonanywhere.com"
    };
  },

  mounted() {
    axios
      .get("/api/productall/" + this.productid + "/")
      .then(res => {
        this.product = res.data;
        this.img = this.site + this.product.images__link[0].link;
        console.log(this.$route.params);
      })

      .catch(err => console.log(err));
  },

  created() {
    console.log(window.location.href);
    axios.get("/api/productallt/" + this.depart + "/").then(res => {
      this.products = res.data;
      console.log(products);
    });
  },
  methods: {
    changimg(inex) {
      var srcimg = this.$refs.f[inex].attributes.src.nodeValue;
      this.img = srcimg;
      console.log(srcimg);
    }
  
  }
};
</script>

<style scoped>
.page {
  margin-top: 200px;
}
.main-img img {
  width: 100%;
  height: 400px;
  transition: 1s;
}
.data {
  display: inline-block;
}
.sup-img-div {
  width: 25%;
  display: inline-block;
  transition: 1s;
}

.sup-img-div img {
  width: 100%;
  max-width: 60px;
  max-height: 60px;
  margin: 10px 0;
  transition: 1s;
  border: 1px solid #eb6d2f;
}

.sup-img-div a:active {
  border: 9px solid #eb6d2f;
}

.previmg {
  width: 100%;
  height: 250px;
}
ul {
  margin: auto;
}
ul li {
  margin: auto;
}
ul li img {
  margin: 10px;
}
h4 {
  /* padding-top: 20px; */
  text-align: right;
  margin: 20px;
  color: #eb6d2f;
}
h3 {
  margin: 5px;
}
p {
  font-size: 16px;
}

.feature_product_area {
  background-color: antiquewhite;
}
.f_p_item:hover {
  border: 2px solid #eb6d2f;
}
.contact {
  list-style: none;
  color: chocolate;
  font-size: 14px;
  border: 1px solid #eb6d2f;
  padding: 5px;
  margin: 5px;
  display: inline !important;
}

h2 {
  margin-top: 60px;
}
p {
  color: #eb6d2f;
}
a {
  color: #eb6d2f;
}
</style>
