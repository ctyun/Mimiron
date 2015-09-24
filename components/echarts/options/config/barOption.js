var React = require('react/addons');
var ZRender = require('../../../vendors/zrender/index');
var Tools = require('../../../utils/tools');

var _BarOption = require('../config/DefaultOption');

var BarOption = Tools.clone(_BarOption);


BarOption.toolbox.feature.magicType = {show:true, type:['line', 'bar']};

BarOption.tooltip.axisPointer = { type : 'shadow'};

BarOption.xAxis = 	[
				        {
				            type:'category',
				            //X轴坐标名称间隔
				            axisLine : {onZero: false},
				            //X轴坐标名称
				            //data:['测试1','测试2']
				            data:[]
				        }
				    ];
BarOption.yAxis = 	[
				        {
				            type:'value',
				            axisLine : {onZero: false}
				        }
			    	];


module.exports = BarOption;
