/**
 * @module BSSFrame
 */

var React = require('react');
var Ajax = require("../utils/ajax");
var API = require("../const/API");
var H5 = require("../utils/h5");

/**
 * 导航条组件
 * ```
 * 示例:
 * <TopBar logout={this._logout} userName={this.props.userName}/>
 * ```
 * @class TopBar
 */
var TopBar = React.createClass({
    displayName: 'TopBar',
    getDefaultProps: function(){
        return{
        	/**
        	 * @property {Function} logout 注销按钮的回调函数
        	 */
        	logout:null,
        	/**
        	 * @property {String} userName 显示的用户名
        	 * @default "GUEST"
        	 */
        	userName:"GUEST",
        	/**
        	 * @property {String} title 显示的标题
        	 * @default "电信云公司业务系统"
        	 */
        	title:"电信云公司业务系统",
        }
    },
    _logout: function(e){
    	e.preventDefault();
    	H5.localStorage.clear("SideBar");
    	//清理前端权限
    	window.Mimiron.authorization =null;
    	if(this.props.logout){
    		this.props.logout()
    		return
    	}else{
    		Ajax.get(API.LOGOUT,function(d){
    			window.location.href = "/";
    		});

    	}
    },
    render: function () {
        return (<div>
		    <div id="header-topbar-option-demo" className="page-header-topbar">
		        <nav id="topbar" role="navigation" style={{"marginBottom": 0, "zIndex": 2}} className="navbar navbar-default navbar-static-top">
		            <div className="navbar-header">
		                <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" className="navbar-toggle"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
		                <a id="logo" href="index.html" className="navbar-brand"><span className="fa fa-rocket"></span><span className="logo-text">{this.props.title}</span><span style={{"display": "none"}} className="logo-text-icon">CT</span></a></div>
		            <div className="topbar-main">
		                <a id="menu-toggle" href="#" className="hidden-xs"><i className="fa fa-bars"></i></a>
		                <ul className="nav navbar navbar-top-links navbar-right mbn">
		                    <li className="dropdown topbar-user"><a data-hover="dropdown" href="#" className="dropdown-toggle"><span>{this.props.userName}</span>&nbsp;<span className="caret"></span></a>
		                        <ul className="dropdown-menu dropdown-user pull-left">
		                            <li><a href="extra-profile.html" onClick={alert.bind(this,"1")}><i className="fa fa-user"></i>个人设置</a></li>
		                            <li><a href="#" data-keep="yes" onClick={this._logout}><i className="fa fa-key"></i>注销</a></li>
		                        </ul>
		                    </li>
		                    <li className="dropdown hidden-xs"><a id="theme-setting" href="javascript:;" data-hover="dropdown"><i
		                            className="fa fa-cogs"></i></a>
		                        <ul className="dropdown-menu dropdown-theme-setting pull-right">
		                            <li><h4 className="mtn">Theme Styles</h4><select id="list-style" className="form-control">
		                                <option value="style1">Flat Squared style</option>
		                                <option value="style2">Flat Rounded style</option>
		                                <option value="style3">Flat Border style</option>
		                            </select></li>
		                            <li><h4 className="mtn">Menu Styles</h4><select id="list-menu" className="form-control">
		                                <option value="sidebar-default">Menu style 1</option>
		                                <option value="sidebar-colors">Menu style 2</option>
		                                <option value="sidebar-icons">Menu style 3</option>
		                                <option value="sidebar-collapsed">Menu style 4</option>
		                            </select></li>
		                            <li><h4 className="mtn">Theme Colors</h4>
		                                <ul id="list-color" className="list-unstyled list-inline">
		                                    <li data-color="green-dark" data-hover="tooltip" title="Green - Dark" className="green-dark"></li>
		                                    <li data-color="red-dark" data-hover="tooltip" title="Red - Dark" className="red-dark"></li>
		                                    <li data-color="pink-dark" data-hover="tooltip" title="Pink - Dark" className="pink-dark"></li>
		                                    <li data-color="blue-dark" data-hover="tooltip" title="Blue - Dark" className="blue-dark"></li>
		                                    <li data-color="yellow-dark" data-hover="tooltip" title="Yellow - Dark" className="yellow-dark"></li>
		                                    <li data-color="green-grey" data-hover="tooltip" title="Green - Grey" className="green-grey"></li>
		                                    <li data-color="red-grey" data-hover="tooltip" title="Red - Grey" className="red-grey"></li>
		                                    <li data-color="pink-grey" data-hover="tooltip" title="Pink - Grey" className="pink-grey"></li>
		                                    <li data-color="blue-grey" data-hover="tooltip" title="Blue - Grey" className="blue-grey"></li>
		                                    <li data-color="yellow-grey" data-hover="tooltip" title="Yellow - Grey" className="yellow-grey"></li>
		                                    <li data-color="yellow-green" data-hover="tooltip" title="Yellow - Green" className="yellow-green"></li>
		                                    <li data-color="orange-grey" data-hover="tooltip" title="Orange - Grey" className="orange-grey"></li>
		                                    <li data-color="pink-blue" data-hover="tooltip" title="Pink - Blue" className="pink-blue"></li>
		                                    <li data-color="pink-violet" data-hover="tooltip" title="Pink - Violet" className="pink-violet active"></li>
		                                    <li data-color="orange-violet" data-hover="tooltip" title="Orange - Violet" className="orange-violet"></li>
		                                    <li data-color="pink-green" data-hover="tooltip" title="Pink - Green" className="pink-green"></li>
		                                    <li data-color="pink-brown" data-hover="tooltip" title="Pink - Brown" className="pink-brown"></li>
		                                    <li data-color="orange-blue" data-hover="tooltip" title="Orange - Blue" className="orange-blue"></li>
		                                    <li data-color="yellow-blue" data-hover="tooltip" title="Yellow - Blue" className="yellow-blue"></li>
		                                    <li data-color="green-blue" data-hover="tooltip" title="Green - Blue" className="green-blue"></li>
		                                </ul>
		                            </li>
		                        </ul>
		                    </li>
		                </ul>
		            </div>
		        </nav>
		    </div> 
        </div>);
    }
});

module.exports = TopBar;