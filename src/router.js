import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import Layout from './views/layout/layout'

const CarManage =()=> import('./view/carManage/carManage')
const CarSales =()=> import('./view/carSales/carSales')
const BuyCarConsult =()=> import('./view/customInfo/buyCarConsult')
const CarResource =()=> import('./view/customInfo/carResource')
const DisplaceCar =()=> import('./view/customInfo/displaceCar')
const Finance =()=> import('./view/finance/finance')
const Access =()=> import('./view/staff/access')
const StaffManage =()=> import('./view/staff/staffManage')
const stock =()=> import('./view/stock/stock')
const NotFound = () => import('./page404')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/about',
    name: 'about',
    component: About
  }]
})
