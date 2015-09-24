/**
 * Modal组件
 * @module Modal
 */
var React=require("react/addons");
var BSSForm = require("../html/form");
/**
 * Modal组件
 * @class Modal
 * @example
 * ```
 *  <Modal title="i am title" body={this._modalBody} footer={this._ModalFooter}/>
 *	targetName:需要在触发模态框的元素需给属性data-toggle="modal" data-target="#targetName" 或者使用jquery:$("#targetName").modal
 *  title:标题
 *  body:中间显示的内容
 *  footer:底部显示的内容,一般来说至少需要一个确认按钮一个取消按钮
 * ```
 */
var Modal=React.createClass({
    statics:{
        /**
         * 显示对话框
         * @static
         * @method show
         * @param  {String} id 对话框ID
         */
        show:function(id){
            console.log($("#"+id));
            $("#"+id).modal();
        },
        /**
         * 隐藏对话框
         * @static
         * @method hide
         * @param  {String} id 对话框ID
         */
        hide:function(id){
            $("#"+id).modal("hide");
            var forms = $("#"+id).find("form")
            for(var i=0; i<forms.length; i++){
                forms[i].reset();
            }
        }
    },
    getDefaultProps : function(){
        return{
            id:"modal_id",
            title:"无标题",
            body:null,
            footer:null
        };
    },
    render: function(){
        //using css control to hide the modal
        return (
            <div className="modal fade" id={this.props.id} role="dialog" >
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close"
                        data-dismiss="modal" >
                        &times;
                        </button>
                    <h4 className="modal-title">
                    {this.props.title}
                    </h4>
                    </div>
                    <div className="modal-body">
                        <BSSForm {...this.props}>
                        {this.props.children}
                        </BSSForm>
                    </div>
                </div>
                </div>
            </div>
        );
    }
});




module.exports=Modal;