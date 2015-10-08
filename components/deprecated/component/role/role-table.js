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
var Action = require('../../action/role');
var Api = require('../../api/role');
var Limits = require('./role-limits');
var Edit = require('./role-edit');
var Bootstrap = require('react-bootstrap');
var Modal = Bootstrap.Modal;


var RoleDeleteConfirm = React.createClass({

    displayName: 'RoleDeleteConfirm',

    render: function() {
        return (
            <Modal title="删除角色" onRequestHide={this.props.onRequestHide}>
                <div className="modal-body">
                    确定删除该角色吗？
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
            tableHeadings : ['角色名','描述','操作'],
            limitShow : false,
            editShow : false,
            deleteShow : false,
            loading: false,
            limits : this.props.limits,
            role : {}
        }
    },
    componentWillReceiveProps : function(nextProps){
        if(nextProps.limits != this.props.limits){
            this.setState({limitShow : !this.state.limitShow,limits:nextProps.limits, loading: false});
        }
    },
    render : function(){
        var roles = this.props.roles;
        var thead = this.state.tableHeadings.map(function(item,key){
            return <th key={key}>{item}</th>
        });
        thead = <thead>{thead}</thead>;

        var tbody = roles.map(function(item,key){
            return <tr key={key}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                    <ActionButtonEdit children = "修改" onClick={this._edit.bind(this,item)} />
                    <ActionButtonDelete children = "删除" onClick={this._delete.bind(this,item)}/>
                    <ActionButtonOpen children = "角色菜单管理" onClick={this._roleMenu.bind(this,item)}/>
                </td>
            </tr>
        }.bind(this));
        tbody = <tbody>{tbody}</tbody>;
        return <div className="portlet portlet-white">
            <table className="table table-hover table-bordered">
                {thead}
                {tbody}
            </table>
            {this.state.limitShow ? <Limits limits={this.state.limits} limitResult = {this.props.limitResult}  onRequestHide={this._handleVisible}/> : ''}
            {this.state.limitShow ?<div className='panel save-view'>
                <ActionButtonSubmit children="提交" onClick={this._onSubmit}/>
                <ActionButtonCancel children="取消" />
            </div> :''}
            {this.state.editShow ? <Edit role={this.state.role} onRequestHide={this._editHandleVisible} /> : ''}
            {this.state.loading ? <Spinner /> : false}
            {this.state.deleteShow ? <RoleDeleteConfirm onAccept={this._deleteRole} onCancel={this._delHandleVisible} onRequestHide={this._delHandleVisible}/> : ''}
        </div>
    },
    _edit : function(item){
        this.setState({role:item, editShow: !this.state.editShow});
    },
    _delete : function(item){
        this.setState({role:item,deleteShow:!this.state.deleteShow});
    },
    _deleteRole : function(){
        Action.delConsoleRole(this.state.role.id);
        this._delHandleVisible();
    },
    _onSubmit : function(){
        var nodes = $('#myTree').tree('getChecked');
        var limits = []  ;
        for(var i = 0;i < nodes.length;i++){
            var limit = {};
            limit.id = nodes[i].id;
            limit.text = nodes[i].text;
            limits.push(limit);
        }
        var data = {};
        data.roleId = this.state.role.id;
        data.limits = limits;
        Action.saveLimits(data);
    },
    _handleVisible : function(){
        Action.confirmLimit();
        this.setState({limitShow:!this.state.limitShow});
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
