/**
 * 使用方法:
 * mixins: [Deprecate([["oldProps1","newProps1"],["oldProps2,newProps2"])]
 */

var Depreacate = function(changes){
	return {
		componentWillMount: function(){
			if(typeof changes[0] == "object"){
				for(var kv in changes){
					if(!eval("this.props."+changes[kv][1])){
						eval("this.props."+changes[kv][1]+" = " +"this.props."+changes[kv][0]);
					console.info("组件"+changes[kv][1]+"属性即将弃用, 请使用"+changes[kv][0]+"属性替代");
					}
				}
			} else if(typeof changes[0] == "string"){
				if(!eval("this.props."+changes[kv][1])){
					eval("this.props."+changes[kv][1]+" = " +"this.props."+changes[kv][0]);
				console.info("组件"+changes[kv][1]+"属性即将弃用, 请使用"+changes[kv][0]+"属性替代");
				}
			}
		},
		componentWillReceiveProps: function(nextProps){
			if(typeof changes[0] == "object"){
				for(var kv in changes){
					if(!eval("nextProps."+changes[kv][1])){
						eval("nextProps."+changes[kv][1]+" = " +"nextProps."+changes[kv][0]);
					}
				}
			} else if(typeof changes[0] == "string"){
				if(!eval("nextProps."+changes[kv][1])){
					eval("nextProps."+changes[kv][1]+" = " +"nextProps."+changes[kv][0]);
				}
			}
		},
	}
}

module.exports=Depreacate;