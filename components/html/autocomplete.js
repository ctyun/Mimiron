/**
 * Created by chenth on 15-7-15.
 * 自动完成
 * @module Autocomplete
 * @example
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
 *
 */
var React=require("react/addons");

var $ = require('jquery');
//require("jquery-ui");
var APIUtils = require('../utils/api-utils');
var AjaxUtils = require('../utils/ajax');


var AutocompleteCache = {};//查询结果缓存
/**
 * @class Autocomplete
 */
var Autocomplete=React.createClass({
    statics:{
        /**
         *
         * 获取数据后端ajax 请求地址
         * @static
         * @property url
         * @type String
         * @default ""
         *
         */
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
         *
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
        var url=this.props.url;
        Autocomplete.url=url;

        var disName="";
        if(this.props.id){
            Autocomplete.id=this.props.id;
        }
        if(this.props.name){
            disName=this.props.name;
        }
        $( "#"+Autocomplete.id ).autocomplete({
            minLength:2,
            source: function(request,response){
                var path=getPath();
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
