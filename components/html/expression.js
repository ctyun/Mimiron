/**
 * Created by chenth on 15-7-15.
 * 查询表达式列表组件
 * @module ExpressionSelect
 * @example
 * ```
 * 使用方法
 * var React = require('react');
 * var components=require("components");
 *var ExpressionSelect=components.ExpressionSelect;
 * var ExpressionSelectDemo=React.createClass(
 *     render:function(){
 *         return (<ExpressionSelect onSelect={_onSelect} />);
 *     }
 * );
 * 使用说明
 *<ExpressionSelect onSelect={_onSelect} />
 * onSelect 选择表达式回调事件
 * ```
 */

var React=require("react/addons");
var Select=require("./select");
/**
 * @class ExpressionSelect
 */
var ExpressionSelect=React.createClass({
    getInitialState:function(){
    return {
        /**
         * 表达式默认值
         * @static
         * @property selectData
         * @type Array
         * @default []
         */
        selectData:[{value:'1',text:'等于'},{value:'2',text:'大于'},{value:'3',text:'小于'},{value:'4',text:'大于等于'},{value:'5',text:'小于等于'},{value:'6',text:'包含'}]
    }
},
_onSelect:function(v){
    if(this.props.onSelect){
        this.props.onSelect(v);
    }

},
render:function(){
    return(<Select data={this.state.selectData} noEmptyMsg={true} name={this.props.name} defaultValue="1" onSelect={this._onSelect} />);

}
});

module.exports=ExpressionSelect;
