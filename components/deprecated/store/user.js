/**
 * Created by Administrator on 2015/4/14.
 */
var _ = require('underscore');
var React = require('react/addons');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var Store = require('../utils/store-utils');
var ActionType = require('../constants/action-types');
var Api = require('../api/user');
var _users = [];
var _currentPageSize = 5;
var _pageNo = 1;
var _pageCount = 1;
var PageSizes = require('../constants/constants').pagesize;
var _loading = true;
var _department = [];

var UserStore = Store.createStore({
    getInitialize : function(){
        Api.getUsers({
            pageNo : UserStore.getPageNo(),
            pageSize : UserStore.getCurrentPageSize(),
            query : {}
        }).then(function(data){
            _users = data.returnObj.result;
            _loading = false;
            UserStore.emitChange();
        })
    },
    getUsers : function(){
        return _users;
    },
    getPageSize: function() {
        return PageSizes;
    },
    getCurrentPageSize: function() {
        return _currentPageSize;
    },
    getPageNo: function() {
        return _pageNo;
    },
    getPageCount: function(){
        return _pageCount;
    },
    getLoading : function(){
        return _loading;
    },
    getDepartment : function(){
        return _department;
    }
});

function registration(payload){

    var action = payload.action;
    switch(action.type){
        case ActionType.QUERY_USER:
            _users = action.users;
            _pageCount = action.pageCount;
            _loading = false;
            break;
        case ActionType.ADD_USER :
            UserStore.getInitialize();
            break;
        case ActionType.CHANGE_PAGESIZE:
            _users = action.users;
            _currentPageSize = action.pagesize;
            _pageCount = action.pageCount;
            _loading = false;
            break;
        case ActionType.CHANGE_PAGENO:
            _users = action.users;
            _pageNo = action.pageNo;
            _loading = false;
            break;
        case ActionType.GET_ALL_DEPARTMENT:
            _department = action.departments;
            break;
        default : return true;
    }
    UserStore.emitChange();
}


UserStore.dispatchToken = OADispatcher.register(registration);

module.exports = UserStore;