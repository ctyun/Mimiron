/**
 * Created by chenth on 15-7-15.
 * 二级联动select
 * @module CascadeSelect
 *
 * @example
 * ```
 * 使用方法
 * var React = require('react');
 * var components=require("components");
 * var CascadeSelect=components.CascadeSelect;
 * var CascadeSelectDemo=React.createClass(
 *     render:function(){
 *         return (<CascadeSelect firstDisName="一级" secondDisName="二级"  firsDefaultValue="2" data={[{value:'1',text:'显示2'},{value:'2',text:'显示1'}]} url="api/test/autoselect"  />);
 *     }
 * );
 *使用说明
 *<CascadeSelect firstDisName="一级" secondDisName="二级"  firsDefaultValue="2" data={[{value:'1',text:'显示2'},{value:'2',text:'显示1'}]} url="api/test/autoselect"  />
 *firstDisName:一级显示名称
 * secondDisName:二级显示名称
 * firsDefaultValue:一级显示值
 * data:一级下拉填充数据
 * url:一级下拉选择时，二级下拉联动时后台请求的url
 *
 * ```
 */
var React=require("react/addons");
var Select=require("./select");
var AjaxUtils = require('../utils/ajax');
/**
 * @class CascadeSelect
 */
var CascadeSelect=React.createClass({
getInitialState : function(){
    return {
        /**
         *显示的数据
         * @static
         * @property data
         * @type Array
         * @default []
         */
        data:[],
        /**
         * ajax 调用后台的url
         * @static
         * @property url
         * @type String
         * @default ""
         */
        url:this.props.url,
        /**
         * 连动select默认值
         * @static
         * @property secondDefaultValue
         * @type String
         * @default ""
         */
        secondDefaultValue:""
    };
},
_fetch:function(value){
    var path=getPath();
    var self=this;
    AjaxUtils.get(this.state.url,function(d){
        self.setState({
            data:d,
            secondDefaultValue:""
        })
    });
},
_cascadeSelect:function(v){
    this.setState({
        data:[],
        secondDefaultValue:""
    });

    this._fetch(v);
},
onSelect:function(v){
    if(this.props.onSelect){
        this.props.onSelect(v);
    }
},
render:function(){
        return (<div><Select disName={this.props.firstDisName} onSelect={this._cascadeSelect} defaultValue={this.props.firsDefaultValue} data={this.props.data} /><Select disName={this.props.secondDisName} onSelect={this._onSelect} defaultValue={this.state.secondDefaultValue} data={this.state.data} /></div>)
    }
});
module.exports=CascadeSelect;