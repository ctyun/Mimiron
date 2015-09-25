/**
 * @module tabs
 */

var React = require('react/addons');
//var Debug = require("../utils/debug");

/**
 * 标签组件, 仅可在`Tabs`组件中使用.
 * ```
 * 示例:
 * <Tabs maxHeight="150px">
      <Tab title="111" id="1">
          <p>456</p><p>456</p><p>456</p><p>456</p><p>456</p><p>456</p>
      </Tab>
      <Tab title="222" id="2" isActive={true}>
          <p>789</p>
      </Tab>
</Tabs>
-title: 显示在标签上的文字
-id:    标签的id
-isActive: 默认选中
 * ```
 * @class Tab
 */
var Tab=React.createClass({
    displayName:'Tab',

    getInitialState:function(){
        return {
        };
    },
    getDefaultProps: function(){
        return{
        }
    },
    componentDidMount:function(){
    },
    render:function(){
        var className = "tab-pane fade "+ (this.props.isActive?"in active":"");
        return(
            <div className={className} id={this.props.id}>
        		{this.props.children}
			</div>);
	}
});
module.exports=Tab;