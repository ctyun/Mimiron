/**
 * StackedLine Chart ,using EChart
 * @module StackedLine
 * @author czdujianbin 2015-09-21 10:01:41
 * @example
 * ```
 * var data = [
 *     {
 *         name : "测试1",
 *         data : [90, 113, 140, 30, 70, 60]
 *     },
 *     {
 *         name : "测试2",
 *         data : [190, 213, 240, 230, 70, 260]
 *     },
 * ];
 *
 * var xAxisName = ['周一','周二','周三','周四','周五','周六','周日'];
 * 
 * simple use:
 * <StackedLine id="chart1" data={data} xAxisName={xAxisName}/>
 *
 * Advance use:
 * <StackedLine id="test" title="曲线测试" subtitle="这是一个副标题测试" height="800px" width="100%" trigger="item" theme="macarons" data={data} xAxisName={xAxisName} smooth={true}/>
 * ```
 */


var React = require('react/addons');
var ZRender = require('../../../vendors/zrender/index');
var Options = require('../../options/options');
var AbstractECharts = require("../AbstractECharts");
var Tools = require('../../../utils/tools');


/**
 * StackedLine Chart
 * @class StackedLine
 * @constructor
 * @param {String} height 
 * chart's height
 * @param {String} width  
 * chart's width
 * @param {Object} data 
 * Data array in the series. <br/>
 * In line and column, length of the array is equal to the length of category axis text label array xAxisName, and there is one-to-one correspondence between them. <br/>
 * The array item is usually value, such as:[12, 34, 56, ..., 10, 23] <br/>
 * When the data corresponding to a category does not exist (ps: 'no data' is not equal to 0), you can use '-' to indicate 'no data'. <br/>
 * In line, 'no data' is showed by a breakpoint; in column, 'no data' is showed by a missing column, such as:[12, '-', 56, ..., 10, 23]
 * @param {Object} xAxisName 
 * category axis: specifies the category list. 
 * @param {String} title 
 * Title, at most one title control is allowed in one chart.
 * @param {String} subtitle 
 * subtitle text, '\n' represents a line feed.
 * @param {String} smooth 
 * smoothed line, value(true/false), while smooth is true, lineStyle.type can not be dashed.
 * @param {String} trigger 
 * Type of trigger. Defaults to 'item'.Valid values are: 'item' | 'axis'.
 * @param {String} tooltipFormatter
 * tooltip's formatter: {string} (Template).(Template: a (series name), b(category value), c (value) ) eg : tooltipFormatter="Temperature : <br/>{b}km : {c}°C"
 * @param {Integer} maxPoints
 * configure how many points will be showed in a chart
 * @return {Object} return stacked line chart component
 * 
 */
var StackedLine = React.createClass({
    
    "mixins":[AbstractECharts],

    renderChart: function () {

        if(!window.echarts) return;

        //get configure
        var option = this.props.option;

        if(!option){//no this.props.option

            //get default configure
            option = Tools.clone(Options.LineOption);

            option.title.text = this.props.title;
            option.title.subtext = this.props.subtitle;

            option.toolbox.feature.magicType = {show: true, type: ['line', 'bar', 'stack', 'tiled']};

            if(this.props.trigger){
                option.tooltip.trigger = this.props.trigger;
            }

            if(this.props.tooltipFormatter){
                option.tooltip.formatter = this.props.tooltipFormatter;
            }

            //build data
            option.series = Tools.clone(this.props.data);
            option.xAxis[0].data = this.props.xAxisName;

            var useDataZoom =  false;
            option.legend.data = [];
            for(var i = 0; i < option.series.length; i++){
                (option.series[i])["type"] = "line";
                (option.series[i])["stack"] = "sum";
                (option.series[i])["smooth"] = this.props.smooth;
                option.legend.data.push(option.series[i].name);
            }

            this.setDataZoom(option);

        }

        //加载图表
        this.loadChart(option);

    }


});

module.exports = StackedLine;