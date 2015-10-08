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
var Action = require('../../action/role');
var AddForm = require('./role-form');
var API = require('../../api/role');

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
        { _id: 'name', label: '角色名', type: 'text' },
        { _id: 'code', label: '角色编码', type: 'text' },
        { _id: 'description', label: '角色描述', type: 'text' },
        { _id: 'sort', label: '角色序号', type: 'text' }
    ];
}

var AddModal = React.createClass({
    mixins: [OverlayMixin],
    getInitialState: function() {
        return {
            isOpen: false,
            role: {},
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
            <Modal title="新增菜单" onRequestHide={this.handleVisible}>
                <div className="modal-body">
                    <AddForm onChange={this.handleChange} onSubmit={this.handleSubmit} errors={this.state.errors} schema={this.state.schema}/>
                </div>
                <div className="modal-footer">
                    <ActionButtonSubmit onClick={this.handleSubmit.bind(this, this.state.role)}>确定</ActionButtonSubmit>
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
        var role = this.state.role;
        role[e.target.id] = e.target.value;
        this.setState({role : role});
    },

    handleSubmit: function(role) {
        console.log(role);
        Action.create(role);
        this.handleVisible();
    }
});

module.exports = AddModal;
