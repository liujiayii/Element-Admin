import Vue from 'vue'
import Router from 'vue-router'

import Layout from './views/layout/layout'
import Error from './views/notFound/notFound'
import Login from './views/login/login'
import Home from './views/home/home'

/*const BuyCarConsult = () => import('./views/customInfo/buyCarConsult')
const CarResource = () => import('./views/customInfo/carResource')
const DisplaceCar = () => import('./views/customInfo/displaceCar')
const BuyCar = () => import('./views/cust/buyCar')
const CarRe = () => import('./views/cust/carRe')
const Dis = () => import('./views/cust/dis')*/

import BuyCarConsult from './views/customInfo/buyCarConsult'
import CarResource from './views/customInfo/carResource'
import DisplaceCar from './views/customInfo/displaceCar'
import BuyCar from './views/cust/buyCar'
import CarRe from './views/cust/carRe'
import Dis from './views/cust/dis'

Vue.use(Router)

let defaultRouter = [
  {
    path: '/',
    redirect: '/home',
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
      {
        path: '/carResource',
        name: 'carResource',
        component: CarResource,
        children: []
      }, {
        path: '/buyCarConsult',
        name: 'buyCarConsult',
        component: BuyCarConsult,
        children: []
      }, {
        path: '/displaceCar',
        name: 'displaceCar',
        component: DisplaceCar,
        children: []
      },
      {
        path: '/carRe',
        name: 'carRe',
        component: CarRe,
        children: []
      }, {
        path: '/buyCar',
        name: 'buyCar',
        component: BuyCar,
        children: []
      }, {
        path: '/dis',
        name: 'dis',
        component: Dis,
        children: []
      }
    ]
  }, {
    path: '*',
    component: Layout,
    children: [
      {
        path: '/',
        name: '404',
        component: Error,
        children: []
      }
    ]
  }]

let addRouter = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/carResource',
        name: 'carResource',
        component: CarResource,
        children: []
      }, {
        path: '/buyCarConsult',
        name: 'buyCarConsult',
        component: BuyCarConsult,
        children: []
      }, {
        path: '/displaceCar',
        name: 'displaceCar',
        component: DisplaceCar,
        children: []
      }
    ]
  }, {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/carRe',
        name: 'carRe',
        component: CarRe,
        children: []
      }, {
        path: '/buyCar',
        name: 'buyCar',
        component: BuyCar,
        children: []
      }, {
        path: '/dis',
        name: 'dis',
        component: Dis,
        children: []
      }
    ]
  }, {
    path: '*',  // 通配符拦截放在最后，不存在的路由全都指向404页面
    redirect: '/404',
    children: []
  }]
export default new Router({
  routes: defaultRouter
})
export {defaultRouter, addRouter}
