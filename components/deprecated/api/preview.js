/**
 * Created by Administrator on 2015/4/20.
 */
var _ = require('underscore');
var APIConstants = require('../constants/api');
var APIUtils = require('../utils/api-utils');


var PreviewApi = _.extend({},APIUtils,{
    queryReportData : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.REQUEST_API,
            data : data
        });
    }
});

module.exports = PreviewApi;