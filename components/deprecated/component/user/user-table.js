/**
 * Created by Administrator on 2015/5/7.
 */
var React = require('react/addons');
var components = require('../../vendors/components');
var ActionButtonEdit = components.ActionButtonEdit;
var ActionButtonDelete = components.ActionButtonDelete;
var ActionButtonOpen = components.ActionButtonOpen;
var ActionButtonSubmit = components.ActionButtonSubmit;
var ActionButtonCancel = components.ActionButtonCancel;
var Spinner = components.Spinner;
var Action = require('../../action/user');
var Api = require('../../api/user');
var Edit = require('./user-edit');
var Bootstrap = require('react-bootstrap');
var Modal = Bootstrap.Modal;


var UserDeleteConfirm = React.createClass({

    displayName: 'RoleDeleteConfirm',

    render: function() {
        return (
            <Modal title="删除用户" onRequestHide={this.props.onRequestHide}>
                <div className="modal-body">
                    确定删除该用户吗？
                </div>
                <div className="modal-footer">
                    <ActionButtonSubmit onClick={this.props.onAccept}>确定</ActionButtonSubmit>
                    <ActionButtonCancel onClick={this.props.onCancel}>取消</ActionButtonCancel>
                </div>
            </Modal>
        );
    }
});


var RoleTable = React.createClass({
    getInitialState : function(){
        return {
            tableHeadings : ['登录名','姓名','部门','组','职务','手机号','操作'],
            editShow : false,
            deleteShow : false,
            loading: this.props.loading,
            role : {}
        }
    },
    componentWillReceiveProps : function(nextProps){
        if(nextProps.users != this.props.users){
            this.setState({loading : nextProps.loading});
        }
    },
    render : function(){
        var users = this.props.users;
        var thead = this.state.tableHeadings.map(function(item,key){
            return <th key={key}>{item}</th>
        });
        thead = <thead>{thead}</thead>;

        var tbody = users.map(function(item,key){
            return <tr key={key}>
                <td>{item.userLoginName}</td>
                <td>{item.userRealname}</td>
                <td>{item.departmentName}</td>
                <td>{item.groupName}</td>
                <td>{item.userJob}</td>
                <td>{item.userPhone}</td>
                <td>
                    <ActionButtonEdit children = "修改" onClick={this._edit.bind(this,item)} />
                    <ActionButtonDelete children = "删除" onClick={this._delete.bind(this,item)}/>
                    <ActionButtonOpen children = "加入用户组" onClick={this._roleMenu.bind(this,item)}/>
                </td>
            </tr>
        }.bind(this));
        tbody = <tbody>{tbody}</tbody>;
        return <div className="portlet portlet-white">
            <table className="table table-hover table-bordered">
                {thead}
                {tbody}
            </table>
            {this.state.editShow ? <Edit user={this.state.user} department = {this.props.department} onRequestHide={this._editHandleVisible} /> : ''}
            {this.state.loading ? <Spinner /> : false}
            {this.state.deleteShow ? <UserDeleteConfirm onAccept={this._deleteRole} onCancel={this._delHandleVisible} onRequestHide={this._delHandleVisible}/> : ''}
        </div>
    },
    _edit : function(item){
        this.setState({user:item, editShow: !this.state.editShow});
    },
    _delete : function(item){
        this.setState({user:item,deleteShow:!this.state.deleteShow});
    },
    _deleteUser : function(){
        Action.delUser(this.state.user.id);
        this._delHandleVisible();
    },
    _editHandleVisible : function(){
        this.setState({editShow:!this.state.editShow});
    },
    _delHandleVisible : function(){
        this.setState({deleteShow:!this.state.deleteShow});
    },
    _roleMenu : function(item){
        this.setState({role:item, loading: true});
        Action.getLimits(item);
    }
});
module.exports = RoleTable;
