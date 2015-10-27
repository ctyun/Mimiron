/**
 *@module panel
 */
var React=require("react/addons");
var Header = require('./header');
/**
 * 业务页面基本面板组件, <BSSPanel>框起来的范围是可见范围, 建议将默认隐藏的元素(<Modal>,<MessageBox>等移出此标签)
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
                     <QueryPanel submitAction={this.queryMetadata} jsonFormat={true} okButtonName="查询(请看console)">
                        <Input disName=" 示范输入:" name="demoInput"/>
                     </QueryPanel>
                     <ToolBarPanel>
                        <Button btnName="增删查改"/>
                     </ToolBarPanel>
                 </BSSPanel>);
 *     },
 *     queryMetadata: function(){
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
