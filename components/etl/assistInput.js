/**
 * @module etl
 *
 */

var React=require("react/addons");
var AltForm= require("../html/altForm");
var Modal = require("../message/modal");
var Input = require("../html/input");


var AssistInput = React.createClass({
	getDefaultProps : function(){
        return{
            id:"Mimiron_flowMakerModal",
        };
    },
	assistModalHandler: function(param){
		console.log($(Mimiron["currentAssistInput"]).val());
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
        Modal.hide(this.props.id);
        Mimiron["currentAssistInput"] = null;
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