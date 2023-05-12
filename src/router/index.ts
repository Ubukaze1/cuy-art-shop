import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegistroView from '../views/RegistroView.vue'
import MiCuentaView from '../views/MiCuentaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/registro',
      name: 'Registro',
      component: RegistroView
    },
    {
      path: '/micuenta',
      name: 'MiCuenta',
      component: MiCuentaView
    }
  ]
})

export default router
