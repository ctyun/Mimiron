/**
 * @description bss版本(包含基本组件和BSSFrame)打包入口
 */

//FIXME require CSS here

window.hasModule=0; //this is due to a unhandled error information: hasModule is not defined


var components = {
	//暴露到window上的公共变量
	Mimiron: require("./utils/publicVars"),

	React : require('react'),
	//import base components
	Button:require("./html/button"),
	Input : require("./html/input"),
	Tab : require("./tabs/tab"),
	Tabs : require("./tabs/tabs"),
	Select:require("./html/select"),
	ExpressionSelect:require("./html/expression"),
	Autocomplete:require("./html/autocomplete"),
	Treeview : require("./tree/treeview"),
	TreeWithTable : require("./tree/treeWithTable"),
	CheckboxGroup : require("./html/CheckboxGroup"),
	Checkbox : require("./html/Checkbox"),
	Textarea : require("./html/Textarea"),
	DatePicker: require("./html/DatePicker"),

	//import ES6 patch ,no longer use, use babel-loader instead
	//require("./utils/webpackPatch"),

	//import combined components
	BSSPanel:require("./panel/panel"),
	QueryPanel:require("./panel/query-panel"),
	ToolBarPanel:require("./panel/tool-panel"),
	TablePanel:require("./panel/table-panel"),
	

	//import BSS related components
	BSSFrame : require("./BSSFrame/frame"),
	TopBar : require("./BSSFrame/topbar"),
	SideBar : require("./BSSFrame/sidebar"),
	Route : require("./BSSFrame/route"),

	//Login : require("./BSSFrame/login"),

	//import packed components
	TencentMap : require('./tencentMap/map'),
	Modal:require("./message/modal"),
	MessageBox : require("./message/messageBox"),

	//utils
	Tools : require("./utils/tools"),
	Ajax : require("./utils/ajax"),

	//page
	Grid: require("./page/grid"),

	//resources
	Uploader : require("./resources/uploader"),

	//DEMO
	Demo : require("./demo/demo-all-components"),

	//deprecated
	Report : require("./deprecated/component/report/report"),
	Metadata : require("./deprecated/component/metadata/metadata"),
	Login : require("./deprecated/component/login/login"),
	ManageReportGroup: require("./deprecated/component/report/report-manage-group"),
	ReportShow : require("./deprecated/component/report/report-show"),

	Resource : require("./deprecated/component/resource/resource-show"),
	ResourceDetail : require("./deprecated/component/resource/resource-detail-show")


	
};

components.version = require('../package.json').version;

//重新配置getter, 防止拿到undefined时React报奇怪的错误.(Uncaught TypeError: Cannot read property 'toUpperCase' of undefined @ReactDefaultInjection.js line53
// components.prototype.valueOf = function(key){
// 	alert("123");
// 	return this[key];
// }    

module.exports = components;