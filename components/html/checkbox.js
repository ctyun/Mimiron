/**
 * @module html
 */

var React = require('react/addons');
var Debug = require("../utils/debug");

/**
 * ```
 * 注意: 需要放在CheckboxGroup中使用
 * <Checkbox id="1" dispName="checkbox1" value="1" onClick={this.checkboxClick}/>
 * ```
 * @class Checkbox
 */
var Checkbox=React.createClass({
    displayName:'CheckNode',
    getDefaultProps: function(){
        return{
            /**
             * @property {String} id 对应html中的id
             */
            id : "checkbox default id",
            /**
             * @property {String} value 对应html中的value
             */
            value : "checkbox default value",
            /**
             * **注意: 在父组件CheckboxGroup中传入`multi`参数会覆盖其中所有Checkbox的`type`, 按照正常使用情况, 不应该给Checkbox传入type!**
             * ```
             * 可选值:
             * "checkbox":  复选框
             * "radio"   :  单选框
             * ```
             * @property {String} type 类型
             */
            type : "checkbox",
            /**
             * **注意: 在父组件CheckboxGroup中传入`name`参数会覆盖其中所有Checkbox的`name`, 按照正常使用情况, 不应该给Checkbox传入name!**
             * @property {String} name 对应html的name
             */
            name: "checkbox default name",
            /**
             * @property {String} dispName 显示的文字
             */
            dispName: "checkbox default dispname",
            /**
             * ```
             * 携带两个参数:
             * 1. 点击项的name
             * 2. 点击项的value
             * ```
             * @property {Function} onClick 进行选择时的回调函数
             */
            onClick: function(){return},
        }
    },
    getInitialState:function(){
        return {
            dis:false,
            cssClass:'primary'
        };
    },
    onClick: function(){
        this.props.onClick(this.props.name,this.props.value);
    },
    render:function(){
        return (<span> <input type={this.props.type} id={this.props.id} value={this.props.value} name={this.props.name} onClick={this.onClick}/> {this.props.dispName}
            </span>);
        }
});
module.exports=Checkbox;
