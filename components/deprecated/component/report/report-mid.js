/**
 * Created by Administrator on 2015/4/14.
 */
var React = require('react/addons');
var TD = require('./report-td');
var Debug = require("../../common/debug");

var Mid = React.createClass({
    render : function(){
     var modes = this.props.content;
        return (
                modes && modes.length ? <div className = "portlet portlet-white">
                    <div className="portlet-body">
                        列表区域
                    <div className="list-group h500px">
                    <TD {...this.props}/>
                    </div>
                    </div>
                    </div> : <div className="text-center well">请在左侧添加所需条目</div>
        );
    }
});

module.exports =  Mid;
