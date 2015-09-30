//import 3rd party dependents
var React = require('react');
require('bootstrap');

//import base components
var Button=require("./html/button");
var Input = require("./html/input");
var Tab = require("./tabs/tab");
var Tabs = require("./tabs/tabs");
var Select=require("./html/select");
var ExpressionSelect=require("./html/expression");
var Autocomplete=require("./html/autocomplete");
var Treeview = require("./tree/treeview");
var TreeWithTable = require("./tree/treeWithTable");

//import ES6 patch ,no longer use, use babel-loader instead
//require("../utils/webpackPatch");

//import combined components
var BSSPanel=require("./panel/panel");
var QueryPanel=require("./panel/query-panel");
var ToolBarPanel=require("./panel/tool-panel");
var TablePanel=require("./panel/table-panel");

//import packed components
var TencentMap = require('./tencentMap/map');


var Modal=require("./message/modal");
var MessageBox = require("./message/messageBox");

//chart
var ECharts = require("./echarts/echarts");

var BasicLine = require("./echarts/components/line/BasicLine");
var StackedLine = require("./echarts/components/line/StackedLine");
var BasicArea = require("./echarts/components/line/BasicArea");

var IrregularLine = require("./echarts/components/line/IrregularLine");
var StackedColumn = require("./echarts/components/bar/StackedColumn");
var BasicColumn = require("./echarts/components/bar/BasicColumn");

var BasicPie = require('./echarts/components/pie/BasicPie');
var WordCloud = require('./echarts/components/wordCloud/WordCloud');

var ZRender = require('./vendors/zrender/index');

//local variables
var selectData=[{value:'1',text:'显示2'},{value:'2',text:'显示1'}];

//local functions, will call by RenderComponent
var _onSelect=function(v){
      alert(v);
    };
var _onSelect2=function(v){
      alert(v);
    };
var _getAutoCompleteValue=function(){
      var v=  Autocomplete.getValue();
      alert(v);
    };
var queryMetadata= function(param){ 
      console.log(param);
    };
var markers =  [{x:116,y:40,description:'This is a description'},{x:117,y:40,description:'This is a description'}];
var tree1Data = {
    treedata: 
    [
        {
            "name": "website",
            "uid": "uid1",
            "children": [
                {
                    "name": "images",
                    "uid": "uid2",
                    "isSelected": "part",
                    "children": [
                        {
                            "name": "logo.png",
                            "uid": "uid3",
                            "isSelected": "all",
                        },
                        {
                            "name": "background.png",
                            "uid": "uid4",
                            "isSelected": "all",
                        }
                    ]
                },
                {
                    "name": "index.html",
                    "uid": "uid5"
                },
                {
                    "name": "about.html",
                    "uid": "uid6"
                },
            ]
        }
    ]
}



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


var Demo = React.createClass({
  displayName:'Demo',
  getInitialState:function(){
      return {
          tableProps:{
              title:['选项','标题1','标题2','标题3'],
              jsonKey:['id','t1','t2','t3'],
              data:[{id:1,
                t1:'测试1',
                t2:'测试2',
                t3:'测试3'}],
              doList:function(){},
              pageSize:10,
              offset:1, //page:this.state.offset
              totalRows:1,
              checkType:"radio",
          },
      }
  },
  treeCheck : function(uid,status){
      console.log(uid+status);
  },
  treeFlod : function(uid,status){
      console.log(uid+status);
  },
  render:function(){
    console.log(this.state.tableProps);
    return (<div>
      <hr /><hr />
      <div className="base-components">
        <h2>基本组件:</h2>
        <Button btnName="按钮" cssClass="btn-warning"/>
        <Input disName="t1" name="t1" value="输入框"/>
        <Tabs maxHeight="150px">
              <Tab title="111" id="1">
                  <p>456</p><p>456</p><p>456</p><p>456</p><p>456</p><p>456</p>
              </Tab>
              <Tab title="222" id="2" isActive={true}>
                  <p>789</p>
              </Tab>
          </Tabs>
          <Select data={selectData} defaultValue="2" onSelect={_onSelect}/>
            <ExpressionSelect onSelect={_onSelect2}/>
            <div>
              <Autocomplete name="动态下拉" url="/api/test/autocomplete" /><Button btnName="获取下拉列表的值" doAction={_getAutoCompleteValue}/>
            </div>
        </div>
        <Treeview data={tree1Data} selectType="checkbox" onElementCheck={this.treeCheck} onElementFlod={this.treeFlod} expandLevel="3"/>
        <hr />
        <div className="packed-components">
          <h2>包装组件:</h2>
          <p>模态框:</p>
          <Button btnName="弹出模态框" doAction={Modal.show.bind(null,"myModal1")}/>
          <Modal id="myModal1" title="标题1" >
            <span>"a form here"</span> <br/>
            <Button btnName="关闭" doAction={Modal.hide.bind(null,"myModal1")}/>
          </Modal>  
          <p>地图:</p>
          <TencentMap id="2"  mapData={markers}  height={"500px"}> </TencentMap>
        </div>
        <div className="packed-components">
          <h2>组合组件:</h2>
          <p>BSSPanel:</p>
          <BSSPanel pageTitle = "示例Panel">
            <QueryPanel submitAction={queryMetadata} jsonFormat={true} okButtonName="查询(请看console)">
                <Input disName=" 示范输入:" name="demoInput"/>
            </QueryPanel>
            <ToolBarPanel>
              <Button btnName="增删查改"/>
            </ToolBarPanel>
            <TablePanel {...this.state.tableProps}/>
          </BSSPanel>
        </div>
    </div>);
  }
});


