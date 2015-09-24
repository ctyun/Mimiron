/**
 * Created by chenth on 15-7-24.
 * 基本的面板组件
 *@module BSSPanel
 *@example
 * [点我打开百度](http://www.baidu.com/)
 *```
 *
 * var React = require('react');
 *
 * var components=require("components");
 * var BSSPanel=components.BSSPanel;
 * var QueryPanel=components.QueryPanel;
 * var Input=components.Input;
 * var ToolBarPanel=components.ToolBarPanel;
 * var Button=components.Button;
 *

 * var BSSPanelDemo=React.createClass(
 *     render:function(){
 *         return ( <BSSPanel pageTitle = "示例Panel">
                 <QueryPanel submitAction={queryMetadata} jsonFormat={true} okButtonName="查询(请看console)">
                 <Input disName=" 示范输入:" name="demoInput"/>
                 </QueryPanel>
                 <ToolBarPanel>
                 <Button btnName="增删查改"/>
                 </ToolBarPanel>
                 </BSSPanel>);
 *     }
 * );
 *
 * 使用说明
 * <BSSPanel pageTitle = "示例Panel">
 <QueryPanel submitAction={queryMetadata} jsonFormat={true} okButtonName="查询(请看console)">
 <Input disName=" 示范输入:" name="demoInput"/>
 </QueryPanel>
 <ToolBarPanel>
 <Button btnName="增删查改"/>
 </ToolBarPanel>
 </BSSPanel>
 *```
 */
var React=require("react/addons");
var Header = require('./header');
/**
 * @class BSSPanel
 *
 */
var BSSPanel=React.createClass({

    render:function(){
	    var name=this.props.pageTitle;

	    return <div>
		        <Header pageTitle={name} />
		        <div className="page-content">
		            {this.props.children}
		        </div>
	        </div>
    }
});



module.exports=BSSPanel;
