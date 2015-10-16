/**
 * @module BSSFrame
 */

var React = require('react');
var TopBar = require("./topbar");
var SideBar = require("./sidebar");
var Route = require("./route");
/**
 * 这是BSS系统业务页面的框架, 将页面需要展示的内容作为children即可, 需要传输参数userName, 将显示在右上角.
 * 例子:
 * ```
 * var ThisPage = React.createClass({
	render: function(){
		return(<BSSFrame userName = {getUserName()}>
				<p> i am sample </p>
				<Button btnName="增加" disabledName="正在请求......" doAction={this._doAction}/>
			</BSSFrame>)
	},
	_doAction: function(){
		alert("123");
	}
});
 * ```
 * @class BSSFrame
 */
var BSSFrame = React.createClass({
	displayName: 'Frame',
	getDefaultProps: function(){
        return{
        	userName:"TEST",
        }
    },
    componentDidMount: function(){
	    Tools.loadScript(["../js/dist/frame/theme.js"]);
	},
	render: function(){
		return(<div>
			<TopBar userName={this.props.userName}/>
			<div id="wrapper">
				<SideBar />
				<div id="page-wrapper">
					{this.props.children}
				</div>
			</div>
		</div>)
	}
});

module.exports = BSSFrame;