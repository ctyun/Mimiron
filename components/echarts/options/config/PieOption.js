var React = require('react/addons');
var ZRender = require('../../../vendors/zrender/index');
var Tools = require('../../../utils/tools');

var _PieOption = require('../config/DefaultOption');

var PieOption = Tools.clone(_PieOption);


PieOption.legend.orient = 'vertical',
PieOption.legend.x = "left";
PieOption.title.x = "center";
PieOption.tooltip.trigger = "item";
PieOption.tooltip.formatter = "{a} <br/>{b} : {c} ({d}%)";
PieOption.calculable = true;


module.exports = PieOption;
