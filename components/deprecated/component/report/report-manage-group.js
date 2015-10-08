/**
 * Created by czdujb on 2015/09/09.
 */
var React = require("react/addons");
var AjaxUtils = require("../../utils/ajax");
var PageButton=require("../page/page");
var Grid=require("../page/grid");
var Button=require("../button/button");
var Bootstrap = require('react-bootstrap');
var Label=Bootstrap.Label;
var MessageBox = require("../message/messageBox");
var Modal=require("../message/modal");
var Select=require("../html/select");
var components = require('../../vendors/components');
var CommonEvent=require("../../utils/react-common-action");
var CommonMethod=require("../../utils/react-common-method");
var Header = components.Header;
var PortletHeader = components.PortletHeader;
var ExpressionSelect=require("../html/expression");
var Autocomplete=require("../html/autocomplete");
var Input = require("../html/input");
var Ajax = require("../../utils/ajax");
var BSSPanel=require("../panel/panel");
var QueryPanel=require("../panel/query-panel");
var TablePanel=require("../panel/table-panel");
var ToolBarPanel=require("../panel/tool-panel");
var BSSForm = require("../html/form");
var Debug = require("../../common/debug.js");
var SearchPane = components.SearchPane;

var Panel = Bootstrap.Panel;


var URL={

    "QUERY_REPORT_GROUP_URL":"/api/report/getReportGroupByPage",
    "QUERY_REPORT_MODEL_LIST_URL":"/api/report/queryReportModelList",
    "ADD_REPORT_GROUP_URL":"/api/report/createReportGroup",
    "DELETE_REPORT_GROUP_URL":"/api/report/deleteReportGroup",
    "QUERY_REPORT_GROUP_BY_GROUP_ID_URL":"/api/report/getReportGroup/",
    "UPDATE_REPORT_GROUP_URL":"/api/report/modifyReportGroup"
};

