/**
 * @module html
 *
 */

var React=require("react/addons");
var Button=require("../html/button");
var $=require("jquery");
/**
 * 可变表单组件
 *```
 *使用示例:
 *  <AltForm jsonFormat={true} submitAction={this.AltFormHandler}> 
        <Input disName="输入1" name="input1" />
        <Input disName="输入2" name="input2" />
    </AltForm>
 *```
 * @class AltForm
 */

var AltForm=React.createClass({
    getInitialState : function(){
        return {
            elem:{},
            copys:0,
            childrenNodes:[]
        };
    },
    getDefaultProps : function(){
        return{
            id:"AltForm-default-id",
            okButtonName:"确定"
        };
    },
    componentWillMount: function(){
        var childrenNodes = this.state.childrenNodes;
        childrenNodes.push(<span key={this.state.copys}>
            {this.props.children}
            <a href="" className="btn btn-danger" onClick={this.removeCopy.bind(null,this.state.copys)}><i className="fa fa-minus-square-o"></i></a>
            </span>);
        this.setState({"childrenNodes":childrenNodes});
    },
    componentDidMount:function(){
        var node=this.getDOMNode();
        this.state.elem=node;
    },
    addCopy:function(e){
        var copys = this.state.copys + 1;
        var childrenNodes = this.state.childrenNodes;
        childrenNodes.push(<span key={copys}>
            <br />
            {this.props.children}
            <a href="" className="btn btn-danger" onClick={this.removeCopy.bind(null,copys)}><i className="fa fa-minus-square-o"></i></a>
            </span>);
        this.setState({copys:copys,childrenNodes:childrenNodes});
        e.preventDefault();
        e.stopPropagation();
    },
    removeCopy: function(copys, e){
        var childrenNodes = this.state.childrenNodes;
        var toDel = null;
        if(childrenNodes.length>1){
            for(var i in childrenNodes){ 
                if(childrenNodes[i].key==copys){
                    toDel = i;
                    break;
                }
            }
            toDel = Number(toDel);
            childrenNodes = childrenNodes.slice(0,toDel).concat(childrenNodes.slice(toDel+1,childrenNodes.length));
            this.setState({childrenNodes:childrenNodes});

        }
        e.preventDefault();
        e.stopPropagation();
    },

    _submitAction:function(){
        var node=this.state.elem;
        var param={};
        param=$(node).serialize();
        if(this.props.submitAction){
            param=$(node).serialize();
            param=decodeURIComponent(param,true);
            if(this.props.jsonFormat&& this.props.jsonFormat==true){
              var json={};
              var vs=param.split("&");
              if(vs.length>1){
                for(var i in vs){
                      var obj= vs[i].split("=");
                      json[obj[0]+"["+i+"]"]=obj[1];
                  };
              }else{
                var obj= vs[0].split("=");
                json[obj[0]]=obj[1];
              }
              this.props.submitAction(json);
          } else{
              this.props.submitAction(param);
          }
       }
    },
    render:function(){
        var okName="提交";
        var props=this.props;
        var node=this.state.elem;
        var children = [];

        if(this.props.okButtonName){
            okName=this.props.okButtonName;
        };
        return (<form  {...props}>
            {this.state.childrenNodes}
            <a href="" className="btn btn-success" onClick={this.addCopy}><i className="fa fa-plus-square-o"></i></a><br />
            {this.props.hideDefaultButton&&this.props.hideDefaultButton==true?null:
            <Button displayName={okName} disabledName={this.props.disabledName} disabled={this.props.disabledSubmitBtn}   onClick={this._submitAction} type="submit"/>}
        </form>);
    }
});
module.exports=AltForm;