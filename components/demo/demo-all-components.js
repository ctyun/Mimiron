/**
 * @module demo
 */
//import 3rd party dependents
var React = require('react');
require('bootstrap');

var Tab = require("../tabs/tab");
var Tabs = require("../tabs/tabs");

//html
var Input = require("../html/input");
var Button = require("../html/button");
var Autocomplete = require("../html/autocomplete");
var AutoSelect = require("../html/autoselect");
var BSSForm = require("../html/form");
var CascadeSelect = require("../html/cascadeselect");
var Checkbox = require("../html/checkbox");
var CheckboxGroup = require("../html/checkboxGroup");
var DatePicker = require("../html/datePicker");
var ExpressionSelect = require("../html/expression");
var Select = require("../html/select");
var Textarea = require("../html/textarea");

//panel
var BSSPanel=require("../panel/panel");
var Header=require("../panel/header");
var QueryPanel = require("../panel/query-panel");
var ToolBarPanel = require("../panel/tool-panel");
var TablePanel = require("../panel/table-panel");


//message
var MessageBox = require("../message/messageBox");
var Modal = require("../message/modal");

//tree
var Treeview =  require("../tree/treeview");
var TreeWithTable = require("../tree/treeWithTable");

//TencentMap
var TencentMap = require("../tencentMap/map");


//echarts
var ZRender = require('../../static/vendors/zrender/index');
var ECharts = require('../echarts/echarts');
var BasicLine = require('../echarts/components/line/BasicLine');
var StackedLine = require('../echarts/components/line/StackedLine');
var BasicArea = require('../echarts/components/line/BasicArea');
var StackedArea = require('../echarts/components/line/StackedArea');
var IrregularLine = require('../echarts/components/line/IrregularLine');
var BasicColumn = require('../echarts/components/bar/BasicColumn');
var StackedColumn = require('../echarts/components/bar/StackedColumn');
var BasicPie = require('../echarts/components/pie/BasicPie');
var WordCloud = require('../echarts/components/wordCloud/WordCloud');

//resources
var Uploader = require("../resources/uploader");

//ETL
var FlowMaker = require("../etl/flowMaker");

//layout
var Row = require("../layout/row");


//code
//var Highlight = require("../code/highlight");


//import ES6 patch ,no longer use, use babel-loader instead
//require("../utils/webpackPatch");
//
//
//



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



var tree1Data = {
	treedata: [
       {
           "name": "Top Level",
           "uid": "uid1",
           "children": [
               {
                   "name": "Level 2: A",
                   "uid": "uid2",
                   "children": [
                       {
                           "name": "Son of A"
                       },
                       {
                           "name": "Daughter of A"
                       }
                   ]
               },
               {
                   "name": "Level 2: B"
               },
               {
                   "name": "Level 2: C",
                   "children": [
                       {
                           "name": "Son of C"
                       }
                   ]
               }
           ]
       }
   ]
}


  	var infoCSS = {
  		"marginTop":"10px",
  		"marginBottom":"10px",
  		"color":"blue"
  	};

  	var tableProps = {
        title:['选项','标题1','标题2','标题3'],
        jsonKey:['id','t1','t2','t3'],
        data:[{id:1,
          t1:'测试1',
          t2:'测试2',
          t3:'测试3'},
          {id:2,
          t1:'测试1',
          t2:'测试2',
          t3:'测试3'},
          {id:3,
          t1:'测试1',
          t2:'测试2',
          t3:'测试3'}],
        doList:doList,
        pageSize:10,
        offset:1, //page:this.state.offset
        totalRows:100,
        checkType:"none",
    }

    var markers =  [{x:116,y:30,description:'This is a description'},{x:117,y:31,description:'This is a description'}];

    function doList(currentPage,pageSize){
        console.log(currentPage,pageSize);
    }


/**
 * 基本组件演示, 请看源码.
 * ```
 * 示例:
 * <Demo />
 * ```
 * @class Demo
 */
