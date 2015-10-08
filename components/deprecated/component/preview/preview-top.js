/**
 * Created by Administrator on 2015/4/14.
 */
var React = require('react/addons');
var SwitchModules = require('./switch-preview');
var $ = require('jquery');
var Action = require('../../action/preview');
var Store = require('../../store/report');


function getTopInitialState(){

}
var Top = React.createClass({
    getInitialState : function(){
        return {
            modes : this.props.content
        }
    },
    componentWillReceiveProps : function(nextProps){
        if(this.props.content != nextProps.content){
            var _modes = nextProps.content;
            this.setState({modes : _modes});
        }
    },
    render : function(){
        var content = this.state.modes;
        var _modes = [];
            for(var i = 0;i<content.length;i++){
            var _module = <SwitchModules module = {content[i]} key={content[i].reportMetadataId} location={1}/>;
            _modes.push(_module);
        }
        return <div className="grid-form">
            <div data-row-span="3">
                {_modes}
                <div data-field-span="1">
                    <button className="btn btn-success btn-block" onClick={this._search}><i className="fa fa-search"></i> 搜索</button>
                </div>
            </div>
        </div>
    },
    _search : function(){
        var content = Store.getTop();
        var _data = [];
        var tableName = '';
        for(var i = 0;i < content.length;i++){
            tableName = content[i].resourceTableName;
            if($('#'+content[i].reportMetadataId).val().trim()!=''){
                content[i].defaultValue = $('#'+content[i].reportMetadataId).val();
                content[i].areaTarget = 1;
                _data.push(content[i]);
            }
        }
        var tds = Store.getMid();
        for(var i = 0;i < tds.length;i++){
            tds[i].areaTarget = 2;
            _data.push(tds[i]);
        }
        var data = {resourceTableName:tableName,reportModelDetailBO:_data};
        data = {"data":JSON.stringify(data),"type":4,"dataType":"send"};
        Action.queryReportData(data);
    }
});
module.exports =  Top;
