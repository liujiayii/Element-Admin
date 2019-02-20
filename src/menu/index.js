let menu = [{
  name: '首页',
  path: '/home',
  icon: 'el-icon-menu'
}, {
  name: '客户信息',
  icon: 'el-icon-location',
  children: [{
    name: '车辆资源',
    path: '/carResource',
  }, {
    name: '买车咨询',
    path: '/buyCarConsult',
  }, {
    name: '置换车辆',
    path: '/displaceCar',
  }]
}, {
  name: '客户信息2',
  icon: 'el-icon-location',
  children: [
    {
      name: '车辆资源2',
      path: '/carRe',
    }, {
      name: '买车咨询2',
      path: '/buyCar',
    }, {
      name: '置换车辆2',
      path: '/dis',
    }
  ]
}]

export default menu;
