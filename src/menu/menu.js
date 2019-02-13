let menu = {};

menu.home = {
  name: '首页',
  path: '/home',
  icon: 'el-icon-menu'
}
menu.Car = {
  name: '客户信息',
  children: {}
}
let car = menu.Car.children
car.CarResource = {
  name: '车辆资源',
  path: '/CarResource',
}
car.BuyCarConsult = {
  name: '买车咨询',
  path: '/BuyCarConsult',
}
car.DisplaceCar = {
  name: '置换车辆',
  path: '/DisplaceCar',
}
export default menu;
