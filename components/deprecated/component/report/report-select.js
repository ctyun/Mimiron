/**
 * Created by Administrator on 2015/4/14.
 */
var React = require('react/addons');
var Action = require('../../action/report');
var $ = require('jquery');

var Select = React.createClass({
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
                      return
                          <select className="form-control" >
                              <option value='1' >text</option>
                              <option value='2' >number</option>
                              <option value='3'>date</option>
                              <option value='4'>money</option>
                              <option value='5'>sum</option>
                          </select>

                });
        }

        return (
          <div onClick = {this._onClick.bind(null, this)} data-field-span="1" id={"div-"+modes.reportMetadataId}>
              <div className = 'close-icon' onClick = {this.props.delete.bind(null,this.state.modes)}>
                  <i className='fa fa-times fa-2'></i>
              </div>
              <label htmlFor={modes.reportMetadataId}>{modes.reportMetadataName + ': '}</label>
              <select className="form-control" >
                  <option value='1' >text</option>
                  <option value='2' >number</option>
                  <option value='3'>date</option>
                  <option value='4'>money</option>
                  <option value='5'>sum</option>
              </select>
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


module.exports = Select;
