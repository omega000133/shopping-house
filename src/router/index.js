import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from "../views/DashBoard.vue"
import Lists from "../views/Lists.vue"
import Carts from "../views/Carts.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component:DashBoard
    },
    {
      path: '/lists',
      name: 'lists',
      component:Lists
    },
    {
      path: '/carts',
      name: 'carts',
      component: Carts
    },
  ]
})

export default router
