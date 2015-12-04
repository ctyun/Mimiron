/**
 *
 * @module ETL
 */

var React = require('react/addons');
var Tools = require("../utils/tools");


/**
 * 流程图生成组件
 * ```
 * 示例:
 * 
 * <FlowMaker elements="all" onSave={this.FlowMakerSave}/>
 * 
 * FlowMakerSave : function(data){
        alert(data);
    }
 * 
 * 
 * 接收参数如下:
 *  -onSave (function):保存时的回调函数, 带有一个参数data, data是用户构造的流程图XML表示, 不太好说清, 建议试试看.
 *  -elements (array):构造流程图可用的参数, 包括:
 *    --start
 *    --end
 *    --task
 *    --custom
 *    --subprocess
 *    --decision
 *    --fork
 *    --join
 *    可以传入"all"激活全部元素,(默认值为"all")
 *  -restore (string): 用来恢复流程图的json字符串, 王俊飞比较清楚生成方法. 
 * ```
 * @class FlowMaker
 */
var FlowMaker=React.createClass({
	statics:{
	},
    getInitialState:function(){
    	return{}
    },
    getDefaultProps: function(){
        return{
            basePath:"/static",
            elements:"all",
            restore:"",
        }
    },
    componentWillUpdate: function(nextProps, nextState){
    	if(nextProps.restore != this.props.restore){
    		var basePath = Mimiron.distPath;
    		var json=nextProps.restore;
			var model = "";
			if(json) {
				model=eval("(" + json + ")");
			}
			$('#snakerflow').empty();
			$('#snakerflow').snakerflow({
				basePath : basePath+"/vendors/snaker/",
	            ctxPath : basePath,
				restore : model,
	            formPath : "forms/",
				tools : {
					save : {
						onclick : function(data) {
							nextProps.onSave(data);
						}
					}
				}
			});	
    	}
    },
    componentWillMount:function(){
    	if(!Mimiron.distPath){
    		throw("组件FlowMaker依赖于Mimiron.distPath, 请先定义Mimiron.distPath为dist所在目录.")
    	}
    	var basePath = Mimiron.distPath;
    	Tools.loadCSS(basePath+"/vendors/snaker/snaker.css");
    },
    componentDidMount:function(){
		var basePath = Mimiron.distPath;
		var _this = this;
		Tools.loadScript(basePath+"/vendors/raphael/raphael-min.js", function(){
			//Tools.loadScript(basePath+"/vendors/jquery-ui/jquery.min.js");
	    	Tools.loadScript(basePath+"/vendors/jquery-ui/jquery-ui.js",function(){
	    		Tools.loadScript(basePath+"/vendors/snaker/dialog.js", function(){
	    			Tools.loadScript(basePath+"/vendors/snaker/snaker.designer.js", function(){
			    		Tools.loadScript(basePath+"/vendors/snaker/snaker.model.js", function(){
			    			Tools.loadScript(basePath+"/vendors/snaker/snaker.editors.js",function(){
				    			var json=_this.props.restore;
								var model = "";
								if(json) {
									model=eval("(" + json + ")");
								}
								$('#snakerflow').snakerflow({
									basePath : basePath+"/vendors/snaker/",
						            ctxPath : basePath,
						            orderId : "FIXME",
									restore : model,
									editable : true,
						            formPath : "forms/",
									tools : {
										save : {
											onclick : function(data) {
												_this.props.onSave(data);
											}
										}
									}
								});	
				    		});
			    		});
		    		});
	    		});
	    	});
		});
    },
    render:function(){
    	var basePath = Mimiron.distPath;
    	var elements = [];
    	if(this.props.elements=="all"){
    		elements = (<div>
    		<div className="node state" id="start" type="start"><img
				src={basePath+"/vendors/snaker/images/16/start_event_empty.png"} />&nbsp;&nbsp;start</div>
			<div className="node state" id="end" type="end"><img
				src={basePath+"/vendors/snaker/images/16/end_event_terminate.png"} />&nbsp;&nbsp;end</div>
			<div className="node state" id="task" type="task"><img
				src={basePath+"/vendors/snaker/images/16/task_empty.png"} />&nbsp;&nbsp;task</div>
			<div className="node state" id="custom" type="custom"><img
				src={basePath+"/vendors/snaker/images/16/task_empty.png"} />&nbsp;&nbsp;custom</div>
			<div className="node state" id="subprocess" type="subprocess"><img
				src={basePath+"/vendors/snaker/images/16/task_empty.png"} />&nbsp;&nbsp;subprocess</div>
			<div className="node state" id="decision" type="decision"><img
				src={basePath+"/vendors/snaker/images/16/gateway_exclusive.png"} />&nbsp;&nbsp;decision</div>
			<div className="node state" id="fork" type="fork"><img
				src={basePath+"/vendors/snaker/images/16/gateway_parallel.png"} />&nbsp;&nbsp;fork</div>
			<div className="node state" id="join" type="join"><img
				src={basePath+"/vendors/snaker/images/16/gateway_parallel.png"} />&nbsp;&nbsp;join</div>
			</div>);
    	}else{
    		if(typeof this.props.elements=="object" && this.props.elements.length>0){
    			for(var i in this.props.elements){
    				switch(this.props.elements[i]){
    					case "start":
    						elements.push(<div className="node state" id="start" type="start"><img src={basePath+"/vendors/snaker/images/16/start_event_empty.png"} />&nbsp;&nbsp;start</div>);
    						break;
    					case "end":
    						elements.push(<div className="node state" id="end" type="end"><img src={basePath+"/vendors/snaker/images/16/end_event_terminate.png"} />&nbsp;&nbsp;end</div>);
    						break;
    					case "task":
    						elements.push(<div className="node state" id="task" type="task"><img src={basePath+"/vendors/snaker/images/16/task_empty.png"} />&nbsp;&nbsp;task</div>);
    						break;
    					case "custom":
    						elements.push(<div className="node state" id="custom" type="custom"><img src={basePath+"/vendors/snaker/images/16/task_empty.png"} />&nbsp;&nbsp;custom</div>);
    						break;
    					case "subprocess":
    						elements.push(<div className="node state" id="subprocess" type="subprocess"><img src={basePath+"/vendors/snaker/images/16/task_empty.png"} />&nbsp;&nbsp;subprocess</div>);
    					case "decision":
    						elements.push(<div className="node state" id="decision" type="decision"><img src={basePath+"/vendors/snaker/images/16/gateway_exclusive.png"} />&nbsp;&nbsp;decision</div>);
    						break;
    					case "fork":
    						elements.push(<div className="node state" id="fork" type="fork"><img src={basePath+"/vendors/snaker/images/16/gateway_parallel.png"} />&nbsp;&nbsp;fork</div>);
    						break;
    					case "join":
    						elements.push(<div className="node state" id="join" type="join"><img src={basePath+"/vendors/snaker/images/16/gateway_parallel.png"} />&nbsp;&nbsp;join</div>);
    						break;
    					default:
    						throw(this.props.elements[i]+"不是一个有效的FlowMaker元素类型.")
    				}
    			}
    		}
    	}
        return(<div>
            <div id="toolbox">
			<div id="toolbox_handle">工具集</div>
			<div className="node" id="save"><img src={basePath+"/vendors/snaker/images/save.gif"} />&nbsp;&nbsp;保存</div>
			<div>
			<hr />
			</div>
			<div className="node selectable" id="pointer">
			    <img src={basePath+"/vendors/snaker/images/select16.gif"} />&nbsp;&nbsp;Select
			</div>
			<div className="node selectable" id="path">
			    <img src={basePath+"/vendors/snaker/images/16/flow_sequence.png"} />&nbsp;&nbsp;transition
			</div>
			<div>
			<hr/>
			</div>
			{elements}
			</div>

			<div id="properties">
			<div id="properties_handle">属性</div>
			<table className="properties_all" cellpadding="0" cellspacing="0">
			</table>
			<div>&nbsp;</div>
			</div>

			<div id="snakerflow"></div>
			</div>);
	}
});
module.exports=FlowMaker;