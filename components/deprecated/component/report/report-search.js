var React = require('react/addons');
var BSSForm=require("../html/form");
var Input=require("../html/input");
var Select=require("../html/select");

var ExpressionSelect=require("../html/expression");

var InputExpression = require('../business/input-express');
var Debug = require("../../common/debug");


var Search = React.createClass({
  getInitialState: function() {
    return {
      query: []
    }
  },
  static:{
    getKV:"api/console/getResourceListByParentId/",
  },
  //render: function() {
  //   console.debug("======");
  //    console.debug(this.props.query);
  //  return (
  //    <form  >
  //      <div data-row-span="3">
  //        {this.props.query.map(function(query, key) {
  //          return (
  //            <div data-field-span="1" key={key}>
  //              <label htmlFor={query.id}>{query.displayName}</label>
  //              <input type="text" id={query.reportMetadataCode} defaultValue="" onChange={this._onChange.bind(null, query.reportMetadataCode)} placeholder={query.displayName} />
  //            </div>
  //          )
  //        }.bind(this))}
  //        <div data-field-span="1">
  //          <button onClick={this._submit} className="btn btn-block btn-primary"><i className="fa fa-search"></i> 查询</button>
  //        </div>
  //      </div>
  //    </form>
  //  )
  //},
    submitAction:function(param){

        var query = this.state.query.map(function(queryItem) {
            if(param[queryItem.reportMetadataCode]&&param[queryItem.reportMetadataCode].length>0){
                queryItem.defaultValue = param[queryItem.reportMetadataCode];
            }else{
                queryItem.defaultValue =null;
            }

             queryItem.defaultSign=param["sign_"+queryItem.reportMetadataCode]
            return queryItem;
        });

        this.props.onSearch(query);
    },
render: function() {
    this.state.query=this.props.query;
    var queryName="查询";
    return (<BSSForm  id="report-search-form" okButtonName={queryName} jsonFormat={true} submitAction={this.submitAction} className="grid-form">
        <div data-row-span="3">
        {this.props.query.map(function(query, key) {
            var expName="sign_"+query.reportMetadataCode;
           // var type=  <div><InputExpression  displayName={query.displayName} expressionName={expName}><Input  value={query.defaultValue} name={query.reportMetadataCode}  /> </InputExpression></div>
            var type="";
            var sd=[];
            if(query.queryType==11){
                type=<div><InputExpression  displayName={query.displayName} expressionName={expName}><Input  value={query.defaultValue} name={query.reportMetadataCode}/></InputExpression> </div>
            }else if(query.queryType==12){
                if(query.reportMetadataBO.defaultQueryType==12){
                    var parentId = query.reportMetadataBO.parentId?query.reportMetadataBO.parentId:query.reportMetadataBO.selectParam;
                    var url = "api/console/getResourceListByParentId/" + parentId;
                    var req = new XMLHttpRequest();
                    req.open('get',url,false);
                    req.send();
                    if(req.readyState==4){
                      if(req.status==200){
                        var result = req.responseText;
                      }
                    }
                    result = eval(result);
                    for(var i in result){
                      sd.push({value:result[i].code,text:result[i].name});
                    }
                    type=<div><InputExpression  displayName={query.displayName} expressionName={expName}> <Select  data={sd} defaultValue={query.defaultValue}  name={query.reportMetadataCode}   /></InputExpression ></div>
                }
                else if(query.reportMetadataBO.defaultQueryType==14){
                    var selParam = query.reportMetadataBO.selectParam;
                    try{
                      var kv = selParam.split(",");
                      for(var i in kv){
                        var value = kv[i].split(":")[0];
                        var text = kv[i].split(":")[1];
                        sd.push({value:value,text:text});
                      }
                    }catch(e){
                      console.debug(e);
                      sd=[{value:"",text:"数据存在错误,请重新配置元数据"}];
                    }
                    type=<div><InputExpression  displayName={query.displayName} expressionName={expName}> <Select  data={sd} defaultValue={query.defaultValue}  name={query.reportMetadataCode}   /></InputExpression ></div>
                }else{
                    type = <div><span>**没有配置元数据**</span></div>
                }
                
            }
        return (
            <div data-field-span="1" key={key}>
                {type}
            </div>
            )
            }.bind(this))}

        </div>
    </BSSForm>
)
},
  _submit: function(e) {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  },

_onChange: function(code, e) {
    var query = this.state.query.map(function(queryItem) {
      if (queryItem.reportMetadataCode === code) {
        queryItem.defaultValue = e.target.value;
      }
      return queryItem;
    })
  }
});

module.exports = Search;
