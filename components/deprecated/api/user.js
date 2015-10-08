/**
 * Created by Administrator on 2015/4/20.
 */
var _ = require('underscore');
var APIConstants = require('../constants/api');
var APIUtils = require('../utils/api-utils');


var UserApi = _.extend({},APIUtils,{
    getUsers : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.QUERY_USER,
            data : data
        });
    },
    editUser : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.UPDATE_USER,
            data : data
        });
    },
    delUser : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.DELETE_USER,
            data : data
        });
    },
    create : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.ADD_USER,
            data : data
        });
    },
    getAllDepartment : function(){
        return this.request({
            method : "POST",
            url : APIConstants.GET_ALL_DEPARTMENT,
            data:{}
        });
    }
});

module.exports = UserApi;