var _ = require('underscore');
var React = require('react/addons');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var Store = require('../utils/store-utils');
var ActionType = require('../constants/action-types');
var Api = require('../api/resource');
var _resource = [];

var ResourceDetailStore = Store.createStore({

    getResource : function(){
        return _resource;
    }
});

function registration(payload){
    var action = payload.action;
    _resource = action.resource
    ResourceDetailStore.emitChange();
}


ResourceDetailStore.dispatchToken = OADispatcher.register(registration);

module.exports = ResourceDetailStore;