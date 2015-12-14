/**
 * @module html
 *
 */

var React = require('react/addons');
var Deprecate = require("../utils/deprecate");
/**
 * 按钮组件
 * ```
 * 使用方法
 *var React = components.React;
 *var Button=components.Button;
 *var ButtonDemo=React.createClass(
 *     render:function(){
 *         return ( <Button  displayName="增加" disabledName="正在请求......" onClick={this._doAction} />);
 *     }
 * );
 *
 * 使用说明
 * <Button  displayName="增加" disabledName="正在请求......" onClick={this._doAction} />
 * disabled:些属性判断按钮是否可用disabled：true此按钮不可用
 * disabledName：不可用时显示的名称
 * displayName: 按钮显示的名称
 * onClick:当点击该按钮时调用parent中的方法去执行
 * cssClass(String):按钮的显示样式,与Bootstrap相同,可选值包括:
     btn-default : 白色按钮样式;
     btn-primary : 蓝色按钮, 如果不传入此参数,取此值为默认值;
     btn-success : 绿色按钮, 一般表示成功;
     btn-info    : 浅蓝色按钮, 一般表示信息;
     btn-warning : 橙色按钮, 一般表示警告;
     btn-danger  : 红色按钮, 一般表示严重警告;
     btn-lg      : 尺寸设置为大;
     btn-sm      : 尺寸设置为小;
     btn-xs      : 尺寸设置为极小;
     btn-block   : 尺寸将填充满父元素;
     active      : 按钮将直接显示为已被按下.
 允许同时传入颜色和尺寸两个参数, 比如:"btn-danger btn-xs", 除此之外, 还有一些不常用的取值请参考Bootstrap官方网站.
 * customClass(String): 按照用户自定义的style进行显示, 自定义style代码需要放入css/style.css
 * ```
 * @class Button
 */
var Button=React.createClass({
    displayName:'Common Button',
    mixins: [Deprecate([["btnName","displayName"],["doAction","onClick"]])],
    getDefaultProps: function(){
        return{
          /**
           * @property {String} type 按钮类型,一般不需要传入
           * @default "button"
           */
            type:"button",
            displayName:"",
            disabled:false,
            onClick: null,
        }
    },
    getInitialState:function(){
        return {
            cssClass:'primary',
        };
    },
    onClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.onClick();
    },
    render:function(){
        var cssClass = this.props.cssClass?this.props.cssClass:'btn-primary';
        var className = this.props.customClass? this.props.customClass: "btn "+cssClass

        return (<button type={this.props.type} className={className} onClick={this.onClick} disabled={this.props.disabled?"disabled":""}>
                {this.props.disabled?this.props.disabledName?this.props.disabledName:this.props.displayName:this.props.displayName}
            </button>);
        }
});
module.exports=Button;
