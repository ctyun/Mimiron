var React = require('react/addons');
var Router = require('react-router');
var api = require('../../api/report');
var components = require('../../vendors/components');
var Spinner = components.Spinner;
var DataGrid = components.DataGrid;
var SearchPane = components.SearchPane;
var PortletHeader = components.PortletHeader;
var ActionButtonSearch = components.ActionButtonSearch;
var Search = require('./report-search');
var Table = require('./report-table');
var CommonEvent=require("../../utils/react-common-action");
var TablePanel=require("../panel/table-panel");
var Tabs = require("../../../tabs/tabs");
var Tab = require("../../../tabs/tab");
var Button = require("../../../html/button");
var Show = require("./report-show");
var Debug = require("../../common/debug");
var Ajax = require("../../../utils/ajax")

var ShowGroup = React.createClass({
  getInitialState: function() {
    return {
      tabs:[],
      tabNumber:0
    }
  },
  componentDidMount: function() {
    this._fetch(this.props.params.id);
  },
  componentWillReceiveProps: function (nextProps) {
  },
  render: function() {
    return (<div><Tabs clickTab={this.clickTab}>
            {this.state.tabs}
          </Tabs></div>);
  },
  clickTab: function(id){
     this.state.tabNumber = id;
  },
  exportAllExcel: function(e){
      //try ajax
      // Ajax.get("/api/report/exportReportGroup",{"reportModelGroupId":this.props.params.id}, function(){
      //   console.log("done");
      // });
      //try form
      $("#exportAllExcel #reportModelGroupId").val(this.props.params.id);
      $("#exportAllExcel").submit();

      e.preventDefault();
  },
  _fetch: function(id) {
    var self = this;
    var tabs=[];
    //添加导出全部按钮
    var tab=(<Tab title="[导出Excle]" id="ExportAllExcel" isActive={false}>
              <form id="exportAllExcel" action="/api/report/exportReportGroup" method="GET" className="hidden">
                  <input type="hidden" name="reportModelGroupId" id="reportModelGroupId" />
              </form>
              <Button doAction={this.exportAllExcel} cssClass="btn-success" btnName="导出所有表格" />
          </Tab>);
    tabs.push(tab);
    api.reqReportGroup(id).then(function(result) {
      if(result.data){
        var model = result.data.reportModelClientBO;
        for(var i in model){
          var tab = (<Tab title={model[i].reportModelMetaBO.reportModelName} id={i} isActive={i==0?true:false}>
            <Show id={model[i].reportModelMetaBO.reportModelId}></Show>
          </Tab>);
          tabs.push(tab);
        }
        self.setState({tabs:tabs});
      } else{
        alert("没有找到该ID对应的报表组");
        self.setState({tabs:null});
      }
      
    });
  }


});

module.exports = ShowGroup;
