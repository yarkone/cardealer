import Vue from 'vue'
import Router from 'vue-router'

import NotFoundComponent from '@/pages/NotFoundComponent'
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
            path: '*',
            component: NotFoundComponent 
        },
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            children: [{
                path: '/index/loanProcess',
                name: 'loanProcess',
                component: loanProcess,
                meta: {
                    title: '贷款办理',
                    keepAlive: true, //此组件需要被缓存
                    isBack: false, //用于判断上一个页面是哪个
                    isFirstEnter: false //是否第一次进入页面
                }
            },{
                path: '/index/creditMaterialsUpload',
                name: 'creditMaterialsUpload',
                component: creditMaterialsUpload,
                meat: {
                    title: '征信材料上传',
                    keepAlive: true, //此组件需要被缓存
                    isBack: false, //用于判断上一个页面是哪个
                    isFirstEnter: false //是否第一次进入页面
                }
            },{
                path: '/index/test',
                name: 'test',
                component: test,
                meat: {
                    title: '测试',
                    keepAlive: false
                }
            },{
                path: '/index/myCustomer',
                name: 'myCustomer',
                component: myCustomer,
                meta: { 
                    title: '我的客户'
                }
            }]
        }
    ],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
