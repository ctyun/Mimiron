/**
 * ECharts 图表组件
 * @module ECharts
 * @author czdujianbin 2015-09-22
 */

var React = require('react/addons');
var Tools = require('../../utils/tools');

/**
 * Abstract ECharts
 * @class AbstractECharts
 */
var AbstractECharts = {

    statics:{

        chartRefs:[],
        /**
         * 获得该组件的报表引用
         * @static
         * @method getChart
         */
        getChart:function(){
            return this.state.chart;
        }
    },

    createRandomItemStyle:function(){
        return {
            normal: {
                color: 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                ].join(',') + ')'
            }
        };
    },

    loadChart: function(option){

        var myChart = echarts.init(document.getElementById(this.state.id),this.props.theme);

        this.state.chart = myChart;

        //为Chart对象加载数据
        myChart.setOption(option);
    },

    setDataZoom: function(option){
        //判断是否使用dataZoom
        if(option.xAxis[0].data.length > this.props.maxPoints){

            option.dataZoom = {
                orient:"horizontal", //水平显示
                show:true, //显示滚动条
                start:Math.ceil((1 - this.props.maxPoints/option.xAxis[0].data.length) * 100)
            }
        }

    },


            
    getInitialState: function() {
        return {
            id:Tools.uuid(),
            chart:null
        };
    },
    
    getDefaultProps: function() {
        return {
            /**
             * @property {String} theme 主题类型，默认defalut
             */
            theme:"defalut",

            /**
             * @property {String} height 图表高度，默认500px
             */
            height:"500px",
            /**
             * @property {String} width 图表宽度，默认100%
             */
            width:"100%",

            /**
             * @property {String} title 主标题
             */
            title:"",
            /**
             * @property {String} subtitle 副标题
             */
            subtitle:"",
            
            /**
             * @property {Array} xAxisName 横坐标名称
             */
            xAxisName:[],
            /**
             * @property {String} smooth 曲线是否平滑,可选值：(true|false) 默认true
             */
            smooth:true,

            /**
             * @property {String} maxPoints 一个图最大能够显示的坐标点，超过部分将隐藏起来，可以通过滚动条查看数据,默认20个点
             */
            maxPoints:20,

            /**
             * @property {Array} data 传入的数据，具体传入格式请看对应的类说明
             */
            data:[],
            /**
             * @property {Object} cssClass 默认样式
             */
            cssClass:{
                border:"1px solid #ccc",
                padding:"10px"
            }
        };
    },

    componentDidMount: function () {

        AbstractECharts.statics.chartRefs.push(this);

        var flag = Tools.loadScriptWithLock("echarts-all",window.Mimiron.distPath+"vendors/echarts/source/echarts-all.js",function(){

                        //对每一个未加载的图表进行刷新
                        AbstractECharts.statics.chartRefs.map(function(chart) {
                            chart.renderChart();
                        })

                    });
        
        if(flag){
            //脚本已加载，直接加载图表
            this.renderChart();
        }
        
    },
 
    componentDidUpdate: function () {
        this.renderChart();
    },


    render: function () {
        return <div id={this.state.id}  style={jQuery.extend(this.props.cssClass,{height:this.props.height,width:this.props.width})} />
    }
};

module.exports = AbstractECharts;
