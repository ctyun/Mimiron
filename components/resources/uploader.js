/**
 * @module resources
 */
var React = require('react/addons');
var Dropzone = require("dropzone");
var API = require("../const/API");
//var Debug = require("../utils/debug");

/**
 * 上传工具组件
 * ```
 * ```
 * @class Uploader
 */
var Uploader=React.createClass({
    getInitialState:function(){
    	return{}
    },
    getDefaultProps: function(){
        return{
            handler : API.UPLOAD,
        }
    },
    componentWillMount:function(){
    },
    componentDidMount:function(){
        var node=this.getDOMNode();
        $(node).dropzone({ url: this.props.handler });
    },
    render:function(){
        return(
            <form
              className="dropzone"
              id="my-awesome-dropzone">
            </form>);
	}
});
module.exports=Uploader;