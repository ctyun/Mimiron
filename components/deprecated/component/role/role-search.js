/** @jsx React.DOM */
var React = require('react/addons');
var constants = require('../../constants/constants');

var RoleSearch = React.createClass({
    displayName: 'AdminUserSearch',
    getInitialState: function() {
        return {
            query: {}
        }
    },
    render: function () {
        return (
            <form className="grid-form" onSubmit={this.props.onSubmit} onChange={this.props.onChange}>
                <div data-row-span="3">
                    <div data-field-span="1">
                        <label htmlFor="query_name">角色名</label>
                        <input type="text" id="query_name" placeholder="角色名" />
                    </div>
                    <div data-field-span="1">
                        <button type="submit" className="btn btn-block btn-primary">查询</button>
                    </div>
                </div>
            </form>
        );
    }

});

module.exports = RoleSearch;
