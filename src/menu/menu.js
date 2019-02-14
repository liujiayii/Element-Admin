let menu = {};

menu.home = {
  name: '首页',
  path: '/home',
  icon: 'el-icon-menu'
}
menu.Car = {
  name: '客户信息',
  children: {},
  path: '1',
  icon: 'el-icon-location'
}
let car = menu.Car.children
car.CarResource = {
  name: '车辆资源',
  path: '/carResource',
}
car.BuyCarConsult = {
  name: '买车咨询',
  path: '/buyCarConsult',
}
car.DisplaceCar = {
  name: '置换车辆',
  path: '/displaceCar',
}
menu.Cars = {
  name: '客户信息2',
  path: '2',
  children: {},
  icon: 'el-icon-location'
}
let cars = menu.Cars.children
cars.CarResource = {
  name: '车辆资源2',
  path: '/carRe',
}
cars.BuyCarConsult = {
  name: '买车咨询2',
  path: '/buyCar',
}
cars.DisplaceCar = {
  name: '置换车辆2',
  path: '/dis',
}

export default menu;
