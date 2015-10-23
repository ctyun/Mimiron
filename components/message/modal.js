/**
 * @module message
 */
var React=require("react/addons");
var BSSForm = require("../html/form");
/**
 * ```
 * 示例:
<Modal id="addTableModal" title="添加对话框" submitAction={this.ModalHandler} jsonFormat={true}>
  <div className="content-left">
      <Input disName="名称: " name="reportMetadataName" value={this.state.reportMetadataName}/> <br/>
      <Select disName=" 元数据类型:" name="defaultQueryType" data={this.locals.selectMetaDataType} onSelect={this.onSelectMetaData} defaultValue={this.state.defaultQueryType}/> <br />
  </div>
</Modal> 
 * 参数:
 * hideDefaultButton: 是否隐藏提交按钮
 * id: 唯一id, Modal.show和hide方法调用时需要传入
 * title: 标题
 * submitAction: 点击提交后的回调函数
 * jsonFormat: 结果是否格式化为json
 * cssClass:(string) 默认为空, 可以传入:
 *      "modal-lg":
 *      ...支持其他BSSform参数.
 * dragable:(Boolean) 可拖拽, 默认为true
 * dragEnd:(Function) 拖拽结束的回调函数,此函数返回两个参数,估计一般用不到,可以log出来看看, 也可以来问我. 
 * ```
 * TODO: footer 
 * Modal组件
 * @class Modal
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
            $("#"+id).modal();
            console.log("123");
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
            footer:null,
            cssClass: "",
            dragable:true,
            dragEnd:function(){return},
        };
    },
    doAndHide: function(params){
        Modal.hide(this.props.id);
        if(this.props.submitAction){
            this.props.submitAction(params);
        }
    },
    componentDidMount : function(){
      var _this = this;
      var node = this.getDOMNode();
      if(this.props.dragable){
        $(node).draggable({
          stop:function(event,ui){
            _this.props.dragEnd(event,ui);
          }
        });
      }
    },
    render: function(){
        //using css control to hide the modal
        var cssClass="modal-dialog "+this.props.cssClass;
        return (
            <div className="modal fade" id={this.props.id} role="dialog" >
                <div className={cssClass}>
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
                            <BSSForm {...this.props} submitAction={this.doAndHide}>
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