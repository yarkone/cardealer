import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login'
import index from '@/pages/index'
import loanProcess from '@/pages/loanProcess'
import myCustomer from '@/pages/myCustomer'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'login',
        component: login
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: login
    // },
    {
        path: '/index',
        name: 'index',
        component: index,
        children: [{
			path: '/loanProcess',
            component: loanProcess,
			meta: [],
		},{
			path: '/myCustomer',
			component: myCustomer,
			meta: [],
		}]
    }
  ]
})
