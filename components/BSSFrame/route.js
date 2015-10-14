/**
 * @module BSSFrame
 */

var Mimiron = require("../utils/publicVars.js");
var Tools = require("../utils/Tools");

var Route = {
	initGo: function(url){
		var RouteConfig = Mimiron.RouteConfig;
		for(var i in RouteConfig){
			if(RouteConfig[i].test(url))
				Tools.loadScript(i);
		}
	},
	goJSX: function(url){
		var RouteConfig = Mimiron.RouteConfig;
		for(var i in RouteConfig){
			if(RouteConfig[i].test(url)){
				Tools.loadJSX(i);
			}
		}
	}
};


module.exports = Route;