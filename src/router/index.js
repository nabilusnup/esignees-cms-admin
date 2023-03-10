import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DetailView from "../views/DetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: HomeView,
    },
    {
      path: "/users/:id",
      name: "detailsPage",
      component: DetailView,
    },
    {
      path: "/login",
      name: "loginPage",
      component: LoginView,
    },
    {
      path: "/register",
      name: "registerPage",
      component: RegisterView,
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (!localStorage.access_token && to.name !== "loginPage") {
    return { name: "loginPage" };
  } else if (localStorage.access_token && to.name === "loginPage") {
    return { name: "homePage" };
  }
});

export default router;
