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

var Debug = require("../../common/debug");

var Show = React.createClass({
    mixins: [CommonEvent],
  getInitialState: function() {
    return {
      report: [],
      loaded: false,
       title:[],
       jsonKey:[],
       totalRows:0,
       pageSize:10,
       pageNo:1,
      searchPaneVisible: true,
      totalPageNo: 0
    }
  },
  componentDidMount: function() {
    if(this.props.params){
      this._fetch(this.props.params.id);
    }
    else{
      this._fetch(this.props.id);
    }
  },
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this._fetch(nextProps.params.id);
    }
  },
  render: function() {
      var name="";

    var table={
        title:this.state.title,
        jsonKey:this.state.jsonKey,
        data:this.state.reportData,
        doList:this._list,
        pageSize:this.state.pageSize,
        noHasCheckBox:true,
        offset:this.state.pageNo,
        totalRows:this.state.totalRows,
        isDummy:this.state.isDummy,
    };

    if(this.state.report.reportModelMetaBO){
        name=this.state.report.reportModelMetaBO.reportModelName;
    };
    return this.state.loaded ? <div className="page-content">
      <SearchPane visible={this.state.searchPaneVisible}>
        <Search query={this.state.report.topList}  onSearch={this._handleSearch} />
      </SearchPane>
      <div className="portlet portlet-white">
        <PortletHeader title={name}>
          <button className="btn btn-sm btn-success" onClick={this._export}><i className="fa fa-download"></i> 导出Excel报表 </button>
          <form id="exportReportDataForm" action="/api/report/exportExcel" method="POST" className="hidden">
            <input type="hidden" value="" name="reportModelClientBO" id="reportModelClientBO" />
          </form>
        </PortletHeader>

        <TablePanel {...table} version={2}/>
      </div>
    </div> : <Spinner />
  },
_list:function(d,pageSize){
    var _query = this.state.report;
    _query.pageNo=d;
    if(pageSize){
        _query.pageSize=pageSize;
    };
    this.setState({
        pageNo: _query.pageNo,
        pageSize:_query.pageSize
    });

    this._fetchData(_query);
},

  _fetch: function(id) {
    var self = this;
      this.state.report.midList=[];
      this.state.reportData=[];
    api.reqReport(id).then(function(result) {
        var midList=result.midList;
        var titles=[];
        var jsonKey=[];
        var isDummy = [];
        var l=midList.length;
        for(var i=0;i<l;i++){
            var obj=midList[i];
            titles.push(obj.displayName);
            jsonKey.push(obj.reportMetadataCode);
            var advancedProperties = eval('(' + obj.advancedProperties + ')');
            if(advancedProperties) //注意对旧数据的兼容
              isDummy.push(advancedProperties.isDummy);
        }
        self.setState({
        report: result,
          title:titles,
          jsonKey:jsonKey,
        _query: result,
        loaded: true,
        isDummy:isDummy,
      });
    });
  },

  _fetchData: function(query) {
    var self = this;

    api.reqReportData(query).then(function(result) {
      if (result.result && result.result.length) {

        self.setState({
          reportData: result.result,
            totalRows: result.totalCount,
            pageNo:query.pageNo,
            pageSize:query.pageSize
        });
      }
    });
  },

  _handleSearch: function(query) {

    var _query = this.state.report;
      console.debug(_query);
    _query.topList = query;
    _query.pageNo = this.state.pageNo;
    _query.pageSize = this.state.pageSize;

    this.setState({ _query: _query });
    this._fetchData(_query);
  },

  _export: function(e) {
   var param=this.getFormJsonValue("report-search-form");

    var _query = this.state._query;
     var  topList=_query.topList;
      var l=topList.length;
      var ls=[];
      for(var i=0;i<l;i++){
          var obj=topList[i];
          var name=obj.reportMetadataBO.reportMetadataCode;
          var v=param[name];
          obj.defaultValue=v;
          ls.push(obj);

      }

      _query.topList=ls;
    document.getElementById('reportModelClientBO').value = JSON.stringify(_query);
    document.getElementById('exportReportDataForm').submit();
    e.preventDefault();
  },

  _toggleSearch: function() {
    this.setState({ searchPaneVisible: !this.state.searchPaneVisible });
  },

  _onChangePageSize: function(size) {
    var _query = this.state._query;
    _query.pageSize = size;
    this.setState({ _query: _query });
    this._fetchData(_query);
  },

  _onChangePageNo: function(num) {
    var _query = this.state._query;
    _query.pageNo = num;
    this.setState({ _query: _query });
    this._fetchData(_query);
  }

});

module.exports = Show;
