<template>
<transition
    name="router-anim"
    enter-active-class="animated fadeInUpBig"
    leave-active-class="animated fadeInUpBig"
  >
  <div class="about-us">
    <app-sub-header>من نحن</app-sub-header>

    <div>
      <home-services></home-services>
    </div>

    <div class="contact-us">
      <div class="container">
        <h1>لطلب المنتجات والخدمات تواصل معنا</h1>
        <div class="row">
          <div class="col-md-6">
            <div class="location contacts">
              <i class="fa fa-home fa-5x" aria-hidden="true"></i>
              <h2>العنوان</h2>
              <ul class="list-group">
                <li class="list-group-item list-home">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  الكويت - منطقة العبدلي
                </li>
                <li class="list-group-item list-home">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  مصر - سوهاج - أولاد هارون
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contacts">
              <i class="fa fa-phone-square fa-5x" aria-hidden="true"></i>
              <h2>اتصل بنا</h2>
              <ul class="list-group">
                <li class="list-group-item">
                  0096599825279
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </li>
                <li class="list-group-item">
                  0096551199352
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </li>
                <li class="list-group-item">
                  00201123101350
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import SubHeader from "../shared/SubHeader.vue";
import homeServices from "../Home/children/homeServices.vue";
import contactus from "../Contact-us/contact-us.vue";

export default {
  components: {
    appSubHeader: SubHeader,
    homeServices: homeServices,
    conyactUs: contactus
  }
};
</script>

<style scoped>
.col-md-8 {
  margin: auto;
}
h2 {
  padding-top: 40px;
  color: #5a3733;
}
h4 {
  color: #eb6d2f;
}

.contact-us {
  color: #ae4e35;
  margin: 70px 0;
}
h2 {
  margin: 30px 0;
}
li:hover {
  background: #ae4e35;
  color: #fff;
}
.list-home {
  padding: 24px 0;
}
.contacts {
  padding: 50px 0;
}
i:hover {
  color: #ffd832;
}
h2:hover {
  color: #ffd832;
}
</style>
