import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import MainPage from '../components/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/main',
    name: 'Main',
    component: MainPage
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 使用hash模式，适合GitHub Pages部署
  routes
})

export default router