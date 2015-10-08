/**
 * Created by Administrator on 2015/4/14.
 */
var _ = require('underscore');
var React = require('react/addons');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var Store = require('../utils/store-utils');
var ActionType = require('../constants/action-types');
var _modes = {};
var _tds = [];
var _details = '';
var _top = [];
var _mid = [];
var _controlList = [];
var _modeList = [];
var _currentConfigList = 'default';
var _reportModelName = '';
var _reportModelId = '';

var HomeStore = Store.createStore({
    getInitial : function(){

    },
    getModes : function(){
        return _modes;
    },
    getTds : function(){
        return _tds;
    },
    getDetails : function(){
        return _details;
    },
    getTop : function(){
        return _top;
    },
    getMid : function(){
        alert("get mid"+_mid.length);
        return _mid;
    },
    getControlList : function(){
        return _controlList;
    },
    getCurrentConfigList: function() {
        return _currentConfigList;
    },
    getModeList : function(){
        return _modeList;
    },
    getReportModelProps: function() {
        if (_reportModelName && _reportModelId) {
            return {
                name: _reportModelName,
                id: _reportModelId
            }
        } else {
            return null;
        }
    }
});
function registration(payload){

    var action = payload.action;
    switch(action.type){
        case ActionType.HOME_MODES:
            var _mode = action.mode;
            _modes.push(_mode);
            break;
        case ActionType.HOME_TDS:
            var _td = action.tds;
            _tds.push(_td);
            break;
        case ActionType.HOME_DETAILS:
            _details = action.details;
            break;
        case ActionType.HOME_MODIFY:
        {    var _modify = action.mode;

            if(_modify.location == 'top'){
                for(var i =0 ;i<_top.length;i++){
                    if(_.isMatch(_top[i],{reportMetadataId:_modify.reportMetadataId})){
                        _top[i] = _modify;
                        break;
                    }
                }
            }else if(_modify.location == 'mid'){
                for(var i =0 ;i<_mid.length;i++){
                    if(_.isMatch(_mid[i],{reportMetadataId:_modify.reportMetadataId})){
                        _mid[i] = _modify;
                        break;
                    }
                }
            }
            break;}
        case ActionType.ADD_TOP:
        {var _modeTop = action.top;
            if(_.findWhere(_top,{reportMetadataId:_modeTop.reportMetadataId})===undefined){
                _top.push(_modeTop);
            }
            break;}
        case ActionType.ADD_MID:
        {var _mode = action.mid;
            if(_.findWhere(_mid,{reportMetadataId:_mode.reportMetadataId})===undefined){
                _mid.push(_mode);
            }
            break;}
        case ActionType.VIEW_REPORT :
            _currentConfigList = action.configItem;
            _modeList = action.data;

            break;
        case ActionType.QUERY_CONTROL_LIST :
            _controlList = action.data;
            break;
        case ActionType.QUERY_REPORT_DATA :
            _tds = action.data;
            break;
        case ActionType.REMOVE_NODE :
            if(action.location=='top'){
                _top = action.data;
            }else if(action.location=='mid'){
                _mid = action.data;
            }
            break;

        case ActionType.CHANGE_POSITION :
            _top = action.data;
            break;
        case ActionType.RECEIVE_REPORT_MODEL_NAME:
            _reportModelName = action.modelName;
            _reportModelId = action.modelId;
            break;
        default : return true;
    }
    HomeStore.emitChange();
}


HomeStore.dispatchToken = OADispatcher.register(registration);

module.exports = HomeStore;
