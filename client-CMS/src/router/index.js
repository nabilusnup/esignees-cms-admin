import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "../views/LoginPage.vue"
import UserPage from "../views/UserPage.vue"
import DetailPage from "../views/DetailPage.vue"
import RegisterPage from "../views/RegisterPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      name: 'user',
      component: UserPage
    },
    {
      path: '/users/:id',
      name: 'detail',
      component: DetailPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    }
  ]
})

router.beforeEach(async (to, from)=>{
  if (!localStorage.access_token && to.name !== "login"){
    return {name: "login"}
   } else if (localStorage.access_token && to.name === "login"){
    return {name: "user"}
   }
})

export default router
