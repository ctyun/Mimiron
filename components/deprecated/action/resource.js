/**
 * Created by Administrator on 2015/4/14.
 */
var _ = require('underscore');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var ActionType = require('../constants/action-types');
var Api = require('../api/resource');

var UserActions = {
    receiveAllUsers : function(query){
        Api.getUsers(query).then(function(data){
                OADispatcher.handleServerAction({
                    type: ActionType.USER_SEARCH,
                    users: data.returnObj.result,
                    totalRows : data.returnObj.totalCount
                });
            })
    }
};

var ResourceActions = {
    receiveAllResource : function(query){
        Api.getResource({
            query : query
        }).then(function(data){
                OADispatcher.handleServerAction({
                    type : ActionType.USER_RESOURCE_SEARCH,
                    resource : data.returnObj
                })
            })
    }
};

var UsageActions = {
    saveUsage : function(data){
        Api.saveUsage({data : data});
    }
};


var ResourceActions = _.extend({}, UserActions, ResourceActions, UsageActions);

module.exports = ResourceActions;