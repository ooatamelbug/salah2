<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" v-for="product in products" :key="product" >
         <router-link :to="{name: 'onepro', params: { id: product.id, d:product.depart.id }}">

        <div class="f_p_item">
          <div class="f_p_img">
            <img class="img-fluid"  v-bind:src="site+product.images__link[0].link" alt>
          </div>
          <a href="#">
            <h4>{{ product.name }}</h4>
            <p>{{product.describ}}</p>
          </a>
          <h5>{{product.price}} L.E</h5>
        </div>
         </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      products: null,
      productds: [],
      errors:[],
      n:0,
      site:'http://website22.pythonanywhere.com'
    }
  },
    created(){
      axios.get('/api/productall/')
        .then(res =>{
          this.products = res.data.reverse();
        })
        .catch(e => console.log(e));
    }
};
</script>

<style scoped>

.feature_product_area {
  background-color: antiquewhite;
}
.f_p_item:hover {
  border: 2px solid #eb6d2f;
}
.row {
    padding-top: 90px;
}
img {
  width:100%;
  height:255px;
}
p {
    color: #eb6d2f;
}

</style>
