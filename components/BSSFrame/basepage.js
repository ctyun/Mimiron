/**
 * @module BSSFrame
 */

/**
 * 基本业务页面的一些必要配置, 用于mixin
 * @class BasePage
 * @interface
 * 
 */
var BasePage = {
	componentDidMount: function(){
	    Tools.loadScript(["../js/dist/frame/theme.js"]);
	},
}


module.exports=BasePage;