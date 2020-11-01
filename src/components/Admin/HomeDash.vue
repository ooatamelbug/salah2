<template>
  <!-- <div class="page"> -->
  <div class="container">
    <h4 class="title">عدد المنتجات</h4>
    <div class="row">
      <div class="col-md-4">
        <div class="counter">
          <h4>منتجات العسل</h4>
          <hr>
          <h5>{{producths.length}}</h5>
        </div>
      </div>
      <div class="col-md-4" >
        <div class="counter">
          <h4>منتجات النحل</h4>
          <hr>
          <h5>{{productbs.length}}</h5>
        </div>
      </div>
      <div class="col-md-4" >
        <div class="counter">
          <h4 >الادوات</h4>
          <hr>
          <h5>{{productts.length}}</h5>
        </div>
      </div>
    </div>

    <h4 class="title">كل المنتجات</h4>
    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">اسم المنتج</th>
            <th scope="col">القسم</th>
            <th scope="col">صورة</th>
            <th scope="col">السعر</th>
            <th scope="col">التاريخ</th>
            <!-- <th scope="col">تعديل</th> -->
            <th scope="col">حذف</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products">
            <th scope="row"> <router-link :to="{name: 'show', params: { id: product.id }}">{{product.name}}</router-link> </th>
            <td>{{product.depart.name}}</td>
            <td>
              <img v-bind:src="site+product.images__link[0].link" alt="منتج العسل">
            </td>
            <td>{{product.price}}</td>
            <td>{{product.date}}</td>
            <!-- <td>
              <router-link v-bind:to="/EditProduct/+product.id">تعديل</router-link>
            </td> -->
            <td>
              <button><i class="fa fa-trash-o" @click="deleteproduct(product.id)" aria-hidden="true"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      products: null,
      productbs: '',
      productts: '',
      producths: '',
      token: this.$cookie.get('token'),
      idp: '',
      number : 0,
      num : 0,
      n:0,
      site:'http://mohamedmohay.pythonanywhere.com'
      //site:'http://workmoh.pythonanywhere.com'
    }
  },
  beforeMount(){
    if(!this.$cookie.get('token')){
      this.$router.push({name:'login'});
    }

    // this.$router.go();
  },
    created(){
      // window.location.();
      // this.$router.go();
      //axios.get('http://workmoh.pythonanywhere.com/api/productall/')
      axios.get('http://website22.pythonanywhere.com/api/productall/')
        .then(res =>{
           this.products = res.data.reverse();
        })
        .catch(e => console.log(e))

    },
    methods : {
      deleteproduct(id){
        const dataf = {
          token: this.token,
          idp: id
        };
        //axios.post('http://workmoh.pythonanywhere.com/api/adminprofile/',dataf)
        axios.post('http://website22.pythonanywhere.com/api/product/delete/', dataf)
        .then(res => {
          this.products = res.data;
          console.log( res.data);
          if(res.data){
             this.$router.push({name:'dashboard'});
           }
        })
        .catch(err => console.log(err));
      }
    },
      mounted(){
        //axios.get('http://workmoh.pythonanywhere.com/api/productall/')
        axios.get('http://website22.pythonanywhere.com/api/productall/')
          .then(res =>{
            const departpb = [];
            for(this.n;this.n <= res.data.length ; this.n++){
              if(res.data[this.n].depart.id == 2){
                departpb.push(res.data[this.n]);
                 this.productbs = departpb;

              }

            };

          })

        //axios.get('http://workmoh.pythonanywhere.com/api/productall/')
        axios.get('http://website22.pythonanywhere.com/api/productall/')
          .then(res =>{
            const departpt = [];
            for(this.num;this.num <= res.data.length ; this.num++){
              if(res.data[this.num].depart.id == 3){
                departpt.push(res.data[this.num]);
                 this.productts = departpt;
              }
            };

          })

        //axios.get('http://workmoh.pythonanywhere.com/api/productall/')
        axios.get('http://website22.pythonanywhere.com/api/productall/')
          .then(res =>{
            const departph = [];
            for(this.number;this.number <= res.data.length ; this.number++){
              if(res.data[this.number].depart.id == 6){
                departph.push(res.data[this.number]);
                 this.producths = departph;
                //console.log(this.producths);
              }
            };

          })
          .catch(e => console.log(e));
      }

};
</script>

<style  scoped>
.counter {
  color: #eb6d2f;
  border: 2px solid #eb6d2f;
  padding: 20px;
  border-radius: 5px;
}
hr {
  color: #eb6d2f !important;
}
router-link{
  color: #eb6d2f;
}
table {
  color: #eb6d2f;
}
a{
  color: #eb6d2f;
}

a:hover{
  color: gray;
}
.title {
  color: #eb6d2f;
  border: 2px solid #eb6d2f;
  padding: 10px 20px;
  text-align: right;
  width: fit-content;
  margin: 40px 0px;
}
img {
  width: 40px;
  height: 30px;
}
</style>
