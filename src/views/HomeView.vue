<script>
import Navbar from "../components/Navbar.vue";
import Table from "../components/Table.vue";
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  components: { Navbar, Table },
  methods: {
      ...mapActions(useCounterStore, ['handleFetchUser'])
  },
  computed : {
      ...mapWritableState(useCounterStore, ['query'])
  },
  created(){
      this.handleFetchUser()
  }
};
</script>



<template>
  <div class="flex justify-center items-center p-4">
    <p class="text-3xl font-semibold">User Information</p>
  </div>
  <section class="flex items-center justify-center px-12 flex-col w-8/12 mx-auto h-[60vh] mb-12">
    <div class="flex items-center gap-2 w-full">
      <input type="text" class="border-2 rounded-xl px-4 py-2 w-full" placeholder="Search" v-model="query.search">
      <button class="bg-theme-3 rounded-xl px-4 py-2 text-white hover:bg-sky-400" @click.prevent="handleFetchUser()">Search</button>
    </div>
    <Table />
  </section>
</template>
