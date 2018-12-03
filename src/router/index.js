import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login'
import index from '@/pages/index'
import loanProcess from '@/pages/loanProcess'
import myCustomer from '@/pages/myCustomer'
import creditMaterialsUpload from '@/pages/creditMaterialsUpload'
import test from '@/pages/test'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '登录页',
            component: login
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: login
        // },
        {
            path: '/index',
            name: '首页',
            component: index,
            children: [{
                path: '/loanProcess',
                name: '贷款办理',
                component: loanProcess,
                meta: { 
                    title: '贷款办理',
                    keepAlive: true
                }
            },{
                path: '/creditMaterialsUpload',
                name: '征信材料上传',
                component: creditMaterialsUpload,
                meat: {
                    title: '征信材料上传',
                    keepAlive: true
                }
            },{
                path: '/test',
                name: '测试',
                component: test,
                meat: {
                    title: '测试'
                }
            },{
                path: '/myCustomer',
                name: '我的客户',
                component: myCustomer,
                meta: { 
                    title: '我的客户'
                }
            }]
        }
    ]
})
