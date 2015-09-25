/**
 *@module panel
 */
var React=require("react/addons");
var Header = require('./header');
/**
 * 基本的面板组件
 *```
 * var React = components.React;
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
 *```
 * @class BSSPanel
 * @uses Heafer
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
