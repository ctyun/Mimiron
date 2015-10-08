/**
 * Created by Administrator on 2015/4/14.
 */
var _ = require('underscore');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var ActionType = require('../constants/action-types');
var UserStore = require('../store/user');
var Api = require('../api/user');

var ServerActions = {
    receiveAllUsers : function(user){
        Api.getUsers({
            pageNo : UserStore.getPageNo(),
            pageSize : UserStore.getCurrentPageSize(),
            query : user
        }).then(function(data){
            OADispatcher.handleServerAction({
                type: ActionType.QUERY_USER,
                users: data.returnObj.result,
                pageCount : data.returnObj.pageCount
            });
        })
    },
    getAllDepartment : function(){
        Api.getAllDepartment().then(function(data){
            OADispatcher.handleServerAction({
                type: ActionType.GET_ALL_DEPARTMENT,
                departments: data.returnObj
            });
        });
    }

};

var ViewActions = {
    search : function(data){
        Api.getUsers({
            pageNo : 1,
            pageSize : UserStore.getCurrentPageSize(),
            query : data
        }).then(function(data){
            OADispatcher.handleServerAction({
                type: ActionType.QUERY_USER,
                roles: data.returnObj.result,
                pageCount : data.returnObj.pageCount
            });
        });
    },
    create : function(data){
        Api.create(data).then(function(data){
            OADispatcher.handleServerAction({
                type: ActionType.ADD_USER,
                data: data.returnObj
            });
        })
    },
    editUser : function(user){
        Api.editUser(user).then(function(data){
            OADispatcher.handleServerAction({
                type: ActionType.ADD_USER,
                data: data.returnObj
            });
        });
    },
    delUser : function(id){
        var data = {id:id};
        Api.delConsoleRole(data).then(function(data){
            OADispatcher.handleServerAction({
                type: ActionType.ADD_USER,
                data: data.returnObj
            });
        })
    },
    changePageNo : function(pageNo,query){
        Api.getUsers({
            pageSize: UserStore.getCurrentPageSize(),
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
        Api.getUsers({
            pageSize: pagesize,
            pageNo: UserStore.getPageNo(),
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

var UserActions = _.extend({}, ServerActions, ViewActions);

module.exports = UserActions;