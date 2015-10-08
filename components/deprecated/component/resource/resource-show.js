var React = require('react/addons');
var api = require('../../api/resource');
var components = require('../../vendors/components');
var PortletHeader = components.PortletHeader;
var SearchPane = components.SearchPane;
var Api = require('../../api/resource');
var Link = require('react-router').Link;
var Page = require('../page/page');

var ResourceSearch = React.createClass({
    getInitialState: function() {
        return {
            query: this.props.query
        }
    },
    render: function() {
        return (
            <form className="grid-form">
                <div data-row-span="5">
                    <div data-field-span="2">
                       <input type="text" id="loginEmail" placeholder="请输入邮箱" />
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
            tableHeadings : ['用户名','用户邮箱','操作']
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
                return <tr key={key}>
                    <td>{item.loginName}</td>
                    <td>{item.loginEmail}</td>
                    <td>
                        <Link className="btn btn-xs btn-success" to="resourceDetail" params={{fkAccountId: fkAccountId, fkUserId: fkUserId}}><i className="fa fa-edit"></i>资源使用量详情</Link>
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
        obj.query = {pageNo: 1, pageSize: 10, query:{}};
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
                    <ResourceSearch onSearch={this._onSearch} />
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
        this.state.query.query = {loginEmail: $('#loginEmail').val()};
        var self = this;
        Api.getUsers(this.state.query).then(function(data){
            self.setState({users: data.returnObj.result,totalRows : data.returnObj.totalCount});
        });
    }
});

module.exports = Resource;
