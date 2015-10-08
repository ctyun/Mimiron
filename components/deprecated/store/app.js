/**
 * Created by Administrator on 2015/4/14.
 */
var _ = require('underscore');
var React = require('react/addons');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var Store = require('../utils/store-utils');
var ActionType = require('../constants/action-types');
var _menu = [];
var _report = [];
var PageSizes = require('../constants/constants').pagesize;
var _error = {}; // global error

var AppStore = Store.createStore({
    getMenus: function() {
        return _menu;
    },
    generateReport: function() {
        return _report;
    },
    globalError: function() {
        return _error;
    }
});

function registration(payload){

    var action = payload.action;
    switch(action.type){
        case ActionType.APP_REQ_REPORT:
            _report = action.report;
            break;
        case ActionType.SIDE_BAR_MENU:
            _menu = action.menu;
            break;
        case ActionType.GLOBAL_ERROR:
            _error = action.error;
            break;
        default : return true;
    }

    AppStore.emitChange();
}


AppStore.dispatchToken = OADispatcher.register(registration);

module.exports = AppStore;
