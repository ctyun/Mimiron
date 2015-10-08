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
        var view = '';
            view = <div data-field-span="1">
                <label htmlFor={modes.reportMetadataId}>{modes.reportMetadataName + ': '}</label>
                <input type={modes.modeType} id={modes.reportMetadataId} onChange={this._onChange} placeholder={modes.reportMetadataName} defaultValue="" className="form-control"/>
            </div>
        return view;
    },
    _onClick : function(){
        var modes = this.state.modes;
        Action.showDetail(modes);
    },
    _onChange : function(e){
        $("#"+this.state.modes.reportMetadataId).val(e.target.value);
    }

});


module.exports = LabelModule;
