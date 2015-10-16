    /**
     *@module panel
     */
var React=require("react/addons");
var BSSPanel=require("./panel");

var Grid=require("../page/grid");
var PageButton=require("../page/page");
    /**
     * 封装表格面板组件
     *```
     * 使用方法
        var TablePanelDemo=React.createClass(
             doList: function(currentPage,pageSize){
                  //在这里通过currentPage和pageSize发送ajax请求获取数据, 然后写入tableProps.data, 注意先清空旧数据.
                  console.log(currentPage,pageSize);
             },
             render:function(){
                  var tableProps={
                       title:['选项','标题1','标题2','标题3'],
                       jsonKey:['id','t1','t2','t3'],
                       data:[{id:1,
                       t1:'测试1',
                       t2:'测试2',
                       t3:'测试3'}],
                       doList:this.doList,
                       pageSize:10,
                       offset:1, //page:this.state.offset
                       totalRows:1,
                       checkType:"radio",
                  }
             return (<TablePanel {...tableProps}/>);
        });
     *```
     * @class TablePanel
     */
var TablePanel=React.createClass({
    render:function(){
        return (<div>
                <Grid title={this.props.title} noHasCheckBox={this.props.noHasCheckBox} jsonKey={this.props.jsonKey} data={this.props.data} checkType={this.props.checkType}/>
                <PageButton  doList={this.props.doList}  pageSize={this.props.pageSize}  page={this.props.offset} totalRows={this.props.totalRows}/>
              </div>)
    }
});


module.exports=TablePanel;
