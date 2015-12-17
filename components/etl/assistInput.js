/**
 * @module etl
 *
 */

var React=require("react/addons");
var AltForm= require("../html/altForm");
var Modal = require("../message/modal");
var Input = require("../html/input");


var AssistInput = React.createClass({
	statics:{
		show: function(id, str){
			Modal.show(id);
        	AssistInput.format(id,str);
		},
		format: function(id, str){
			if(!str)
				return;
			var target = $("#"+id+" #AltForm-default-id");
			var currentObj = $.parseJSON(str);
			var objLength = 0;
			var spanLength = $(target).children("span").length;
			for(var i in currentObj){
				objLength++;
			}
			while(spanLength++<objLength){
				$(target).children("a.btn-success").children().click();
			}
			setTimeout(function(){
				var cnt=0
				for(var i in currentObj){
					var cTarget = $(target).children("span")[cnt];
					$(cTarget).find("input").first().val(i);
					$(cTarget).find("input").last().val(currentObj[i]);
					cnt++;
				}
			}.bind(target),200);
		}
	},
	getDefaultProps : function(){
        return{
            id:"Mimiron_flowMakerModal",
        };
    },
	assistModalHandler: function(param){
		if(this.props.onSubmit){
			var flag=true;
			var cnt = 0;
			var showObj = {}
			while(flag){
				showObj[param["key["+cnt+++"]"]] = param["value["+cnt+++"]"];
				flag=param["key["+cnt+"]"];
			}
			this.props.onSubmit(JSON.stringify(showObj));
		}
		else{
			var flag=true;
			var cnt = 0;
			var showObj = {}
			while(flag){
				showObj[param["key["+cnt+++"]"]] = param["value["+cnt+++"]"];
				flag=param["key["+cnt+"]"];
			}
			var reg = new RegExp('"',"g");
			$(Mimiron["currentAssistInput"]).val(JSON.stringify(showObj).replace(reg,"'"));
	        $(Mimiron["currentAssistInput"]).trigger("selfEvent");
	        Mimiron["currentAssistInput"] = null;
		}
		Modal.hide(this.props.id);
	},
	onX: function(){
		Mimiron["currentAssistInput"] = null;
	},
	render: function(){
		return (<Modal id={this.props.id} title="编辑节点" jsonFormat={true} contentType="div" onClickX = {this.onX}>
	                <AltForm jsonFormat={true} submitAction={this.assistModalHandler}> 
	                    <Input disName="键" name="key" /><Input disName="值" name="value" />
	                </AltForm>
	            </Modal>)
	}
});
module.exports=AssistInput;