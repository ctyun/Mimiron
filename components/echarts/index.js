//import 3rd party dependents

var jQuery = require("jQuery");
window.jQuery = jQuery;
var React = require('react');



var ZRender = require('../vendors/zrender/index');


var ECharts = require('./echarts');

var BasicLine = require('./components/line/BasicLine');
var StackedLine = require('./components/line/StackedLine');
var BasicArea = require('./components/line/BasicArea');
var StackedArea = require('./components/line/StackedArea');
var IrregularLine = require('./components/line/IrregularLine');

var BasicColumn = require('./components/bar/BasicColumn');
var StackedColumn = require('./components/bar/StackedColumn');
var BasicPie = require('./components/pie/BasicPie');
var WordCloud = require('./components/wordCloud/WordCloud');


var option = {
    title : {
        text: 'EChart',
        subtext: '原生Option使用'
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




var data2 = [
    {
        name : "测试1",
        data : [190, 123, 1420, 130, 170, 620]
    },
    {
        name : "测试2",
        data : [190, 213, 240, 230, 70, 260]
    },
];

var xAxisName = ['周一','周二','周三','周四','周五','周六'];

    


var data = [
    {
        name : "测试1",
        data : [10, 12, 21, 54, 260, 830, 710,10]
    },
    {
        name : "测试2",
        data : [30, 182, 434, 791, 390, 30, 10]
    },
    {
        name : "测试3",
        data : [1320, 1132, 601, 234, 120, 90, 20]
    },
];
                    

var data2 = [
    {
        name : "测试1",
        data : [10, 12, 21, 54, 260, 830, 710,10, 12, 21, 54, 260, 830, 710,10, 12, 21, 54, 260, 830, 710,10, 12, 21, 54, 260, 830, 710,10, 12, 21, 54, 260, 830, 710]
    },
    {
        name : "测试2",
        data : [30, 182, 434, 791, 390, 30, 10]
    },
    {
        name : "测试3",
        data : [1320, 1132, 601, 234, 120, 90, 20]
    },
];


var data3 = [
        {
            name:'数据1',
            type:'line',
            data:[
                [1.5, 10], [5, 7], [8, 8], [12, 6], [11, 12], [16, 9], [14, 6], [17, 4], [19, 9]
            ]
        },
        {
            name:'数据2',
            type:'line',
            data:[
                [1, 2], [2, 3], [4, 2], [7, 5], [11, 2], [18, 3]
            ]
        }
    ]

var xAxisName2 = ['周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日']

var option1 = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};


var pieData = [
        {
            name:'访问来源',
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ];
             

var wordCloudData =  [
            {
                name: "Macys",
                value: 6181
            },
            {
                name: "Amy Schumer",
                value: 4386
            },
            {
                name: "Jurassic World",
                value: 4055
            },
            {
                name: "Charter Communications",
                value: 2467
            },
            {
                name: "Chick Fil A",
                value: 2244
            },
            {
                name: "Planet Fitness",
                value: 1898
            },
            {
                name: "Pitch Perfect",
                value: 1484
            },
            {
                name: "Express",
                value: 1112
            },
            {
                name: "Home",
                value: 965
            },
            {
                name: "Johnny Depp",
                value: 847
            },
            {
                name: "Lena Dunham",
                value: 582
            },
            {
                name: "Lewis Hamilton",
                value: 555
            },
            {
                name: "KXAN",
                value: 550
            },
            {
                name: "Mary Ellen Mark",
                value: 462
            },
            {
                name: "Farrah Abraham",
                value: 366
            },
            {
                name: "Rita Ora",
                value: 360
            },
            {
                name: "Serena Williams",
                value: 282
            },
            {
                name: "NCAA baseball tournament",
                value: 273
            },
            {
                name: "Point Break",
                value: 265
            }
];




React.render(
  <div style={{"overflow":"auto"}}>

  <ECharts height="400px" width="800px" option={option}/>

  <ECharts height="400px" width="800px" option={option1}/>

   <BasicLine title="BasicLine" subtitle="advance use" height="400px" width="800px" trigger="item"  data={data} xAxisName={xAxisName} smooth={true} tooltipFormatter="Temperature : <br/>{b}km : {c}°C"/>

<StackedLine title="StackedLine" subtitle="advance use" height="400px" width="500px" trigger="axis"  theme="macarons" data={data2} xAxisName={xAxisName2}  />


<StackedLine title="StackedLine" subtitle="advance use" height="400px" width="600px" theme="macarons" data={data} xAxisName={xAxisName} smooth={true}/>


<p>BasicArea</p>
<BasicArea title="BasicArea" subtitle="BasicArea" height="400px" width="800px" data={data2} xAxisName={xAxisName2} smooth={true}/>

<p>StackedArea</p>
<StackedArea title="StackedArea" subtitle="StackedArea" height="400px" width="800px" data={data2} xAxisName={xAxisName2} smooth={true}/>

<p>IrregularLine</p>
<IrregularLine title="IrregularLine" subtitle="IrregularLine" height="400px" width="800px" data={data3} smooth={true} />

<p>BasicColumn</p>
<BasicColumn title="BasicColumn" subtitle="BasicColumn" height="400px" width="800px" data={data2} xAxisName={xAxisName2} smooth={true}/>

<p>StackedColumn</p>
<StackedColumn title="StackedColumn" subtitle="StackedColumn" height="400px" width="800px" trigger="axis" data={data2} xAxisName={xAxisName2} smooth={true}/>


<p>BasicPie</p>
<BasicPie title="StackedColumn" subtitle="StackedColumn" height="400px" width="800px"  data={pieData} />


<p>WordCloud</p>
<WordCloud title="WordCloud" subtitle="WordCloud" height="400px" width="800px"  data={wordCloudData} />


  </div>
  , document.getElementById('content'));
