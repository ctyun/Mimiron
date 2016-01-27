/**
 * @module html
 */
var React = require('react/addons');
//var $ = require('jquery');
require("jquery-ui");
/**
 * 日期选择组件
 * ```
 * 使用方法
 * var React = require('react');
 * var DataPickerDemo=React.createClass(
 *     render:function(){
 *         return (<DataPicker id="startTime_id"  name="时间" dateFormat="yy-mm"/>);
 *     }
 * );
 * 使用说明
 * <DataPicker id="startTime_id"  name="时间" dateFormat="yy-mm"/>
 *  id:该组件的id要唯一
 *  name:日期组件显示的名称
 *  format：日期格式类型 yy-mm格式化为年－月,yy-mm-dd格化为年－月－日
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
    getDefaultProps: function(){
        return{
            id:'DataPicker',
            displayName:"请选择日期",
            foramt:"yy-mm-dd",
            cssClass:"size-md",
        }
    },
    componentDidMount:function(){
        var node=this.getDOMNode();
        this.state.elem=node;
        $('#'+this.props.id).datepicker({
            dateFormat:this.props.format,
            changeMonth: true,
            changeYear: true,
            monthNames: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'],
            monthNamesShort: ['一','二','三','四','五','六', '七','八','九','十','十一','十二'],
            monthNamesShort: ['一','二','三','四','五','六', '七','八','九','十','十一','十二'],
            dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'], 
            dayNamesMin: ['日','一','二','三','四','五','六'],   //日期名称简称
            firstDay: 1,         //0为已周日作为一周开始，1为周一作为一周开始，默认是0
            isRTL: false         //是否从右到左排列
        });
    },
    render:function(){
        var className = "form-control "+this.props.cssClass;
        return (<span>{this.props.displayName}<input type='text' className={className} id={this.props.id} name={this.props.id} /></span>);
    }
});

module.exports=DatePicker;