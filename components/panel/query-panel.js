    /**
     *@module panel
     */
var React=require("react/addons");

var BSSForm=require("../html/form");

    /**
     * 查询面板,包装了form表单
     *```
     * 使用方法
     *var React = components.React;
     *var QueryPanel=components.QueryPanel;
     *var Input=components.Input;
     *var AutocompleteDemo=React.createClass(
     *     queryMetadata : function(params){
     *         console.log(params);
     *     },
     *     render:function(){
     *     return (<QueryPanel submitAction={this.queryMetadata} jsonFormat={true} okButtonName="查询(请看console)">
     *                <Input disName=" 示范输入:" name="demoInput"/>
     *           </QueryPanel>);
     *     }
     * );
     * 使用说明:
     * submitAction为回调方法, 该方法携带一个参数, 为QueryPanel中所有可输入元素(input,select等)的键值对, 例如:
     * params={demoInput:"1234"}
     *
     *```
     * @class QueryPanel
     *
     */
var QueryPanel=React.createClass({
    getInitialState:function(){
            return {
                dis:false
            };
        },
    /*
     * 表达提交回调方法
     * @param param
     */
    submitAction:function(param){

        if(this.props.submitAction){

            this.props.submitAction(param);
        }

    },
    render:function(){
    var formProps={
        submitAction:this.submitAction,
        jsonFormat:true,
        okButtonName:"查询"
    };
    if(this.props&&this.props.submitAction){
        formProps=this.props;
        if(!this.props.jsonFormat){
            formProps.jsonFormat=true;
        }
    }
    return (<div className="query-panel"><BSSForm {...formProps} >{this.props.children}</BSSForm></div>)
}
});


module.exports=QueryPanel;
