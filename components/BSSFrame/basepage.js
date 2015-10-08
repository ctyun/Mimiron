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
	componentWillMount: function(){
		/**
		 * all GET props saved in $_GET
		 * for example:
		 * in url http://127.0.0.1:8081/sample?id=1 you can use $_GET["id"] to get "1"
		 */
		var $_GET = (function(){
		    var url = window.document.location.href.toString();
		    var u = url.split("?");
		    if(typeof(u[1]) == "string"){
		        u = u[1].split("&");
		        var get = {};
		        for(var i in u){
		            var j = u[i].split("=");
		            get[j[0]] = j[1];
		        }
		        return get;
		    } else {
		        return {};
		    }
		})();
	}
}


module.exports=BasePage;