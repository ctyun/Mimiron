var React = require('react/addons');
var ZRender = require('../../../vendors/zrender/index');
var Tools = require('../../../utils/tools');

var _LineOption = require('../config/DefaultOption');

var LineOption = Tools.clone(_LineOption);

LineOption.toolbox.feature.magicType = {show:true, type:['line', 'bar']};

LineOption.xAxis = 	[
				        {
				            type:'category',
				            //X轴坐标名称间隔
				            axisLine : {onZero: false},
				            //X轴坐标名称
				            //data:['测试1','测试2']
				            boundaryGap : false,
				            data:[]
				        }
				    ];
LineOption.yAxis = 	[
				        {
				            type:'value',
				            axisLine : {onZero: false}
				        }
			    	];



module.exports = LineOption;
