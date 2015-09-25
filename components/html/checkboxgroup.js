/**
 * @module html
 */

var React = require('react/addons');
var Debug = require("../utils/debug");

/**
 * ```
 *  <CheckboxGroup name="demo-checkboxgroup" inline={false} multi={true}>
        <Checkbox id="1" dispName="checkbox1" value="1" onClick={this.checkboxClick}/>
        <Checkbox id="2" dispName="checkbox2" value="2" onClick={this.checkboxClick}/>
    </CheckboxGroup>
 * ```
 * @class CheckboxGroup
 * @uses  Checkbox
 */
var CheckboxGroup=React.createClass({
    displayName:'Checkbox',
    getDefaultProps: function(){
        return{
            /**
             * 覆盖所有子组件Checkbox的name
             * @property {String} name 所有选项的name
             */
            name:"checkbox", 
            /**
             * @property {Boolean} inline 是否内联显示
             * @default false
             */
            inline: false,
            /**
             * @property {Boolean} multi 是否为多选
             * @default true
             */
            multi:true,

        }
    },
    getInitialState:function(){
        return {}
    },
    render:function(){
        var labelClass = this.props.inline?"inline":"block" ;
        var childType = this.props.multi?"checkbox":"radio";
        var children = [];
        for(var i in this.props.children){
            this.props.children[i].props.type= childType;
            this.props.children[i].props.name= this.props.name;
            children.push(<label className={labelClass}>{this.props.children[i]}</label>);
        }
        return (<div>
                {children}
            </div>);
    },
});
module.exports=CheckboxGroup;
