/**
 * Created by Administrator on 2015/4/14.
 */
var React = require('react/addons');
var Action = require('../../action/report');
var $ = require('jquery');

var LabelModule = React.createClass({
    getInitialState : function(){
        return {
            modes : this.props.modes
        }
    },
    componentWillReceiveProps : function(nextProps){
        if(nextProps.modes != this.props.modes){
            this.setState({modes:nextProps.modes});
        }
    },
    render : function(){
        var modes = this.state.modes;
        var view = <div onClick = {this._onClick} id={modes.reportMetadataId}>
                <div className = 'close-icon' onClick = {this.props.delete.bind(null, this.state.modes)}>
                    <i className='fa fa-times fa-2'></i>
                </div>
                <label htmlFor={modes.reportMetadataId}>{modes.reportMetadataName + ': '}</label>
                <input type="text" className="form-control" id={modes.reportMetadataId} placeholder={modes.reportMetadataName} />
            </div>;
        return view;
    },
    _onClick : function(e){
        e.stopPropagation();
        e.preventDefault();

        var modes = this.state.modes;

        Action.showDetail(modes);
    },
    _onChange : function(){
        var modes = this.state.modes;
        modes.modeValue = $("#"+modes.reportMetadataId).val();
    },
    // _delete : function(mode, e){
    //     Action.removeModule(mode);
    //     e.stopPropagation();
    //     e.preventDefault();
    // }

});


module.exports = LabelModule;
