/**
 * @module html
 */
var React=require("react/addons");

var $ = require('jquery');
//require("jquery-ui");
var APIUtils = require('../utils/api-utils');
var AjaxUtils = require('../utils/ajax');


var AutocompleteCache = {};//查询结果缓存
/**
 * 自动完成
 * ```
 * 使用方法
 * var React = require('react');
 * var components=require("components");
 * var Autocomplete=components.Autocomplete;
 * var AutocompleteDemo=React.createClass(
 *     render:function(){
 *         return (<Autocomplete name="动态下拉" url="/api/test/ajax" />);
 *     }
 * );
 * ```
 * @class Autocomplete
 */
var Autocomplete=React.createClass({
    statics:{
        url:'',
        id:'autocomplete_id', 
        ajax:function(value,suc){
            var v={
                value:value
            };
            AjaxUtils.postForm(Autocomplete.url,v,suc);
        },
        /**
         * 返回所有已选中的值
         * @static
         * @method getValue
         * @return {String} 返回所有的已选择的值
         */
        getValue:function(){
            var v=$("#"+Autocomplete.id).val();
            return v;
        }
    },
    getInitialState:function(){
      return {
          url:''
      }
    },

    render:function(){
        /**
         * @property {String} url ajax请求URL
         */
        var url=this.props.url;
        Autocomplete.url=url;

        var disName="";
        /**
         * @property {String} id id
         */
        if(this.props.id){
            Autocomplete.id=this.props.id;
        }
        /**
         * @property {String} name 显示的名称
         * @required
         */
        if(this.props.name){
            disName=this.props.name;
        }
        $( "#"+Autocomplete.id ).autocomplete({
            minLength:2,
            source: function(request,response){
                var term = request.term;
                if (term in AutocompleteCache) {
                    response(AutocompleteCache[term]);
                    return;
                }
                Autocomplete.ajax(request.term,function(d){
                    AutocompleteCache[term] = d;
                    response(d);
                });


            }
        });
        return (<span><label >{disName}: </label> <input className="form-control input-nm" id={Autocomplete.id} /></span>);
    }
});
module.exports=Autocomplete;
