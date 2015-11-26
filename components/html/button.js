/**
 * @module html
 *
 */

var React = require('react/addons');
/**
 * 按钮组件
 * ```
 * 使用方法
 *var React = components.React;
 *var Button=components.Button;
 *var ButtonDemo=React.createClass(
 *     render:function(){
 *         return ( <Button  btnName="增加" disabledName="正在请求......" doAction={this._doAction} />);
 *     }
 * );
 *
 * 使用说明
 * <Button doAction={this.clickButton} code="" btnName="增加" disabledName="正在请求......" />
 * disabled:些属性判断按钮是否可用disabled：true此按钮不可用
 * disabledName：不可用时显示的名称
 * doAction:当点击该按钮时调用parent中的方法去执行
 * id:按钮的id, 用于直接操作DOM, 一般不应传入此参数
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
 * actions:该菜单所有的操作编码
 * code:当前按钮的操作编码
 * ```
 * @class Button
 */
var Button=React.createClass({
    displayName:'Common Button',

    getInitialState:function(){
        return {
            dis:false,
            cssClass:'primary'
        };
    },
    _doClick:function(e){ //e is short for event
      e.preventDefault()
      if(this.props.doAction){
        /**
         * @property {Function} doAction 点击按钮时的回调函数
         */
          this.props.doAction(e);
      }
    },
    getDefaultProps: function(){
        return{
          /**
           * @property {String} type 按钮类型,一般不需要传入
           * @default "button"
           */
            type:"button",
        }
    },
    render:function(){
        var name="";
        /**
         * @property {Boolean} disabled 是否禁用
         */
        var dis = this.props.disabled;
        /**
         * ```
         * 可选值包括:
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
           ```
         * @property {String} cssClass 用于指定css样式的Class
         * @default "btn-primary"
         */
        var cssClass = this.props.cssClass?this.props.cssClass:'btn-primary';
        var className = this.props.customClass? this.props.customClass: "btn "+cssClass
        if(dis&&dis==true){
            return <button type={this.props.type} className={className} >{this.props.disabledName}</button>; //cannot use class=XX , use className=XX instead
        }
        if(this.props.btnName){
          /**
           * @property {String} btnName 显示名称
           */
            name=this.props.btnName
        };
        /**
         * @property {Function} actions 该菜单所拥有的的操作
         */
        var actions=this.props.actions;
        /**
         * @property {?} code 该按钮对应的操作编码
         * @type {[type]}
         */
        var code=this.props.code;
        //var isDisplay=false;//默认是不显示
        var isDisplay=true;//没有实现该处理，所以默认全部显示
        if(actions){
            if(code){
                var l=actions.length;
                for(var i=0;i<l;i++){
                    var obj=actions[i];
                    if(obj==code){
                        isDisplay=true;
                        break;
                    }
                }
            }
        };

    return (isDisplay?<button type={this.props.type} className={className} onClick={this._doClick}>{name}</button>:null);
    }
});
module.exports=Button;
