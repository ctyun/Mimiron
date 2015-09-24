/**
 * ECharts
 * @module ECharts
 *
 * @example
```
var option = {
        title : {
            text: '未来一周气温变化',
            subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['最高气温','最低气温']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} °C'
                }
            }
        ],
        series : [
            {
                name:'最高气温',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'最低气温',
                type:'line',
                data:[1, -2, 2, 5, 3, 2, 0],
                markPoint : {
                    data : [
                        {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };
            
simple use:
<ECharts id="chart1" height="800px" width="100%" option={option}/>

```
 */


var React = require('react/addons');
var Tools = require('../utils/tools');

var AbstractECharts = require('./components/AbstractECharts');

/**
 * ECharts
 * @class ECharts
 * @constructor
 * @param {String} id component id
 * @param {String} height component's height
 * @param {String} width component's width
 * @param {Object} option the setting of this component
 */
var ECharts = React.createClass({

    "mixins":[AbstractECharts],

    renderChart: function () {

        if(!window.echarts) return;

        if (!this.props.option) {
            throw chartHaveNoOptionException('option has to be specified !')
        }

        //加载图表
        this.loadChart(this.props.option);
    },

});

module.exports = ECharts;
