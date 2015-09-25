/** * Created by chenth on 15-7-10. * 表格分页组件 * @module page *@example *``` * 使用说明 * <PageButton  doList={this.doList} pageSize={this.state.pageSize}  page={this.state.offset} totalRows={this.state.totalRows}/> ＊doList:回调ajax请求的方法，加载列表数据 ＊pageSize：页面大小 ＊page:当前页面 ＊totalRows:总行数 *``` */var React = require('react/addons');var PageSizeSelect=require("./pagesizeselect");var Debug = require("../utils/debug");/** * 替代react-bootstrap中的组件, 内部组件, 请勿调用. * @class Pager * @for PageButton */var Pager = React.createClass({    render: function(){        return (<ul className="mtn mbn text-force-right pager">                {this.props.children}            </ul>);    }});/** * 替代react-bootstrap中的组件, 内部组件, 请勿调用. * @class PageItem * @for PageButton */var PageItem = React.createClass({    onClick: function(){        this.props.onSelect();    },    render: function(){        return (<li>                <a onClick={this.onClick}>                    {this.props.children}                </a>            </li>);    }});/** * 分页器组件,是`TablePanel`的组成部分 * ``` * 示例: * <PageButton  doList={this.props.doList}  pageSize={this.props.pageSize}  page={this.props.offset} totalRows={this.props.totalRows}/> * ``` * @class PageButton */var PageButton = React.createClass({    /**     * @property {Function} doList 点击分页器的回调函数     */    /**     * @property {Int} pageSize 总页数     */    /**     * @property {Int} offset 当前页码     */    /**     * @property {Int} totalRows 每页数据数量     */    getInitialState : function(){    return {        offer:1,        totalRows:0,        pageSize:10    };    },    previous:function(offer){        var offer=this.state.offer;        var i=Number(offer)-1;        if(i<0){            i=1;        }        this.setState({            offer:i        });        this.props.doList(i);    },    next:function(offer){        var offer=this.state.offer;        var total=this.props.totalRows;        var i=Number(offer)+1;        if(i>total){            i=total;        }        this.setState({            offer:i        });        this.props.doList(i);    },    selectPageSize:function(i){        this.props.doList(1,i);    },    _setPageNum:function(i){        var  totalRows= this.state.totalRows;        if(!totalRows){            totalRows=0;        }        var  pageSize= this.state.pageSize;        if(!pageSize){            pageSize=1;        }        var page=Math.ceil(totalRows/pageSize);        var reg=  /^[1-9][0-9]*$/;        if(i<=page&&reg.test(i)){            this.props.doList(i,pageSize);        }    },    render: function () {        var totalRows=this.props.totalRows;        if(!totalRows){            totalRows=0;        }        if(this.props.pageSize){            this.state.pageSize=this.props.pageSize;        }        var pageSize=this.state.pageSize;        if(!pageSize){            pageSize=1;        }        var page=this.props.page;        if(!page){            page=1;        }        var offer=page;        this.state.offer=page;        this.state.totalRows=totalRows;        var pager=<div></div>;        var page=Math.ceil(totalRows/pageSize);        if(page==0){            page=1;        }        var pmsg="[共"+totalRows+"条共"+page+"页当前是第"+offer+"页]";        var self=this;        if(totalRows>0&&page>1){            if(offer==1){                pager=                <Pager>                    <PageSizeSelect _setPageNum={self._setPageNum} onselect={self.selectPageSize} />{pmsg}                    <PageItem onSelect={self.next}>下一页 <i className="fa fa-angle-double-right"></i></PageItem>                </Pager>;            }            else if(offer==page){                pager=<Pager className="mtn mbn text-force-right">                    <PageSizeSelect _setPageNum={self._setPageNum} onselect={self.selectPageSize} />{pmsg}                    <PageItem  onSelect={self.previous} ><i className="fa fa-angle-double-left"></i> 上一页</PageItem>                </Pager>;            }else{                pager=<Pager className="mtn mbn text-force-right">                        <PageSizeSelect _setPageNum={self._setPageNum} onselect={self.selectPageSize} />{pmsg}                        <PageItem  onSelect={self.previous} ><i className="fa fa-angle-double-left"></i> 上一页</PageItem>                        <PageItem onSelect={self.next} >下一页 <i className="fa fa-angle-double-right"></i></PageItem>                    </Pager>;            }          }else{            pager=<Pager className="mtn mbn text-force-right">                    <PageSizeSelect _setPageNum={self._setPageNum} onselect={self.selectPageSize} />{pmsg}                  </Pager>;          }    return( <div> {pager} </div>);    }});module.exports = PageButton;