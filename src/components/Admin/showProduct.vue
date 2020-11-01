<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-4"> -->
        <div class="data">
          <img class="main-img" src="src/assets/img/product/feature-product/f-p-1.jpg" alt>

          <ul class="list instafeed d-flex flex-wrap">
            <li>
              <img src="src/assets/img/instagram/Image-01.jpg" alt>
            </li>
            <li>
              <img src="src/assets/img/instagram/Image-02.jpg" alt>
            </li>
            <li>
              <img src="src/assets/img/instagram/Image-03.jpg" alt>
            </li>
            <li>
              <img src="src/assets/img/instagram/Image-04.jpg" alt>
            </li>
          </ul>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators" v-for="(img, index) in product.images__link">
            <li data-target="#carouselExampleIndicators" :data-slide-to="index" :class="{active: index == 0}"></li>
            <!-- <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> -->
          </ol>
          <div class="carousel-inner" v-for="(productimg, index) in product.images__link">
            <div class="carousel-item" :class="{ active: index == 0 }">
              <img
                class="d-block w-100"
                :src="site+productimg.link"
                alt="First slide"
              >
            </div>

          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">السابق</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">التالي</span>
          </a>
        </div>

        <div class="data data2">
          <h4>{{product.name}}</h4>
          <h4>{{"السعر "+product.price + ' ' + product.currency}}</h4>
          <h4>{{product.describ}}</h4>
          <h4>لطلب المنتج </h4>
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
                <!-- <div class="f_social"> -->
                  <a href="#">
                    <i class="fa fa-facebook"></i> فيس بوك
                  </a>
                <!-- </div> -->
              </li>
            </ul>
        </div>
      </div>

       <!--  -->

       <div v-if=" !message.length == 0 ">
         <div class="alert alert-success">
             {{ message }}
         </div>
       </div>
      <form autocomplete="off" method="POST" @submit.prevent="addimages" enctype="multipart/form-data">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputname">ارفع صورة</label>
            <input type="hidden" v-model="token">
            <input type="hidden" v-model="product">
            <input type="file" class="form-control"  @change="uploadeimages" id="inputname">
             <!-- -->
          </div>
        </div>
        <button type="submit" class="btn btn-primary">حفظ</button>
        </form>

    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      product: null,
      token: this.$cookie.get('token'),
      message: {},
      images:'',
      productid: this.$route.params.id,
      site:'http://mohamedmohay.pythonanywhere.com'
      //site:'http://workmoh.pythonanywhere.com'
    }
  },
  created(){
    //axios.get('http://workmoh.pythonanywhere.com/api/productall/'+this.id+'/')
    axios.get('http://website22.pythonanywhere.com/api/productall/'+this.productid+'/')
    .then(res =>{
      this.product = res.data;
    })
    .catch(err =>console.log(err));
  },
  beforeMount(){
    if(!this.$cookie.get('token')){
      this.$router.push({name:'login'});
    }

    // this.$router.go();
  },
  methods:{
    uploadeimages(e){
      this.images = e.target.files[0];
    },
    addimages(){
       const formd = new FormData();
       formd.append('link',this.images,this.images.name)
       formd.append('token',this.token)
       formd.append('products',this.productid)
       const config = { headers :{ 'Content-Type' : 'multipart/form-data'}}
       //axios.get('http://workmoh.pythonanywhere.com/api/image/',formd+config)
       axios.post('http://website22.pythonanywhere.com/api/image/', formd,config)
      .then(res => {
        console.log(res.data);
        if(res.data){
          this.images = '',
          this.message = 'تم اضافة الصورة';
           this.$router.push({name:'dashboard'});
         }
      })
      .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.page {
  margin-top: 200px;
}
.main-img {
  display: inline-block;
  max-width: 350px;
  max-height: 500px;
}
.data {
  display: inline-block;
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
}

.feature_product_area {
  background-color: antiquewhite;
}
.f_p_item:hover {
  border: 2px solid #eb6d2f;
}
.contact{
  list-style: none;
  /* width: 150px; */
  color: chocolate;
  font-size: 16px;
  border: 1px solid #eb6d2f;
  padding: 10px;
  margin: 10px;
  display: inline !important;
}

h2{
  margin-top: 60px;
}
p {
  color: #eb6d2f;
}
a {
  color: #eb6d2f;
}


</style>
