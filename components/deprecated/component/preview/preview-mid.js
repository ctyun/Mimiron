/**
 * Created by Administrator on 2015/4/14.
 */
var React = require('react/addons');
var SwitchModules = require('./switch-preview');


function getTopInitialState(){

}
var Mid = React.createClass({
    getInitialState : function(){
        return {
            modes : this.props.content,
            tds : this.props.tds
        }
    },
    componentWillReceiveProps : function(nextProps){
        if(this.props.content != nextProps.content){
            var _modes = nextProps.content;
            this.setState({modes : _modes});
        }
        if(this.props.tds != nextProps.tds){
            this.setState({tds:nextProps.tds});
        }
    },
    render : function(){
        var content = this.state.modes;
        var tds = this.state.tds;
        var _modes = [];
        for(var i = 0;i<content.length;i++){
            var _module = <SwitchModules module = {content[i]} key={'td-'+content[i].reportMetadataId} location={2} />;
            _modes.push(_module);
        }
        if(content.length > 0 && tds.length > 0) {
            tds = tds.map(function (item, key) {
                var td = [];
                for(var i = 0;i<content.length;i++){
                    var _td = <td>{item[content[i]["reportMetadataCode"]]}</td>;
                    td.push(_td);
                }
                return <tr>{td}</tr>;
            });
        }
        return <div className = "row">
            <table className="table table-bordered"><thead><tr>{_modes}</tr></thead><tbody>{tds}</tbody></table>
        </div>
    }
});
module.exports =  Mid;
