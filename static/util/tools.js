
var Tools = {

    loadScript : function(url,callback) {
        var script = document.createElement("script");


        // IE
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null
                    if(callback){
                        callback();
                    }

                }
            };
        } else { // others
            script.onload = function () {
                if(callback){
                    callback();
                }
            };
        }
        var l=url.length;
        for(var i=0;i<l;i++){ //自适应插入.jsx文件
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

    }

}



