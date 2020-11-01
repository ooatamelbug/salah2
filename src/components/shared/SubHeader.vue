<template>
  <div class="container-flued">
    <div class="page-title">
      <h1> <slot> </slot></h1>
      <!-- <div class="image">
          <img src="src/assets/img/checkout-bg.jpg" alt>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {};
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


</style>

