<template>
  <div class="">
    <app-nav-bar></app-nav-bar>
  
    <router-view></router-view>
      
    <app-footer></app-footer>
  </div>
</template>

<script>
import navBar from "./components/shared/navbar.vue";
import Footer from "./components/shared/footer.vue";
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components: {
    appNavBar: navBar,
    appFooter: Footer,
  }
}
</script>

<style>

</style>
