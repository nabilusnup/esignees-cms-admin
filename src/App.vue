<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { mapWritableState } from "pinia";
import { useCounterStore } from "./stores/counter";

export default {
  components: { Navbar, Footer },
  computed: {
  ...mapWritableState(useCounterStore, ['isLogin'])
},
created(){
  if(localStorage.access_token){
    this.isLogin = true
  }
}
};
</script>

<template>
  <Navbar />
  <section class="min-h-[48vh] text-theme-2">
    <RouterView />
  </section>
  <Footer />
</template>
