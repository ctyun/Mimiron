/*
 * 存放ajax请求的URL
 */
var API = {
	//frame
	SIDE_BAR_MENU:"/api/user/queryUserModule",
	LOGIN:"/api/admin/ajax/userLogin",
}

//如果用户在window上声明了API, 使用用户的API
module.exports = window.API || API;