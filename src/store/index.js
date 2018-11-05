/*
 * @Author: yarkone 
 * @Date: 2018-11-01 16:00:27 
 * @Last Modified by: yarkone
 * @Last Modified time: 2018-11-01 16:27:14
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        LOADING: false
    },
    mutations: {
        showLoading() {
            state.LOADING = true
        },
        hideLoading() {
            state.LOADING = false
        }
    }
})

export default store