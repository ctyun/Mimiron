/** @jsx React.DOM */
var React = require('react/addons');
var _ = require('underscore');
var Bootstrap = require('react-bootstrap');
var Modal = Bootstrap.Modal;
var components = require('../../vendors/components');
var ActionButtonEdit = components.ActionButtonEdit;
var ActionButtonSubmit = components.ActionButtonSubmit;
var ActionButtonCancel = components.ActionButtonCancel;
var RoleForm = require('./user-form');
var Action = require('../../action/user');

function formSchema() {
    return [
        { _id: 'userRealname', label: '姓名', type: 'text' },
        { _id: 'userLoginName', label: '登录名', type: 'text' },
        { _id: 'userPassword', label: '密码', type: 'text' },
        { _id: 'userPassword', label: '确认密码', type: 'text' },
        { _id: 'userPhone', label: '手机', type: 'text' },
        { _id: 'userJob', label: '职务', type: 'text' },
        { _id: 'userEmail', label: '邮箱', type: 'text' },
        { _id: 'fkUserDepId', label: '所属部门', type: 'select' },
        { _id: 'province', label: '选择省市', type: 'citySelect' }
    ];
}
var EditModal = React.createClass({
    displayName: 'EditModal',

    getInitialState: function() {
        return {
            user: this.props.user,
            schema : formSchema()
        }
    },

    render: function () {
        return (
            <Modal title="修改用户信息" onRequestHide={this.props.onRequestHide}>
                <div className="modal-body">
                    <RoleForm
                        onChange={this._handleChange}
                        onSubmit={this._submitModifies}
                        data={this.props.user}
                        schema={this.state.schema}
                        department={this.props.department}
                    />
                </div>
                <div className="modal-footer">
                    <ActionButtonSubmit onClick={this._submitModifies.bind(this, this.state.user)}>确定</ActionButtonSubmit>
                    <ActionButtonCancel onClick={this.props.onRequestHide}>取消</ActionButtonCancel>
                </div>
            </Modal>
        );
    },

    _handleChange: function(e) {
        var user = this.state.user;
        user[e.target.id] = e.target.value;
        this.setState({user : user});
    },

    _submitModifies: function(user) {
        Action.editUser(user);
        this.props.onRequestHide();
    }
});

module.exports = EditModal;
