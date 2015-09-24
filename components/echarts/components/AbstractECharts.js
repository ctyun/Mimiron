/*
 * Created by czdujianbin on 15-9-22.
 */

var React = require('react/addons');
var Tools = require('../../utils/tools');

/*
 * Abstract ECharts
 */
var AbstractECharts = {

    statics:{

        chartRefs:[],
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
            theme:"defalut",
            height:"500px",
            width:"100%",

            title:"",
            subtitle:"",
            
            xAxisName:[],
            smooth:true,

            maxPoints:20,

            data:[],
            cssClass:{
                border:"1px solid #ccc",
                padding:"10px"
            }
        };
    },

    componentDidMount: function () {

        //AbstractECharts.chartRefs[this.refs.myDiv] = this;

        AbstractECharts.statics.chartRefs.push(this);

        var flag = Tools.loadScriptWithLock("echarts-all","./components/vendors/echarts/source/echarts-all.js",function(){

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
