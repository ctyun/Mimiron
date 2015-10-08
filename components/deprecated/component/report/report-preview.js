/**
 * Created by Administrator on 2015/4/17.
 */
var React = require('react/addons');
var Store = require('../../store/preview');
var Action = require('../../action/preview');
var $ = require('jquery');
var Top = require('../preview/preview-top');
var Mid = require('../preview/preview-mid');
var preView = React.createClass({
    getInitialState : function(){
        return {
            top:this.props.top,
            mid:this.props.mid,
            tds : this.props.tds
        }
    },
    componentDidMount : function(){
        var height = $("#wrapper").height();
        $('.shade').css({"height":height});
    },
    componentWillReceiveProps : function(nextProps){
       if(this.props.tds != nextProps.tds){
            this.setState({tds:nextProps.tds})
       }
    },
    render : function(){
        return (<div className="shade">
            <div className="panel">
                <div className="panel-body">
                    <input type='hidden' id='nodeName' />
                    <Top content = {this.state.top} />
                    <Mid content = {this.state.mid} tds = {this.state.tds}/>
                </div>
            </div>
            <div className='panel save-view'>
                <div className="panel-body">
                    <button className='btn btn-info' onClick={this.props.save}>保存</button>
                    <button className='btn btn-danger' onClick={this.props.closePreview}>返回</button>
                </div>
            </div>
        </div>);
    },
    _save : function(){
        Action.save();
    }
});

module.exports = preView;
