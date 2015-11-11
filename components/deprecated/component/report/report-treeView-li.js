/**
 * Created by Administrator on 2015/5/4.
 */
var React = require('react/addons');
var _ = require('underscore');
var Li = React.createClass({
    getInitialState : function(){
         return {
             showDiv : false
         }
    },
    render : function(){
        var node = this.props.node;
        var span = <div name="switchLocation">
            <button className="btn btn-xs btn-success" onClick={this._onClick.bind(null,1, node)}>添加到TOP</button>
            <button className="btn btn-xs btn-warning" onClick={this._onClick.bind(null,2, node)}>添加到MID</button>
        </div>;
        console.log(node);
        return (
            <li key={node.reportMetadataId+'node'} id={"node"+node.reportMetadataId} className='list-group-item'  onClick={this._showDiv}>
                <i className = 'fa fa-server fa-2' />
                <a href="#"><span>{node.reportMetadataName||"("+node.reportMetadataCode+")"}</span></a>
                {this.state.showDiv ? span : ''}
            </li>
        );
    },
    _showDiv : function(e){
        this.setState({showDiv:!this.state.showDiv});
        e.preventDefault();
    },
/**
 * node:此列的数据即原数据
 */
    _onClick: function(val, node, e) {
        e.preventDefault();
        var clone = _.extend({}, node, {});
        this.props.addControl(val, clone);
    }

});
module.exports = Li;
