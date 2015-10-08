/**
 * Created by chenth on 15-7-15.
 */
var React = require('react/addons');

var PageButton=require("../page/page");

var Grid=require("../page/grid");
var Button=require("../button/button");
var DatePicker=require("../html/datepicker");
var components = require('../../vendors/components');

var Header = components.Header;
var PortletHeader = components.PortletHeader;

var Select=require("../html/select");
var ExpressionSelect=require("../html/expression");

var Autocomplete=require("../html/autocomplete");
var Modal=require("../message/modal");
var MessageBox = require("../message/messageBox");
var Input = require("../html/input");

var $ = require('jquery');

var CommonEvent=require("../../utils/react-common-action");

var Treeview = require("../tree/treeview");
var TreeWithTable = require("../tree/treeWithTable");

var BSSForm = require("../html/form");
var RegUtils = require('../../utils/reg-utils');

var Tabs = require("../tabs/tabs");
var Tab = require("../tabs/tab");

var TencentMap = require("../tencentMap/map");

var Change={

    getInitialState:function(){
        return {
            param:{}
        };
    },
    componentDidMount:function(){

        //this.state.param={};
    },
    getValue:function(){
        return this.state.param;
    },
    _doChange:function(obj){
        var p=this.state.param;
        for(o in obj ){
            p[o]=obj[o];
        }
        this.state.param=p;
    },
    test:function(v){

       var v=this.state.test;
        alert(v);
    }
};

