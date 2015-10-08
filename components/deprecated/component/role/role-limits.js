/**
 * Created by Administrator on 2015/5/7.
 */
var React = require('react/addons');
var $ = require('jquery');
var Bootstrap = require('react-bootstrap');
var Modal = Bootstrap.Modal;
var components = require('../../vendors/components');
var Tree = components.Tree;
var ActionButtonSubmit = components.ActionButtonSubmit;
var Action = require('../../action/role');


var Limits = React.createClass({
    render : function(){
        var data = this.props.limits;
        if(this.props.limitResult == null) {
            return <Modal title="角色权限" onRequestHide={this.props.onRequestHide} style={{ marginBottom: '74px' }}>
                <Tree data={data} checkbox={true}/>

            </Modal>
        }else{
            return <Modal title="角色权限" onRequestHide={this.props.onRequestHide}>
                <div className="modal-body">
                    {this.props.limitResult.msg}
                </div>
                <div className="modal-footer">
                    <ActionButtonSubmit onClick={this._submitModifies}>确定</ActionButtonSubmit>
                </div>
            </Modal>
        }
    },
    _submitModifies : function(){
        this.props.onRequestHide();
    }
});


module.exports = Limits;
