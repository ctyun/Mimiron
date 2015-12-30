/**
 * @module html
 *
 */

var React=require("react/addons");
var Button=require("../html/button");
var $=require("jquery");
/**
 * 表单组件
 *```
 *使用方法
 *var React = require('react');
 *var components=require("components");
 *var BSSForm=components.BSSForm;
 * var BSSFormDemo=React.createClass(
 *     render:function(){
 *         return ( <BSSForm submitAction={this.submitAction} jsonFormat=true disabledName＝"不可用" disabledSubmitBtn＝"false" okButtonName="保存"></BSSForm>);
 *     }
 * );
 * 使用说明
 *
 * * <BSSForm submitAction={this.submitAction} jsonFormat=true disabledName＝"不可用" disabledSubmitBtn＝“false” okButtonName="保存"></BSSForm>
 *  -submitAction(必须）
 *   form表单按钮提交时回调方法, 携带一个参数param, 保存表单的内容
 *  -jsonFormat  true|false
 *    form表单序列化数据是否为json格式
 *  -okButtonName
 *   此参数非必须, form表单按钮名称默认为查询
 *  -disabledSubmitBtn:true|false 默认为false
 *   此参数非必须
 *   是否在提交form表达时禁用提交按钮
 *  -disabledName:
 *   此参数非必须
 *   禁用提交按钮时显示的名称
 *  -checkValid: 
 *   提交时需要校验的元素
 *
 * 此组件使用可参考QueryPanel使用
 *```
 * @class BSSForm
 */
var BSSForm=React.createClass({
    statics:{
        check: function(checkList){
            var chcekResult = true;
            for(var ins in checkList){
                if(checkList[ins]){
                    chcekResult = checkList[ins].checkValid() && chcekResult;
                }else{
                    console.info("未找到表单检查项:"+checkList[ins]);
                }
                
            }
            if(chcekResult){
                for(var ins in checkList){
                    if(checkList[ins]){
                      checkList[ins].reset();
                    }else{
                      console.info("未找到表单重置项:"+checkList[ins]);
                    }
                    
                }
                return true;
            } else{
                return false;
            }
        }
    },
    getInitialState : function(){
        return {
            elem:{}

        };
    },
    getDefaultProps : function(){
        return{
            id:"BSSForm-default-id",
            checkValid:[],
            okButtonCss:null,
        };
    },
    componentDidMount:function(){
        var node=this.getDOMNode();
        this.state.elem=node;
    },

    _submitAction:function(e){
        var node=this.state.elem;
        var param={};
        param=$(node).serialize();
        if(this.props.submitAction){
            param=$(node).serialize();
            param=decodeURIComponent(param,true);
            if(this.props.jsonFormat&& this.props.jsonFormat==true){
              var json={};
              var vs=param.split("&");
              if(vs.length>1){
                for(var i in vs){
                      var obj= vs[i].split("=");
                      json[obj[0]]=obj[1];
                  };
              }else{
                var obj= vs[0].split("=");
                json[obj[0]]=obj[1];
              }
              
              this.props.submitAction(json, e);
          } else{
              this.props.submitAction(param, e);
          }
       }
    },
    render:function(){
        var okName="确定";
        var props=this.props;
        var node=this.state.elem;

        if(this.props.okButtonName){
            okName=this.props.okButtonName;
        };
        return (<form  {...props}>{this.props.children}{this.props.hideDefaultButton&&this.props.hideDefaultButton==true?null:<Button displayName={okName} disabledName={this.props.disabledName} disabled={this.props.disabledSubmitBtn}   onClick={this._submitAction} type="submit" style={this.props.okButtonCss}/>}</form>);
    }
});
module.exports=BSSForm;