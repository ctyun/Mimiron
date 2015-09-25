/**
 *  @module html
 *  
 */


var React = require('react/addons');
var BSSForm = require('../html/form');
var RegUtils = require('../utils/reg-utils');


/* 第一次 render
 getDefaultProps
 getInitialState
 componentWillMount
 render
 componentDidMount
 */
/* 第二次 render
 componentWillReceiveProps
 shouldComponentUpdate
 componentWillUpdate
 render
 componentDidUpdate
 */

/**
 * 
 *  input输入组件
 *  ```
 *  使用方法
 * var React = require('react');
 * var components=require("components");
 * var Input=components.Input;
 * var InputDemo=React.createClass(
 *     render:function(){
 *         return (<Input disName="名称" doChange={this._doChange}  />);
 *     }
 * );
 *  使用说明
 *  <Input disName="名称" doChange={this._doChange}  />
 *  disName:要显示的名称
 *  doChange:值改变时调用的事件
 *  onClick:点击时调用的事件
 *  value:默认值
 *  ```
 *  @class Input
 */
var Input=React.createClass({
    displayName:'Common Input',
    getDefaultProps:function(){
        return {
            /**
             * 不携带参数
             * @property {Function} onClick 点击事件
             */
            onClick:null,
            /**
             * 默认样式
             * ```
             * 可选值:
             * "input-nm":  普通(宽120px)
             * "input-md":  较小(宽70px)
             * "input-xs":  非常小(宽30px)
             * ```
             * @property {String} cssClass 用于css样式的class
             * @defualt "input-nm"
             *
             */
            cssClass : "input-nm",
            /**
             * @property isPassword {Boolean} 是否为密码框
             * @default false
             */
            isPassword: false,

        };
    },
    getInitialState:function(){
        return {
            dis:false,
            defValue:""
        };
    },

    componentWillReceiveProps:function(){

        this.setState({
            /**
             * @property {String} value 默认值
             */
            defValue:this.props.value
        })
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                defValue:this.props.value
            })
        }
    },


    _onChange:function(e){
        var v= e.target.value;
        var n= e.target.name;

        var obj={};

        this.setState({
            defValue:v
        });

        if(this.props.reg){
            if(!RegUtils.validate(this.props.reg,v)){
                BSSForm.setErrorMsg(n,this.props.errorMsg);
            } else{
                BSSForm.setErrorMsg(n,"");
            }
        }else{
            BSSForm.setErrorMsg(n,"");
        };
        if(n){
            obj[n]=v;
        }else{
            obj[v]=v;
        }
        if(this.props.doChange){
            this.props.doChange(obj);
        }
    },
    componentDidMount : function(){
        if(this.props.value){
            this._onChange({target:{value:this.props.value,name:this.props.name}});
        }
    },
    render:function(){
        var name="";
        if(this.props.disName){
            name=this.props.disName
        };
        var v=this.state.defValue;
        var className = "form-control "+this.props.cssClass;
        /**
         * @property {String} errorMsg 错误提示信息
         * @uses BSSForm
         */
        /**
         * ```
         * 可选值:
         * "number" : 数字
         * ```
         * @property {String} reg 正则规则
         */
        return <span>{name}<input  id={this.props.id} name={this.props.name} errorMsg={this.props.errorMsg} reg={this.props.reg} className={className} onChange={this._onChange} onClick={this.props.onClick}   value={v}  type={this.props.isPassword?"password":null}/></span>;
    }
});
module.exports=Input;
