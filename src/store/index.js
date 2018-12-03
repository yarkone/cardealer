/*
 * @Author: yarkone 
 * @Date: 2018-11-01 16:00:27 
 * @Last Modified by: yarkone
 * @Last Modified time: 2018-12-03 18:12:21
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
Vue.use(Vuex)
const state = {
    includePage: [],
}
const actions = {
}
const getters = {
    includePage: state => state.includePage,
}
const mutations = {
    [types.UPDATE_INCLUDE_PAGE] (state, obj) {
        if(obj.flag){
            state.includePage.push(obj.pageName);
        }else{
            //includePage=[]
            state.includePage.splice(state.includePage.indexOf(obj.pageName),1);
        }
    }
}
//导出vue实例
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})