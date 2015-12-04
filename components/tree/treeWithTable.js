/**
 * @module tree
 */

var React=require("react/addons");
var Treeview = require("./treeview");
var Grid=require("../page/grid2");
var PageButton=require("../page/page");
var Tools = require("../utils/tools");

/*
 * 使用说明
 * <Treeview treeCheck={this.treeCheck} treeFlod={this.treeFlod}/>
 * treeCheck: 当树中节点被选中时的操作(一般为ajax请求, 渲染右边表格数据)
 *  -(param1) uid:选中节点的id
 * treeFlod: 当数中父节点展开时的操作(一般为ajax请求,渲染子集)
 *  -(param1) uid:展开节点的id
 */
/**
 * 树和表格的组合组件
 * **注意: 此组件尚未经过测试**
 * ```
 * <TreeWithTable treeCheck={this.treeTableCheck} treeData={this.state.treeTableData}/>
 * -treeData: 树形组件的数据, 请参考Treeview组件
 * -treeCheck: 节点点击的回调函数
 *     --(携带参数1) uid:选中节点的id
 *     --(携带参数2) status:选中节点的状态
 * -treeFlod: 节点点击的回调函数
 *     --(携带参数1) uid:选中节点的id
 *     --(携带参数2) status:选中节点的状态
 * ```
 * @class TreeWithTable
 */

var TreeWithTable = React.createClass({
    name: 'TreeWithTable',

    getDefaultProps: function(){
        return{
            treeData:{
                treedata: [
                    {
                        "name": "no data",
                        "uid": "dummy1",
                        "children":[
                            {"name":"no data",
                            "uid":"dummy2"
                            },
                            {"name":"no data",
                            "uid":"dummy3"
                            },
                        ]
                    }, 
                    {
                        "name": "no data",
                        "uid": "dummy4",
                        "children":[
                            {"name":"no data",
                            "uid":"dummy5"
                            },
                            {"name":"no data",
                            "uid":"dummy6"
                            },
                        ]
                    },    
                ]
            },
            title:["选择","内容"],
            jsonKey:["id","value"],
            data:[{id:"testId",value:"testValue"}],
            doList:null,
            pageSize:10,
            offset:1,
            totalRows:1
        }
    },
    treeCheck: function(uid,status){
        if(status=="check"){
            this.props.treeCheck(uid);
        }
    },
    treeFlod: function(uid,status){
        if(status=="unflod"){
            this.props.treeFlod(uid);
        }
    },
    render: function(){
        return(<div>
                <Treeview cssClass="tree-left" data={this.props.treeData} selectType="r" onElementCheck={this.treeCheck} onElementFlod={this.treeFlod}/>
                <div className="table-right">
                    <Grid title={this.props.title} noHasCheckBox={this.props.noHasCheckBox} jsonKey={this.props.jsonKey} data={this.props.tableData}/>
                    <PageButton  doList={this.props.doList}  pageSize={this.props.pageSize}  page={this.props.offset} totalRows={this.props.totalRows}/>
                </div>
            </div>
        );
    }

});


module.exports=TreeWithTable;