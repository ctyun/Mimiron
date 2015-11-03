/**
 * ECharts 图表组件
 * @module ECharts
 * @author czdujianbin 2015-09-21 14:01:41
 */


var React = require('react/addons');
var ZRender = require('../../../../static/vendors/zrender/index');
var Options = require('../../options/options');
var AbstractECharts = require("../AbstractECharts");
var Tools = require('../../../utils/tools');


/**
 * Basic Line Chart
 * ```
 * 
 * var data = [
 *     {
 *         name: "Macys",
 *         value: 6181
 *     },
 *     {
 *         name: "Amy Schumer",
 *         value: 4386
 *     }
 *   ];
 *   
 *   simple use:
 *   <WordCloud data={data} />
 *  
 *   Advance use:
 *   <WordCloud title="WordCloud" subtitle="WordCloud subtitile" height="800px" width="100%" theme="macarons" data={data} />
 *   
 * ```
 * @class WordCloud
 * @extends AbstractECharts
 */
var WordCloud = React.createClass({
    
    "mixins":[AbstractECharts],

    renderChart: function () {

        if(!window.echarts) return;

        //get configure
        var option = this.props.option;

        if(!option){//no this.props.option

            //get default configure
            option = Tools.clone(Options.WordCloudOption);

            option.title.text = this.props.title;
            option.title.subtext = this.props.subtitle;


            //build data
            option.series[0].data = Tools.clone(this.props.data);

            for(var i = 0; i < option.series[0].data.length; i++){
                (option.series[0].data[i])["itemStyle"] = this.createRandomItemStyle();
            }

            //console.log(JSON.stringify(option));
        }

        //加载图表
        this.loadChart(option);
    }



});

module.exports = WordCloud;