import Vue from 'vue'
import Router from 'vue-router'

import Layout from './views/layout/layout'
import Login from './views/login/login'
import Home from './views/home/home'

Vue.use(Router)

let defaultRouter = [
  {
    path: '/',
    redirect: '/login',
    children: []
  }, {
    path: '/login',
    name: 'login',
    component: Login,
    children: []
  }, {
    path: '/index',
    name: 'index',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        children: []
      },
    ]
  }, {
    path: '*',
    component: Layout,
    children: []
  }]

export default new Router({
  routes: defaultRouter
})
