<template>
<transition
    name="router-anim"
    enter-active-class="animated fadeInUpBig"
    leave-active-class="animated fadeInUpBig"
  >
  <div class="page">
    

      <app-sub-header>
          منتجاتنا
      </app-sub-header>
    <div class="container-flued">
      <div class="content">
        <div class="row">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <h4>كل المنتجات</h4>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <h4>منتجات العسل</h4>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <h4>منتجات النحل</h4>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact2"
                role="tab"
                aria-controls="pills-contact2"
                aria-selected="false"
              >
                <h4>ادوات المناحل</h4>
              </a>
            </li>
          </ul>
          <div class="tab-content container" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <all-products></all-products>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <huny-products></huny-products>
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <bees-products></bees-products>
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact2"
              role="tabpanel"
              aria-labelledby="pills-contact2-tab"
            >
              <tools-products></tools-products>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import homeProductes from "../Home/children/homeProductes.vue";
import AllProducts from "./Allproducts/Allproducts.vue";
import Bees from "./Bees/Bees.vue";
import Huny from "./Huny/Huny.vue";
import Tools from "./Tools/Tools.vue";
import SubHeader from "../shared/SubHeader.vue"

export default {
  components: {
    appHomeProductes: homeProductes,
    allProducts: AllProducts,
    beesProducts: Bees,
    hunyProducts: Huny,
    toolsProducts: Tools,
    appSubHeader: SubHeader
  }
};
</script>


<style scoped>
.page-title {
  margin-top: 125px;
}
.page-title {
  background: url("../../assets/img/page-head.jpg");
  background-size: cover;
  background-position: center;
  height: 250px;
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
