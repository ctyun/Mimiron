/** @jsx React.DOM */
var React = require('react/addons');
var _ = require('underscore');
var Bootstrap = require('react-bootstrap');
var Modal = Bootstrap.Modal;
var components = require('../../vendors/components');
var ActionButtonEdit = components.ActionButtonEdit;
var ActionButtonSubmit = components.ActionButtonSubmit;
var ActionButtonCancel = components.ActionButtonCancel;
var RoleForm = require('./role-form');
var Action = require('../../action/role');

function formSchema() {
    return [
        { _id: 'name', label: '角色名', type: 'text' },
        { _id: 'code', label: '角色编码', type: 'text' },
        { _id: 'description', label: '角色描述', type: 'text' },
        { _id: 'sort', label: '角色序号', type: 'text' }
    ];
}
var EditModal = React.createClass({
    displayName: 'EditModal',

    getInitialState: function() {
        return {
            role: this.props.role,
            schema : formSchema()
        }
    },

    render: function () {
        return (
            <Modal title="修改角色信息" onRequestHide={this.props.onRequestHide}>
                <div className="modal-body">
                    <RoleForm
                        onChange={this._handleChange}
                        onSubmit={this._submitModifies}
                        data={this.props.role}
                        schema={this.state.schema}
                    />
                </div>
                <div className="modal-footer">
                    <ActionButtonSubmit onClick={this._submitModifies.bind(this, this.state.role)}>确定</ActionButtonSubmit>
                    <ActionButtonCancel onClick={this.props.onRequestHide}>取消</ActionButtonCancel>
                </div>
            </Modal>
        );
    },

    _handleChange: function(e) {
        var role = this.state.role;
        role[e.target.id] = e.target.value;
        this.setState({role : role});
    },

    _submitModifies: function(role) {
        Action.editConsoleRole(role);
        this.props.onRequestHide();
    }
});

module.exports = EditModal;
