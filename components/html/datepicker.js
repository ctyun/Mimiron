/**
 * @module html
 */
var React = require('react/addons');
var $ = require('jquery');
require("jquery-ui");
/**
 * 日期选择组件
 * ```
 * 使用方法
 * var React = require('react');
 * var components=require("components");
 *var DataPicker=components.DataPicker;
 * var DataPickerDemo=React.createClass(
 *     render:function(){
 *         return (<DataPicker id="startTime_id"  name="时间" dateFormat="yy-mm"/>);
 *     }
 * );
 * 使用说明
 * <DataPicker id="startTime_id"  name="时间" dateFormat="yy-mm"/>
 *  id:该组件的id要唯一
 *  name:日期组件显示的名称
 *  dateFormat：日期格式类型 yy-mm格式化为年－月,yy-mm-dd格化为年－月－日
 *  要想获取该日期所选择的值，调用DatePicker.getDataValue()方法
 * ```
 * @class DatePicker
 *
 */
var DatePicker=React.createClass({
    displayName:'DataPicker',
    statics:{
        id:'DataPicker',
        /**
         * @static
         * @method
         * @param id  日期控件所在id
         * @returns {string} 返回选择的日期值
         */
        getDataValue:function(id){
            var v="";
            if(id){
                v=$('#'+id).val();
            }else{
                v=$('#'+DatePicker.id).val();
            }

            return v;
        }
    },
    getInitialState : function(){
        return {
            elem:{}

        };
    },
    componentDidMount:function(){
        var node=this.getDOMNode();
        this.state.elem=node;
    },
    render:function(){
        if(this.props.id){
            DatePicker.id=this.props.id;
        };
        var foramt="yy-mm-dd";
        if(this.props.dateFormat){
            foramt=this.props.dateFormat;
        }
        var name="请选择日期";
        if(this.props.name){
            name=this.props.name;
        }
        $('#'+this.props.id).datepicker({dateFormat:foramt,changeMonth: true,
            changeYear: true
            });
        return (<span>{name}<input type='text'  className="form-control input-md" id={this.props.id}  /></span>);
    }
});

module.exports=DatePicker;