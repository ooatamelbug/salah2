<template>
    <!--================ Products =================-->
	<section class="feature_product_area section_gap">
		<div class="main_box">
			<div class="container-fluid">
				<div class="row">
					<div class="main_title">
						<h2>اخر المنتجات المضافة</h2>
						<!-- <p>Who are in extremely love with eco friendly system.</p> -->
					</div>
				</div>
				<div class="row">
					<div class="col-md-3" v-for="(product, index) in products" v-if="index <= 3">
						<router-link :to="{name: 'onepro', params: { id: product.id, d:product.depart.id }}" @click="go">
					 	<div class="f_p_item">
		          <div class="f_p_img">
		            <img class="img-fluid"  v-bind:src="site+product.images__link[0].link" alt>
		          </div>
		            <h4>{{ product.name }}</h4>
		            <p>{{product.describ}}</p>
		          <h5>{{product.price}} L.E</h5>
		        </div>
					</router-link>
		      </div>
					<router-link to="/products" class="button">
					<button type="button" class="btn btn-warning center">كافة المنتجات</button>
					</router-link>
				</div>
			</div>
		</div>
	</section>
	<!--================ Products =================-->
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      products: null,
      errors:[],
      n:0,
		site:'http://website22.pythonanywhere.com/'
      //site:'http://workmoh.pythonanywhere.com'
    }
  },
    created(){
      //axios.get('http://workmoh.pythonanywhere.com/api/productall/')
			axios.get('http://website22.pythonanywhere.com/api/productall/')
        .then(res =>{

          this.products = res.data.reverse();
        })
        .catch(e => console.log(e));
		},
		// methods: {
		// 	go() {
		// 		 this.$router.go();
		// 	}
		// }
};
</script>
<style scoped>

.feature_product_area {
	background-color: antiquewhite
}
.f_p_item:hover {
	border: 1px solid #eb6d2f;
	  }

		img {
		  width:100%;
		  height:255px;
		}
h2 {
  text-align: center;
  padding-bottom: 60px;
  color: #eb6d2f;
}
 button {
	
	background-color:#eb6d2f;
	color: aliceblue;
 }
 .button {
margin: auto;
 }
</style>
