var React = require('react/addons');
var api = require('../../api/resource');
var PortletHeader = require('../../vendors/components/components/portlet-header');
var SearchPane = require('../../vendors/components/components/search-pane');
var Api = require('../../api/resource');
var Page = require('../page/page');

var o = require("jquery-ui");

var ResourceSearch = React.createClass({
    getInitialState: function() {
        return {
            billPeriod: this.props.query.billPeriod
        }
    },
    componentWillReceiveProps: function(nextProps){
        if(this.props.query.billPeriod != nextProps.query.billPeriod){
            $('#billPeriod').val(nextProps.query.billPeriod);
        }
    },
    render: function() {
        $('#billPeriod').datepicker({dateFormat:'yy-mm'});
        return (
            <form className="grid-form">
                <div data-row-span="7">
                    <div data-field-span="2">
                       <input type="text" id="loginName" placeholder="请输入用户名" />
                    </div>
                    <div data-field-span="2">
                        <input type="text" id="loginEmail" placeholder="请输入用户邮箱" />
                    </div>
                    <div data-field-span="2">
                        <input type="text" id="billPeriod" readOnly='true' defaultValue={this.state.billPeriod} placeholder="请输入账期" />
                    </div>
                    <div data-field-span="1">
                        <button onClick={this._submit} className="btn btn-block btn-primary">查询</button>
                    </div>
                </div>
            </form>
            )
    },

    _submit: function(e) {
        e.preventDefault();e.stopPropagation();
        this.props.onSearch();
    }
});

var ResourceTable = React.createClass({
    getInitialState : function(){
        return {
            tableHeadings : ['用户名','用户邮箱','账期','状态','操作']
        }
    },
    render : function(){
        var users = this.props.users;
        var thead = this.state.tableHeadings.map(function(item,key){
            return <th key={key}>{item}</th>
        });
        thead = <thead>{thead}</thead>;
        var tbody = "";
        if(users&&users.length>0){
            tbody = users.map(function(item,key){
                var fkAccountId = item.fkAccountId;
                var fkUserId = item.fkUserId;
                var billPeriod = item.billPeriod;
                var href="#/resourceDetail/"+fkAccountId+"/"+fkUserId+"/"+billPeriod;
                return <tr key={key}>
                    <td>{item.loginName}</td>
                    <td>{item.loginEmail}</td>
                    <td>{item.billPeriod}</td>
                    <td>{item.status}</td>
                    <td>
                    <a data-tohash className="btn btn-xs btn-success" href={href}><i className="fa fa-edit"></i>资源使用量详情</a>
                    </td> 
                </tr>
            });
        }

        tbody = <tbody>{tbody}</tbody>;

        return <div className="portlet portlet-white">
            <table className="table table-hover table-bordered">
                {thead}
                {tbody}
            </table>
        </div>
    }
});

var Resource = React.createClass({
    getInitialState : function(){
        var obj = {users: [], totalRows: 0};
        obj.query = {pageNo: 1, pageSize: 10, query:{billPeriod: this.getBillPeriod()}};
        obj.data = [];
        return obj;
    },
    componentDidMount: function() {
        this._onSearch();
    },
    doList:function(d, pageSize){
        this.state.query.pageNo=d;
        if(pageSize){
            this.state.query.pageSize=pageSize;
        }
        this._onSearch();
    },
    render: function() {
        return <div>
            <div className="page-content">
                <SearchPane visible="true">
                    <ResourceSearch query={this.state.query.query} onSearch={this._onSearch} />
                </SearchPane>
                <div className="portlet portlet-white">
                    <PortletHeader title="用户列表">
                    </PortletHeader>
                    <Page doList={this.doList} pageSize={this.state.query.pageSize} page={this.state.query.pageNo} totalRows={this.state.totalRows}/>
                        <ResourceTable users = {this.state.users}/>
                </div>
            </div>
        </div>
    },

    _onSearch: function(){
        this.state.query.query = {loginName: $('#loginName').val(), loginEmail: $('#loginEmail').val(), billPeriod: $('#billPeriod').val()};
        var self = this;
        Api.getUsers(this.state.query).then(function(data){
            self.setState({users: data.returnObj.result,totalRows : data.returnObj.totalCount});
        });
    },

    getBillPeriod: function(){
        var myDate = new Date();
        var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
        var month = myDate.getMonth();
        return year+"-"+(month<10?"0"+month:month);
    }
});


module.exports = Resource;