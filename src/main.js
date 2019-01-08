
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'//直接引入就行，mock文件也不需要暴露，引入后就会加载一次，里边的接口就可以使用


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
    router,
    store

})
