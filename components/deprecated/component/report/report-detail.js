/**
 * Created by Administrator on 2015/4/14.
 */
var React = require('react/addons');
var Action = require('../../action/report');
var $ = require('jquery');
var Modal=require("../message/modal");
var MessageBox = require("../message/messageBox");
var Button=require("../button/button");
var Input = require("../html/input");
var Select=require("../html/select");
var Treeview = require("../tree/treeview");
var Debug = require("../../common/debug");
var Ajax = require("../../utils/ajax");

var Details = React.createClass({
    static:{
      selectMetaDataType:[{value:"11",text:"文本"},{value:"13",text:"数字"},{value:"12",text:"枚举"},{value:"14",text:"静态枚举"}],
      showMetaDataType:{11:"文本",12:"枚举",13:"数字",14:"静态枚举"},
      enumType:[{value:"1",text:"父集"},{value:"2",text:"节点"}],
      URL:{"query":"/api/report/getMetadataPageByParam",
        "add":"/api/report/addResourceTableName/",
        "modify":"/api/report/modifyMetadata",
        "enum":"/api/console/getResourceListByParentId/",
        "chooseNode":"api/console/getSelectTreeById/aae8cd9ba2bd48f5bb788663e37d69ca",
        "nodeChildren":"api/console/getSelectTreeById/",
        "queryById":"api/report/getMetadataById/",
      },
    },
    getInitialState : function(){
        return {
            content: this.props.content,
            name: null,
            queryType: null,
            isDummy : false,
            nameChange : false,
            typeChange : false,
            defaultValueChange: false,
            isDummyChange: false,
        }
    },
    componentWillReceiveProps : function(nextProps){
        if(this.props.content != nextProps.content){
            this.setState({content:nextProps.content,nameChange : false,typeChange : false, defaultValueChange:false, isDummyChange:false});
        }
    },

    render: function(){
        var modes = this.props.content;
        var advancedProperties = eval('(' + modes.advancedProperties + ')');
        var _name = this.state.nameChange? this.state.name : modes.reportMetadataName ;
        var _type = this.state.typeChange? this.state.queryType : modes.queryType ;
        var _defaultValue = this.state.defaultValueChange? this.state.defaultValueOuter : modes.defaultValue ; //加out为了和修改元数据modal区分开
        if(advancedProperties && advancedProperties.isDummy && !this.state.isDummyChange)
            this.state.isDummy = advancedProperties.isDummy;
        //var _isDummy = this.state.isDummyChange? this.state.isDummy: advancedProperties.isDummy;
        var labelName =  <input type='text' className="form-control"  ref="name" value={_name} onChange={this.handleChange}/>;
        var labelDefaultValue = <input type='text' className="form-control"  ref="defaultValueOuter" value={_defaultValue} onChange={this.handleDefaultValueChange}/>;
        var labelType;
        if(modes.location=='mid'){ //列表区
            if(!this.state.content.queryType){
                this.state.content.queryType=1;
            }else{
                this.state.content.queryType=_type;
            }
            labelType=<select className="form-control" onChange={this._onChange} value={this.state.content.queryType}>
                <option value='1' >text</option>
                <option value='2' >number</option>
                <option value='3'>date</option>
                <option value='4'>money</option>
                <option value='5'>sum</option>
            </select>; 
        }else if(modes.location=='top'){  //查询区
            if(!this.state.content.queryType){
                this.state.content.queryType=11;
            }else{
                this.state.content.queryType=_type;
            }
            labelType = <select className="form-control" onChange={this._onChange} value={this.state.content.queryType}>
                <option value='11' >text</option>
                <option value='12'>select</option>
            </select>;
        }
        return (<div>
          <Modal id="addReportDetailModal" hideDefaultButton={true} title="详细属性" >
            <div className = 'panel panel-green'>
            <div className="panel-body pan">
                <div className="form-horizontal">
                    <div className="form-body pal">
                        <div className="form-group">
                            <label className="col-md-3 control-label">组件名称：</label>
                            <div className="col-md-9">{labelName}</div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">组件类型：</label>
                            <div className="col-md-9">
                            {labelType}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">默认值：</label>
                            <div className="col-md-9">
                            {labelDefaultValue}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">是否额外信息: </label>
                            <div className="col-md-9">
                            <div className="checkbox float-left">
                            <input className="no-margin-left" type='checkbox' ref="isDummy" checked={this.state.isDummy?"checked":""} onChange={this.isDummyChange}/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-actions">
                        <div className="col-md-offset-3 col-md-9">
                            <Button btnName="修改元数据" cssClass="btn-warning" doAction={this.showChangeTableModal}/>
                            <Button btnName='确定' doAction={this._save} />
                            <Button btnName='取消' doAction={this._onClose}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Modal>
        <Modal id="changeTableModal" title="修改元数据" submitAction={this.changeMeta} jsonFormat={true}>
            <div className="content-left">
                <Input disName="名称: " name="reportMetadataName" value={this.state.reportMetadataName}/> <br/>
                <Select disName=" 元数据类型:" name="defaultQueryType" data={this.static.selectMetaDataType} onSelect={this.onSelectMetaData} defaultValue={this.state.defaultQueryType}/> <br />
                <div style={{display:this.state.dispChooseEnumType}}>
                  <Input disName = "枚举源:  " name="enumURL" value={this.state.enumURL}/> <br />
                  <Select disName="选择" name="chooseInput" data={this.static.enumType} onSelect={this.onSelectEnumType} cssClass="input-md" defaultValue={this.state.chooseInput}/>
                  <Input disName = {null} name="enumValue" value={this.state.enumValue}/>
                  <div style={{"max-height":"250px","overflow-x":"hidden",display:this.state.dispChooseEnumValue}}>
                    <Treeview data={this.state.treeData} selectType="radio" onElementCheck={this.treeCheck} onElementFlod={this.treeFold} maxHeight="250px"/>
                  </div>
                </div>
                <div style={{display:this.state.dispTypeinEnumValue}}>
                  <p>枚举值<span style={{"font-size":"-3","color":"gray"}}>(请参考格式"key1:value1,key2:value2,...")</span>:</p>
                  <textarea name="selectParam" className="form-control" rows="3" value={this.state.TypeinEnumValue} onChange={this.changeSelectParam}/>
                </div>
            </div>
        </Modal> 
        </div>
        );
},
_onChange : function(e){
    e.stopPropagation();
    this.setState({queryType:e.target.value,typeChange:true});

},
handleChange: function(e) {
    e.stopPropagation();
    this.setState({name: e.target.value,nameChange:true});
},
isDummyChange : function(e){
    e.stopPropagation();
    this.setState({isDummy:!this.state.isDummy,isDummyChange:true});
},
handleDefaultValueChange: function(e){
    e.stopPropagation();
    this.setState({defaultValueOuter: e.target.value,defaultValueChange:true});
},
_save : function(param){

    var _modes = this.state.content;
    if(this.state.nameChange){
        _modes.reportMetadataName = this.state.name;
    }
    if(this.state.typeChange){
        _modes.queryType = this.state.queryType;
    }
    if(this.state.defaultValueChange){
        _modes.defaultValue = this.state.defaultValueOuter;
    }
    _modes.isDummy = this.state.isDummy;
    Modal.hide("addReportDetailModal");
    this.props.modifyMode(_modes);

},
_onClose:function(){
    Modal.hide("addReportDetailModal");
},
showChangeTableModal: function(){ //使用this.props.content值渲染modal
  paramToPost={pageNo:1,pageSize:999,reportMetadataId:this.props.content.reportMetadataId}
  Ajax.get(this.static.URL["queryById"]+this.props.content.reportMetadataId,this.showChangeTableModalSuccess);
  return;
},
showChangeTableModalSuccess: function(r){
  metadata=r; //返回结果应该有且只有一个
  this.onSelectMetaData(null); //重置modal状态
  this.state.dispChooseEnumValue="none";
  this.state.dispTypeinEnumValue="none";
  this.state.dispChooseEnumType = "none";
  this.state.metadata = metadata; //默认数据填入state  准备用于显示
  this.state.reportMetadataName = metadata.reportMetadataName;
  this.onSelectMetaData(metadata.defaultQueryType); //按照defaultQueryType设置select和显示
  //this.forceUpdate();
  Modal.show("changeTableModal");
},

onSelectMetaData : function(v){
  this.state.dispChooseEnumType = "none";
  this.state.dispTypeinEnumValue = "none";
  this.state.defaultQueryType = v;
  var metadata = this.state.metadata;
  if(v=="12"){    //枚举  
    this.onSelectEnumType(null); //清空
    this.state.dispChooseEnumType = "";
    this.state.dispTypeinEnumValue = "none";
    this.state.enumURL = this.static.URL.enum;
    this.state.enumType = null; //如果metadata的parentId和enumType都没有设置, enumType置为空
    if(metadata.parentId) //1为父集,2为节点
      this.state.enumType = "1";
    if(!metadata.parentId && metadata.selectParam)
      this.state.enumType = "2";
    this.state.dispChooseEnumValue="";
    this.state.checkedID = metadata.parentId?metadata.parentId:metadata.selectParam;
    this.onSelectEnumType(this.state.enumType); //设置并显示树
  }
  else if(v=="14"){   //静态枚举
    this.state.dispTypeinEnumValue = "";
    this.state.dispChooseEnumType = "none";
    this.state.TypeinEnumValue = metadata.selectParam;
  }
  this.forceUpdate();
},
onSelectEnumType : function(v){
  var treeData = null;
  //this.setState({treeData:{treedata:{}}}); //先清空树, 防止缓存
    switch(v){
      case "1": //选择父集
        var paramToPost = {"pageNo":1,"pageSize":999999};
        metadata = this.state.metadata; //find the checked Id  
        paramToPost["resourceTableName"] = metadata.resourceTableName;
        Ajax.post(this.static.URL["query"],paramToPost,this.updateTree1);
        this.state.enumType = "parent";
        this.state.enumValue = "";
        break;
      case "2": //选择节点
        Ajax.get(this.static.URL["chooseNode"],this.updateTree2);
        this.state.enumType = "node";
        this.state.enumValue = "";
        break
      default:
        this.setState({treeData:null,enumValue:null,dispChooseEnumValue:"none",enumType:"",chooseInput:""}); //如果没有选择select 则清空
    }
    //this.setState({treeData:null,enumValue:null}); //如果没有选择select 则清空
    
},
    updateTree1 : function(r){ //选择父集的树
      result = r['result'];
      var treedata = [];
      for(var i in result){
        var name= result[i].reportMetadataName + "("+result[i].reportMetadataCode+")";
        if(this.state.checkedID && this.state.checkedID==result[i].reportMetadataId) //应该是result[i].reportMetadataId还是parentId?
        {
          treedata.push({"name":name,"uid":result[i].reportMetadataId,"isSelected":"all"});
          this.setState({enumValue:result[i].reportMetadataName}) //填input
        }  
        else{
          treedata.push({"name":name,"uid":result[i].reportMetadataId});
        }
      }
      treeData={"treedata":treedata};
      this.setState({treeData:treeData,dispChooseEnumValue:"",chooseInput:"1"});
    },
    updateTree2 : function(r){ //选择节点的树
      var treedata = [];
      for(var i in r){
        var name = r[i].codeText + "("+r[i].codeName+")";
        if(this.state.checkedID && this.state.checkedID==r[i].id)
        {
          treedata.push({
            "name":name,
            "uid":r[i].id,
            "children":[
              {
                  "name": "请等待..",
                  "selectType":"none"
              }
            ],
            "isSelected":"all"
          }); 
          this.setState({enumValue:r[i].codeText}) //填input
        }
        else
          treedata.push({
            "name":name,
            "uid":r[i].id,
            "children":[
              {
                  "name": "请等待..",
                  "selectType":"none"
              }
            ],
          }); 
      }
      treeData={"treedata":treedata};
      //this.setState({treeData:{treedata:[]},dispChooseEnumValue:"",chooseInput:"2"}); //重写一遍, 防止缓存
      this.setState({treeData:treeData,dispChooseEnumValue:"",chooseInput:"2"});
    },
    updateTree2Children : function(r){ //给选择节点的树添加children
      var children = [];
      for(var i in r){  //组织即将添加的数组
        children.push({"name":r[i].codeText,"uid":r[i].id,"selectType":"none"});
      }
      treedata = this.state.treeData["treedata"];
      for(var i in treedata){
        if(treedata[i].uid==this.state.flodUid){
          treedata[i].children = children;
        }
      }
      treeData={"treedata":treedata}; //更新树
      this.setState({treeData:treeData,dispChooseEnumValue:"",chooseInput:"2"});
    },
    treeCheck : function(uid,status,name){
      if(status=="check"){
        var name = name.split("(");
        name = name[name.length-2]; //取括号外面的值
        this.setState({enumValue:name}); //请勿使用下面注释的方法
        //$("input[name='enumValue']").val(name);
        this.state.enumUid = uid; //临时存储uid,防止提交表单时再次遍历查询
      }
    },
    treeFold : function(uid,status){
      this.state.flodUid = uid;
      if(status=="unfold"){
        Ajax.get(this.static.URL["nodeChildren"]+uid,this.updateTree2Children);
      }
    },
    changeMeta : function(param){
      this.setState({treeData:{treedata:[]},enumValue:""});
      Modal.hide("changeTableModal");
      var paramToPost = {}
      paramToPost['defaultQueryType'] = param['defaultQueryType'];
      paramToPost['reportMetadataId'] = this.state.metadata.reportMetadataId;
      paramToPost["reportMetadataName"] = param["reportMetadataName"];
      if(param.defaultQueryType=="12"){ //枚举类型
        if(this.state.enumType=="parent"){
          paramToPost['selectUrl'] = param['enumURL'];
          paramToPost['parentId'] = this.state.enumUid;
          this.state.checkedID = paramToPost['parentId'];
        }
        else if(this.state.enumType=="node"){
          paramToPost['selectParam'] = this.state.enumUid;
          paramToPost['parentId'] = "";
          this.state.checkedID = paramToPost['selectParam'];
        }
      }
      else if(param.defaultQueryType=="14"){ //静态枚举类型
        paramToPost['selectParam'] = param.selectParam;
      }
      for(var i in paramToPost){
        this.state.metadata[i] = paramToPost[i];
      }
      Ajax.post(this.static.URL["modify"],paramToPost,this.changeMetaSuccess);
    },
    changeMetaSuccess : function(r){
      if(r==true){
        //this.queryMetadata(this.state.currentParam);
        MessageBox.show("成功","修改成功");
      }
      else{
        MessageBox.show("错误","错误");
      }
    },
    changeSelectParam: function(event){
      this.setState({TypeinEnumValue:event.target.value});
    },
});



module.exports = Details;
