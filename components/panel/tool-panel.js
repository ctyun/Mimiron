    /**
     * Created by chenth on 15-7-24.
     * 工具栏面板
     * @module ToolBarPanel
     * @example
     * ```
     * 使用方法
     *var React = require('react');
     *var components=require("components");
     *var ToolBarPanel=components.ToolBarPanel;
     *var Button=components.Button;
     * var ToolBarPanelDemo=React.createClass(
     *     render:function(){
     *         return ( <ToolBarPanel><Button btnName="增删查改"/></ToolBarPanel>);
     *     }
     * );
     * 使用说明
     *  <ToolBarPanel>
     *<Button btnName="增删查改"/>
     *</ToolBarPanel>
     * ```
     */
var React=require("react/addons");

    /**
     * @class ToolBarPanel
     */
var ToolBarPanel=React.createClass({
	getDefaultProps : function(){
    	return {
    		title:"",
    	}
    },
    render:function(){
        return (<div className="portlet-header pam mbn">
	              <div className="caption">{this.props.title}</div>
	              <div className="actions">
	                {this.props.children}
	              </div>
	            </div>)
    }
});


module.exports=ToolBarPanel;
