/**
 * WordCloud Chart ,using EChart
 * @module WordCloud
 * @author czdujianbin 2015-09-21 14:01:41
 * @example
```
var data = [
    {
        name: "Macys",
        value: 6181
    },
    {
        name: "Amy Schumer",
        value: 4386
    }
  ];
  
  simple use:
  <WordCloud data={data} />
 
  Advance use:
  <WordCloud title="WordCloud" subtitle="WordCloud subtitile" height="800px" width="100%" theme="macarons" data={data} />
```
 */


var React = require('react/addons');
var ZRender = require('../../../vendors/zrender/index');
var Options = require('../../options/options');
var AbstractECharts = require("../AbstractECharts");
var Tools = require('../../../utils/tools');


/**
 * Basic Line Chart
 * @class WordCloud
 * @constructor
 * @param {String} height 
 * chart's height
 * @param {String} width  
 * chart's width
 * @param {Object} data 
 * Data array in the series. <br/>
 * @param {String} title 
 * Title, at most one title control is allowed in one chart.
 * @param {String} subtitle 
 * subtitle text, '\n' represents a line feed.
 * @return {Object} return basic line chart component
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

            console.log(JSON.stringify(option));
        }

        //加载图表
        this.loadChart(option);
    }



});

module.exports = WordCloud;