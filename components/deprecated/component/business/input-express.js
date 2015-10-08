var Input=require("../html/input");
var ExpressionSelect=require("../html/expression");
var React = require('react/addons');

var InputExpression=React.createClass({
    displayName:'Common Input',
    getDefaultProps:function(){
    return {
        onClick:null,
        cssClass : "input-nm"

    };
},
getInitialState:function(){
    return {
        dis:false,
        defValue:""
    };
},

componentWillReceiveProps:function(){

    this.setState({
        defValue:this.props.value
    })
},
componentDidUpdate: function (prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
        this.setState({
            defValue:this.props.value
        })
    }
},


_onChange:function(e){
    var v= e.target.value;
    var n= e.target.name;

    var obj={};

    this.setState({
        defValue:v
    });

    if(this.props.reg){
        if(!RegUtils.validate(this.props.reg,v)){
            BSSForm.setErrorMsg(n,this.props.errorMsg);
        } else{
            BSSForm.setErrorMsg(n,"");
        }
    }else{
        BSSForm.setErrorMsg(n,"");
    };
    if(n){
        obj[n]=v;
    }else{
        obj[v]=v;
    }
    if(this.props.doChange){
        this.props.doChange(obj);
    }
},
componentDidMount : function(){
    if(this.props.value){
        this._onChange({target:{value:this.props.value,name:this.props.name}});
    }
},
render:function(){
    var name="";
    if(this.props.displayName){
        name=this.props.displayName
    };
    var v=this.state.defValue;
    var className = "form-control "+this.props.cssClass;
    var expressionName=this.props.expressionName;
    //return <span>{name}<ExpressionSelect name={expressionName} /><input  id={this.props.id} name={this.props.name} errorMsg={this.props.errorMsg} reg={this.props.reg} className={className} onChange={this._onChange} onClick={this.props.onClick}   value={v} 　/></span>;
    return <span><div className="query-top" title={name}>{name}</div><ExpressionSelect name={expressionName} />{this.props.children}</span>;

}
});
module.exports=InputExpression;