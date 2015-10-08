/**
 * Created by Administrator on 2015/4/20.
 */
var _ = require('underscore');
var APIConstants = require('../constants/api');
var APIUtils = require('../utils/api-utils');


var AppAPI = _.extend({},APIUtils,{
    getMenus : function(){
        return this.request({
            method : "GET",
            url :  APIConstants.SIDE_BAR_MENU,
            data: {}
        });
    }
});

module.exports = AppAPI;
