<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
export default {
    computed : {
        ...mapState(useCounterStore, ['isLogin'])
    },
    methods : {
        ...mapActions(useCounterStore, ['handleLogout'])
    }
}
</script>

<template>
      <div>
    <nav
      class="navbar navbar-expand-lg fixed-top border-bottom border-primary"
      style="height: 60px; background-color: white;"
    >
      <div class="container">
        <img src="" width="35" class="rounded" alt="">
        <RouterLink
        to="/"
          class="navbar-brand"
          style="font-weight:bolder; font-size:28px; color: #4A8BDF"
          href="#!"
          >esignees</RouterLink
        >
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item nav-button">
              <RouterLink
                to="/"
                class="nav-link"
                style="font-weight: 700; color: #4A8BDF"
                href="#!"
                v-if="isLogin"
                >User</RouterLink
              >
            </li>
            <li class="nav-item nav-button">
              <RouterLink
                to="/register"
                class="nav-link"
                style="font-weight: 700; color: #4A8BDF"
                href="#!"
                v-if="isLogin"
                >Create New Admin</RouterLink
              >
            </li>
            <li class="nav-item nav-button" >
              <a
                to="/login"
                class="nav-link"
                style="font-weight: 700; color: #4A8BDF"
                href="#!"
                @click.prevent="handleLogout"
                v-if="isLogin"
                >Log-Out</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>