/**
 * Created by Administrator on 2015/4/14.
 */
var _ = require('underscore');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var ActionType = require('../constants/action-types');
var HomeStore = require('../store/report');
var Api = require('../api/preview');

var ServerActions = {};

var ViewActions = {
    queryReportData : function(data){
        Api.queryReportData(data).then(function(data){
            OADispatcher.handleViewAction({
                type: ActionType.QUERY_REPORT_DATA,
                data: data
            });
        });
    }
};

var HomeActions = _.extend({}, ServerActions, ViewActions);

module.exports = HomeActions;