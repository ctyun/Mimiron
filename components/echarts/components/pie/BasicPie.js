/**
 * ECharts 图表组件
 * @module ECharts
 * @author czdujianbin 2015-09-22 17:01:41
 */


var React = require('react/addons');
var ZRender = require('../../../../static/vendors/zrender/index');
var Options = require('../../options/options');
var AbstractECharts = require("../AbstractECharts");
var Tools = require('../../../utils/tools');


/**
 * Basic Pie Chart
 * ```
 * 
 *   var data = [
 *         {
 *             name:'访问来源',
 *             data:[
 *                 {value:335, name:'直接访问'},
 *                 {value:310, name:'邮件营销'},
 *                 {value:234, name:'联盟广告'},
 *                 {value:135, name:'视频广告'},
 *                 {value:1548, name:'搜索引擎'}
 *             ]
 *         }
 *     ];
 * 
 *   var xAxisName = ['周一','周二','周三','周四','周五','周六','周日'];
 * 
 *   simple use:
 *   <BasicPie data={data} />
 * 
 *   Advance use:
 *   <BasicPie  title="BasicPie" subtitle="BasicPie subtitle" height="800px" width="100%"  theme="macarons" data={data} />
 *   
 * ```
 * @class BasicPie
 * @extends AbstractECharts
 */
var BasicPie = React.createClass({
    
    "mixins":[AbstractECharts],

    renderChart: function () {

        if(!window.echarts) return;

        //get configure
        var option = this.props.option;

        if(!option){//no this.props.option

            //get default configure
            option = Tools.clone(Options.PieOption);

            option.title.text = this.props.title;
            option.title.subtext = this.props.subtitle;

            if(this.props.tooltipFormatter){
                option.tooltip.formatter = this.props.tooltipFormatter;
            }

            //build data
            option.series = Tools.clone(this.props.data);

            option.legend.data = [];
            for(var i = 0; i < option.series.length; i++){
                (option.series[i])["type"] = "pie";
                (option.series[i])["radius"] = "55%";
                (option.series[i])["center"] = ['50%', '60%'];

                option.series[i].data.map(function(elem){
                    option.legend.data.push(elem.name);
                });

                
                
            }



        }

        //加载图表
        this.loadChart(option);
    }



});

module.exports = BasicPie;