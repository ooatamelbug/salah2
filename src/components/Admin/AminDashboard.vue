<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >لوحة التحكم</a>
            <a
              class="nav-link"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <h4>اضافة منتج</h4>
            </a>
            
            <a
              class="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >اضافة قسم جديد</a>
            <a
              class="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >خروج</a>
          </div>
        </div>

        <div class="col-md-9">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <add-new-product></add-new-product>
            </div>
            <div
              class="tab-pane fade show active"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <home-dash></home-dash>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <add-part></add-part>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <div class="alert alert-danger">
                <br>
                <h4>هل انت واثق من انك تريد تسجيل الخروج</h4>

                <br>
                <form method="POST" @submit.prevent="logout">
                  <div class="form-row">
                    <input type="hidden" v-model="token">
                    <button type="submit" class="btn btn-danger">نعم تسجيل الخروج</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddNewProduct from "../Admin/AddNewProduct.vue";
import HomeDash from "../Admin/HomeDash.vue";
import AddPart from "../Admin/AddPart.vue";
import axios from "axios";

export default {
  components: {
    homeDash: HomeDash,
    addNewProduct: AddNewProduct,
    addPart: AddPart
  },
  data() {
    return {
      token: this.$cookie.get("token")
    };
  },
  methods: {
    logout() {
      axios
        .post("http://website22.pythonanywhere.com/api/logout/", { token: this.token })
        .then(res => {
          //console.log(res.data[0].success);
          console.log(res.data);
          if (this.$cookie.get("token")) {
            this.$cookie.delete("token");
            this.$router.push({ name: "login" });
          }
        })
        .catch(err => console.log(err));
         this.$router.go();
    }
  }
};
</script>


<style scoped>
.page {
  margin-top: 200px;
}

.flex-column {
  border: 2px solid #eb6d2f;
  border-radius: 5px;
  margin: 30px 30px;
}

h1 {
  padding: 90px 0;
  color: #fff;
}

h1:hover {
  color: #eb6d2f;
}

.content {
  padding-top: 90px;
  /* background-color:  #ffd832; */
}

a {
  color: #eb6d2f;
}

.nav-pills .nav-link.active {
  background-color: #eb6d2f;
  color: #fff;
}

.content .row {
  margin: auto;
}

ul {
  margin: auto;
}
</style>
