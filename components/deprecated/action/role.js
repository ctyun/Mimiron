/**
 * Created by Administrator on 2015/4/14.
 */
var _ = require('underscore');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var ActionType = require('../constants/action-types');
var RoleStore = require('../store/role');
var Api = require('../api/role');
var ActionUtils = require('../utils/action-utils');

var ServerActions = {
    receiveMenus : function(data){
        OADispatcher.handleServerAction({
            type: ActionType.SIDE_BAR_MENU,
            menus: data
        });
    },
    receiveAllRole : function(role){
        Api.getConsoleRole({
            pageNo : RoleStore.getPageNo(),
            pageSize : RoleStore.getCurrentPageSize(),
            query : role
        }).then(function(data){
            OADispatcher.handleServerAction({
                type: ActionType.QUERY_CONSOLE_ROLE,
                roles: data.returnObj.result,
                pageCount : data.returnObj.pageCount
            });
        })
    }

};

var ViewActions = {
    search : function(data){
        Api.getConsoleRole({
            pageNo : 1,
            pageSize : RoleStore.getCurrentPageSize(),
            query : data
        }).then(function(data){
            OADispatcher.handleServerAction({
                type: ActionType.QUERY_CONSOLE_ROLE,
                roles: data.returnObj.result,
                pageCount : data.returnObj.pageCount
            });
        });
    },
    login : function(data){
        Api.login(data).then(function(data){
            OADispatcher.handleViewAction({
                type: ActionType.SIDE_BAR_MENU,
                menus: data
            });
        });
    },
    create : function(data){
        Api.create(data).then(function(data){
            OADispatcher.handleServerAction({
                type: ActionType.EDIT_CONSOLE_ROLE,
                data: data.returnObj
            });
        })
    },
    getLimits : function(data){
        Api.getLimits(data).then(function(data){
            OADispatcher.handleViewAction({
                type : ActionType.QUERY_ROLE_LIMITS,
                limits : data.returnObj
            });
        });
    },
    editConsoleRole : function(role){
        var self = this;
        Api.editConsoleRole(role).then(function(data){
            OADispatcher.handleServerAction({
                type: ActionType.EDIT_CONSOLE_ROLE,
                data: data.returnObj
            });
            self.dispatchError({
                msg: '角色修改成功！'
            });
        });
    },
    saveLimits : function(data){
        Api.saveLimits(data).then(function(data){
            OADispatcher.handleServerAction({
                type: ActionType.SAVE_LIMITS,
                data: data.returnObj
            });
        });
    },
    confirmLimit : function(){
            OADispatcher.handleServerAction({
                type: ActionType.SAVE_LIMITS,
                data: null
            });
    },
    delConsoleRole : function(id){
        var data = {id:id};
        Api.delConsoleRole(data).then(function(data){
            OADispatcher.handleServerAction({
                type: ActionType.EDIT_CONSOLE_ROLE,
                data: data.returnObj
            });
        })
    },
    changePageNo : function(pageNo,query){
        Api.getConsoleRole({
            pageSize: RoleStore.getCurrentPageSize(),
            pageNo: pageNo,
            query: query
        }).then(function(data) {
            OADispatcher.handleViewAction({
                type: ActionType.CHANGE_PAGENO,
                roles: data.returnObj.result,
                pageNo:pageNo
            });
        });

    },
    changePageSize: function(pagesize) {
        var _query = {};
        Api.getConsoleRole({
            pageSize: pagesize,
            pageNo: RoleStore.getPageNo(),
            query: _query
        }).then(function(data) {
            OADispatcher.handleViewAction({
                type: ActionType.CHANGE_PAGESIZE,
                roles: data.returnObj.result,
                pagesize: pagesize,
                pageCount:data.returnObj.pageCount,
                pageNo : 1
            });
        });
    }

};

var RoleActions = _.extend({}, ServerActions, ViewActions, ActionUtils);

module.exports = RoleActions;
