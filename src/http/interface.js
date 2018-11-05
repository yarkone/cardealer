/*
 * @Author: yarkone
 * @Date: 2018-09-11 11:34:57
 * @Last Modified by: yarkone
 * @Last Modified time: 2018-11-05 16:53:12
 */
import axios from './api'

/*
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 登录接口
export const doLogin = data => {
    return axios({
        url: '/login/doLogin',
        method: 'post',
        data
    })
}

// 退出登录接口
export const doLogout = () => {
    return axios({
        url: '/login/doLogout',
        method: 'get'
    })
}

export const query = () => {
    return axios({
        url: '/query',
        method: 'get'
    })
}

export const list = (id) => {
    return axios({
        url: `/list${id}`,
        method: 'get'
    })
}

export const upload = data => {
    return axios({
        url: '/upload',
        method: 'post',
        data
    })
}

// 默认全部导出
export default {
    doLogin,
    doLogout,
    query,
    list,
    upload
}