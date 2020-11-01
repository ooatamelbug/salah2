<template>
  <footer class="footer-area section_gap">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="single-footer-widget">
            <h6 class="footer_title">صلاح عثمان</h6>
            <!-- <p>متخصص في بيع كل انواع النحل ومنتجاته وادوات تجهيز المناحل في مصر والكويت</p> -->
          </div>
          <ul class="list-group list-group-flush">
            <li class>
              <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i> الكويت - منطقة العبدلي
            </li>
            <li class="l">
              <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i> مصر - سوهاج - اولاد هارون
            </li>
            <li class>
              <i class="fa fa-mobile fa-lg" aria-hidden="true"></i> 0096599825279
            </li>
    
            <li class>
              <i class="fa fa-mobile fa-lg" aria-hidden="true"></i> 0096551199352
            </li>
            <li class>
              <i class="fa fa-mobile fa-lg" aria-hidden="true"></i> 00201123101350
            </li>
            <li class>
              <!-- <div class="f_social"> -->
              <a href="#">
                <i class="fa fa-facebook"></i> فيس بوك
              </a>
              <!-- </div> -->
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-sm-6">
          <!-- <div class="single-footer-widget instafeed">
              <h6 class="footer_title">احدث المنتجات</h6>
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
                <li>
                  <img src="src/assets/img/instagram/Image-05.jpg" alt>
                </li>
                <li>
                  <img src="src/assets/img/instagram/Image-06.jpg" alt>
                </li>
                <li>
                  <img src="src/assets/img/instagram/Image-07.jpg" alt>
                </li>
                <li>
                  <img src="src/assets/img/instagram/Image-08.jpg" alt>
                </li>
                <li>
                  <img src="src/assets/img/instagram/Image-07.jpg" alt>
                </li>
                <li>
                  <img src="src/assets/img/instagram/Image-06.jpg" alt>
                </li>
              </ul>
          </div>-->
          <img src="./../../assets/img/honeycomb.png" class="img-fluid responsive rotat">
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="single-footer-widget f_social_wd">
            <h6 class="footer_title">خريطة الموقع</h6>
          </div>
          <ul class="list-group list-group-flush">
            <router-link class to="/">
              <i class="fa fa-reply" aria-hidden="true"></i>
              <a>الرئيسية</a>
            </router-link>
            <!-- <router-link  to="/services">
              <i class="fa fa-reply" aria-hidden="true"></i>
                <a>الخدمات</a>
            </router-link>-->
            <router-link class="l" to="/products">
              <i class="fa fa-reply" aria-hidden="true"></i>
              <a>المنتجات</a>
            </router-link>
            <router-link class to="/about-us">
              <i class="fa fa-reply" aria-hidden="true"></i>
              <a>عننا</a>
            </router-link>
            <router-link class to="/">
              <i class="fa fa-reply" aria-hidden="true"></i>
              <a>للطلب والتواصل</a>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="row footer-bottom d-flex justify-content-between align-items-center">
        <p class="col-lg-12 footer-text text-center">جميع الحقوق محفوظة لصلاح عثمان 2019</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
template {
  font-family: "El Messiri", sans-serif !important;
}
ul {
  width: fit-content;
  margin: auto;
}
.list-group {
  padding-right: 0;
}
.list-group-flush .list-group-item {
  padding-right: 0;
}
i {
  direction: rtl;
}
.footer_title {
  color: #fff !important;
}
li {
  color: #fff;
  list-style: none;
  text-align: right;
  padding-bottom: 10px;
}

a {
  color: #fff;
  padding-bottom: 10px;
  /* text-align: right; */
}

a:hover,
li:hover {
  color: black;
  padding-right: 10px;
}

.footer-area {
  background: #ae4e35;
  color: #fff;
}

.section_gap {
  padding: 50px 0px;
}
.rotat {
  max-width: 150px;
  transition: 1s;
}
.rotat:hover {
  transform: rotate(360deg);
}
</style>
