/**
 * @module resources
 */
var React = require('react/addons');
var Dropzone = require("dropzone");
//var Debug = require("../utils/debug");

/**
 * 上传工具组件
 * ```
 * <Tabs maxHeight="300px">
        <Tab title="111" id="1">
            <p>456</p><p>456</p><p>456</p><p>456</p><p>456</p><p>456</p>
        </Tab>
        <Tab title="222" id="2" isActive={true}>
            <p>789</p>
        </Tab>
    </Tabs>
 * ```
 * @class Uploader
 */
var Uploader=React.createClass({
    displayName:'Upload',
    getInitialState:function(){
    	return{}
    },
    getDefaultProps: function(){
        return{
        }
    },
    componentWillMount:function(){
    },
    render:function(){
        return(
        	<div >
                <form action="/file-upload"
                  className="dropzone"
                  id="my-awesome-dropzone">
                </form>
			</div>);
	}
});
module.exports=Uploader;