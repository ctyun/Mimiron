/**
 * @module tabs
 */
var React = require('react/addons');
//var Debug = require("../utils/debug");

/**
 * 标签页组件
 * ```
 * <Tabs maxHeight="300px">
        <Tab title="111" id="1">
            <p>456</p><p>456</p><p>456</p><p>456</p><p>456</p><p>456</p>
        </Tab>
        <Tab title="222" id="2" isActive={true}>
            <p>789</p>
        </Tab>
    </Tabs>
 * ```
 * @class Tabs
 */
var Tabs=React.createClass({
    displayName:'Tabs',
    getInitialState:function(){
    	return{}
    },
    getDefaultProps: function(){
        return{
            /**
             * @property {String} maxHeight 最大高度,超出此高度后出现滚动条
             * @default "auto"
             * @example
             * "400px"
             */
            maxHeight:"auto"
        }
    },
    componentWillMount:function(){
    },
    render:function(){
    	var ul = [];
		this.props.children.forEach(function(node){
				var href = "#"+node.props.id;
				ul.push (
					<li className={node.props.isActive?"active":null}>
				      <a href={href} data-toggle="tab">
				         {node.props.title}
				      </a>
				    </li>
				);
			}
		);
        return(
        	<div>
        		<ul className="nav nav-tabs">
        			{ul}
        		</ul>
                <div className="tab-content need-scroll" style={{"max-height":this.props.maxHeight}}>
        		  {this.props.children}
                </div>
			</div>);
	}
});
module.exports=Tabs;