var CompDemo = React.createClass({
    mixins: [CommonEvent],
    getInitialState:function(){
    return {
        totalRows:0,
        pageSize:10,
        data:[],
        offset:1,
        dateId:'data_id',
        dis:false,
        title:['选项','标题1','标题2','标题3'],
        jsonKey:['id','t1','t2','t3'],
        selectData:[{value:'1',text:'显示2'},{value:'2',text:'显示1'}],
        treeTableData:[],
        };
    },
    componentDidMount:function(){
        var d=[{
            id:1,
            t1:'测试1',
            t2:'测试2',
            t3:'测试3'
        },{
            id:2,
            t1:'测试1',
            t2:'测试2',
            t3:'测试3'
        }];
        this.setState({
            totalRows:100,
            data:d
        });
    },

    _doList:function(data){
        this.setState({
            totalRows:100,
            pageSize:this.state.pageSize
        });

    },

    doList:function(d,pageSize){
        this.state.offset=d;
        if(pageSize){
            this.state.pageSize=pageSize;
        }
        this._doList(d);
    },
    _doAction:function(){
        alert("增加");
        this.setState({
            dis:true
        })
    },
    _doAction2:function(){
        var a=Grid.getCheckedValue();
        alert(a);
    },
    _restButton:function(){

        this.setState({
            dis:false
        })
    },
    _getDateValue:function(){
        var d=DatePicker.getDataValue();
        alert(d);
    },
    _onSelect:function(v){
      alert(v);
    },
    _onSelect2:function(v){
        alert(v);
    },
    _getAutoCompleteValue:function(){
      var v=  Autocomplete.getValue();
      alert(v);
    },
    _getValue:function(d){
    var v= this.getParamValue();
    //console.debug(v);
    alert(v);
    },
    treeCheck : function(uid,status){
        //console.log(uid+status);
    },
    treeFlod : function(uid,status){
        //console.log(uid+status);
    },
    treeTableCheck : function(uid){
        //console.log(uid);
        var data={};
        switch(uid){
            case "dummy1":
                data=[{id:"testId",value:"选项1"}];
                break;
            case "dummy2":
                data=[{id:"testId",value:"选项2"}];
                break;
        }
        this.setState({treeTableData:data});
    },
    checkAllTree: function(){
        var tmp = Treeview.getAllCheckedNodes("uid2");
        alert(tmp);
    },
    checkTree: function(){
        var tmp = Treeview.getAllCheckedNodes();
        alert(tmp);
    },

    _submitAction:function(param){
        if(param.errorObj){
            alert(param.errorObj.name+";msg="+param.errorObj.errorMsg);
        }

    },
    clickTab:function(id){
        alert(id);
    },
    render: function() {

        var d=[{
            t1:'测试1',
            t2:'测试2',
            t3:'测试3'
        }];

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
        };
        var reg=/^\d+$/g;
        return (
            <div className="main-page">
            <Header pageTitle="测试表格" />
                <div className="page-content">
                    <div className="portlet portlet-white">
                    <PortletHeader title="表格列表">
                        <Button btnName="增加" disabled={this.state.dis} disabledName="正在请求......" doAction={this._doAction} cssClass="btn-danger"/>
                        <Button btnName="修改" doAction={this._doAction2} cssClass="btn-warning"/>
                        <Button btnName="重置" doAction={this._restButton} cssClass="btn-danger"/>
                    </PortletHeader>
                    <Grid title={this.state.title} jsonKey={this.state.jsonKey} data={this.state.data}/>
                    <PageButton  doList={this.doList}  pageSize={this.state.pageSize}  page={this.state.offset} totalRows={this.state.totalRows}/>
                </div>
                <div>
                 <p>日期例子</p>
                    <DatePicker id="starttime"  name="时间" dateFormat="yy-mm"/><Button btnName="获取选择日期值" doAction={this._getDateValue}/>
                </div>

                    <div>
                    <p>Select例子</p>
                    <Select data={this.state.selectData} defaultValue="2" onSelect={this._onSelect}/>
                     <ExpressionSelect onSelect={this._onSelect2}/>
                    </div>
                    <div>
                      <Autocomplete name="动态下拉" url="/api/test/autocomplete" /><Button btnName="获取下拉列表的值" doAction={this._getAutoCompleteValue}/>
                    </div>
                    <div>
                      <Button btnName="触发模态框" doAction={Modal.show.bind(null,"myModal1")} cssClass="btn-danger"/>
                      <Modal id="myModal1" title="标题1" >
                        <span>"a form here"</span> <br/>
                        <Button btnName="关闭" doAction={Modal.hide.bind(null,"myModal1")}/>
                      </Modal>   
                      <Button btnName="触发模态框" doAction={Modal.show.bind(null,"myModal2")} cssClass="btn-danger"/>
                      <Modal id="myModal2" title="标题2" >
                        <span>"a form here"</span> <br/>
                        <Button btnName="关闭" doAction={Modal.hide.bind(null,"myModal2")}/>
                      </Modal>                
                    </div>
                    <div>
                      <Button btnName="触发MessageBox" doAction={MessageBox.show.bind(null,"i am title","i am message")} cssClass="btn-info" />
                    </div>
                    <Button btnName="测试minus" doAction={this.test}/>
                    <Input disName="t1" name="t1" doChange={this._doChange}/> <Input disName="t2" name="t2" doChange={this._doChange}/><Button btnName="get" doAction={this._getValue}/>
                    <Treeview data={tree1Data} selectType="checkbox" onElementCheck={this.treeCheck} onElementFlod={this.treeFlod} expandLevel="3"/>
                    <Button btnName="得到树的全部值" doAction={this.checkTree}/>
                    <Button btnName="得到树中uid2节点(不含)下的值" doAction={this.checkAllTree}/>
                    <hr />
                    <TreeWithTable treeCheck={this.treeTableCheck} data={this.state.treeTableData}/>
                    <BSSForm submitAction={this._submitAction} okButtonName="form验证"><Input reg={RegUtils.number} errorMsg={RegUtils.numberMsg} disName="t1" name="t1"/></BSSForm>
                    <br />
                    <div>
                        <TencentMap id="map1" mapData={markers} height={"300px"} width={"300px"} zoom={7} centerPoint={{x:116.397128,y:39.916527}}></TencentMap>
                    </div>
                    <br />
                    <div className="col-xs-4">
                        <Tabs maxHeight="300px" clickTab={this.clickTab}>
                            <Tab title="111" id="1" isActive={true}>
                                <p>456</p><p>456</p><p>456</p><p>456</p><p>456</p><p>456</p>
                            </Tab>
                            <Tab title="111" id="2">
                                <p>456</p><p>456</p><p>456</p><p>456</p><p>456</p><p>456</p>
                            </Tab>
                        </Tabs>
                    </div>

                </div>
            </div>
            );
        }
    });

module.exports = CompDemo;

