import Vue from 'vue'
import Router from 'vue-router'

import Layout from './views/layout/layout'
import Error from './views/notFound/notFound'
import CarManage from './views/carManage/carManage'
import CarSales from './views/carSales/carSales'
import BuyCarConsult from './views/customInfo/buyCarConsult'
import CarResource from './views/customInfo/carResource'
import DisplaceCar from './views/customInfo/displaceCar'
import Finance from './views/finance/finance'
import Access from './views/staff/access'
import StaffManage from './views/staff/staffManage'
import Stock from './views/stock/stock'
import Login from './views/login/login'
import Home from './views/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: Login,
      children: []
    }, {
      path: '/login',
      name: '',
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
        }, {
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
        }, {
          path: '/carManage',
          name: 'carManage',
          component: CarManage,
          children: []
        }, {
          path: '/carSales',
          name: 'carSales',
          component: CarSales,
          children: []
        }, {
          path: '/finance',
          name: 'finance',
          component: Finance,
          children: []
        }, {
          path: '/access',
          name: 'access',
          component: Access,
          children: []
        }, {
          path: '/staffManage',
          name: 'staffManage',
          component: StaffManage,
          children: []
        }, {
          path: '/stock',
          name: 'stock',
          component: Stock,
          children: []
        }
      ]
    }, {
      path: '*',  // 通配符拦截放在最后，不存在的路由全都指向404页面
      redirect: '/404',
      component: Error,
      hidden: true,
      children: []
    }]
})
