/*
 * @Author: yarkone 
 * @Date: 2018-09-10 17:02:27 
 * @Last Modified by: yarkone
 * @Last Modified time: 2018-09-11 14:04:46
 */
let baseUrl = '';
let routerMode = 'hash';
let baseImgPath;
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV == 'development') {
    baseUrl = 'http://192.168.0.187:8383';
    baseImgPath = 'http://192.168.0.187:8383/img/';
} else {
    baseUrl = '//carloan.hrfax.cn/api';
    baseImgPath = '//carloan.hrfax.cn/api/img/';
}

export {
    baseUrl,
    baseImgPath
}
