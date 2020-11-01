<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" v-for="product in productbs" :key="product">
         <router-link :to="{name: 'onepro', params: { id: product.id, d:product.depart.id }}">
        <div class="f_p_item">
          <div class="f_p_img">
            <img class="img-fluid"  v-bind:src="site+product.images__link[0].link" alt>
          </div>
          <a href="#">
            <h4>{{ product.name }}</h4>
            <p>{{product.describ}}</p>
            <!-- {{ n }} -->
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
      productbs: null,
      errors:[],
      n:0,
      site:'http://website22.pythonanywhere.com'
    }
  },
    created(){
      axios.get('/api/productall/')
        .then(res =>{
          var departp = [];
          for(this.n;this.n <= res.data.length ; this.n++){
            if(res.data[this.n].depart.name == 'النحل'){
              departp.push(res.data[this.n]);
              this.productbs = departp.reverse();
            }
          };

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
    text-align: center;
}

img {
  width:100%;
  height:255px;
}
p {
    color: #eb6d2f;
}

</style>
