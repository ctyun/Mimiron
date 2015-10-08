

/**
 * Created with IntelliJ IDEA.
 * User: cth
 * Date: 15-5-26
 * Time: 上午9:57
 * To change this template use File | Settings | File Templates.
 */

var React = require('react/addons');

var QueryToolBar=React.createClass({
    onClick:function(e){
        e.preventDefault();
        var v=React.findDOMNode(this.refs.name).value;
        alert(v);
    }  ,
    render:function(){
        return (<div><input type="text" ref="name" /><button onClick="{this.onClick}">{this.props.title}</button></div>);
    }
});

module.exports = QueryToolBar;