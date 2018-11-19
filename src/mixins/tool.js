/*
 * @Author: yarkone 
 * @Date: 2018-11-05 10:22:51 
 * @Last Modified by: yarkone
 * @Last Modified time: 2018-11-19 15:39:06
 */
import Cookies from 'js-cookie'

export const tool = {
    clearCookies: function(){
        let _cookies = Cookies.getJSON();
		for(var i in _cookies) {
			Cookies.remove(i);
		}
    },
    /**
	 * 添加日期格式化方法
	 * @params {number} time 时间戳
	 * @params {boolean} isTime 是否输出时分秒
	 */
	formatDate: function (time, isTime) {
		if(!time) return '';
		if(!time) return undefined;
		var cDate = new Date(parseInt(time)),
			_year = cDate.getFullYear(),
			_month = tool.leftPad(cDate.getMonth() + 1, 2),
			_date = tool.leftPad(cDate.getDate(), 2),
			_hours = tool.leftPad(cDate.getHours(), 2),
			_minutes = tool.leftPad(cDate.getMinutes(), 2);
		if(isTime) {
			return _year + '-' + _month + '-' + _date + ' ' + _hours + ':' + _minutes;
		}
		return _year + '-' + _month + '-' + _date;
	},
	leftPad: function (s, n) {
		var l = '';
		s = s + '';
		if(s.length < n) {
			for(var i = 0, len = n - s.length; i < len; i++) {
				l += "0";
			}
			return l + s;
		}
		return s;
    },
    /**
	 * 添加判断是否为空对象的方法
	 */
	isEmptyObject: function(e) {
	    var t;
	    for (t in e)
	        return !1;
	    return !0
	}
}
