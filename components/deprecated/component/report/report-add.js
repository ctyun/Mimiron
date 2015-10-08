/**
 * Created by Administrator on 2015/4/24.
 */
var React = require('react/addons');
var _ = require('underscore');
var Bootstrap = require('react-bootstrap');
var Modal = Bootstrap.Modal;
var components = require('../../vendors/components');
var ActionButtonSubmit = components.ActionButtonSubmit;
var ActionButtonCancel = components.ActionButtonCancel;
var Action = require('../../action/report');
var Input = require('../html/input');

/**
 * 保存模版信息的Modal, 用于/report/config/:id
 * @class Add
 */
var Add = React.createClass({
    render : function(){
    var name=this.props.moduleName;
        return (<Modal title="保存模板信息" onRequestHide={this.props.onRequestHide}>
            <div className="modal-body">
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-lg-3">请输入模板名称 : </label>
                        <div className="col-lg-7">
                            <Input  value={name} cssClass="form-control" id="addModelName" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <ActionButtonSubmit onClick={this.props.add}>确定</ActionButtonSubmit>
                <ActionButtonCancel onClick={this.props.onRequestHide}>取消</ActionButtonCancel>
            </div>
        </Modal>);
    }
});

module.exports = Add;
