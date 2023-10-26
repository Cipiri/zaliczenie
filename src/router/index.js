import { createRouter, createWebHistory } from 'vue-router'
import Catalog from "@/views/Catalog.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Cart from "@/views/Cart.vue";
import Login from "@/views/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'CartView',
      component: Cart
    },
    {
      path: '/login',
      name: 'Login',
      component: Login 
    }
  ]
})

export default router
