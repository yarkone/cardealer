/*
 * @Author: yarkone 
 * @Date: 2018-11-01 16:00:27 
 * @Last Modified by: yarkone
 * @Last Modified time: 2018-12-03 18:12:21
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const hahaha = (state, data) => {
    state.includedComponents = data
}

export default new Vuex.Store({
	hahaha
})
