var React = require('react/addons');
var Ajax = require("../../utils/ajax");
var Button=require("../button/button");
var Select=require("../html/select");
var Input = require("../html/input");
var Modal=require("../message/modal");
var CommonEvent=require("../../utils/react-common-action");
var CommonMethod=require("../../utils/react-common-method");
/**
* 业务组件: 
* uniqueID: 需要传入一个唯一ID, 用于动态生成子Modal
**/
var ChangeMeta = React.createClass({
	mixins: [CommonEvent,CommonMethod],
	getInitialState : function(){
		return{
			metaType:"11",
			selectMetaData:[{value:"11",text:"文本"},{value:"12",text:"枚举"},{value:"13",text:"数字"}],
      selectURL : "/FIXME",
		}
	},
	componentWillMount : function(){
		this.onSelectMetaData("11"); /*set default render to 11(文本)*/
	},
	componentDidMount : function(){
		
	},
	render : function(){
		var v = this.state.metaType;
    var toRender=null;
    if(v=="11"){ /*文本*/
      toRender = (<div>
        <Select disName=" 元数据类型:" data={this.state.selectMetaData} onSelect={this.onSelectMetaData}/> <br/>
        <div className="mb-ok-btn">
          <Button btnName="确认" doAction={this.changeTableModal}/>
        </div>
        </div>)
    }
    else if(v=="12"){
      toRender = (<div>
                    <Select disName=" 元数据类型:" data={this.state.selectMetaData} onSelect={this.onSelectMetaData}/> <br/>
                    <Input disName = "枚举源:  " name="selectURL" doChange={this._doChange} value={this.state.selectURL}/> <br/>
                    <Input disName = "请选择父类:  " name="parentType" doChange={this._doChange} onClick={this.showParentTypeChoose} value={this.state.parentType}/> <br/>
                    <Input disName = "请选择子类(可选):  " name="childType" doChange={this._doChange} onClick={this.showChildTypeChoose} value={this.state.childType}/> <br/>
                    <div className="mb-ok-btn">
                      <Button btnName="确认" doAction={this.changeTableModal}/>
                    </div>
                  </div>);
      modalDOM=(<div>
                  <Modal id="modalParentTypeChoose" title="请选择父类" >
                      <Input disName="test: " name="parentTypeChoose" doChange={this._doChange}/>
                      <br /><br /><br /><br /><br /><br />
                      <div className="mb-ok-btn">
                        <Button id="hideParentTypeChoose" btnName="确认" doAction={this.hideParentTypeChoose}/>
                      </div>
                  </Modal> 
                  <Modal id="modalChildTypeChoose" title="请选择子类" >
                      <Input disName="test: " name="childTypeChoose" doChange={this._doChange}/>
                      <div className="mb-ok-btn">
                        <Button id="hideChildTypeChoose" btnName="确认" doAction={this.hideChildTypeChoose}/>
                      </div>
                  </Modal>
                </div>);
      $("body").append("<div id="+this.props.uniqueID+"></div>")
      React.render(modalDOM, document.getElementById(this.props.uniqueID)); /*使用$("#"+this.props.uniqueID)会找不到节点, 原因不详*/
    }
    else if(v=="13"){
      toRender = (<div>
        <Select disName=" 元数据类型:" data={this.state.selectMetaData} onSelect={this.onSelectMetaData}/> <br/>
        <div className="mb-ok-btn">
          <Button btnName="确认" doAction={this.changeTableModal}/>
        </div>
        </div>)
    }
    return(toRender);
	},

	/*self defined methods*/
  changeTableModal : function(){
    Modal.hide("changeTableModal"); /*should find it's parent and hide it*/
    this.setState({selectURL:this.getParamValue()["selectURL"]});
    var param = this.getParamValue();
    Ajax.post("/toSomeURL",param,this.setMetadata);
  },
  onSelectMetaData : function(v){
    this.setState({metaType:v});
  },

  showParentTypeChoose : function(){
    Modal.show("modalParentTypeChoose");
  },
  showChildTypeChoose : function(){
  	Modal.show("modalChildTypeChoose");
  },
  hideParentTypeChoose : function(){
    Modal.hide("modalParentTypeChoose");
    param = this.getParamValue();
    this.setState({parentType:param.parentTypeChoose});
  },
  hideChildTypeChoose : function(){
  	Modal.hide("modalChildTypeChoose");
  	param = this.getParamValue();
    this.setState({childType:param.childTypeChoose});
  },
});



module.exports = ChangeMeta;