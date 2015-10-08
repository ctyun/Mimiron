var React = require('react/addons');
var components = require('../../vendors/components');
var Button=require("../button/button");
var Grid=require("../page/grid");
var HiddenDiv = require("./hiddenDiv");
var PageButton=require("../page/page");
var Input = require("../html/input");
var Ajax = require("../../utils/ajax");
var Header = components.Header;
var PortletHeader = components.PortletHeader;
var Modal=require("../message/modal");
var BSSPanel=require("../panel/panel");
var QueryPanel=require("../panel/query-panel");
var TablePanel=require("../panel/table-panel");
var ToolBarPanel=require("../panel/tool-panel");
var CommonEvent=require("../../utils/react-common-action");
var CommonMethod=require("../../utils/react-common-method");
var Select=require("../html/select");
var Treeview = require("../tree/treeview");
var MessageBox = require("../message/messageBox");
var Debug = require("../../common/debug");

//var ChangeMeta=require("./changeMeta");

/*
 *业务组件, 用于管理元数据.
 *
**/




var Metadata = React.createClass({
    mixins: [CommonEvent,CommonMethod],
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
      },
    },
    getInitialState:function(){
        return {
            title:['选择','源表名称','编码','名称','查询类型','枚举项'],
            jsonKey:['reportMetadataId','resourceTableName','reportMetadataCode','reportMetadataName','defaultQueryTypeShow','selectParam'],
            data:null,
            offset:1, //当前页编号
            pageSize:10, 
            dispChooseEnumType:"none",
            dispChooseEnumValue:"none",
            dispTypeinEnumValue:"none",
            treeData:null,
            currentParam:null,
            foldUid:null,
            enumType:null, //枚举类型:parent or node
            enumUid:null,
            checkedID:null,//用于记录已经被选中的树节点uid
        };
    },
    componentDidMount:function(){
    },
    queryMetadata : function(param){ 
        param["pageNo"] = 1;
        param["pageSize"] = this.state.pageSize;
        param["defaultQueryType"] = param["defaultQueryTypeQ"]; //为了防止和设置modal中的input冲突
        delete param.defaultQueryTypeQ;
        param["reportMetadataName"] = param["reportMetadataNameQ"];
        delete param.reportMetadataNameQ;
        this.state.currentParam = param;  //保存参数, 修改之后利用此参数进行查询, 更新页面
        this.setState({offset:1,data:[]}); //重置当前页码
        Grid.cleanData();//清除勾选数据
        Ajax.post(this.static.URL["query"],param,this.setMetadata);
        //保存输入值
        this.state.resourceTableName = param.resourceTableName;
        this.state.reportMetadataCode = param.reportMetadataCode;
        this.state.reportMetadataNameQ = param.reportMetadataName;
        this.state.defaultQueryTypeQ = param.defaultQueryType; 
        this._doChange(param); //把param保存到全局变量, 翻页用
    },
    doList : function(currentPage,pageSize){
        var param = this.getParamValue(); 
        param = this.selectCommonParam(["resourceTableName","reportMetadataCode","reportMetadataName","defaultQueryType","pageNo","pageSize"]);
        if(currentPage&&pageSize){
            this.setState({offset:currentPage,pageSize:pageSize})
            param["pageNo"] = currentPage; 
            param["pageSize"] = pageSize;
        }    
        else if(currentPage){
            this.setState({offset:currentPage})
            param["pageNo"] = currentPage;
            param["pageSize"] = this.state.pageSize;
        }
        Ajax.post(this.static.URL["query"],param,this.setMetadata);
        this.setState({data:[]});
        Grid.cleanData();
    },
    setMetadata : function(data){ 
        Debug.log(data,"setMetadata");
        for(var i in data.result){
          d = data.result[i];
          d.defaultQueryTypeShow = this.static.showMetaDataType[d.defaultQueryType];
        }
        this.setState({data:data.result,totalRows:data.totalCount});
    },
    addResourceTableName : function(param){
        Modal.hide("addTableModal");
        this._doChange(param); //把param保存到全局变量, 自动查询用
        Ajax.get(this.static.URL["add"]+param["resourceTableName"]+"/"+param["tableDispName"],this.addSuccess);
    },
    addSuccess: function(r){ //添加成功之后, 刷新表格
      var param = this.getParamValue(); 
      param = this.selectCommonParam(["resourceTableName","reportMetadataCode","reportMetadataName","defaultQueryType","pageNo","pageSize"]);
      if(!param.pageNo)
          param.pageNo=1;
      if(!param.pageSize)
          param.pageSize=10;
      Ajax.post(this.static.URL["query"],param,this.setMetadata);
    },
    changeMeta : function(param){
      this.setState({treeData:null,enumValue:""});
      //this.state.dispChooseEnumType = "";
      Modal.hide("changeTableModal");
      var paramToPost = {}
      paramToPost['defaultQueryType'] = param['defaultQueryType'];
      paramToPost['selectUrl'] = param['enumURL'];
      paramToPost['reportMetadataId'] = Grid.getCheckedValue()[0];
      paramToPost["reportMetadataName"] = param["reportMetadataName"];
      if(param.defaultQueryType=="12"){ //枚举类型
        if(this.state.enumType=="parent"){
        paramToPost['parentId'] = this.state.enumUid;
        }
        else if(this.state.enumType=="node"){
          paramToPost['selectParam'] = this.state.enumUid;
          paramToPost['parentId'] = "";
        }
      }
      else if(param.defaultQueryType=="14"){ //静态枚举类型
        paramToPost['selectParam'] = param.selectParam;
      }
      
      Ajax.post(this.static.URL["modify"],paramToPost,this.changeMetaSuccess);
    },
    changeMetaSuccess : function(r){
      if(r==true){
        //this.queryMetadata(this.state.currentParam);
        Ajax.post(this.static.URL["query"],this.state.currentParam,this.setMetadata);//直接利用保存的参数进行查询
      }
      else{
        MessageBox.show("错误","错误");
      }
    },
    onSelectMetaData : function(v){
      if(v=="12"){    //枚举
        dispChooseEnumType = "";
        dispTypeinEnumValue = "none";
      }
      else if(v=="14"){   //静态枚举
        dispTypeinEnumValue = "";
        dispChooseEnumType = "none";
      }
      else{
        dispChooseEnumType = "none";
        dispTypeinEnumValue = "none";
      }
      this.setState({dispChooseEnumType:dispChooseEnumType,dispTypeinEnumValue:dispTypeinEnumValue});
    },
    onSelectEnumType : function(v){
    var treeData = null;
      switch(v){
        case "1": //选择父集
          var paramToPost = {"pageNo":1,"pageSize":999999};
          data = this.state.data; //find the cheched Id
          var resourceTableName = "error"; //需要使用表名查找, 只能遍历目前所有data
          for(var i in data){
            if(data[i].reportMetadataId==Grid.getCheckedValue()[0]){
              paramToPost["resourceTableName"] = data[i].resourceTableName;
            }
          }
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
      this.setState({treeData:{treedata:[]},dispChooseEnumValue:"",chooseInput:"2"}); //重写一遍, 防止缓存
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
        if(name.length==2) //防止name 中原本就有()
          name = name[0]; //取括号外面的值
        else
          name = name[0]+'('+name[1];
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
    toChangeMeta : function(){
      var changeMetaId=Grid.getCheckedValue()
      if(changeMetaId.length!=1){
        MessageBox.show("错误","请选择1个对象进行修改");
      }
      else{
        var defaultQueryType = null;
        var chooseInput = "";
        var reportMetadataName = null;
        var dispChooseEnumValue="none";
        this.state.checkedID = null; //应该清空树选中节点id
        this.state.chooseInput = null; //清空选择状态
        for(var i in this.state.data){
          if(this.state.data[i].reportMetadataId==Grid.getCheckedValue()[0]){
            defaultQueryType = this.state.data[i].defaultQueryType;
            this.state.reportMetadataName = this.state.data[i].reportMetadataName;//填入名称
            if(defaultQueryType=="12"){
              chooseInput = this.state.data[i].parentId?"1":"2"; //1为父集,2为节点
              dispChooseEnumValue = "";
              this.state.checkedID = this.state.data[i].parentId?this.state.data[i].parentId:this.state.data[i].selectParam;
            }
            else if(defaultQueryType=="14"){
              //this.state.TypeinEnumValue=this.state.data[i].selectParam; //填入手动输入的枚举值
              this.setState({TypeinEnumValue:this.state.data[i].selectParam});
            }
          }
        }     
        //设置枚举类型,枚举值,枚举源,树显示状态
        this.setState({enumURL:this.static.URL['enum'],chooseInput:chooseInput,dispChooseEnumValue:dispChooseEnumValue});
        //设置枚举选项的显示状态
        this.onSelectMetaData(defaultQueryType);
        //设置state会导致select无法被改变
        $("select[name='defaultQueryType']").val(defaultQueryType);
        //设置树的数据  并显示树
        this.onSelectEnumType(chooseInput);
        Modal.show("changeTableModal");
      }
    },
    changeSelectParam: function(event){
      this.setState({TypeinEnumValue:event.target.value});
    },
    render : function(){
      var tableProps = {
          title:this.state.title,
          jsonKey:this.state.jsonKey,
          data:this.state.data,
          doList:this.doList,
          pageSize:this.state.pageSize,
          offset:this.state.offset, //page:this.state.offset
          totalRows:this.state.totalRows,
          checkType:"radio",
      };
      var TypeinEnumValue = this.state.TypeinEnumValue;
      return (<div>
          <BSSPanel pageTitle = "元数据管理">
              <QueryPanel submitAction={this.queryMetadata} jsonFormat={true} okButtonName="查询">
                  <Input disName=" 源表名称:" name="resourceTableName" value={this.state.resourceTableName}/>
                  <Input disName=" 编码:" name="reportMetadataCode" value={this.state.reportMetadataCode}/>
                  <Input disName=" 名称:" name="reportMetadataNameQ" value={this.state.reportMetadataNameQ}/>
                  <Select disName=" 查询类型:" name="defaultQueryTypeQ" data={this.static.selectMetaDataType} defaultValue={this.state.defaultQueryTypeQ}/>
              </QueryPanel>
              <ToolBarPanel>
                  <Button btnName="添加" doAction = {Modal.show.bind(null,"addTableModal")} />
                  <Button btnName="修改" doAction = {this.toChangeMeta}/>
              </ToolBarPanel>
              <TablePanel {...tableProps}/>
              <Modal id="addTableModal" title="添加表" submitAction={this.addResourceTableName} jsonFormat={true}>
                  <Input disName=" 表名: " name="resourceTableName" />
                  <Input disName=" 显示表名: " name="tableDispName" />
              </Modal> 
              <Modal id="changeTableModal" title="修改表" submitAction={this.changeMeta} jsonFormat={true}>
                  <div className="content-left">
                      <Input disName="名称: " name="reportMetadataName" value={this.state.reportMetadataName}/> <br/>
                      <Select disName=" 元数据类型:" name="defaultQueryType" data={this.static.selectMetaDataType} onSelect={this.onSelectMetaData} defaultValue={this.state.defaultQueryType}/> <br />
                      <div style={{display:this.state.dispChooseEnumType}}>
                        <Input disName = "枚举源:  " name="enumURL" value={this.state.enumURL}/> <br />
                        <Select disName="选择" name="chooseInput" data={this.static.enumType} onSelect={this.onSelectEnumType} cssClass="input-md" defaultValue={this.state.chooseInput}/>
                        <Input disName = {null} name="enumValue" value={this.state.enumValue}/>
                        <div style={{"max-height":"300px","overflow-x":"hidden",display:this.state.dispChooseEnumValue}}>
                          <Treeview data={this.state.treeData} selectType="radio" onElementCheck={this.treeCheck} onElementFlod={this.treeFold} maxHeight="300px"/>
                        </div>
                      </div>
                      <div style={{display:this.state.dispTypeinEnumValue}}>
                        <p>枚举值<span style={{"font-size":"-3","color":"gray"}}>(请参考格式"key1:value1,key2:value2,...")</span>:</p>
                        <textarea name="selectParam" className="form-control" rows="3" value={TypeinEnumValue} onChange={this.changeSelectParam}/>
                      </div>
                  </div>
              </Modal> 
          </BSSPanel>
      </div>);
    }
});



module.exports = Metadata;