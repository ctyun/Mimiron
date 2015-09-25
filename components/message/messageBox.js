/**
 * @module message
 */

var React=require("react/addons");
var $ = require('jquery');
var Modal=require("./modal");
var Button=require("../html/button");

/**
 * 消息提示框组件
 * ```
 * <Button btnName="触发MessageBox" doAction={MessageBox.show.bind(null,"i am title","i am message")} cssClass="btn-info" />
 * !!请勿实例化此组件,仅可使用show方法显示提示框!!
 * ```
 * @class MessageBox
 */
var MessageBox = React.createClass({
	statics:{
		title : null,
		message : null,
		/**
		 * 显示对话框
		 * @static
		 * @method show
		 * @param  {String} title   对话框标题
		 * @param  {String} message 对话框内容
		 */
		show : function(title,message){
			mb = (<Modal id="MessageBoxModal" title={title} submitAction={Modal.hide.bind(null,"MessageBoxModal")} >
			        <span>{message}</span> <br/>
					<br/>
			      </Modal>);
			$("body").append("<div id='MessageBox'></div>");
			React.render(mb, document.getElementById("MessageBox")); /*使用$("#"+this.props.uniqueID)会找不到节点, 原因不详*/
			$("#MessageBoxModal").modal();
		}
	},
	render : function(){
		return (<div></div>);
	}
});

module.exports = MessageBox;