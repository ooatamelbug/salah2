<template>
  <!-- <div class="page"> -->
  <div class="container">
    <form autocomplete="off" method="POST" @submit.prevent="addproduct">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputname">اسم المنتج</label>
          <input type="text" class="form-control" id="inputname" v-model="name" required>
        </div>
        <div class="form-group col-md-6">
          <label for="sel1">اختر نوع المنتج</label>
          <select class="form-control" id="sel1" v-model="depart" required>
            <option v-for="depart in departs" v-bind:value="depart.id" >{{depart.name}}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputname">السعر</label>
          <input type="text" class="form-control" id="inputname" v-model="price" required>
        </div>
        <div class="form-group col-md-6">
          <label for="sel1">العملة</label>
          <select class="form-control" id="sel1" v-model="currency" required> 
            <option value="جنية مصري">جنية مصري</option>
            <option value="دينار كويتي">دينار كويتي</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputCity">الكمية</label>
          <input type="text" class="form-control" id="inputCity" v-model="quantity" required>
        </div>

        <div class="form-group col-md-4">
          <label for="inputCity">التخفيض</label>
          <input type="number" class="form-control" value="0" id="inputCity" v-model="discount" required>
          <input type="hidden" v-model="token">
        </div>

        <div class="form-group col-md-4">
          <label>تاريخ انتهاء التخفيض</label>
          <input type="date" name="bday" max="3000-12-31"  min="1000-01-01" class="form-control" v-model="datediscount">
        </div>
      </div>

      <div class="form-group">
        <label for="comment">وصف المنتج</label>
        <textarea class="form-control" rows="5" id="comment" v-model="describtion" required></textarea>
      </div>

      <button type="submit" class="btn btn-primary">حفظ</button>
    </form>
    <div v-if=" !message.length == 0 ">
      <div :class="message.stat">
          {{ message.name }}
      </div>
    </div>

    <button class="btn btn-danger" @click="show = !show">اضف صورة للمنتج</button>
    <div class="alert alert-danger" v-if="show"> 
     <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputname">ارفع صورة</label>
          <input type="hidden" v-model="token">
          <input type="file" class="form-control" id="inputname" @change="uploadeimages" >
        </div>
      </div> 
      
     </div>
      
  </div>
  <!-- </div> -->
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      name:'',
      quantity:'',
      currency:'',
      price:'',
      depart:'',
      datediscount:'',
      discount:'',
      token: this.$cookie.get('token'),
      describtion:'',
      departs: null,
      message: [],
      products: [],
      images:null,
      response: null,
      id: null,
      show: false
    }
  },

  // validations: {

  // },
  created(){
    axios.get('http://website22.pythonanywhere.com/api/departall/')
    .then(res =>{
      this.departs = res.data;
    })
    .catch(err =>console.log(err));
  },
  beforeMount(){
    if(!this.$cookie.get('token')){
      this.$router.push({name:'login'});
    }
  },
  methods : {
    addproduct(){
      const dataf = {
        name: this.name,
        quantity: this.quantity,
        currency: this.currency,
        price: this.price,
        depart: this.depart,
        discounttime: this.datediscount,
        discount: this.discount,
        describ: this.describtion,
        token : this.token
      };
      //axios.post('http://workmoh.pythonanywhere.com/api/product/',dataf)
      axios.post('http://website22.pythonanywhere.com/api/product/', dataf)
      .then(res => {
        this.response = res.data;
        console.log(this.response);
        if(res.data){
          this.id = res.data.id;
          this.message = {'name':'تم اضافة المنتج', 'stat':'alert alert-success'};
          this.name = '';
          this.quantity = '';
          this.price = '';
          this.currency = '';
          this.datediscount = '';
          this.discount = '';
          this.describtion = '';
           //this.$router.push({name:'dashboard'});
         }
      })
      .catch(err => console.log(err));
    },
    uploadeimages(e){
      if(this.id == ''){
        this.message = {'name':'غير مسموح','stat':'alert alert-danger'};
      }else{
        this.images = e.target.files[0];
        const formd = new FormData();
        formd.append('link',this.images,this.images.name);
        formd.append('token',this.token);
        formd.append('products',this.id);
        const config = { headers :{ 'Content-Type' : 'multipart/form-data'}};
        axios.post('http://website22.pythonanywhere.com/api/image/', formd,config)
        .then(res => {
          this.response = res.data;
          if(res.data){
            this.images = '';
            this.$router.push({name:'dashboard'});
             this.$router.go();
           }
        })
        .catch(err => console.log(err));
      }

      //axios.post('http://workmoh.pythonanywhere.com/api/image/',dataf)

    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 50px;
}
label {
  padding-top: 30px;
  color: #eb6d2f;
  font-size: 18px;
}
.form-group{
  margin: auto;
}

button {
  border: #eb6d2f 1px solid;
  color: #fff;
  background-color: #eb6d2f;
  margin: 20px 0;
}
button:hover {
  background: #fff;
  color: #eb6d2f;
  border: #eb6d2f 1px solid;
}
.alert {
  margin: auto;
  margin: 20px 0 ;
}
.form-control:focus {
  color: #eb6d2f;
  background-color: #fff;
  border-color: #eb6d2f;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(228, 80, 11, 0.25);
}
</style>
