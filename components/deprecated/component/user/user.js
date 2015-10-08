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
var Api = require('../../api/user');
var Action = require('../../action/user');
var Store = require('../../store/user');
var RoleTable = require('./user-table');
//var SearchRole = require('./user-search');
var AddModel = require('./user-add');

function getUserState(){
    return {
        pageSize: Store.getCurrentPageSize(),
        pageSizes: Store.getPageSize(),
        users : Store.getUsers(),
        loading : Store.getLoading(),
        department : Store.getDepartment(),
        searchPaneVisible : false
    }
};

var User = React.createClass({
    getInitialState : function(){
        var obj = getUserState();
        obj.query = {};
        return obj;
    },
    componentDidMount: function() {
        this.setState({loading:true});
        Action.getAllDepartment();
        Action.receiveAllUsers({});
        Store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },
    render : function(){
        return <div>
            <Header pageTitle="用户管理" />
            <div className="page-content">
                <SearchPane visible={this.state.searchPaneVisible}>

                </SearchPane>

                <div className="portlet portlet-white">
                    <PortletHeader title="用户列表">
                        <AddModel department = {this.state.department}/>
                        <ActionButtonSearch onClick={this._toggleSearch}>搜索</ActionButtonSearch>
                    </PortletHeader>
                    <DataGrid changePageSize={this._onChangePageSize} pageSize={this.state.pageSize} pageSizes={this.state.pageSizes} changePageNo={this._onChangePageNo}>
                        <RoleTable users = {this.state.users} loading={this.state.loading} department={this.state.department}/>
                    </DataGrid>
                </div>
            </div>
        </div>
    },
    _onChange : function(){
        this.setState(getUserState());
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

module.exports = User;
