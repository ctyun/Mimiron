/**
 * Created by Administrator on 2015/4/15.
 */
var React = require('react/addons');
var Input = require('./preview-input');
var TD = require('./preview-td');
var Radio = require('./preview-radio');
var Module = React.createClass({
    render : function() {
        var _module = this.props.module;
        if (_module.location == 'top') {
            if (_module.modeType == 'text') {
                _module.modeType = "text";
                return <Input modes = {_module} />
            }else if(_module.modeType == 'radio'){
                _module.modeType = "radio";
                return <Radio modes = {_module} />
            }
        }
        else if (_module.location == 'mid'){
            return (
                <TD content = {_module} />
            )
        }
    }
});


module.exports = Module;
