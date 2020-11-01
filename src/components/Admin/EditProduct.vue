<template>
  <div class="page">
  <div class="container">
      <h2>تعديل المنتج</h2>
    <form autocomplete="off">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputname">اسم المنتج</label>
          <input type="text" class="form-control" id="inputname" placeholder>
        </div>
        <div class="form-group col-md-6">
          <label for="sel1">اختر نوع المنتج</label>
          <select class="form-control" id="sel1" v-model="depart">
            <option value></option>
            <option v-for="depart in departs" v-bind:value="depart.id">{{depart.name}}</option>

          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputname">السعر</label>
          <input type="text" class="form-control" id="inputname" placeholder>
        </div>
        <div class="form-group col-md-6">
          <label for="sel1">العملة</label>
          <select class="form-control" id="sel1">
            <option value></option>
            <option value="جنية مصري">جنية مصري</option>
            <option value="دينار كويتي">دينار كويتي</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputCity">الكمية</label>
          <input type="text" class="form-control" id="inputCity">
        </div>

        <div class="form-group col-md-4">
          <label for="inputCity">التخفيض</label>
          <input type="hidden" v-model="token">
          <input type="text" class="form-control" id="inputCity">
        </div>

        <div class="form-group col-md-4">
          <label>تاريخ انتهاء التخفيض</label>
          <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control">
        </div>
      </div>

      <div class="form-group">
        <label for="comment">وصف المنتج</label>
        <textarea class="form-control" rows="5" id="comment"></textarea>
      </div>

      <div class="form-group">
        <label for="exampleInputFile">اضف صور</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleInputFile"
          aria-describedby="fileHelp"
        >
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
      name:'a',
      quantity:'',
      currency:'',
      price:'',
      depart:'',
      datediscount:'',
      discount:'',
      token: this.$cookie.get('token'),
      describtion:'',
      departs: null,
      id: null
    }
  },
  created(){
    axios.get('http://website22.pythonanywhere.com/api/departall/' + this.$route.params.id + '/')
    .then(res =>{
      this.departs = res.data;
      this.name = res.data.name;
      this.quantity = res.data.quantity;
      this.currency = res.data.currency;
      this.price = res.data.price;
      this.depart = res.data.depart;
      this.datediscount = res.data.datediscount;
      this.discount = res.data.discount;
      this.describtion = res.data.describtion;
      this.id = res.data.id;
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
      console.log(dataf);
      //axios.post('http://workmoh.pythonanywhere.com/api/product/',dataf)
      axios.post('http://website22.pythonanywhere.com/api/product/' + this.id + '/', dataf)
      .then(res => {
        this.response = res.data;
        console.log(this.response);
        if(res.data){
          this.id = res.data.id;
           this.message = {name:'تم اضافة المنتج', stat:'alert alert-success'};

           this.$router.push({name:'dashboard'});
         }
      })
      .catch(err => console.log(err));
    },
  }
};
</script>

<style scoped>
.page{
    margin-top: 140px;
}
form {
  margin-bottom: 50px;
}
label {
  padding-top: 30px;
  color: #eb6d2f;
  font-size: 18px;
}

button {
  border: #eb6d2f 1px solid;
  color: #fff;
  background-color: #eb6d2f;
}
button:hover {
  background: #fff;
  color: #eb6d2f;
  border: #eb6d2f 1px solid;
}

.form-control:focus {
  color: #eb6d2f;
  background-color: #fff;
  border-color: #eb6d2f;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(228, 80, 11, 0.25);
}
</style>
