/**
 * Created by Administrator on 2015/4/14.
 */
var React = require('react/addons');
var Details = require('./report-detail');
var Bottom = React.createClass({
    render : function(){
        return <Details content = {this.props.content}/>
    }
});

module.exports = Bottom;