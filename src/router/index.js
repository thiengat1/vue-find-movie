/*
 * @Description: 路由
 * @Author: Lewis
 * @Date: 2021-04-19 11:43:51
 * @LastEditTime: 2021-04-20 00:23:53
 * @LastEditors: Lewis
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/movie/:id',
    name:'Movie Detail',
    component:MovieDetail
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
