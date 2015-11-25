/**
 * @description bss版本(包含基本组件和BSSFrame)打包入口
 */

//FIXME require CSS here

//window.hasModule=0; //this is due to a unhandled error information: hasModule is not defined

window.onerror=function(error,file){
	try{
		$.post("http://192.168.13.56/logger/",
		//$.post("http://127.0.0.1:8000/logger/",
		{
			url:window.location.pathname + window.location.hash,
			error:error,
			file:file
		},
		function(data,status){
			console.info(data);
		});
	}catch(e){
		console.info("我们尝试记录上一个错误, 并发送到服务器, 但是出现了这个问题:")
		console.info(e.name + ": " + e.message);
	}
	
	return false;
}

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
	CheckboxGroup : require("./html/checkboxGroup"),
	Checkbox : require("./html/checkbox"),
	Textarea : require("./html/textarea"),
	DatePicker: require("./html/datePicker"),
	BSSForm : require("./html/form"),

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

	//Login : require("./BSSFrame/login"),

	//TencentMap
	TencentMap : require('./tencentMap/map'),

	//ECharts
	ECharts : require('./echarts/echarts'),

	BasicLine : require('./echarts/components/line/BasicLine'),
	BasicColumn : require('./echarts/components/bar/BasicColumn'),
	StackedColumn : require('./echarts/components/bar/StackedColumn'),
	BasicArea : require('./echarts/components/line/BasicArea'),
	IrregularLine : require('./echarts/components/line/IrregularLine'),
	StackedArea : require('./echarts/components/line/StackedArea'),
	StackedLine : require('./echarts/components/line/StackedLine'),
	BasicPie : require('./echarts/components/pie/BasicPie'),
	WordCloud : require('./echarts/components/wordCloud/WordCloud'),
	
	//Modal & MessageBox
	Modal:require("./message/modal"),
	MessageBox : require("./message/messageBox"),

	//utils
	Tools : require("./utils/tools"),
	Ajax : require("./utils/ajax"),
	Debug : require("./utils/debug"),

	//page
	Grid: require("./page/grid2"),

	//resources
	Uploader : require("./resources/uploader"),

	//ETL
	FlowMaker : require("./etl/flowMaker"),

	//DEMO
	Demo : require("./demo/demo-all-components"),

	//deprecated
	Report : require("./deprecated/component/report/report"),
	Metadata : require("./deprecated/component/metadata/metadata"),
	Login : require("./deprecated/component/login/login"),
	ManageReportGroup: require("./deprecated/component/report/report-manage-group"),
	ReportShow : require("./deprecated/component/report/report-show"),
	ReportShowGroup : require("./deprecated/component/report/report-show-group"),

	Resource : require("./deprecated/component/resource/resource-show"),
	ResourceDetail : require("./deprecated/component/resource/resource-detail-show")
};

// //basic css files
// require("../static/css/bootstrap.min.css");
// require("../static/css/dropzone.css");
// require("../static/css/font-awesome.css");
// require("../static/css/style.css");
// require("../static/css/treeview.css");
// //theme css files
// require("../static/theme/vendors/jquery-nestable/nestable.css");
// require("../static/theme/css/style-responsive.css");
// require("../static/theme/css/patch.css");

components.version = require('../package.json').version;

//重新配置getter, 防止拿到undefined时React报奇怪的错误.(Uncaught TypeError: Cannot read property 'toUpperCase' of undefined @ReactDefaultInjection.js line53
// components.prototype.valueOf = function(key){
// 	alert("123");
// 	return this[key];
// }    

module.exports = components;