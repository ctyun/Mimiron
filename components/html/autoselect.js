/**
 * @module html
 */
var React=require("react/addons");
var Select=require("./select");
var AjaxUtils = require('../utils/ajax');
/**
 * ```
 * 使用方法
 * var React = components.React;
 * var AutoSelect=components.AutoSelect;
 * var AutoSelectDemo=React.createClass(
 *     render:function(){
 *         return (<AutoSelect url="api/test/autoselect" disName="动态select" onSelect={this.autoSeleect} defaultValue="333" />);
 *     }
 * );
 * 使用说明
 * 通过url自动加载select
 *  <AutoSelect url="api/test/autoselect" disName="动态select" onSelect={this.autoSeleect} defaultValue="333" />
 *  disName:显示在左边的名称
 *  url:动态换取下拉列表后台请求url,请求方式get, 返回数据格式为：[{value:'1',text:'显示2'},{value:'2',text:'显示1'}]
 *  defaultValue:默认要显示的值
 *  onSelect：选重下拉列表的值所触发的事件
 * ```
 * @class AutoSelect
 * @uses Select
 */
var AutoSelect=React.createClass({
    getInitialState : function(){
        return {
            data:[]

        };
    },
  _fetch:function(url){
      var path=getPath();
      var self=this;
      AjaxUtils.get(path+url,function(d){
          self.setState({
              data:d
          })
      });
  },
componentWillReceiveProps:function(){
  /**
   * @property {String} url 取数据的URL
   */
        var url=this.props.url;
        this._fetch(url);
    },

_onSelect:function(v){
  /**
   * 
   * @property {Function} onSelect 选中选项时的回调函数, 包含一个参数:选中的value
   */
        if(this.props.onSelect){
            this.props.onSelect(v);
        }
    },
render:function(){
     return <Select {...this.props} data={this.state.data} />
    }
});

module.exports=AutoSelect;