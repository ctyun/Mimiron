/**
 * Created by Administrator on 2015/4/14.
 */
var React = require('react/addons');
var Action = require('../../action/report');
var $ = require('jquery');

var Radio = React.createClass({
    getInitialState : function(){
        return {
            modes : this.props.modes,
            checkValue : ''
        }
    },
    componentWillReceiveProps : function(nextProps){
        if(nextProps.modes != this.props.modes){
            this.setState({modes:nextProps.modes});
        }
    },
    render : function(){
        var modes = this.state.modes;
        var checkValue = this.state.checkValue ? this.state.checkValue : '';
        var radio = '';
        if(modes.url){
              var params = modes.url;
              radio =  params.map(function(item,key){
                  if(checkValue == item) {
                      return <span>
                          <input type='radio' key={modes.reportMetadataId} name={modes.reportMetadataId} checked onClick = {this._onChecked}/>{item}</span>
                  }else{
                      return <span>
                          <input type='radio' key={modes.reportMetadataId} name={modes.reportMetadataId} onClick = {this._onChecked}/>{item}</span>
                  }
                });
        }else{
              radio = <span className="">无法转换为radio类型</span>
        }

        return (
          <div onClick = {this._onClick.bind(null, this)} data-field-span="1" id={"div-"+modes.reportMetadataId}>
              <div className = 'close-icon' onClick = {this.props.delete.bind(null,this.state.modes)}>
                  <i className='fa fa-times fa-2'></i>
              </div>
              <label htmlFor={modes.reportMetadataId}>{modes.reportMetadataName + ': '}</label>
              {radio}
          </div>
        );
    },
    _onClick : function(){
        var modes = this.state.modes;
        modes.modeValue = this.state.checkValue ? this.state.checkValue : '';
        Action.showDetail(modes);
    },
    _onChecked : function() {
        e.stopPropagation();
        var checkValue = $("input[name=" + this.state.modes.reportMetadataId + "][checked]").val();
        this.setState({checkValue:checkValue});
    }


});


module.exports = Radio;
