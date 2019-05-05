import Vue from 'vue'
import ajax from 'axios'

/*注册Axios*/
const instance = ajax.create({
  baseURL: '/',
  //method: 'post', // 默认是 get
  transformRequest: [/*将JSON字符串转换成FormData*/
    function (data) {
      let ret = '';
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
      }
      return ret;
    }
  ]
})

Vue.prototype.$ajax = instance
