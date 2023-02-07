<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
import { useCounterStore } from "./stores/counter";
import { mapWritableState } from "pinia";

export default {
  components : {Navbar},
  computed: {
  ...mapWritableState(useCounterStore, ['isLogin'])
},
created(){
  if(localStorage.access_token){
    this.isLogin = true
  }
}
}
</script>

<template>
  <Navbar />
  <RouterView />
  <!-- <Footer /> -->
</template>

