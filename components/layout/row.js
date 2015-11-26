/**
 * @module layout
 *
 */

var React = require('react/addons');
/**
 * 行布局组件, 使用此组件会使使内部组件(this.props.children)按行平均排布
 * ```
 * 使用方法
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
           * @property {String} type 按钮类型,一般不需要传入
           * @default "button"
           */
            itemPerLine:"4",
        }
    },
    render:function(){
        var _this = this;
        var children = []
        for(var i in this.props.children){
            console.log(this.props.children[i]);
            children.push(<div className={"col-md-"+_this.locals.needWidth[_this.props.itemPerLine]+" col-xs-12"}>{this.props.children[i]}</div>)
        }
        return (<div className="row">{children}</div>);
    }
});
module.exports=Row;
