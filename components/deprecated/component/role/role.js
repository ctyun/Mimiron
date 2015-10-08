/**
 * Created by Administrator on 2015/5/7.
 */
var React = require('react/addons');
var components = require('../../vendors/components');
var SideBar = components.SideBar;
var TopBar = components.TopBar;
var Header = components.Header;
var PortletHeader = components.PortletHeader;
var DataGrid = components.DataGrid;
var SearchPane = components.SearchPane;
var ActionButtonSearch = components.ActionButtonSearch;
var ActionButtonAdd = components.ActionButtonAdd;
var Api = require('../../api/role');
var Action = require('../../action/role');
var Store = require('../../store/role');
var RoleTable = require('./role-table');
var SearchRole = require('./role-search');
var AddModel = require('./role-add');

function getRoleState(){
   return {
       pageSize: Store.getCurrentPageSize(),
       pageSizes: Store.getPageSize(),
       menuList : Store.getMenus(),
       roles : Store.getRoles(),
       limits : Store.getLimits(),
       limitResult : Store.getLimitResult(),
       searchPaneVisible : false,
   }
};

var Role = React.createClass({
    getInitialState : function(){
        var obj = getRoleState();
        obj.query = {};
        return obj;
    },
    componentDidMount: function() {
        Action.receiveAllRole({});
        Store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },
    render : function(){
        return <div>
            <Header pageTitle="角色管理" />
            <div className="page-content">
                <SearchPane visible={this.state.searchPaneVisible}>
                    <SearchRole onChange={this._onSearchChange} onSubmit={this._search}/>
                </SearchPane>

                <div className="portlet portlet-white">
                    <PortletHeader title="角色列表">
                        <AddModel />
                        <ActionButtonSearch onClick={this._toggleSearch}>搜索</ActionButtonSearch>
                    </PortletHeader>
                    <DataGrid changePageSize={this._onChangePageSize} pageSize={this.state.pageSize} pageSizes={this.state.pageSizes} changePageNo={this._onChangePageNo}>
                        <RoleTable roles = {this.state.roles} limits = {this.state.limits} limitResult={this.state.limitResult}/>
                    </DataGrid>
                </div>
            </div>
        </div>
    },
    _onChange : function(){
        this.setState(getRoleState());
    },
    _onChangePageSize: function(pagesize) {
        Action.changePageSize(pagesize);
    },
    _onChangePageNo: function(eventKey, href, target){
        var pageNo = target;
        if(pageNo === 'left'&&Store.getPageNo() > 1){
            pageNo = Store.getPageNo()-1;
        }else if(pageNo === 'right'&&Store.getPageNo() < Store.getPageCount()){
            pageNo = Store.getPageNo()+1;
        }else{
            return false;
        }
        Action.changePageNo(pageNo,this.state.query);
    },
    _toggleSearch : function(){
        this.setState({searchPaneVisible:!this.state.searchPaneVisible});
    },
    _onSearchChange: function(e) {
        var query = this.state.query;
        query[e.target.id.slice(6)] = e.target.value;
        this.setState({query: query});
    },
    _search : function(e){
        Action.search(this.state.query);
        e.preventDefault();
    },
    _add : function(){

    }
});

module.exports = Role;
