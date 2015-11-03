/**
 * Created by Administrator on 2015/4/17.
 */
var React = require('react/addons');
var _ = require('underscore');
var Tree = require('./report-treeView');
var Top = require('./report-top');
var Mid = require('./report-mid');
var Bot = require('./report-bottom');
var Action = require('../../action/report');
var Store = require('../../store/report');
var Api = require('../../api/report');
var $ = require('jquery');
var PreView = require('./report-preview');
var _data = require('../../constants/sidebar-menu');
var OADispatcher = require('../../dispatchers/oa-dispatcher');
var ActionType = require('../../constants/action-types');
var Add = require('./report-add');
var Manage = require('./report-manage');
var ActionUtils = require('../../utils/action-utils');

var Detail = require('./report-detail');
var Modal=require("../message/modal");

var MsgBox=require("../message/messageBox");

var Debug = require("../../common/debug");

function getHomeStates(){
    return {
        tds : Store.getTds(),
        modes : [],  //好像是记录了修改的元数据
        details : Store.getDetails(),
        mid : Store.getMid(),
        top : Store.getTop(),
        data : Store.getModeList(),
        _controlList : Store.getControlList(),
        currentList: Store.getCurrentConfigList()
    }
}

var Report = React.createClass({
    getInitialState : function(){
        var state = {
            showDetails : false,
            isPreView : false,
            nodeId : '',
            isModalOpen : false,
            deleteConfirm: false,
            tds : [],
            modes : [],
            details : [],
            content:{},
            mid : [],
            top : [],
            data : [],
            modelName:'',//模板名称,
            reportModelId:null,
            _controlList : [],
            currentList: [],
            totalRows:0,
            pageSize:10,
            pageNo:1,
            totalPageNo: 0,
            reportModelName:null,
            resourceTableName:null
        };
      //  var obj = _.extend({}, state,getHomeStates());
        return state;
    },
    componentDidMount: function() {
        this._fetch();
        this._onSelectList("default");
       // Store.addChangeListener(this._onChange);
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (prevProps.params.name !== this.props.params.name || prevProps.params.id !== this.props.params.id) {
            //this._fetch();
            location=location; //如果切换了页面, 刷新
        }
    },

    componentWillUnmount: function() {
       // Store.removeChangeListener(this._onChange);
    },
    render : function(){

        var paramName = this.props.params.name;
        var flag = this.state.isPreView;
        var show = '';
        if(flag){
            show =  <PreView top={this.state.top} mid={this.state.mid} closePreview ={this._handleView} save={this._save} tds = {this.state.tds}/>;
        }
        var add = "";
        if(this.state.isModalOpen){
            add = <Add onRequestHide={this._handleModalVisible} moduleName={this.state.modelName} add = {this._add}/>;
        }
        var bottom = this.state.showDetails ? <Bot content = {this.state.details}></Bot> : '';
        return (
            paramName === 'config'
            ? <div className="page-content">
                <div className="panel">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-4">
                                <button className='btn btn-danger' onClick={Store.getReportModelProps() ? this._add : this._save} style={{"position":"absolute","margin-left":"80px"}}>保存</button>
                                <Tree addControl = {this._addControl} params={this.props.params} data = {this.state.data} addTableName={this._addTableName} currentList={this.state.currentList} onSelectList = {this._onSelectList} options = {this.state._controlList}  hasId={this.props.params.id?true:false}/>
                            </div>
                            <div className="col-xs-4">
                                <Top content = {this.state.top} deleteModule={this._deleteModule} setDetail={this._setDetail} swap={this._swap.bind(null,"top")}/>
                            </div>
                            <div className="col-xs-4">
                                <Mid content = {this.state.mid} deleteModule={this._deleteModule} setDetail={this._setDetail} swap={this._swap.bind(null,"mid")}/> 
                            </div>
                            {bottom}
                        </div>
                    </div>
                </div>
                {!flag ?'':show}
                {this.state.isModalOpen ? add : ""}
                <Detail content={this.state.content} modifyMode={this.modifyMode}/>

                </div>
            : paramName === 'manage'
            ? <Manage queryAction={this.queryAction} resourceTableName={this.state.resourceTableName} reportModelName={this.state.reportModelName} doChangePageSize={this.onChangePageSize} doChangePageNo={this.onChangePageNo} totalPageNo={this.state.totalPageNo} pageNo={this.state.pageNo} contents={this.state.reports} addMenu={this._addMenu} deleteTemplate={this._delete}/>
            : <span>blank</span>
        );

    },

    _fetch: function() {
        var self = this;
        var paramName = this.props.params.name;
        var paramId = this.props.params.id;
        if (paramName && paramName === 'config' && paramId) {
            Api.queryControlList().then(function(data){
               // Action.queryControlList(data);
                self.setState({_controlList:data});
                Api.reqReport(paramId).then(function(result) {
                    // 临时
                    // 生成id
                    function guid() {
                        function s4() {
                          return Math.floor((1 + Math.random()) * 0x10000)
                            .toString(16)
                            .substring(1);
                        }
                        var id = s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                          s4() + '-' + s4() + s4() + s4();
                        console.debug("WARNING!! one metadata has no id, so created as :"+id);
                        return id

                    }

                    var top = result.topList.map(function(item) {
                        item.reportMetadataId = item.reportMetadataId ? item.reportMetadataId : guid(); // ...
                        item.reportMetadataName = item.displayName;
                        item.location = 'top';
                        item.queryType = item.queryType;
                        return item;
                    });

                    var mid = result.midList.map(function(item) {
                        item.reportMetadataId = item.reportMetadataId ? item.reportMetadataId : guid(); // ...
                        item.reportMetadataName = item.displayName;
                        item.location = 'mid';
                        item.queryType = item.queryType;
                        return item;
                    });


                    // 取回左侧菜单项
                    //Action.getControlList(result.reportModelMetaBO.resourceTableName);
                    var tableName=result.reportModelMetaBO.resourceTableName;
                    Api.getControlList(tableName).then(function(data){
                        self.setState({
                            currentList:tableName,
                            data:data
                        });
                    });
                    // 把报表名称存到 Store 里
                    //Action.receiveReportModelProps(result.reportModelMetaBO.reportModelName, result.reportModelMetaBO.reportModelId);
                    // 批量添加到top && mid
                    //Action.addMultipleModules(top, 'top');
                   // Action.addMultipleModules(mid, 'mid');
                    self.setState({
                        top:top,
                        mid:mid,
                        modelName:result.reportModelMetaBO.reportModelName,
                        reportModelId:result.reportModelMetaBO.reportModelId
                    });
                });
            });
        } else if (paramName && paramName === 'config') {
            Api.queryControlList().then(function(data){
                self.setState({_controlList:data});
            }); 
        } else if (paramName && paramName === 'manage') {
            this._fetchManage();
        }
    },
/**
 * 查询操作
 */
queryAction:function(param){
 this.state.reportModelName=param.reportModelName;
 this.state.resourceTableName=param.resourceTableName;

  this._fetchManage();
},
/**
 * 处理报表模板管理列表数据
 */
_fetchManage:function(){
    var  param={
        pageNo:this.state.pageNo,
        pageSize:this.state.pageSize,
        reportModelName:this.state.reportModelName,
        resourceTableName:this.state.resourceTableName

    };
    var self=this;
    Api.queryReportModelList(param).then(function(result) {
        self.setState({ reports: result.result,totalRows:result.totalCount,totalPageNo:result.totalPages });
    });
},
    _onChange : function(){
       // var obj = getHomeStates();
        var obj = {};
        if(typeof Store.getDetails() !== 'string'){
            obj.showDetails = true;
        }else{
            obj.showDetails = false;
        }
        this.setState(obj);
    },
/**
 * 处理增加top或mid事件
 */
    _addControl : function(location, node){
        node.isPreview = false;
        var _location ='';
        var self=this;
        switch(location){
            case 1:
                _location = 'top';
                node.modeType = (undefined === node.modeType) ? "text" : node.modeType;
                node.location = _location;
                var _top=this.state.top;
                if(_.findWhere(_top,{reportMetadataId:node.reportMetadataId})===undefined){
                    _top.push(node);
                }else{
                    alert("注意, 这个查询项已经存在了");
                    _top.push(node);
                }
                self.setState({top:_top}); //增加的时候  不会出现BO
                break;
            case 2:
                _location = 'mid';
                node.modeType = 'td';
                node.location = _location;
                var _mid=this.state.mid;
                if(_.findWhere(_mid,{reportMetadataId:node.reportMetadataId})===undefined){
                    _mid.push(node);
                }
                self.setState({mid:_mid});
                break;
        }

    },
    _handleView : function(){
        var flag = this.state.isPreView;
        this.setState({isPreView : !flag});
    },
/**
 * 处理下拉列表选择事件即选择表名或取原数据
 * currentList：选择的表名
 * data：查询出的原数据
 */
    _onSelectList : function(tableName){
        var self=this;
        Api.getControlList(tableName).then(function(data){
            for(var i in data){
                if(data[i].reportMetadataName==""){
                    data[i].reportMetadataName = "("+data[i].reportMetadataCode+")";
                }
            }
            self.setState({
                currentList:tableName,
                data:data,
                modelName:"",
                reportModelId:"",
                top:[],
                mid:[]
            });


        })
    },
    //点击左上角保存(修改btn)按钮的回调函数, 仅显示modal, 实际的保存工作发生在report-add中, 最后回调了本文件中的_add方法
    _save : function(){
        var tableName = $("#selectTree").val();
        if(tableName=="default"){
            MsgBox.show("信息提示","请先选择一个表");
            return;
        };
        this.setState({isModalOpen:!this.state.isModalOpen});
    },
    _handleModalVisible : function(e){
        e.preventDefault();
       this.setState({isModalOpen:!this.state.isModalOpen});
    },
    //修改btn->Modal->确认的回调
    _add : function(e){
        e.preventDefault();
        //var modelName = Store.getReportModelProps() ? Store.getReportModelProps().name : $("#addModelName").val();
        //var tableName = $("#selectTree").val();
        //var _data = {reportModelName:modelName,resourceTableName:tableName};
        //_data = Store.getReportModelProps() ? _.extend({}, _data, { reportModelId: Store.getReportModelProps().id }) : _data;

        var modelName = $("#addModelName").val();
        var tableName = $("#selectTree").val();
        var _data = {reportModelMetaBO:{reportModelId:this.state.reportModelId,reportModelName:modelName,resourceTableName:tableName},topList:this.state.top,midList:this.state.mid};
       // _data = Store.getReportModelProps() ? _.extend({}, _data, { reportModelId: Store.getReportModelProps().id }) : _data;
       // console.debug(_data);
        Action.save(_data);
    },
    _swap: function(loc, posi, key){
        var swapItems = function(arr, index1, index2) {
            arr[index1] = arr.splice(index2, 1, arr[index1])[0];
            return arr;
        };
        if(loc=="top"&&posi=="up"){
            if(key!=0){
                this.state.top = swapItems(this.state.top, key-1, key);
            }
        }
        else if(loc=="top"&&posi=="down"){
            if(key!=this.state.top.length-1){
                this.state.top = swapItems(this.state.top, key, key+1);
            }
        }
        else if(loc=="mid"&&posi=="up"){
            if(key!=0){
                this.state.mid = swapItems(this.state.mid, key-1, key);
            }
        }
        else if(loc=="mid"&&posi=="down"){
            if(key!=this.state.mid.length-1){
                this.state.mid = swapItems(this.state.mid, key, key+1);
            }
        }
        this.forceUpdate();
    },
    _delete:function(value){

        var self=this;
        Api.deleteTemplateData(value).then(function(r){

            if(r){
                MsgBox.show("提示","删除成功");
                var  param={
                    pageNo:self.state.pageNo,
                    pageSize:self.state.pageSize,
                    reportModelName:self.state.reportModelName,
                    resourceTableName:self.state.resourceTableName
                };
                Api.queryReportModelList(param).then(function(result) {
                    self.setState({ reports: result.result,totalRows:result.totalCount,totalPageNo:result.totalPages });
                 });
            }else{

                MsgBox.show("提示","删除失败");
            }
            
        });
    },
    _addTableName:function(tableName,displayName){
        var self=this;
        Api.addTableName(tableName,displayName).then(function(r){
            if(r){

                MsgBox.show("提示","增加成功");
                Api.queryControlList().then(function(data){
                    // Action.queryControlList(data);
                    self.setState({_controlList:data});
                });
            }else{
                MsgBox.show("提示","增加失败");

            }

        });
      },
      _addMenu:function(id,menuName){
        Action.addMenu(id,menuName);
      },
/**
 * 删除top
 */
    _deleteModule:function(data){
        if(data.location=='top') {
            var _top = this.state.top;
            for (var i = 0; i < _top.length; i++) {
                if (_.isMatch(_top[i], {reportMetadataId: data.reportMetadataId})) {
                    _top.splice(i, 1);
                    break;
                }
            }
            this.setState({top:_top});
        }else{
            var _mid = this.state.mid;
            for (var i = 0; i < _mid.length; i++) {
                if (_.isMatch(_mid[i], {reportMetadataId: data.reportMetadataId})) {
                    _mid.splice(i, 1);
                    break;
                }
            }
            this.setState({mid:_mid});
        }

    },
//点击元数据的回调函数
_setDetail:function(node){
    this.setState({content:node});
    Modal.show("addReportDetailModal"); //? 这个Modal不知道哪里定义的
},
/**
 * 修改详细属性, 关闭Modal后调用的函数
 */
modifyMode:function(node){
    var modes=this.state.modes;
    modes.push(node);
    this.state.modes=modes;
    this.forceUpdate();
    //在这里设置default value, name等信息在report-detail中设置
},
/**
 * 设置分页大小
 */
onChangePageSize:function(size){
    size=Number(size);
    this.state.pageSize=size;
    this._fetchManage();
},
/**
 * 上一页或下一页
 */
onChangePageNo:function(num){

    this.state.pageNo=num;
    this._fetchManage();
}
});

module.exports = Report;
