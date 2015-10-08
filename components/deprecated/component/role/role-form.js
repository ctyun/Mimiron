var React = require('react/addons');
var _ = require('underscore');
var $ = require('jquery');
var constants = require('../../constants/constants');
// var common = require('../common/common');
var API = require('../../api/role');


var RoleForm;
RoleForm = React.createClass({
    displayName: 'RoleForm',

    getInitialState: function () {
        return {
            schema: this.props.schema
        };
    },

    componentDidMount: function () {


    },

    render: function() {
        var formGroups = this.state.schema.map(function (group, key) {

            return <div className="form-group" key={key}>
                <label className="control-label col-lg-3" htmlFor={group._id}>{group.label}</label>
                <div className="col-lg-7">
                    <input type="text" className="form-control" defaultValue={this.props.data ? this.props.data[group._id] : ''} id={group._id} placeholder={group.label} />
                </div>
            </div>;
        }.bind(this));

        return (
            <form className="form-horizontal" onSubmit={this.props.onSubmit} onChange={this.props.onChange}>
                 {formGroups}
            </form>
        );
    }
});

module.exports = RoleForm;
