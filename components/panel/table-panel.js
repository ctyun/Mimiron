    /**
     * Created by chenth on 15-7-24.
     * 封装表格面板组件
     *@module TablePanel
     *@example
     *```
     * 使用方法
     *var React = require('react');
     *var components=require("components");
     *var TablePanel=components.TablePanel;
     *var TablePanelDemo=React.createClass(
     *     render:function(){
     *     tableProps:{
     *         title:['选项','标题1','标题2','标题3'],
     *         jsonKey:['id','t1','t2','t3'],
     *         data:[{id:1,
     *           t1:'测试1',
     *           t2:'测试2',
     *           t3:'测试3'}],
     *         doList:function(){},
     *         pageSize:10,
     *         offset:1, //page:this.state.offset
     *         totalRows:1,
     *         checkType:"radio",
     *     }
     *         return (<TablePanel {...tableProps}/>);
     *     }
     * );
     *
     * 使用说明
     *tableProps:{
     *         title:['选项','标题1','标题2','标题3'],
     *        jsonKey:['id','t1','t2','t3'],
     *         data:[{id:1,
     *           t1:'测试1',
     *           t2:'测试2',
     *           t3:'测试3'}],
     *         doList:function(){},
     *         pageSize:10,
     *         offset:1, //page:this.state.offset
     *         totalRows:1,
     *         checkType:"radio",
     *     }
     *```
     */
var React=require("react/addons");
var BSSPanel=require("./panel");

var Grid=require("../page/grid");
var PageButton=require("../page/page");
    /**
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
