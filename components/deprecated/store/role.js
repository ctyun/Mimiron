/**
 * Created by Administrator on 2015/4/14.
 */
var _ = require('underscore');
var React = require('react/addons');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var Store = require('../utils/store-utils');
var ActionType = require('../constants/action-types');
var Api = require('../api/role');
var _menus = [];
var _roles = [];
var _limits = [];
var _limitResult = null;
var _currentPageSize = 5;
var _pageNo = 1;
var _pageCount = 1;
var PageSizes = require('../constants/constants').pagesize;

var RoleStore = Store.createStore({
    getInitialize : function(){
        Api.getConsoleRole({
            pageNo : RoleStore.getPageNo(),
            pageSize : RoleStore.getCurrentPageSize(),
            query : {}
        }).then(function(data){
            _roles = data.returnObj.result;
            RoleStore.emitChange();
        })
    },
    getMenus : function(){
        return _menus;
    },
    getRoles : function(){
        return _roles;
    },
    getLimits : function(){
        return _limits;
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
    getLimitResult : function(){
        return _limitResult;
    }
});

function registration(payload){

    var action = payload.action;
    switch(action.type){
        case ActionType.SIDE_BAR_MENU:
            _menus = action.menus;
            break;
        case ActionType.QUERY_CONSOLE_ROLE:
            _roles = action.roles;
            _pageCount = action.pageCount;
            break;
        case ActionType.QUERY_ROLE_LIMITS :
            _limits = action.limits;
            break;
        case ActionType.CHANGE_PAGESIZE:
            _roles = action.roles;
            _currentPageSize = action.pagesize;
            _pageCount = action.pageCount;
            break;
        case ActionType.CHANGE_PAGENO:
            _roles = action.roles;
            _pageNo = action.pageNo;
            break;
        case ActionType.EDIT_CONSOLE_ROLE:
            RoleStore.getInitialize();
            break;
        case ActionType.SAVE_LIMITS :
            _limitResult = action.data;
            break;
        default : return true;
    }
    RoleStore.emitChange();
}


RoleStore.dispatchToken = OADispatcher.register(registration);

module.exports = RoleStore;