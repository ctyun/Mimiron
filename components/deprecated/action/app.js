/**
 * Created by Administrator on 2015/4/14.
 */
var _ = require('underscore');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var ActionType = require('../constants/action-types');
var Store = require('../store/app');
var Api = require('../api/app');
var ActionUtils = require('../utils/action-utils');

var ServerActions = {
    receiveMenu: function(menu) {
        OADispatcher.handleServerAction({
            type: ActionType.SIDE_BAR_MENU,
            menu: menu
        })
    },
    receiveReport : function(data){
        OADispatcher.handleServerAction({
            type: ActionType.APP_REQ_REPORT,
            report: data
        });
    },
    changePageNo : function(pageNo){
        var _query = {};
        Api.getConsoleRole({
            pageSize: RoleStore.getCurrentPageSize(),
            pageNo: pageNo,
            query: _query
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
                meals: data.returnObj.result,
                pagesize: pagesize,
                pageCount:data.returnObj.pageCount,
                pageNo : 1
            });
        });
    },

};

var ViewActions = {
    login : function(data){
        Api.login(data).then(function(data){
            OADispatcher.handleViewAction({
                type: ActionType.SIDE_BAR_MENU,
                menus: data
            });
        });
    },

    cleanError: function() {
        var err = {};
        this.dispatchError(err);
    }

};

var AppActions = _.extend({}, ServerActions, ViewActions, ActionUtils);

module.exports = AppActions;
