var _ = require('underscore');
var React = require('react/addons');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionType = require('../constants/action-types');
var Store = require('../utils/store-utils');
var API = require('../api/admin-user');
var user = {};
var _loginError = null;
var userInfo = {};
var AdminUserStore = Store.createStore({
	
  getLoginError: function() {
    return _loginError;
  }
});

function registration(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionType.LOGIN_ERROR:
      _loginError = action.error;
      break;
    default:
      return true;
  }

  AdminUserStore.emitChange();
}

AdminUserStore.dispatchToken = OADispatcher.register(registration);

module.exports = AdminUserStore;
