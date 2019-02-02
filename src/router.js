import Vue from 'vue'
import Router from 'vue-router'

import Layout from './views/layout/layout'
import CarManage from './views/carManage/carManage'
import CarSales from './views/carSales/carSales'
import BuyCarConsult from './views/customInfo/buyCarConsult'
import CarResource from './views/customInfo/carResource'
import DisplaceCar from './views/customInfo/displaceCar'
import Finance from './views/finance/finance'
import Access from './views/staff/access'
import StaffManage from './views/staff/staffManage'
import Stock from './views/stock/stock'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/carResource',
    name: 'carResource',
    component: CarResource
  },{
    path: '/buyCarConsult',
    name: 'buyCarConsult',
    component: BuyCarConsult
  },{
    path: '/displaceCar',
    name: 'displaceCar',
    component: DisplaceCar
  },{
    path: '/carManage',
    name: 'carManage',
    component: CarManage
  },{
    path: '/carSales',
    name: 'carSales',
    component: CarSales
  },{
    path: '/finance',
    name: 'finance',
    component: Finance
  },{
    path: '/access',
    name: 'access',
    component: Access
  },{
    path: '/staffManage',
    name: 'staffManage',
    component: StaffManage
  },{
    path: '/stock',
    name: 'stock',
    component: Stock
  }]
})
