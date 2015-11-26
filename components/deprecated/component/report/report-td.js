/**
 * Created by Administrator on 2015/4/15.
 */
    var React = require('react/addons');
    var Action = require('../../action/report');
    var Debug = require("../../common/debug");
    var TD = React.createClass({

        _delete : function(mode, e){
        e.preventDefault();
        e.stopPropagation();

        this.props.deleteModule(mode);
        //Action.removeModule(mode);
    },
    _onClick : function(mode, e){
        e.preventDefault();
        e.stopPropagation();

        this.props.setDetail(mode);
        //Action.removeModule(mode);
    },
    _swap : function(posi, m, e){
        e.preventDefault();
        e.stopPropagation();
        this.props.swap(posi, m);
    },
    render : function(){
    var modes = this.props.content;
    var self=this;
    var modes = this.props.content;
    var self=this;
    var view = modes.map(function(m, key) {
        return <div className="list-group-item"><div onClick = {self._onClick.bind(null,m)} id={m.reportMetadataId} >
            <div className = 'close-icon' > 
            <span className="fa fa-angle-double-up" onClick={self._swap.bind(null,"up",key)}></span>&nbsp;&nbsp;
            <span className="fa fa-angle-double-down" onClick={self._swap.bind(null,"down",key)}></span>&nbsp;&nbsp;
            <i className='fa fa-times fa-2' onClick = {self._delete.bind(null, m)}></i>
            </div>
            {m.reportMetadataName}
            </div>
            </div>
            }.bind(this));
    return (<span>{view}</span>);
    }
});


module.exports = TD;
