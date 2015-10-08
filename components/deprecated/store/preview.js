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

var HomeStore = Store.createStore({
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
        return _mid;
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
                    if(_.isMatch(_top[i],{id:_modify.id})){
                        _top[i] = _modify;
                        break;
                    }
                }
            }else if(_modify.location == 'mid'){
                for(var i =0 ;i<_mid.length;i++){
                    if(_.isMatch(_mid[i],{id:_modify.id})){
                        _mid[i] = _modify;
                        break;
                    }
                }
            }
            break;}
        case ActionType.ADD_TOP:
        {var _modeTop = action.top;
            if(_.findWhere(_modeTop,{id:_modeTop.id})===undefined){
                _top.push(_modeTop);
            }
            break;}
        case ActionType.ADD_MID:
        {var _mode = action.mid;
            if(_.findWhere(_mid,{id:_mode.id})===undefined){
                _mid.push(_mode);
            }
            break;}
        case ActionType.VIEW_REPORT :
            break;
        default : return true;
    }
    HomeStore.emitChange();
}


HomeStore.dispatchToken = OADispatcher.register(registration);

module.exports = HomeStore;