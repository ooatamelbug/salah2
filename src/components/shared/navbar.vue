<template>
  <!--================Header Menu Area =================-->
  <header class="header_area">
    <div class="top_menu row m0">
      <div class="container">
        <div class="">
          <ul class="right_side  float-right">
            <li>
              <a href="">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
                <a href=""> 0096599825279</a>
            </li>
            <li>
                <a href=""> 0096551199352</a>
            </li>
            <li>
                <a href=""> 00201123101350</a>
            </li>
            <li class="pull-left">
              
          </li>

          </ul>
          <router-link to="/LogIn" v-if="!this.$cookie.get('token')" class="logIn">
                  <button type="submit"  class="btn ">دخول</button>
          </router-link>
          <router-link to="/AdminDashboard"  class="logIn" v-if="this.$cookie.get('token')">
                  <button type="submit"  class="btn ">لوحة التحكم</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container main-nav-head" >
          <!-- Brand and toggle get grouped for better mobile display -->
         <router-link to="/"><a class="navbar-brand logo_h float-left" href="">
            <!-- <img src="src/assets/img/logo-1.png" alt> -->
            <span>صلاح</span>
            <span>عثمان</span>
          </a>
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <div class="row w-100">
              <div class="col-lg-9 pr-0">
                <ul class="nav navbar-nav center_nav pull-right">
                  <router-link to="/" active-class="active" tag="li" class="nav-item" exact>
                    <a class="nav-link"><img src="/src/assets/img/honeycomb.png" alt="" class="rotat" style="width:50px " ></a>
                  </router-link>
                  <router-link to="/" active-class="active" tag="li" class="nav-item" exact>
                    <a class="nav-link">الرئيسية</a>
                  </router-link>

                  <!-- <router-link to="/services" active-class="active" tag="li" class="nav-item">
                    <a class="nav-link">الخدمات</a>
                  </router-link> -->

                  <router-link to="/products" active-class="active" tag="li" class="nav-item">
                    <a class="nav-link">المنتجات</a>
                  </router-link>

                  <router-link to="/about-us" active-class="active" tag="li" class="nav-item">
                    <a class="nav-link">عننا</a>
                  </router-link>

                  <router-link to="/contact-us" active-class="active" tag="li" class="nav-item">
                    <a class="nav-link">للطلب والتواصل </a>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!--================Header Menu Area =================-->
</template>

<style scoped>

.fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{

    }
    .fade-leave-active{
        transition: opacity 1s;
         opacity: 0;

    }

.top_menu {
  background:#ae4e35 !important;
  /* color: #fff !important ; */
}

.top_menu ul {
   /* padding-right: 80px; */
}



.top_menu .right_side li a {
  color: #fff;
}
.header_area .navbar .nav .nav-item img[data-v-cb2187cc] {
    width: 50px;
}
.call-me {
  font-family: "El Messiri", sans-serif !important;
  color: #eb6d2f !important;
}

nav .navbar-nav .center_nav ul {
  /* padding-right: 80px; */
}


.main-nav-head {
  direction: ltr !important;
}
.navbar-brand span:first-child {
 color: #eb6d2f !important;
  font-weight: bold;
  font-size: 34px;
 }

 .navbar-brand span:last-child {
   color: #f7b138;
    font-size: 34px;
 }
.logIn{
  float: left;
}
.btn{
    background: #eb6d2f;
    margin: auto;
    height: 30px;
    margin: 5px;
}
button:hover{
  background: #f7b138;
}
.rotat {
  transition: 1s;
}
.rotat:hover{
  transform: rotate(360deg);
}

/* .navbar-brand {
  transition: 1s;
}

.navbar-brand:hover{
    transform: rotate(360deg);
} */
</style>
