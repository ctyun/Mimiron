var _ = require('underscore');
var APIConstants = require('../constants/api');
var APIUtils = require('../utils/api-utils');


var ResourceApi = _.extend({},APIUtils,{
    getUsers : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.USER_SEARCH,
            data : data
        });
    },
    getResource : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.USER_RESOURCE_SEARCH,
            data : data
        });
    },
    saveUsage : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.SAVE_RESOURCE_USAGE,
            data : data
        });
    },
    getUploadedFiles : function(data){
        return this.request({
            method : "POST",
            url : APIConstants.QUERY_UPLOADED_FILES,
            data : data
        });
    },
    deleteFile : function(data){
        return this.request({
            method : "POST",
            url : APIConstants.DELETE_FILE,
            data : data
        });
    }
});

module.exports = ResourceApi;