var ManageReportGroup = React.createClass({
    mixins: [CommonEvent,CommonMethod],

    getInitialState:function(){
        return {
            title:['选择','组名','创建人','创建时间','更新时间'],
            jsonKey:['groupId','groupName','createUserName','createDate','updateDate'],
            selectReportModelData:[],
            allReportModelList:[],
            pageSize:10,
            totalRows:100,
            offset:1,
            data:[],
            editGroupId:"",
            editGroupName:"",

            manageReportModelPanelTitle:['选择','数据源表','报表模板名称'],
            manageReportModelPaneljsonKey:['reportModelId','resourceTableName','reportModelName'],
            manageReportModelPanelData:[],
        }
    },


    componentDidMount: function() {

        //获得报表组数据
        this.queryReportGroup();

    },



    //查询报表组
    queryReportGroup:function(){
        var param = this.getParamValue();
        this.setState({
            data:[],
            searchName:param.groupName
        });
        param["pageSize"] = this.state.pageSize;

        AjaxUtils.postForm(URL["QUERY_REPORT_GROUP_URL"],param,this.updateTable);
    },

    //更新表格
    updateTable : function(d){
        this.setState({
             data: d.data.result
            ,totalRows: d.data.totalCount
            ,page: d.data.pageNo
        });
    },

    //分页
    doList : function(currentPage,pageSize){

        if(currentPage && pageSize){
            this.setState({offset:currentPage,pageSize:pageSize})
        }else if(currentPage){
            this.setState({offset:currentPage})
        }
        var param = this.getParamValue();
        param = this.selectCommonParam(["groupName"]);

        param["pageNo"] = currentPage;
        if(pageSize){
            param["pageSize"] = pageSize;
        }else{
            param["pageSize"] = this.state.pageSize;
        }
        this.setState({data:[]});
        Grid.cleanData();
        Ajax.postForm(URL["QUERY_REPORT_GROUP_URL"],param,this.updateTable);
    },


    //go to add reprot group panel
    gotoAddReportGroupPanel:function(){

        //query report model detail
        this.queryReportModelList();

        //清除表格都选数据
        Grid.cleanData();

        Modal.show("addTableModal");

    },

    queryReportModelList:function(uid){

        AjaxUtils.get(URL["QUERY_REPORT_MODEL_LIST_URL"],this.updateReportModelListTable);

    },
    //update report model detail table
    updateReportModelListTable : function(d) {

        var allReportModelList = [];


        d.map(function(reprotModel) {


            var tmpReportModel = {};
            if(reprotModel){

                tmpReportModel["reportModelId"] = reprotModel.reportModelId;
                tmpReportModel["reportModelName"] = reprotModel.reportModelName;
                tmpReportModel["resourceTableName"] = reprotModel.resourceTableName;
            }


            allReportModelList.push(tmpReportModel);
        })


        this.setState({
            manageReportModelPanelData:allReportModelList,
            selectReportModelData:[]
        });

 
    },
/*
    queryReportModelList:function(uid){

        AjaxUtils.get(URL["QUERY_REPORT_MODEL_LIST_URL"],this.updateReportModelListTable);

    },
    //update report model detail table
    updateReportModelListTable : function(d) {

        var allReportModelList = [];

        d.map(function(reprotModel) {

            var tmpReportModel = {};
            tmpReportModel["value"] = reprotModel.reportModelId;
            tmpReportModel["text"] = reprotModel.reportModelName;

            allReportModelList.push(tmpReportModel);
        })

        this.setState({
            selectReportModelData:[],
            allReportModelList:allReportModelList
        });

    },*/



    _onModelExitClick:function(){
        //清除表格都选数据
        Grid.cleanData();
    },


    //添加报表组
    addReportGroup:function(params){

        if(!params.addGroupName){
            MessageBox.show("信息","报表组名称不能为空！");
            return;
        }

        //获得勾选的值
        var checkedValues = Grid.getCheckedValue();

        Debug.log(checkedValues,"checkedValues");
        
        //阻止按钮再次给点击提交
        this.setSubmitDisabled(true);

        var param = {
            groupName:params.addGroupName,
            reportModelIdList:checkedValues
        }

        var self = this;
        AjaxUtils.post(URL["ADD_REPORT_GROUP_URL"],param,function(d){

            //清除表格数据
            Grid.cleanData();

            self.setSubmitDisabled(false);
            if(d.state == 0){
                MessageBox.show("信息","新增报表组操作成功！");
                Modal.hide("addTableModal");
                self.queryReportGroup();

            }else{
                MessageBox.show("信息","新增报表组操作失败！");
            }

        });


    },


    delReportGroup:function(){

        var checkedValues = Grid.getCheckedValue();

        if(checkedValues.length == 0){
            MessageBox.show("信息","请选择要删除的数据！");
            return;
        }else if(checkedValues.length > 1){
            MessageBox.show("信息","每次只能删除一行数据！");
        }else{

            var checkedValues_str = checkedValues.join(",");
            var self = this;

            AjaxUtils.postForm(URL["DELETE_REPORT_GROUP_URL"],{groupId:checkedValues_str},function(d){

                 if(d.state == 0){

                    Grid.cleanData();
                    MessageBox.show("信息","删除报表组操作成功！");
                    self.queryReportGroup();

                }else{

                    MessageBox.show("信息","删除报表组操作失败！");

                }

            });

        }
    },



    //进入编辑页面
    gotoEditReportGroupPanel:function(){

        var checkedValues = Grid.getCheckedValue();

        if(checkedValues.length == 0){
            MessageBox.show("信息","请选择要修改的数据！");

        }else if(checkedValues.length > 1){
            MessageBox.show("信息","每次只能修改一行数据！");
        }else{

             //query report model detail
            this.queryReportModelList();

            //从已取出来的数据中，查询选中行的数据
            var data = this.state.data;
            for(var i = 0; i < data.length; i++){
                if(checkedValues == data[i].groupId){

                    this.setState({
                        selectReportModelData:[],
                        editGroupId:data[i].groupId,
                        editGroupName:data[i].groupName
                    });

                    var self = this;
                    AjaxUtils.get(URL["QUERY_REPORT_GROUP_BY_GROUP_ID_URL"]+data[i].groupId,function(d){

                        var reportModelClientBO = d.data.reportModelClientBO;
                        var selectReportModelData = [];
                        reportModelClientBO.map(function(reportModel) {
                            selectReportModelData.push(reportModel.reportModelMetaBO.reportModelId);
                        });
                        Debug.log(selectReportModelData,"selectReportModelData");
                        self.setState({
                            selectReportModelData:selectReportModelData
                        });


                    });

                    break;
                }
            }

            Modal.show("editTableModal");

        }
    },



    //编辑报表组
    editReportGroup:function(params){
        if(!params.editGroupName){
            MessageBox.show("信息","报表组名称不能为空！");
            return;
        }

        //获得勾选的值
        var checkedValues = Grid.getCheckedValue();

        Debug.log(checkedValues,"editReportGroup  checkedValues");

        var param = {
            groupId:this.state.editGroupId,
            groupName:params.editGroupName,
            reportModelIdList:checkedValues
        }

        var self = this;
        this.setSubmitDisabled(true);

        AjaxUtils.post(URL["UPDATE_REPORT_GROUP_URL"],param,function(d){

            self.setSubmitDisabled(false);
            if(d.state == 0){

                Grid.cleanData();
                MessageBox.show("信息","修改用户操作成功！");
                Modal.hide("editTableModal");
                self.queryReportGroup();
            }else{

                MessageBox.show("信息","修改用户操作失败！");

            }

        });


    },



    render:function(){

        var tableProps = {
            title:this.state.title,
            jsonKey:this.state.jsonKey,
            data:this.state.data,
            doList:this.doList,
            pageSize:this.state.pageSize,
            offset:this.state.offset,
            totalRows:this.state.totalRows
        };


        return (
            <div>

                <BSSPanel pageTitle = "报表组管理">

                    <Panel header={"查询条件"}>
                        <Input disName="报表组名称：" name="groupName" doChange={this._doChange} value={this.state.searchName}  />
                        <hr style={{"margin-top":"5px","margin-bottom":"5px"}}/>
                        <Button btnName="查询" disabledName="正在请求......" doAction={this.queryReportGroup}/>
                        <Button btnName="添加" disabledName="正在请求......" doAction={this.gotoAddReportGroupPanel} />
                        <Button btnName="修改" disabledName="正在请求......" doAction={this.gotoEditReportGroupPanel}/>
                        <Button btnName="删除" disabledName="正在请求......" doAction={this.delReportGroup}/>
                    </Panel>



                    <TablePanel {...tableProps}/>

                    <Modal id="addTableModal" title="添加报表组" submitAction={this.addReportGroup} jsonFormat={true} disabledName="正在请求....." onExitClick={this._onModelExitClick} disabledSubmitBtn={this.state.formSubmitBtnDis} okButtonName="提交" cssClass="modal-lg">
                            <Label className="label-left" >报表组名称：</Label>
                            <br/><br/>
                            <Input name="addGroupName" placeholder='请输入组名' cssClass="input-block" />
                            <br/><br/>
                            <Label className="label-left">包含的报表：</Label>
                            <br/><br/>
                            <div style={{height:"500px",overflow: "auto"}}>
                                <Grid title={this.state.manageReportModelPanelTitle} jsonKey={this.state.manageReportModelPaneljsonKey} data={this.state.manageReportModelPanelData} />
                            </div>
                            <br/>
  
                     </Modal>


                    <Modal id="editTableModal" title="修改报表组" submitAction={this.editReportGroup} jsonFormat={true} disabledName="正在请求....." onExitClick={this._onModelExitClick} disabledSubmitBtn={this.state.formSubmitBtnDis} okButtonName="提交">
                        <Label>报表组名称：</Label>
                        <br/><br/>
                        <Input name="editGroupName" placeholder='请输入组名' cssClass="input-block" value={this.state.editGroupName} />
                        <br/><br/>
                        <Label>包含的报表：</Label>
                        <br/><br/>
                        <div style={{height:"500px",overflow: "auto"}}>
                            <Grid title={this.state.manageReportModelPanelTitle} jsonKey={this.state.manageReportModelPaneljsonKey} data={this.state.manageReportModelPanelData} checkedValues={this.state.selectReportModelData}/>
                        </div>
                        <br/>
                    </Modal>

                </BSSPanel>



            </div>
        );
    }
})


module.exports = ManageReportGroup;

