<template>
  <div class="page">
    <div class="container">
      <form autocomplete="off" method="POST" @submit.prevent="login">
        <div class="form-row">
          <div class="form-group col-md-4">
            <h2>تسجيل الدخول</h2>
            <label for="inputname">اسم المستخدم</label>
            <input type="text" class="form-control" id="inputname" v-model="username" required>
            
            <label for="inputname">كلمة المرور</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
            
            <button type="submit" class="btn btn-primary">دخول</button>
          </div>
        </div>
      </form>
      <div class="msg" v-if="responsedata.length > 0">
        <div class="alert alert-danger">{{responsedata}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      responsedata: ""
    };
  },
  beforeMount() {
    if (this.$cookie.get("token")) {
      this.$router.push({ name: "dashboard" });
    }

    // this.$router.go();
  },
  methods: {
    login() {
      const dataf = {
        username: this.username,
        password: this.password
      };
      //axios.post('http://workmoh.pythonanywhere.com/api/adminprofile/',dataf)
      axios
        .post("http://website22.pythonanywhere.com/api/adminprofile/", dataf)
        .then(res => {
          if (res.data.error) {
            this.responsedata = res.data.error;
            console.log(res.data);
          }
          if (res.data.token) {
            this.$cookie.set("token", res.data.token, { expires: "1h" });
            this.$router.push({ name: "dashboard" });
            this.$router.go();
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>


<style scoped>
.page {
  margin: 200px;
}

form {
  margin-bottom: 50px;
}
.form-group {
  margin: auto;
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
  margin-top: 50px;
  width: 100%;
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
