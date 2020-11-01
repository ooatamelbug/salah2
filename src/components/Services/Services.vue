<template>
<transition
    name="router-anim"
    enter-active-class="animated fadeInUpBig"
    leave-active-class="animated fadeInUpBig"
  >
   <div class="page">
       <app-sub-header>خدماتنا</app-sub-header>
   </div>
</transition>
</template>

<script>

import SubHeader from "../shared/SubHeader.vue"

export default {
  components: {
 
    appSubHeader: SubHeader,
  }
};
</script>

<style>

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>

