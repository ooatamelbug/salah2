<template>
  <div class="container">
    <div class="row">
      <div v-if=" !message.length == 0 ">
        <div :class="message.stat">{{ message.name }}</div>
      </div>
      <h3>كل الاقسام</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">التسلسل</th>
            <th scope="col">القسم</th>
            <th scope="col">حذف</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="depart in departs">
            <td>{{depart.id}}</td>
            <td>{{depart.name}}</td>
            <td>
              <button v-on:click="deletepart(depart.id)">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn" @click="show = !show">اضف قسم جديد</button>
    <div class="row">
      <br>
      <div class="col-md-6" v-if="show">
        <form autocomplete="off" method="POST" @submit.prevent="addpart">
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputname">اضف قسم جديد</label>
              <input type="hidden" v-model="token">
              <input type="text" class="form-control" id="inputname" v-model="name">
            </div>
            <button type="submit" class="btn">اضافة</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      departs: null,
      token: this.$cookie.get("token"),
      message: [],
      name: "",
      show: false
    };
  },
  created() {
    axios
      .get("http://website22.pythonanywhere.com/api/departall/")
      .then(res => {
        this.departs = res.data;
      })
      .catch(err => console.log(err));
  },
  methods: {
    addpart() {
      const dataf = {
        token: this.token,
        name: this.name
      };
      //axios.post('http://workmoh.pythonanywhere.com/api/adminprofile/',dataf)
      axios
        .post("http://website22.pythonanywhere.com/api/depart/", dataf)
        .then(res => {
          this.departs = res.data;
          console.log(res.data);
          if (res.data) {
            this.name = "";
            //  this.$router.push({name:'dashboard'});
          }
        })
        .catch(err => console.log(err));
    },
    deletepart(id) {
      const datap = {
        token: this.token,
        idp: id
      };
      //axios.post('http://workmoh.pythonanywhere.com/api/adminprofile/',dataf)
      axios
        .post("http://website22.pythonanywhere.com/api/depart/delete/", datap)
        .then(res => {
          this.departs = res.data;
          console.log(res.data);
          if (res.data) {
            this.message = {
              name: "تم اضافة المنتج",
              stat: "alert alert-success"
            };
            // this.$router.push({name:'dashboard'});
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style>
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
  margin: auto;
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
h3{
  color: #eb6d2f;
}
table {
  color: #eb6d2f;
}
.col-md-6 {
  margin: auto;
}
</style>
