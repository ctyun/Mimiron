/**
 * Created by Administrator on 2015/4/14.
 */
var React = require('react/addons');
var SwitchModules = require('./switch-modules');
var $ = require('jquery');
var Action = require('../../action/report');
var TD = require('./report-td');

var Debug = require("../../common/debug");


var Top = React.createClass({

    render : function(){
        var modes = this.props.content;
        return (
                modes && modes.length ? <div className = "portlet portlet-white">
                    <div className="portlet-body">
                    查询区域
                    <div className="list-group h500px">
                    <TD {...this.props}/>
                    </div>
                    </div>
                    </div>  : <span></span>
            );
        }

});
module.exports =  Top;
