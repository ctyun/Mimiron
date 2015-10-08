/**
 * Created by Administrator on 2015/4/20.
 */
var _ = require('underscore');
var APIConstants = require('../constants/api');
var APIUtils = require('../utils/api-utils');


var ReportAPI = _.extend({},APIUtils,{
    //getSelectList : function(param){
    //    return this.request({
    //        method : "POST",
    //        url :  APIConstants.QUERY_TODAY_MENU,
    //        data : param
    //    });
    //},
    getControlList : function(menu){
        return this.request({
            method : "GET",
            url :   APIConstants.GET_TABLE_NAME + menu,
        });
    },
    queryControlList : function(){
        return this.request({
            method : "GET",
            url :   APIConstants.QUERY_REPORT_RESOURCE_TABLES
        });
    },
    save : function(data){
        return this.request({
            method : "POST",
            url :   APIConstants.CREATE_REPORT_MODEL,
            data : data
        });
    },
    queryReportData : function(data){
        return this.request({
            method : "POST",
            url :  APIConstants.REQUEST_API,
            data : data
        });
    },
    queryReportModelList: function(data) {
        return this.request({
            method : "POST",
            url :  APIConstants.APP_REQ_REPORT_LIST,
            data:data
        });
    },
    reqReport : function(id){
        return this.request({
            method : "GET",
            url :  APIConstants.APP_REQ_REPORT + id
        });
    },
     /**
     * 请求一组表报
     * @param  {[type]} query [description]
     * @return {[type]}       [description]
     */
    reqReportGroup: function(id){
        return this.request({
            method:"GET",
            url:"/api/report/getReportGroup/" +id
        });
    },
    reqReportData: function(query) {
        return this.request({
            method: 'POST',
            url: APIConstants.APP_REQ_REPORT_DATA,
            data: query
        });
    },
    /**
     * [通过ID删除模板]
     * @param  {[type]}
     * @return {[type]}
     */
    deleteTemplateData:function(id){
        return this.request({
            method:'GET',
            url:APIConstants.DELETE_TEMPLATE + id
        });

    },
    addTableName:function(tableName,displayName){
        return this.request({
            method:'GET',
            url:APIConstants.ADD_TABLE_NAME+tableName+'/'+displayName
        });
    },
    addMenu:function(id,menuName){
        return this.request({
            method:'GET',
            url:APIConstants.ADD_REPORT_MENU+id+'/'+menuName
        });
    }
});

module.exports = ReportAPI;
