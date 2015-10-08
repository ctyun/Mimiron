

/**
 * Created by WangYG on 2015-07-22 13:07:03 
 */

 require("bootstrap");
 var React=require("react/addons");
 var $ = require('jquery');
var BSSForm = require("../html/form");
var Debug = require("../../common/debug");
/**
 *  <Modal title="i am title" body={this._modalBody} footer={this._ModalFooter} onExitClick={this._onExitClick}/>
 *  targetName:需要在触发模态框的元素需给属性data-toggle="modal" data-target="#targetName" 或者使用jquery:$("#targetName").modal
 *  title:标题
 *  body:中间显示的内容
 *  footer:底部显示的内容,一般来说至少需要一个确认按钮一个取消按钮
 *  cssClass:(string) 默认为空, 可以传入:
 *      "modal-lg":
 * @type {exports?}
 */
 function sleep(numberMillis) { 
   var now = new Date();
   var exitTime = now.getTime() + numberMillis;  
   while (true) { 
       now = new Date(); 
       if (now.getTime() > exitTime)    return;
    }
}

 var Modal=React.createClass({
    statics:{
        show:function(id){
            $("#"+id).modal({backdrop:'static'});
        },
        hide:function(id){
            $("#"+id).modal("hide");
            var forms = $("#"+id).find("form")
            for(var i=0; i<forms.length; i++){
                forms[i].reset();
            }
            sleep(1000);
        }
    },
    getDefaultProps : function(){
        return{
            id:"modal_id",
            title:"无标题",
            body:null,
            footer:null,
            cssClass:"",
            removeX:false,
        };
    },
    render: function(){
        var cssClass="modal-dialog "+this.props.cssClass;
        //using css control to hide the modal
        var btnX = this.props.removeX?null:(
                    <button type="button" className="close" 
                       data-dismiss="modal" onClick={this.props.onExitClick}>
                          &times;
                    </button>
                    )
        return ( 
            <div className="modal fade" id={this.props.id} role="dialog" >
               <div className={cssClass}>
                 <div className="modal-content">
                   <div className="modal-header">
                        {btnX}
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