var Demo = React.createClass({
	displayName:'Demo',

	getInitialState:function(){
		return {
		    canSubmit:false,
            textareaValue:"123",
            flowMakerRestore:"{states: {start:{type:'start',text:{text:''},attr:{x:132,y:110,width:50,height:50},props:{layout:{value:'-48,110,50,50'},name:{value:'start'}}},end:{type:'end',text:{text:''},attr:{x:756,y:9,width:50,height:50},props:{layout:{value:'576,9,50,50'},name:{value:'end'}}},rect3:{type:'task',text:{text:'rect3'},attr:{x:572,y:106,width:100,height:50},props:{commandName:{value:'Test1Data'},displayName:{value:'rect3'},eventName:{value:'DataTest1ed'},input:{value:'{#1t11#1:#1t11params#1}'},layout:{value:'392,106,100,50'},name:{value:'rect3'}}},rect4:{type:'task',text:{text:'rect4'},attr:{x:224,y:106,width:100,height:50},props:{commandName:{value:'Test1Data'},displayName:{value:'rect4'},eventName:{value:'DataTest1ed'},input:{value:'{#1t1#1:#1t1params#1}'},layout:{value:'44,106,100,50'},name:{value:'rect4'}}},rect5:{type:'task',text:{text:'rect5'},attr:{x:405,y:112,width:100,height:50},props:{commandName:{value:'Test2Data'},displayName:{value:'rect5'},eventName:{value:'DataTest2ed'},input:{value:'{#1t2#1:#1t2pram#1}'},layout:{value:'225,112,100,50'},name:{value:'rect5'}}},rect6:{type:'task',text:{text:'rect6'},attr:{x:725,y:101,width:100,height:50},props:{commandName:{value:'Test2Data'},displayName:{value:'rect6'},eventName:{value:'DataTest2ed'},input:{value:'{#1t22#1:#1t22params#1}'},layout:{value:'545,101,100,50'},name:{value:'rect6'}}}},paths:{path7:{from:'start',to:'rect4', dots:[],text:{text:'p1'},textPos:{x:0,y:-10}, props:{name:{value:'path7'},expr:{value:''}}},path10:{from:'rect3',to:'rect6', dots:[],text:{text:'p4'},textPos:{x:0,y:-10}, props:{name:{value:'path10'},expr:{value:''}}},path8:{from:'rect4',to:'rect5', dots:[],text:{text:'p2'},textPos:{x:0,y:-10}, props:{name:{value:'path8'},expr:{value:''}}},path9:{from:'rect5',to:'rect3', dots:[],text:{text:'p3'},textPos:{x:0,y:-10}, props:{name:{value:'path9'},expr:{value:''}}},path11:{from:'rect6',to:'end', dots:[],text:{text:'p5'},textPos:{x:0,y:-10}, props:{name:{value:'path11'},expr:{value:''}}}},props:{props:{name:{name:'name',value:'1201'},displayName:{name:'displayName',value:'1201name'},processParams:{name:'processParams',value:'{#11201templet#1:#1parama#1}'},expireTime:{name:'expireTime',value:''},instanceUrl:{name:'instanceUrl',value:''},instanceNoClass:{name:'instanceNoClass',value:''}}}}"
		}
	},

	submitAction:function(param){
		console.log(param);
	},

	doAction:function(){
		alert("doAction");
	},

	checkboxClick:function(){
		alert("checkboxClick");
	},

	onSelectAction:function(){
		alert("onSelectAction");
	},

	doChangeAction:function(param){
		alert("doChangeAction"+param);
	},

	treeTableCheck:function(){
		alert("treeTableCheck");
	},
    validTurn: function(bool){
        console.log(bool);
    },
    AddHandler: function(params){
        console.log(params);
    },
    changeTa : function(){
        this.setState({textareaValue:"345"});
    },
    FlowMakerSave : function(data){
        alert(data);
        console.log(data);
    },
    changeFlow : function(){
        this.setState({"flowMakerRestore":"{states: {start:{type:'start',text:{text:''},attr:{x:197,y:67,width:50,height:50},props:{layout:{value:'17,67,50,50'},name:{value:'start'}}},rect2:{type:'task',text:{text:'rect222222222222222'},attr:{x:336,y:54,width:100,height:50},props:{commandName:{value:'Test1Data'},displayName:{value:'rect2'},eventName:{value:'DataTest1ed'},input:{value:'{#1123#1:#1t1#1}'},layout:{value:'156,54,100,50'},name:{value:'rect2'}}},rect3:{type:'task',text:{text:'rect3'},attr:{x:525,y:68,width:100,height:50},props:{commandName:{value:'Test1Data'},displayName:{value:'rect3'},eventName:{value:'DataTest2ed'},input:{value:'{#1234#1:#123424#1}'},layout:{value:'345,68,100,50'},name:{value:'rect3'}}},end:{type:'end',text:{text:''},attr:{x:691,y:83,width:50,height:50},props:{layout:{value:'511,83,50,50'},name:{value:'end'}}}},paths:{path5:{from:'start',to:'rect2', dots:[],text:{text:'p1'},textPos:{x:0,y:-10}, props:{name:{value:'path5'},expr:{value:''}}},path6:{from:'rect2',to:'rect3', dots:[],text:{text:'p2'},textPos:{x:0,y:-10}, props:{name:{value:'path6'},expr:{value:''}}},path7:{from:'rect3',to:'end', dots:[],text:{text:'p3'},textPos:{x:0,y:-10}, props:{name:{value:'path7'},expr:{value:''}}}},props:{props:{name:{name:'name',value:'test'},displayName:{name:'displayName',value:'testname'},expireTime:{name:'expireTime',value:''},instanceUrl:{name:'instanceUrl',value:''},instanceNoClass:{name:'instanceNoClass',value:''}}}}"})
    },
  	render:function(){
        var formValid = {
            type:"noEmpty",
           // maxlength:5,
            errorMsg : "不能为空",
            handleResult:this.validTurn,
        };
        var flowMakerRestore = this.state.flowMakerRestore;

	    return (
	        <div style={{padding:"10px 20px"}}>
	            <center><h1>Mimiron基础组件库</h1></center>
	            <Tabs>
	              	<Tab title="panel" id="panel" isActive={true} >

		              	<div style={infoCSS}>Header</div>
		              	<Header pageTitle = "标题" />
		              	<div style={infoCSS}>BSSPanel</div>
		              	<BSSPanel pageTitle = "示例Panel"></BSSPanel>
						<div style={infoCSS}>TablePanel</div>
						<TablePanel {...tableProps}/>
						<div style={infoCSS}>ToolBarPanel</div>
					 	<ToolBarPanel>
							<Button btnName="增删查改"/>
						</ToolBarPanel>
		              	<div style={infoCSS}>QueryPanel</div>
		              	<QueryPanel submitAction={null} jsonFormat={true} okButtonName="查询">
					     	<Input disName=" 示范输入:" name="demoInput" name="input1"/>
					 	</QueryPanel>
	              	</Tab>

                    <Tab title="row" id="row">
                        <div style={infoCSS}>Row</div>
                        <Row itemPerLine="3">
                            <Input disName="输入框1" cssClass="size-block"/>
                            <Input disName="输入框111" cssClass="size-block"/>
                            <Input disName="输入框11111" cssClass="size-block"/>
                            <Input disName="输入框1111111" cssClass="size-block"/>
                            <Input disName="输入框111111111" cssClass="size-block"/>
                            <Input disName="输入框11111111111" cssClass="size-block"/>
                        </Row>
                    </Tab>

	              	<Tab title="html" id="html">

	                  	<div style={infoCSS}>BSSForm</div>
	                  	<BSSForm submitAction={this.submitAction} jsonFormat={true} disabledName="不可用" disabledSubmitBtn={false} okButtonName="保存">
                            <Input disName="输入" name="input2" />
                        </BSSForm>
						
						<div style={infoCSS}>Button</div>
	                  	<Button btnName="增加"  disabledName="正在请求......" doAction={this.doAction}/>

	                  	<div style={infoCSS}>CascadeSelect</div>
	                  	<CascadeSelect firstDisName="一级" secondDisName="二级"  firsDefaultValue="2" data={[{value:'1',text:'显示2'},{value:'2',text:'显示1'}]} url="api/test/autoselect"  />


						<div style={infoCSS}>CheckboxGroup & Checkbox</div>
						<CheckboxGroup name="demo-checkboxgroup" inline={false} multi={true}>
					       <Checkbox id="1" dispName="checkbox1" value="1" onClick={this.checkboxClick}/>
					       <Checkbox id="2" dispName="checkbox2" value="2" onClick={this.checkboxClick}/>
					    </CheckboxGroup>

						

						<div style={infoCSS}>ExpressionSelect</div>
					    <ExpressionSelect onSelect={this.onSelectAction} />

						<div style={infoCSS}>Input</div>
					    <Input disName="名称" doChange={this.doChangeAction}  />

                        <div style={infoCSS}>Select</div>
                        <Select data={[{value:'1',text:'显示2'},{value:'2',text:'显示1'}]} defaultValue="2" onSelect={this.onSelectAction}/>

						<div style={infoCSS}>Textarea</div>
					    <Textarea rows="4" onChange={this.doChangeAction}>
					       {this.state.textareaValue}
					    </Textarea>
                        <Button btnName="改变textarea的值" doAction={this.changeTa}></Button>

                        <div style={infoCSS}>Form Validation</div>
                        <BSSForm checkValid={true}>
                            <Input disName="非空:  " valid={formValid}  /><br/>
                            <Input disName="Email: " valid={{type:"email",errorMsg:"请输入有效Email地址"}}  /><br/>
                        </BSSForm>
	              	</Tab>


	              	<Tab title="message" id="message">

						<div style={infoCSS}>MessageBox</div>
					    <Button btnName="触发MessageBox" doAction={MessageBox.show.bind(null,"i am title","i am message")} cssClass="btn-info" />
                        <div style={infoCSS}>Modal</div>
                        <Button btnName="触发Modal" doAction={Modal.show.bind(null,"addTableModal") } cssClass="btn-info" />
                        <Modal id="addTableModal" title="添加对话框" submitAction={this.AddHandler} jsonFormat={true} cssClass="modal-lg">
                          <div className="content-left">
                              <Input disName="id: " name="reportMetadataId"/> <br/>
                              <Input disName="源表名称: " name="resourceTableName"/> <br/>
                              <Input disName="编码: " name="reportMetadataCode"/> <br/>
                              <Input disName="名称: " name="reportMetadataName"/> <br/>
                              <Input disName="查询类型: " name="defaultQueryTypeShow"/> <br/>
                              <Input disName="枚举项: " name="selectParam"/> <br/>
                          </div>
                        </Modal> 

	              	</Tab>


	              	<Tab title="tencentMap" id="tencentMap">

						<div style={infoCSS}>TencentMap</div>
					    <TencentMap id="map1" mapData={markers} height={"300px"}  zoom={13} centerPoint={{x:116.397128,y:39.916527}}></TencentMap>

	              	</Tab>

	              	<Tab title="echarts" id="echarts" >
	              			<div style={infoCSS}>ECharts</div>
						  	<ECharts height="400px" width="800px" option={option}/>
						  	<ECharts height="400px" width="800px" option={option1}/>
						  	<div style={infoCSS}>BasicLine</div>
						    <BasicLine title="BasicLine" subtitle="advance use" height="400px" width="800px" trigger="item"  data={data} xAxisName={xAxisName} smooth={true} tooltipFormatter="Temperature : <br/>{b}km : {c}°C"/>
							<div style={infoCSS}>StackedLine</div>
							<StackedLine title="StackedLine" subtitle="advance use" height="400px" width="500px" trigger="axis"  theme="macarons" data={data2} xAxisName={xAxisName2}  />
							<StackedLine title="StackedLine" subtitle="advance use" height="400px" width="600px" theme="macarons" data={data} xAxisName={xAxisName} smooth={true}/>
							<div style={infoCSS}>BasicArea</div>
							<BasicArea title="BasicArea" subtitle="BasicArea" height="400px" width="800px" data={data2} xAxisName={xAxisName2} smooth={true}/>
							<div style={infoCSS}>StackedArea</div>
							<StackedArea title="StackedArea" subtitle="StackedArea" height="400px" width="800px" data={data2} xAxisName={xAxisName2} smooth={true}/>
							<div style={infoCSS}>IrregularLine</div>
							<IrregularLine title="IrregularLine" subtitle="IrregularLine" height="400px" width="800px" data={data3} smooth={true} />
							<div style={infoCSS}>BasicColumn</div>
							<BasicColumn title="BasicColumn" subtitle="BasicColumn" height="400px" width="800px" data={data2} xAxisName={xAxisName2} smooth={true}/>
							<div style={infoCSS}>StackedColumn</div>
							<StackedColumn title="StackedColumn" subtitle="StackedColumn" height="400px" width="800px" trigger="axis" data={data2} xAxisName={xAxisName2} smooth={true}/>
							<div style={infoCSS}>BasicPie</div>
							<BasicPie title="StackedColumn" subtitle="StackedColumn" height="400px" width="800px"  data={pieData} />
							<div style={infoCSS}>WordCloud</div>
							<WordCloud title="WordCloud" subtitle="WordCloud" height="400px" width="800px"  data={wordCloudData} />
	              	</Tab>


	              	<Tab title="tree" id="tree" >
	      				<div style={infoCSS}>Treeview</div>
   						<Treeview data={tree1Data} selectType="checkbox" expandLevel={3}/>
	      				<div style={infoCSS}>TreeWithTable</div>
   						<TreeWithTable treeCheck={this.treeTableCheck} />
	              	</Tab>

                    <Tab title="resources" id="resources" >
                        <Uploader />
                    </Tab>

                    <Tab title="ETL" id="ETL">
                        <div style={infoCSS}>FlowMaker</div>
                        <Button btnName="流程图生成器" doAction={Modal.show.bind(null,"flowMakerModal")} cssClass="btn-info" />
                        <Modal id="flowMakerModal" title="编辑流程图" submitAction={this.AddHandler} jsonFormat={true} cssClass="modal-lg" hideDefaultButton={true} dragable={false}>
                            <FlowMaker elements="all" onSave={this.FlowMakerSave} restore={flowMakerRestore} />
                            <Button btnName="修改流程图数据" doAction={this.changeFlow} />
                        </Modal> 
                        
                    </Tab>

	            </Tabs>

	        </div>
	        
	    );
	  }
});

module.exports=Demo;

