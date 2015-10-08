/** @jsx React.DOM */
var React = require('react/addons');
var _ = require('underscore');
var moment = require('moment');
var revalidator = require('revalidator');
var Bootstrap = require('react-bootstrap');
var components = require('../../vendors/components');
var ActionButtonAdd = components.ActionButtonAdd;
var ActionButtonSubmit = components.ActionButtonSubmit;
var ActionButtonCancel = components.ActionButtonCancel;
var OverlayMixin = Bootstrap.OverlayMixin;
var Modal = Bootstrap.Modal;
var Action = require('../../action/user');
var AddForm = require('./user-form');
var API = require('../../api/user');

var validationSchema = {
    properties: {
//    	userName: {
//    	      required: true,
//    	      allowEmpty: false,
//    	      type: 'string',
//    	      messages: {
//    	        allowEmpty: '请输入餐品名称'
//    	      }
//    	    },
        dayIdFk: {
            required: true,
            conform: function(v) {
                if (v === -1) return false;
                return true;
            },
            message: '请选择菜品'
        }
    }
};

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

var AddModal = React.createClass({
    mixins: [OverlayMixin],
    getInitialState: function() {
        return {
            isOpen: false,
            user: {},
            schema : formSchema(),
            errors: ''
        };
    },
    render: function () {
        return (
            <ActionButtonAdd onClick={this.handleVisible} disabled='true'>新增</ActionButtonAdd>
        );
    },
    renderOverlay: function() {
        if (!this.state.isOpen) {
            return <span />;
        }

        return (
            <Modal title="新增用户" onRequestHide={this.handleVisible}>
                <div className="modal-body">
                    <AddForm onChange={this.handleChange} onSubmit={this.handleSubmit} errors={this.state.errors} schema={this.state.schema} department={this.props.department}/>
                </div>
                <div className="modal-footer">
                    <ActionButtonSubmit onClick={this.handleSubmit.bind(this, this.state.user)}>确定</ActionButtonSubmit>
                    <ActionButtonCancel onClick={this.handleVisible}>取消</ActionButtonCancel>
                </div>
            </Modal>
        );
    },

    handleVisible: function() {
        this.setState({isOpen: !this.state.isOpen}, function() {
            this.setState({ errors: '' });
        }.bind(this));
    },

    handleChange: function(e) {
        var user = this.state.user;
        user[e.target.id] = e.target.value;
        this.setState({user : user});
    },

    handleSubmit: function(user) {
        Action.create(user);
        this.handleVisible();
    }
});

module.exports = AddModal;
