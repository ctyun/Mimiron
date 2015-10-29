    /**
     *@module panel
     */
var React=require("react/addons");
var BSSPanel=require("./panel");

var Grid=require("../page/grid");
var Grid2=require("../page/grid2");
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
                       isDummy:[true,,true,,,,],
                  }
             return (<TablePanel {...tableProps}/>);
        });
     *
     * 注意:
     * 1. 如果传入给某列提供isDummy属性, 可以将这一列的内容显示在目标行下方. 举例来说, 有些表格中"地址"很长, 可以将地址对应的列的isDummy设置为true, 点击表格中某一行(tr)时, 地址这个单元格的内容将显示在该行下方.
     * 2. 该组件可以设置children, 如果这么做, 点击每一行时都会将children中的元素展示在该行下方.
     *```
     * @class TablePanel
     */
var TablePanel=React.createClass({

    componentDidMount: function(){
        //冻结表头
        window.freezeTableHead = function(){
          $(".fix-head").empty();
          window.topMain= window.topMain || $("thead").offset().top;
          window.fixHeadLeft = window.fixHeadLeft || $("tbody").offset().left;
          $("#page-wrapper").on("scroll", function(){
            if ($("#page-wrapper").scrollTop()>topMain){
              $(".fix-head").css("display","flex");
            }else{
              $(".fix-head").css("display","none");
            }
          });
          $("#page-wrapper").on("mouseup", function(){
              $(".fix-head").css("left",fixHeadLeft-$("#page-wrapper").scrollLeft());
          })
          //拷贝表头
          $("thead:eq(0) tr th").each(function(){
            var tmpNode = $("<div></div>");
            $(tmpNode).html($(this).html());
            var tmpCss = {
                background:$(this).css('background-color'),
                width:($(this).width()+18),
                float:"left",
                "text-align": "center",
                "word-break": "keep-all",
                "word-wrap": "break-word",
                border: "1px solid",
                padding:$(this).css("padding")+" 0px",
                "font-weight": "bold",
                overflow: "hidden",
                "text-overflow": "ellipsis",
                "white-space": "nowrap",
            };
            $(tmpNode).css(tmpCss);
            $(tmpNode).attr("title",$(this).html());
            $(".fix-head").append(tmpNode);
          });
        }
        if($("#page-wrapper").length>0)
          setTimeout("freezeTableHead()",0);
    },
    componentDidUpdate: function(){
        freezeTableHead();
    },
    render:function(){
        return (<div>
                <div className="fix-head"></div>
                <Grid2 title={this.props.title} noHasCheckBox={this.props.noHasCheckBox} jsonKey={this.props.jsonKey} data={this.props.data} checkType={this.props.checkType} isDummy={this.props.isDummy} id={this.props.id} toShow={this.props.children}/>
                <PageButton  doList={this.props.doList}  pageSize={this.props.pageSize}  page={this.props.offset} totalRows={this.props.totalRows}/>
              </div>)
    }
});


module.exports=TablePanel;
