/**
 *  @module html
 *  
 */


var React = require('react/addons');
var BSSForm = require('../html/form');
var RegUtils = require('../utils/reg-utils');
var Ajax = require("../utils/ajax");


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
 *         return (<Input disName="名称" doChange={this._doChange}  name="html_name" value={this.state.inputValue}/>);
 *     },
 *     _doChange: function(obj){
 *         
 *     }
 * );
 *  使用说明:
 *  <Input disName="名称" doChange={this._doChange}  />
 *  disName:要显示的名称
 *  doChange:值改变时调用的事件
 *  onClick:点击时调用的事件
 *  value:默认值
 *  name: 同html的name
 *  valid :(Object) 表单验证配置
 *    valid.type (String)类型, 可选值有:
 *      noEmpty
 *      int
 *      string
 *      email
 *      mobile-phone
 *      ajax
 *    valid.maxlength (int)最大长度
 *    valid.minlength (int)最小长度
 *    valid.handleResult (function)验证结束回调函数, 带有一个参数, 为Boolean型验证结果.
 *    valid.errorMsg (string) 错误提示
 *    valid.on (enum) "change"(默认)发生变化时进行校验, "blur"失去焦点时校验
 *    valid.url (string) 仅valid.type为"ajax"时有效, ajax验证的url
 *
 *  注意:
 *  由于React的数据单项绑定特性, 当input中value发生变化时, 新值不会体现在this.state.inputValue上, 如果需要取到当前用户输入, 可以在onChange方法中进行处理.
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
            valid:null,
            inRow:false,
            /**
             * @property disabled {Boolean} 是否disabled
             * @default false
             */
            disabled:false,

        };
    },
    getInitialState:function(){
        return {
            dis:false,
            value:"",
            validCss:""
        };
    },

    componentWillReceiveProps:function(nextProps){
        if(nextProps.value && nextProps.value!=this.state.value){
            this.setState({
                value:this.props.value
            });
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                value:this.props.value
            })
        }
    },
    checkValid: function(v){
        if(typeof v == "undefined"){
            v = this.state.value;
        }
        if(!RegUtils.validate(this.props.valid,v)){
            if(this.props.valid.handleResult)
                this.props.valid.handleResult(false);
            this.setState({validCss:"invalid"});
            return false;
        } else{
            if(this.props.valid.handleResult)
                this.props.valid.handleResult(true);
            this.setState({validCss:"valid"});
            return true;
        }
    },
    reset: function(){
        this.setState({validCss:"",value:""});
    },
    onChange:function(e){
        this.setState({
            value:e.target.value
        });
        if(this.props.valid && this.props.valid.on !="blur"){
            this.checkValid(e.target.value);
        }
        if(this.state.doChange){
            var toReturn = {}
            toReturn[e.target.name||e.target.value] = e.target.value;
            this.props.doChange(toReturn);
        }
    },
    onBlur: function(e){
        var _this = this;
        if(this.props.valid && this.props.valid["on"]=="blur"){
            if(this.props.valid["type"]=="ajax"){
                var params = {};
                params[e.target.name] = e.target.value;
                Ajax.post(this.props.valid["url"],params,function(r){
                    _this.setState({validCss:r["valid"]?"valid":"invalid"});
                })
            }
            else{
                this.checkValid(e.target.value);
            }
        }
        if(this.props.onBlur){
            var toReturn = {}
            toReturn[e.target.name||e.target.value] = e.target.value;
            this.props.onBlur(toReturn);
        }
    },
    componentDidMount : function(){
        if(this.props.value){
            this.onChange({target:{value:this.props.value,name:this.props.name}});
        }
    },
    render:function(){
        var name="";
        if(this.props.disName){
            name=this.props.disName
        };
        var v=this.state.value;
        var className = "form-control "+this.props.cssClass;
        var errorLable = this.state.validCss == "invalid"?<em className="invalid">{this.props.valid.errorMsg||"输入有误"}</em>:null;
        var spanCss = "";
        if(this.state.validCss == "valid"){
            spanCss = "state-success";
        }else if(this.state.validCss == "invalid"){
            spanCss = "state-error";
        }
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
        /**
         * @property {String} name 同html中的name
         */
        /**
         * @property {String} placeholder 同html
         */
        var toReturn = this.props.inRow?
            (<div className={"row "+spanCss}>
                <lable htmlFor={this.props.id} className="col-xs-3 control-label" title={name}>{name}</lable>
                <div className="col-xs-9">
                <input  id={this.props.id} name={this.props.name} reg={this.props.reg} className={className} onChange={this.onChange} onClick={this.props.onClick} onBlur={this.onBlur}  value={v}  type={this.props.isPassword?"password":null} placeholder={this.props.placeholder} valid={this.state.validCss} disabled={this.props.disabled}  />
                    {errorLable}
                </div>
            </div>):
            (<span className={spanCss}>
                {name}
                <input  id={this.props.id} name={this.props.name} reg={this.props.reg} className={className} onChange={this.onChange} onClick={this.props.onClick} onBlur={this.onBlur}  value={v}  type={this.props.isPassword?"password":null} placeholder={this.props.placeholder} valid={this.state.validCss} disabled={this.props.disabled}  />
                    {errorLable}
            </span>);
        return toReturn;
    }
});
module.exports=Input;
