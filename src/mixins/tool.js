/*
 * @Author: yarkone 
 * @Date: 2018-11-05 10:22:51 
 * @Last Modified by: yarkone
 * @Last Modified time: 2018-11-05 17:48:23
 */
import Cookies from 'js-cookie'

export const tool = {
    clearCookies: function(){
        let _cookies = Cookies.getJSON();
		for(var i in _cookies) {
			Cookies.remove(i);
		}
    }
}
