// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import App from './App'
import router from './router'
// import store from './store/index'
import 'element-ui/lib/theme-default/index.css'
import api from './http/index'

Vue.use(Element)
Vue.use(api)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//   store,
  components: { App },
  template: '<App/>'
})
