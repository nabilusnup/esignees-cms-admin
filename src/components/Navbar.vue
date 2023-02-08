<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="pt-8 pb-6 px-12 flex items-center justify-between">
    <img
      src="../assets/img/logo-3.png"
      alt="esignee_logo"
      class="w-32 cursor-pointer"
    />
    <div>
      <ul class="flex gap-6">
        <li class="cursor-pointer hover:font-semibold">
          <RouterLink to="/">Dashboard</RouterLink>
        </li>
        <li class="cursor-pointer hover:font-semibold">
          <RouterLink to="/register">Register</RouterLink>
        </li>
        <li class="cursor-pointer hover:font-semibold">
          <RouterLink to="/login">Logout</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
