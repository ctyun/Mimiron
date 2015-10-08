var _ = require('underscore');
var OADispatcher = require('../dispatchers/oa-dispatcher');
var ActionType = require('../constants/action-types');
var AdminUserStore = require('../store/admin-user');
var AdminUserAPI = require('../api/admin-user');

// Server Actions
var ServerActions = {
};

// View Actions
var ViewActions = {
  login: function(user) {
    AdminUserAPI.login(user).done(function(data){
        if(data.returnObj.id != null){
          window.location.href="/"
        }else{
          OADispatcher.handleServerAction({
            type: ActionType.LOGIN_ERROR,
            error: "用户名密码错误"
          });
        }
    });
  },

  logout: function() {
    AdminUserAPI.logout();
    window.location.href = "/login";
  }

};

var AdminUserActions = _.extend({}, ServerActions, ViewActions);

module.exports = AdminUserActions;
