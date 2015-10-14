/**
 * @module BSSFrame
 */

var React = require('react');
var API = require("../const/API");
var Debug = require("../utils/debug");
var Ajax = require("../utils/ajax");

var H5 = require("../utils/h5");
var Route = require("../BSSFrame/Route");
/*
 * 由Route取代, 这里是临时使用
 */
var Link = React.createClass({
	displayName: "Link",
	getDefaultProps: function(){
        return{
        	to:"#",
        }
    },
	render: function(){
		return(<a href={"#"+this.props.to} onClick={this._onClick}>
				{this.props.children}
			</a>)
	},
    _onClick: function(){
        Route.goJSX(this.props.to);
        this.renewSelect(this.props.to);
    },
    renewSelect: function(){
        $("li").removeClass("active");
        console.log(this.props.to);
        $("a[href='#"+this.props.to+"']").parent().addClass("active");
    }
})

/**
 *
 * 侧边目录组件, 可以实现异步不刷新加载.jsx文件, 正确使用此组件需要下列条件:
 * 1. 使用\static\third目录下的JSXTransformer.js
 * 2. 在全局暴露Mimiron.RouteConfig, 保存路由信息, 例子如下:
 * ```
 * Mimiron.RouteConfig = {
    "../js/pages/index.jsx":/^\/$/ig,
    "../js/pages/sample.jsx":/sample$/ig,
    "../js/pages/login.jsx":/login$/ig,
    "../js/pages/manage-report-group.jsx":/report\/manageReportGroup/ig,
    "../js/pages/report-manage.jsx":/report\/manage$/ig,
    "../js/pages/report-config.jsx":/report\/config/ig,
    "../js/pages/metadata.jsx":/report\/metadata/ig,
    "../js/pages/show-report.jsx":/showReport\/[^\/*]/ig
    }
 * ```
 * ```
 * 组件示例:
 * <SideBar list={this.props.menu} />
 * ```
 * @class SideBar
 * 
 */ 
var SideBar = React.createClass({
    displayName: 'SideBar',
    getInitialState:function(){
		return {
            selectFlag:false,
			menu:null,
            list:[{}],
		}
	},
    componentWillMount: function(){
        var self = this;
        //从API中取登录用户可用的菜单
        var result = H5.localStorage.get("SideBar");
        if(result){
            this.FormSidebar(self,result);
            window.setTimeout("clickMenu()",200); //理论上可以立即操作, 但是实践中, jquery可以找到目标元素, 但是点击没有任何反应.
            return;
        }
    	Ajax.get(API.SIDE_BAR_MENU,function(d){
    		if(d){
                self.state.list = d.children;
            }
            self.FormSidebar(self,self.state.list);
            H5.localStorage.set("SideBar",self.state.list);
        });
    },
    componentDidMount: function(){
        window.clickMenu = function(url){
            var url = url||window.location.hash;
            url = url.split("/");
            url = "#/"+url[1]+"/"+url[2]; 
            var targetOpt = $("a[href='"+url+"']");
            if(targetOpt){
                if(targetOpt.parent().parent().prev().prop("tagName")=="A"){
                    var targetParent = targetOpt.parent().parent().prev();
                    if(targetParent.parent().parent().prev().prop("tagName")=="A"){
                        var targetGrandpa = targetParent.parent().parent().prev();
                        targetGrandpa.trigger("click");
                        targetParent.trigger("click");
                        targetOpt.parent().addClass("active");
                    }else{
                        targetParent.trigger("click");
                        targetOpt.parent().addClass("active");
                    }
                }else{
                    targetOpt.parent().addClass("active");
                }
            }
        }
        //update之后调用
        //clickMenu();
    },
    componentDidUpdate : function(prevProps,prevState){
        if(this.state.selectFlag){
            window.setTimeout("clickMenu()",200); //理论上可以立即操作, 但是实践中, jquery可以找到目标元素, 但是点击没有任何反应.
        }
    },
    render: function () {
        return (<div>
			    <nav id="sidebar" role="navigation" className="navbar-default navbar-static-side">
	            <div className="sidebar-collapse menu-scroll">
	                <ul id="side-menu" className="nav">
	                	<li></li>
	                    {this.state.menu}
	                </ul>
	            </div>
	        </nav>
        </div>);
    },
    dummyClick: function(e){
        //e.preventDefault();
    },
    FormSidebar: function(self,result){
        var list = self.props.list || result;
        var menu = (list && list.length) ? list.map(function(item, key) {
            if (item.children&&item.children.length==0&&item.url&&item.url.length>0) {
                return <li key={key}><Link to={item.url}><span className="menu-title">{item.name}</span></Link></li>
            } else {
                if (item.children && item.children.length>0) {
                    return (
                        <li key={key}>
                            <a href="#" onClick={self.dummyClick}>
                                <span className="menu-title">{item.name}</span>
                                <span className="fa fa-arrow arrow"></span>
                            </a>
                            <ul className="nav nav-second-level mtn collapse">
                                {item.children.map(function(sub, subKey) {

                                    if (sub.url&&sub.url.length>0) {
                                        return <li key={subKey}>
                                            <Link to={sub.url}><i className="fa fa-angle-right"></i><span className="submenu-title">{sub.name}</span></Link>
                                        </li>
                                    } else {
                                        if (sub.children && sub.children.length>0) {
                                            return (
                                                <li key={subKey}>
                                                    <a href="#" >
                                                        <i className="fa fa-angle-right"></i>
                                                        <span className="submenu-title">{sub.name}</span>
                                                        <span className="fa fa-arrow arrow"></span>
                                                    </a>
                                                    <ul className="nav nav-third-level mtn collapse">
                                                    {sub.children.map(function(third, thirdKey) {
                                                        return <li key={thirdKey}>
                                                            <Link to={third.url}>
                                                                <i className="fa fa-angle-double-right"></i>
                                                                <span className="submenu-title">{third.name}</span>
                                                            </Link>
                                                        </li>
                                                    })}
                                                    </ul>
                                                </li>
                                            )
                                        }
                                    }
                                    if(sub.url&&sub.url.length>0){
                                        return <li key={subKey}>
                                         <Link to={sub.url}>{sub.name}</Link>
                                        </li>
                                    }
                                })}
                            </ul>
                        </li>
                    )
                }
            }
        }) : false;
        self.setState({menu:menu,selectFlag:true});
    }
});

module.exports = SideBar;