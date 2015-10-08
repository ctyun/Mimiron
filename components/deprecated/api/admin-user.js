var _ = require('underscore');
var APIConstants = require('../constants/api');
var APIUtils = require('../utils/api-utils');

// Admin User API
var AdminUserAPI = _.extend({}, APIUtils, {
  login: function(user) {
    return this.request({
      method: 'POST',
      url: APIConstants.LOGIN,
      data: user
    });
  },
  logout: function() {
    return this.request({
      method: 'GET',
      url: APIConstants.LOGOUT
    });
  },
  getUserInfo: function(user) {
    return this.request({
        method: 'POST',
        url: APIConstants.GET_USERINFO
      });
    }

});

module.exports = AdminUserAPI;
