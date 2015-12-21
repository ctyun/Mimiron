/**
 * @module layout
 *
 */

var React = require('react/addons');
var Debug = require("../utils/debug");
/**
 * 行布局组件, 使用此组件会使使内部组件(this.props.children)按行平均排布
 * ```
 * 使用方法
 *  <Row itemPerLine="3">
        <Input disName="输入框1" cssClass="size-block"/>
        <Input disName="输入框111" cssClass="size-block"/>
        <Input disName="输入框11111" cssClass="size-block"/>
        <Input disName="输入框1111111" cssClass="size-block"/>
        <Input disName="输入框111111111" cssClass="size-block"/>
        <Input disName="输入框11111111111" cssClass="size-block"/>
    </Row>
 *
 * ```
 * @class Row
 */
var Row=React.createClass({
    displayName:'Row',
    locals:{
        needWidth:{
            "2":6,
            "3":4,
            "4":3,
            "6":2
        }
    },
    getDefaultProps: function(){
        return{
          /**
           * @property {String} itemPerLine 每行存放元素数, 可选"2","3","4","6"
           * @default "4"
           */
            itemPerLine:"4",
        }
    },
    render:function(){
        var _this = this;
        var children = []
        for(var i in this.props.children){
            if(this.props.children[i].props){
                this.props.children[i].props["inRow"] = true;
                children.push(<div className={"col-md-"+_this.locals.needWidth[_this.props.itemPerLine]+" col-xs-12"}>{this.props.children[i]}</div>);
            }
        }
        return (<div className="row">{children}</div>);
    }
});
module.exports=Row;
