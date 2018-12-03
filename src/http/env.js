/*
 * @Author: yarkone 
 * @Date: 2018-09-10 17:02:27 
 * @Last Modified by: yarkone
 * @Last Modified time: 2018-11-09 18:20:07
 */
let baseUrl = '';
let routerMode = 'hash';
let baseImgPath;
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV == 'development') {
    baseUrl = 'http://114.55.55.41:9999/api/';
    baseImgPath = 'http://192.168.0.187:9999/img/';
} else {
    baseUrl = '//carloan.hrfax.cn/api';
    baseImgPath = '//carloan.hrfax.cn/api/img/';
}

export {
    baseUrl,
    baseImgPath
}
