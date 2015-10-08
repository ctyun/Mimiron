var _ = require('underscore');
var React = require('react/addons');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var Store = require('../utils/store-utils');
var ActionType = require('../constants/action-types');
var Api = require('../api/resource');
var _users = [];
var _resource = [];
var _currentPageSize = 10;
var _pageNo = 1;
var _totalRows = 0;

var ResourceStore = Store.createStore({

    getUsers : function(){
        return _users;
    },
    getResource : function(){
        return _resource;
    },
    getCurrentPageSize: function() {
        return _currentPageSize;
    },
    getPageNo: function() {
        return _pageNo;
    },
    getTotalRows : function(){
        return _totalRows;
    }
});

function registration(payload){
    var action = payload.action;
    switch(action.type){
        case ActionType.USER_SEARCH:
            _users = action.users;
            _totalRows = action.totalRows;
            break;
        case ActionType.USER_RESOURCE_SEARCH :
            _resource = action.resource;
            break;
        default : return true;
    }
    _resource = action.resource
    _users = action.users;
    _totalRows = action.totalRows;
    ResourceStore.emitChange();
}

ResourceStore.dispatchToken = OADispatcher.register(registration);

module.exports = ResourceStore;