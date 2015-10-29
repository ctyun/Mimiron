/**
 * Created by Administrator on 2015/4/14.
 */
var _ = require('underscore');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var ActionType = require('../constants/action-types');
var Store = require('../store/report');
var Api = require('../api/report');
var $ = require('jquery');
var constants = require('../constants/constants');
var ActionUtils = require('../utils/action-utils');
var Tools = require("../../utils/tools");

var ServerActions = {
    queryControlList : function(data){

        OADispatcher.handleViewAction({
            type: ActionType.QUERY_CONTROL_LIST,
            data: data
        });
    }
};

var ViewActions = {
    showDetail : function(mode){
        OADispatcher.handleViewAction({
            type: ActionType.HOME_DETAILS,
            details: mode
        });
    },
    addModule :function(mode,location){
        var _mode = mode;
        if(mode.location == 'top'){
            OADispatcher.handleViewAction({
                type: ActionType.ADD_TOP,
                top: _mode
            });
        }else if(mode.location == 'mid'){
            OADispatcher.handleViewAction({
                type: ActionType.ADD_MID,
                mid: _mode
            });
        }

    },
    addMultipleModules: function(modules, location) {
        if (location === 'top') {
            modules.forEach(function(module) {
                OADispatcher.handleServerAction({
                    type: ActionType.ADD_TOP,
                    top: module
                });
            });
        }
        if (location === 'mid') {
            modules.forEach(function(module) {
                OADispatcher.handleServerAction({
                    type: ActionType.ADD_MID,
                    mid: module
                });
            });
        }
    },
    modifyMode : function(mode){
        OADispatcher.handleViewAction({
            type: ActionType.HOME_MODIFY,
            mode: mode
        });
    },
    preView : function(mode){
        OADispatcher.handleViewAction({
            type: ActionType.VIEW_REPORT,
            mode: mode
        });
    },
    save : function(data){
        var topList=data.topList;
        var d=data.reportModelMetaBO;
        var top = topList.map(function(module) {
          //  var queryType = constants.components[module.modeType];
            return {
                queryType: module.queryType,
                reportMetadataCode: module.reportMetadataCode,
                reportMetadataId: module.reportMetadataId,
                displayName: module.reportMetadataName,
                defaultValue:module.defaultValue,
            }
        });
        var midList=data.midList;
        var mid = midList.map(function(module) {
            var advancedProperties={isDummy:module.isDummy};
            return {
                reportMetadataCode: module.reportMetadataCode,
                reportMetadataId: module.reportMetadataId,
                displayName: module.reportMetadataName,
                queryType: module.queryType,
                defaultValue:module.defaultValue,
                advancedProperties: JSON.stringify(advancedProperties),
                //isDummy:module.isDummy,  //注意, 只有列表区域的额外信息(dummy)是有意义的, 查询区无意义
            }
        });
        var _data = {
            reportModelMetaBO: d,
            topList: top,
            midList: mid
        };
        Api.save(_data).then(function(result){
            if (result){
               window.location.hash = '/report/manage';
               Tools.goJSX("/report/manage");
            } 

        });
    },
    getControlList : function(tableName){
        var self = this;
        Api.getControlList(tableName).then(function(data){
            OADispatcher.handleViewAction({
                type: ActionType.VIEW_REPORT,
                configItem: tableName,
                data: data
            });
            // self.dispatchError({
            //     msg: '没有这种病！'
            // });
        })
    },
    removeModule : function(data){
        if(data.location=='top') {
            var _top = Store.getTop();
            for (var i = 0; i < _top.length; i++) {
                if (_.isMatch(_top[i], {reportMetadataId: data.reportMetadataId})) {
                    _top.splice(i, 1);
                    break;
                }
            }
            OADispatcher.handleViewAction({
                type: ActionType.REMOVE_NODE,
                data: _top,
                location : 'top'
            });
        }else{
            var _mid = Store.getMid();
            for (var i = 0; i < _mid.length; i++) {
                if (_.isMatch(_mid[i], {reportMetadataId: data.reportMetadataId})) {
                    _mid.splice(i, 1);
                    break;
                }
            }
            OADispatcher.handleViewAction({
                type: ActionType.REMOVE_NODE,
                data: _mid,
                location : 'mid'
            });
        }
    },
    changePosition : function(modules){
        OADispatcher.handleViewAction({
            type: ActionType.CHANGE_POSITION,
            data: modules
        });
    },
    receiveReportModelProps: function(name, id) {
        OADispatcher.handleServerAction({
            type: ActionType.RECEIVE_REPORT_MODEL_NAME,
            modelName: name,
            modelId: id
        });
    },
    addMenu:function(id,menuName){
         var self=this;
          Api.addMenu(id,menuName).then(function(data){
            if(data.state&&data.state!=0){
               self.dispatchError({
                    msg: data.message
                }); 
            }else{
                self.dispatchError({
                    msg:'增加成功'
                });
            }
            // console.log(data);
            
        })
    }
};

var HomeActions = _.extend({}, ServerActions, ViewActions, ActionUtils);

module.exports = HomeActions;
