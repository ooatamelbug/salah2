<template>
    <div>
         <h2>منتجات ذات صلة</h2>
      <div class="row">
        <div class="col-md-3" v-for="(productt, index) in products" v-if="index <= 4">
          <router-link :to="{name: 'onepro', params: { id: productt.id, d:productt.depart.id }}">
            <div class="f_p_item">
              <div class="f_p_img">
                <img class="img-fluid" :src="site+productt.images__link[0].link" alt>
              </div>
              <a href="#">
                <h3>{{productt.name}}</h3>
                <p>{{productt.describ}}</p>
                <!-- {{ n }} -->
              </a>
              <h5>{{productt.describ + productt.currency}}</h5>
            </div>
          </router-link>
        </div>
      </div>
    </div>
</template>



<script>
import homeProductes from "../../Home/children/homeProductes.vue";
import RelatedProducts from "../Allproducts/RelatedProducts.vue"


import axios from "axios";
export default {
  components: {
    appHomeProductes: homeProductes,
    appRelatedProducts: RelatedProducts
  },
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
      //site:'http://workmoh.pythonanywhere.com'
    };
  },
  
  mounted() {
    axios
      .get("/api/productall/" + this.productid + "/")
      .then(res => {
        this.product = res.data;
        this.img = this.site + this.product.images__link[0].link;
        console.log(this.product.depart.id);
        //  this.$router.go();
      })

      .catch(err => console.log(err));
  },
  created() {
    axios
      .get("/api/productallt/" + this.depart + "/")
      .then(res => {
        this.products = res.data;
        console.log(products);
      });
  },
  methods: {
    changimg(inex) {
      var srcimg = this.$refs.f[inex].attributes.src.nodeValue;
      this.img = srcimg;
      console.log(srcimg);
    },
    go(){
       this.$router.go();
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