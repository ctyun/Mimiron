/**
 * @description bss版本(包含基本组件和BSSFrame)打包入口
 */

//FIXME require CSS here

window.hasModule=0; //this is due to a unhandled error information: hasModule is not defined

var components = {
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
	Login : require("./BSSFrame/login"),
	BasePage: require("./BSSFrame/basepage"),

	//import packed components
	TencentMap : require('./tencentMap/map'),
	Modal:require("./message/modal"),
	MessageBox : require("./message/messageBox"),

	//utils
	Tools : require("./utils/tools"),

	//DEMO
	Demo : require("./demo/demo"),

	//deprecated
	Report : require("./deprecated/component/report/report")
};

components.version = require('../package.json').version;

module.exports = components;