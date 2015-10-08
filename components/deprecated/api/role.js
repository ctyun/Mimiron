/**
 * Created by Administrator on 2015/4/20.
 */
var _ = require('underscore');
var APIConstants = require('../constants/api');
var APIUtils = require('../utils/api-utils');


var RoleApi = _.extend({},APIUtils,{
    getMenus : function(){
        return this.request({
            method : "POST",
            url :  APIConstants.SIDE_BAR_MENU,
            data : {}
        });
    },
    getConsoleRole : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.QUERY_CONSOLE_ROLE,
            data : data
        });
    },
    editConsoleRole : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.EDIT_CONSOLE_ROLE,
            data : data
        });
    },
    getLimits : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.QUERY_ROLE_LIMITS,
            data : data
        });
    },
    saveLimits : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.SAVE_LIMITS,
            data : data
        });
    },
    delConsoleRole : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.DEL_CONSOLE_ROLE,
            data : data
        });
    },
    create : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.CREATE_CONSOLE_ROLE,
            data : data
        });
    }
});

module.exports = RoleApi;