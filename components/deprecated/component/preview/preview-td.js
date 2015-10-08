/**
 * Created by Administrator on 2015/4/15.
 */
var React = require('react/addons');
var Action = require('../../action/report');
var TD = React.createClass({
    getInitialState : function(){
        return {
            mode : this.props.content
        }
    },

    render : function(){
        var mode = this.state.mode;
        var id = 'td-'+mode.reportMetadataId;
        return <th id={id} >{mode.reportMetadataName}</th>
    }
});


module.exports = TD;
