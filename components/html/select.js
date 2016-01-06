/*
 *@module html
 */
var React=require("react/addons");
var RegUtils = require('../utils/reg-utils');
/**
 * 下拉列表组件
 *```
 * 使用方法
 *var React = require('react');
 *var components=require("components");
 *var Select=components.Select;
 *var SelectDemo=React.createClass(
 *     render:function(){
 *         return (<Select data={this.state.selectData} defaultValue="2" onSelect={this._onSelect}/>);
 *     }
 * );
 *
 * 使用说明
 *  <Select data={this.state.selectData} defaultValue="2" onSelect={this._onSelect}/>
 *  name: 同html 的name属性
 *  disName:显示在左边的名称
 *  data:select的下拉列表要显示的值,数据格式为：[{value:'1',text:'显示2'},{value:'2',text:'显示1'}]
 *  defaultValue:默认要显示的选项的value
 *  blankOpt: 未选择时显示的文字
 *  onSelect：选重下拉列表的值所触发的事件
 *  multiple:true
 *  支持多选
 *  noEmptyMsg:true
 *  不显示默认提示
 * ```
 * @class Select
 *
 */
var Select=React.createClass({
    locals:{
        onChange:false  //引入这个本地变量, 主要是为了满足需求: 当用户点击opt时, 可以修改this.state.value, 当父组件重新渲染时, 使用defaultValue作为this.state.value
    },
    _onChange:function(e){
        e.preventDefault();
        var v = e.target.value;
        var options=e.target.options;
        if(this.props.valid){
            this.checkValid(e.target.value);
        }
        if(this.props.multiple&&this.props.multiple==true){
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            };
            v=value;
        };
        this.setState({
            value:v
        });
        if(this.props.onSelect){
            this.props.onSelect(v);
        }
        this.locals.onChange = true;
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
        this.setState({validCss:"",value:undefined});
    },
    getDefaultProps:function(){
        return{
            disName:"",
            cssClass:"input-nm",
            defaultValue:"",
            blankOpt:"==请选择==",
            valid:null,
            name:"Mimiron-select",
        }       
    },
    getInitialState:function(){
        return {
            value:"",
            validCss:"",
        };
    },
    componentWillMount:function(){
        this.setState({
            value:this.props.defaultValue
        })
    },
    componentWillReceiveProps:function(nextProps){
        if(nextProps.data != this.props.data){
            if(nextProps.valid){
                if(this.checkValid(nextProps.defaultValue)){
                    this.setState({
                        value:nextProps.defaultValue,
                        validCss:"valid"
                    });
                }else{
                    this.setState({
                        value:nextProps.defaultValue,
                        validCss:"invalid"
                    });
                }
            }  
        }
        if(nextProps.defaultValue!=this.state.value){
            if(this.locals.onChange){
                this.locals.onChange = false;
            }else{
                if(nextProps.valid){
                    if(this.checkValid(nextProps.defaultValue)){
                        this.setState({
                            value:nextProps.defaultValue,
                            validCss:"valid"
                        });
                    }else{
                        this.setState({
                            value:nextProps.defaultValue,
                            validCss:"invalid"
                        });
                    }
                }  
            }
        }
    },
    render:function(){
        var data=this.props.data;
        var options=[];
        var noEmptyMsg=this.props.noEmptyMsg;
        if(data&&data.length>0){
            if(!noEmptyMsg){
                options.push(<option value="" >{this.props.blankOpt}</option>);
            }

            data.forEach(function(d){
                options.push(<option value={d.value} disabled={d.disabled?"disabled":""}>{d.text}</option>);
            });
        }else{
            if(!noEmptyMsg){
                options.push(<option>{this.props.blankOpt}</option>);
            }
        }
        var className = "form-control "+this.props.cssClass;
        var spanCss = "";
        if(this.state.validCss == "valid"){
            spanCss = "state-success";
        }else if(this.state.validCss == "invalid"){
            spanCss = "state-error";
        }
        var errorLable = this.state.validCss == "invalid"?<em className="invalid">{this.props.valid.errorMsg||"输入有误"}</em>:null;
        var toReturn = this.props.inRow?
            (<div className={"row "+spanCss}>
                <lable htmlFor={this.props.id} className="col-xs-3 control-label" title={this.props.disName}>{this.props.disName}</lable>
                <div className="col-xs-9">
                    <select name={this.props.name} value={this.state.value} multiple={this.props.multiple} className={className} onChange={this._onChange} style={this.props.style}>{options}
                    </select>
                    {errorLable}
                </div>
            </div>):
            (<span className={spanCss}>
                {this.props.disName}
                <select name={this.props.name} value={this.state.value} multiple={this.props.multiple} className={className} onChange={this._onChange} style={this.props.style}>{options}
                </select>
                {errorLable}
            </span>);
        return toReturn;
    }
});

module.exports=Select;