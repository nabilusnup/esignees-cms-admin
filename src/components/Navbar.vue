<script>
import { mapActions } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
export default {
  methods: {
    ...mapActions(useCounterStore, ['handleLogout'])
  }
}
</script>

<template>
  <nav class="pt-8 pb-6 px-12 flex items-center justify-between">
    <div class="flex flex-col gap-1">
      <RouterLink to="/">
      <img
        src="../assets/img/logo-3.png"
        alt="esignee_logo"
        class="w-32 cursor-pointer"
      />
    </RouterLink>
      <p class="text-xs tracking-widest text-center">Admin Panel</p>
    </div>
    <div>
      <ul class="flex gap-6">
        <li class="cursor-pointer hover:font-semibold">
          <RouterLink to="/">Dashboard</RouterLink>
        </li>
        <li class="cursor-pointer hover:font-semibold">
          <RouterLink to="/register">Register</RouterLink>
        </li>
        <li class="cursor-pointer hover:font-semibold">
          <RouterLink to="/login" @click.prevent="handleLogout()">Logout</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
