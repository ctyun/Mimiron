var $ = require('jQuery');

var API = require("../const/API");
var Debug = require("../utils/debug");
var Ajax = require("../utils/ajax");

var Tools = {
    uuid : function() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
    },
    clone: function(obj){

        if(typeof(obj) != 'object') return obj; 
        if(obj == null) return obj; 
        if(obj.constructor == RegExp) return obj;

        if(obj instanceof Array){
            var newObj = []
        }else{
            var newObj = {}; 
        }
        
        for(var i in obj){
            newObj[i] = Tools.clone(obj[i]); 
        } 

        return newObj; 
    },



    loadScript : function(url, callback) {
        var script = document.createElement("script");

        if(!callback) callback  = function(){}

        // IE
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { // others
            script.onload = function () {
                callback();
            };
        }

        var rgJS = /^(.+)\.js$/ig;
        var rgJSX = /^(.+)\.jsx$/ig;
        if(rgJS.test(url))
            script.type = "text/javascript";
        if(rgJSX.test(url))
            script.type = "text/jsx";

        script.src = url;
        document.body.appendChild(script);
    },

    loadCSS : function(url, callback) {
        var node = document.createElement("link");

        if(!callback) callback  = function(){}

        // IE
        if (node.readyState) {
            node.onreadystatechange = function () {
                if (node.readyState == "loaded" || node.readyState == "complete") {
                    node.onreadystatechange = null;
                    callback();
                }
            };
        } else { // others
            node.onload = function () {
                callback();
            };
        }

        node.rel = 'stylesheet';
        node.type = "text/css";
        node.href = url;
        document.getElementsByTagName('head')[0].appendChild(node);
    },


    loadScriptsWithNoCallback : function(url) {
        var script = document.createElement("script");
        var length = url.length;
        for(var i = 0;i < length; i++){ //自适应插入.jsx文件
            var script = document.createElement("script");
            var rgJS = /^(.+)\.js$/ig;
            var rgJSX = /^(.+)\.jsx$/ig;
            if(rgJS.test(url[i]))
                script.type = "text/javascript";
            if(rgJSX.test(url[i]))
                script.type = "text/jsx";
            script.src = url[i];
            document.body.appendChild(script);
        }
    },

    loadScriptWithLock : function(scriptName, url, callback) {
        if(this.scriptName === true){
            return true;
        }
        if(this.scriptName == undefined){
            this.scriptName = false;
            var _this = this;
            //加载脚本
            var script = document.createElement("script");
            if(!callback) callback  = function(){}
            // IE
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        _this.scriptName = true;//加载完成
                        callback();//回调
                    }
                };
            } else { // others
                script.onload = function () {
                    _this.scriptName = true;//加载完成
                    callback();
                };
            }
            var rgJS = /^(.+)\.js$/ig;
            var rgJSX = /^(.+)\.jsx$/ig;
            if(rgJS.test(url))
                script.type = "text/javascript";
            if(rgJSX.test(url))
                script.type = "text/jsx";

            script.src = url;
            document.body.appendChild(script);
        }
        return false; 
    },

    loadCSSWithLock : function(cssName, url, callback) {
        if(this.cssName === true){
            return true;
        }
        if(this.cssName == undefined){
            this.cssName = false;
            var _this = this;
            //加载脚本
            var node = document.createElement("link");
            if(!callback) callback  = function(){}
            // IE
            if (node.readyState) {
                node.onreadystatechange = function () {
                    if (node.readyState == "loaded" || node.readyState == "complete") {
                        node.onreadystatechange = null;
                        _this.cssName = true;//加载完成
                        callback();//回调
                    }
                };
            } else { // others
                node.onload = function () {
                    _this.cssName = true;//加载完成
                    callback();
                };
            }
            node.rel = 'stylesheet';
            node.type = "text/css";
            node.href = url;

            document.body.appendChild(node);
        }
        return false;
    },
    appendJSX: function(url){
        //先删除其他无用的jsx
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            if (/^text\/jsx(;|$)/.test(scripts.item(i).type)&&scripts.item(i).src.indexOf("?only")!=-1) {
                document.body.removeChild(scripts.item(i));
            }
        }
        //删除head中最后一个scrpit标签
        var scripts = document.head.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            document.head.removeChild(scripts[i]);
        }

        var script = document.createElement("script");
        script.type = "text/jsx";
        script.src = url+"?only";
        // // 加载完成后调用runScript
        // if (script.readyState) { //IE
        //     script.onreadystatechange = function () {
        //         if (script.readyState == "loaded" || script.readyState == "complete") {
        //             script.onreadystatechange = null;
        //             _this.scriptName = true;//加载完成
        //             window.Mimiron.runScripts();//回调
        //         }
        //     };
        // } else { // others
        //     script.onload = function () {
        //         _this.scriptName = true;//加载完成
        //         console.log("called") //called
        //         window.Mimiron.runScripts();
        //     };
        // }
        document.body.appendChild(script);
        $("#page-wrapper").html('<div class="spinner"></div>')
        //window.Mimiron.runScripts();
    },
    /**
     * 前端权限验证方法
     * @param  {String} url 转向地址
     * @return {Boolean}     验证结果
     */
    authorize: function(url){
        var tester = Mimiron.RouteConfig[url];
        var allowURLs = window.Mimiron.authorization.allowURLs;
        for(var i in allowURLs){
            if(tester.test(allowURLs[i])){
                return true;
            }
        }
        return false;
    },
    getAllowURLs:function(data){

        for(var elem in data){
            if(data[elem].url){
                window.Mimiron.authorization.allowURLs.push(data[elem].url);
            }
            if(data[elem].children){
                Tools.getAllowURLs(data[elem].children);
            }
        }
    },
    loadJSX: function(url){
        if(!window.Mimiron.runScripts){
            console.info("如果你想使用utils.loadJSX异步加载jsx文件, 你必须先通过JSXTransform.js暴露window.Mimiron.runScripts方法!");
            return;
        }

        if(window.Mimiron.debugMode){
                Tools.appendJSX(url);
                return; //调试模式，直接放行
        }
        if(window.location.pathname == "/login" || window.location.hash == '#/login') {
                Tools.appendJSX(url);
                return; //登录界面，直接放行
        }

        //权限管理
        if(window.Mimiron.authorization){
            
            if(Tools.authorize(url)) Tools.appendJSX(url);

        }else{//未加载权限，请求权限，然后把权限绑定到window上

            window.Mimiron.authorization = window.Mimiron.authorization || { allowURLs:[] }
            //if(!window.Mimiron.authorization.allowURLs) window.Mimiron.authorization.allowURLs = [];

            //获取用户可访问的菜单权限
            Ajax.get(API.SIDE_BAR_MENU,function(data){

                if(data.children){
                    Tools.getAllowURLs(data.children);
                }

                if(Tools.authorize(url)){
                    Tools.appendJSX(url);
                }else{
                    alert("您没有权限访问！");
                }

            });
        }
  
        
    },
    goJSX: function(url){
        var RouteConfig = Mimiron.RouteConfig;
        for(var i in RouteConfig){
            if(RouteConfig[i].test(url)){
                this.loadJSX(i);
                return 
            }
        }
        console.info(url+"匹配不到任何现有路由!");
    },
    handleA: function(key){
        var key = key||"data-tohash";
        $(document).on("click","a",function(){
            if(!$(this).attr(key))
                return true;
            var href = $(this).attr("href");
            window.location.hash = href;
            var RouteConfig = Mimiron.RouteConfig;
            for(var i in RouteConfig){
                if(RouteConfig[i].test(href)){
                    components.Tools.loadJSX(i);
                    window.Mimiron.runScripts();
                }
            }
            return false;
        });
    }
}


/**
 * all GET props saved in $_GET
 * for example:
 * in url http://127.0.0.1:8081/sample?id=1 you can use $_GET["id"] to get "1"
 */
window.$_GET = (function(){
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


module.exports = Tools;

