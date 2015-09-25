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
     *     render:function(){
     *     return (<QueryPanel submitAction={queryMetadata} jsonFormat={true} okButtonName="查询(请看console)">
     *                <Input disName=" 示范输入:" name="demoInput"/>
     *           </QueryPanel>);
     *     }
     * );
     * 使用说明
     * <QueryPanel submitAction={queryMetadata} jsonFormat={true} okButtonName="查询(请看console)">
     *      <Input disName=" 示范输入:" name="demoInput"/>
     *  </QueryPanel>
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
