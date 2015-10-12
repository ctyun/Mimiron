/**
 * @module BSSFrame
 */

var React = require('react');
var TopBar = require("./topbar");
var SideBar = require("./sidebar");
/**
 * 用于天翼云业务管理系统的页面框架, 还没确定最终用法, 直接看代码吧.
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