var data = [
    {
        name : "测试1",
        data : [90, 113, 140, 30, 70, 60]
    },
    {
        name : "测试2",
        data : [190, 213, 240, 230, 70, 260]
    },
];

var xAxisName = ['周一','周二','周三','周四','周五','周六'];


var data2 = [
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



// React.render(
//   <div style={{"overflow":"auto"}}>
//     <ECharts height="400px" width="800px" option={option}/>
//     <BaseLine title="曲线测试" subtitle="这是一个副标题测试" height="400px" width="800px" trigger="item" theme="macarons" data={data} xAxisName={xAxisName} smooth={true}/>
//     <BaseLine data={data} xAxisName={xAxisName}/>
//   </div>
//   , document.getElementById('content'));
  

// var BSSFrame = require("./BSSFrame/frame");
// var Demo = require("./demo/demo");
// React.render(
//   <div style={{"overflow":"auto"}}>
//   <Demo />
//     <p>ECharts 原生用法，支持直接baidu echarts 直接拷贝option</p>
//     <ECharts height="400px" width="800px" option={option}/>
//     <p>BasicLine 简单用法</p>
//     <BasicLine data={data} xAxisName={xAxisName}/>
//     <p>BasicLine 进阶用法</p>
//     <BasicLine title="BasicLine" subtitle="这是一个副标题测试" height="300px" width="600px" trigger="item" theme="macarons" data={data} xAxisName={xAxisName} smooth={true}/>
//     <p>StackedLine 简单用法</p>
//     <StackedLine data={data} xAxisName={xAxisName}/>
//     <p>StackedLine 进阶用法</p>
//     <StackedLine title="StackedLine" subtitle="这是一个副标题测试" height="300px" width="600px" trigger="item" theme="macarons" data={data} xAxisName={xAxisName} smooth={true}/>
//     <p>BasicArea 简单用法</p>
//     <BasicArea data={data} xAxisName={xAxisName}/>
//     <p>BasicArea 进阶用法</p>
//     <BasicArea title="BasicArea" subtitle="这是一个副标题测试" height="300px" width="600px" data={data} xAxisName={xAxisName} smooth={true}/>
//     <p>IrregularLine</p>
//     <IrregularLine title="IrregularLine" subtitle="IrregularLine" height="400px" width="800px" data={data2} smooth={true} />
//     <p>BasicColumn</p>
//     <BasicColumn title="BasicColumn" subtitle="BasicColumn" height="400px" width="800px" data={data} xAxisName={xAxisName} smooth={true}/>
//     <p>StackedColumn</p>
//     <StackedColumn title="StackedColumn" subtitle="StackedColumn" height="400px" width="800px" trigger="axis" data={data} xAxisName={xAxisName} smooth={true}/>
//     <p>BasicPie</p>
//     <BasicPie title="StackedColumn" subtitle="StackedColumn" height="400px" width="800px"  data={pieData} />
//     <p>WordCloud</p>
//     <WordCloud title="WordCloud" subtitle="WordCloud" height="400px" width="800px"  data={wordCloudData} />
//   </div>
//   , document.getElementById('content'));


var Login = require("./BSSFrame/login");

React.render(
  <BSSPanel />
  , document.body);