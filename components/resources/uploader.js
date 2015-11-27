/**
 * @module resources
 */
var React = require('react/addons');
var Dropzone = require("dropzone");
var API = require("../const/API");
//var Debug = require("../utils/debug");

/**
 * 上传工具组件
 * 使用示例:
 * `<Uploader removeHandler={this.removeFile} handler="/api/resource/uploadFile"/>`
 * 该组件接受3个参数:
 * -handler (string) 上传目标URL
 * -removeHandler (function) 删除文件时的回调函数, 该函数有一个参数:file,例子:
 * ```
 * removeFile:function(file){
        console.log("这里应该发送Ajax把文件删了"+file.name);
    }
 * ```
 * -opts (object) 配置项, 这个比较复杂, 一般也用不到, 简单来说:
 * dictDefaultMessage：没有任何文件被添加的时候的提示文本。
    dictFallbackMessage：Fallback 情况下的提示文本。
    dictInvalidInputType：文件类型被拒绝时的提示文本。
    dictFileTooBig：文件大小过大时的提示文本。
    dictCancelUpload：取消上传链接的文本。
    dictCancelUploadConfirmation：取消上传确认信息的文本。
    dictRemoveFile：移除文件链接的文本。
    dictMaxFilesExceeded：超过最大文件数量的提示文本。

    url：最重要的参数，指明了文件提交到哪个页面。
    method：默认为post，如果需要，可以改为put。
    paramName：相当于<input>元素的name属性，默认为file。
    maxFilesize：最大文件大小，单位是 MB。
    maxFiles：默认为null，可以指定为一个数值，限制最多文件数量。
    addRemoveLinks：默认false。如果设为true，则会给文件添加一个删除链接。
    acceptedFiles：指明允许上传的文件类型，格式是逗号分隔的 MIME type 或者扩展名。例如：image/*,application/pdf,.psd,.obj
    uploadMultiple：指明是否允许 Dropzone 一次提交多个文件。默认为false。如果设为true，则相当于 HTML 表单添加multiple属性。
    headers：如果设定，则会作为额外的 header 信息发送到服务器。例如：{"custom-header": "value"}
    forceFallback：Fallback 是一种机制，当浏览器不支持此插件时，提供一个备选方案。默认为false。如果设为true，则强制 fallback。
    fallback：一个函数，如果浏览器不支持此插件则调用。

    init：一个函数，在 Dropzone 初始化的时候调用，可以用来添加自己的事件监听器。

    这个init可以接受如下事件, 均以file作为第一参数:
    addedfile：添加了一个文件时发生。
    removedfile：一个文件被移除时发生。你可以监听这个事件并手动从服务器删除这个文件。
    uploadprogress：上传时按一定间隔发生这个事件。第二个参数为一个整数，表示进度，从 0 到 100。第三个参数是一个整数，表示发送到服务器的字节数。当一个上传结束时，Dropzone 保证会把进度设为 100。注意：这个函数可能被以同一个进度调用多次。
    success：文件成功上传之后发生，第二个参数为服务器响应。
    complete：当文件上传成功或失败之后发生。
    canceled：当文件在上传时被取消的时候发生。
    maxfilesreached：当文件数量达到最大时发生。
    maxfilesexceeded：当文件数量超过限制时发生。
    
    举例来说:
 * ```
 * <div class="dropz"></div>
    <script>
        $(".dropz").dropzone({
            url: "handle-upload.php",
            addRemoveLinks: true,
            dictRemoveLinks: "x",
            dictCancelUpload: "x",
            maxFiles: 10,
            maxFilesize: 5,
            acceptedFiles: ".js",
            init: function() {
                this.on("success", function(file) {
                    console.log("File " + file.name + "uploaded");
                });
                this.on("removedfile", function(file) {
                    console.log("File " + file.name + "removed");
                });
            }
        });
    </script>
 * ```
 *   后端需要实现/api/resource/uploadFile的Handler来响应的文件的上传, 以一个Tornado工程为例:
 *   ```
 *  @app.route("/test/uploadFile")
    class UploadFileHandler(BaseHandler):
        @gen.coroutine
        def post(self):
            upload_path=os.path.join(mediaPath,'upload')
            file_metas=self.request.files["file[0]"]
            for meta in file_metas:
                filename=meta['filename']
                filepath=os.path.join(upload_path,filename)
                with open(filepath,'wb') as up:
                    up.write(meta['body'])
                self.write('finished!')
            raise gen.Return()
    ```
 * @class Uploader
 */

var Tools = require("../utils/tools.js");

var Uploader=React.createClass({
    getInitialState:function(){
    	return{}
    },
    getDefaultProps: function(){
        return{
            id:Tools.uuid(),
            handler : API.UPLOAD,
            removeHandler : function(){return },
            opts : {},
        }
    },
    componentWillMount:function(){
    },
    componentDidMount:function(){
        var _this = this;
        var node=this.getDOMNode();
        var opts = { url: this.props.handler,
                    addRemoveLinks:true,
                    uploadMultiple: true,
                    dictDefaultMessage:"拖拽上传或点击上传文件",
                    paramName:'file',
                    init:function(){
                        this.on("removedfile", function(file) {
                            _this.props.removeHandler(file);
                        });
                    }
                };
        for(var i in this.props.opts){
            opts[i] = this.props.opts[i];
        }
        Dropzone.autoDiscover = false;
        $(node).dropzone(opts);
    },
    render:function(){
        return(
            <form className="dropzone" id={this.props.id}>

            </form>
           /* <div>dfdfd</div>*/

            );
	}
});
module.exports=Uploader;