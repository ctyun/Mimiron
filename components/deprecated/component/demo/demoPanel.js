var React=require("react/addons");
var BSSPanel=require("../panel/panel");

var Grid=require("../page/grid");
var PageButton=require("../page/page");

var TablePanel=require("../panel/table-panel");
var ToolBarPanel=require("../panel/tool-panel");
var QueryPanel=require("../panel/query-panel");

var Button=require("../button/button");
var Input=require("../html/input");
var CommonEvent=require("../../utils/react-common-action");
var $=require("jquery");
var Select=require("../html/select");
var Counter = React.createClass({
    getInitialState: function() {
        return {
            count: 1
        };
    },

    _increment: function() {
        this.setState({ count: this.state.count + 1 });
    },

    render: function() {
        return <span onClick={this._increment}>
    {this.state.count}
</span>;
}
});

var THtml=React.createClass({
    render:function(){
        var counterHtml = React.renderToStaticMarkup(
            Counter()
        );
        return <div>{counterHtml}</div>
    }
});

var PanelDemo=React.createClass({
    mixins: [CommonEvent],
    getInitialState:function(){
        return {
            totalRows:0,
            pageSize:10,
            data:[],
            offset:1,
            dis:false,
            dateId:'data_id',
            dis:false,
            title:['选项','标题1','标题2','标题3'],
            jsonKey:['id','t1','t2','t3'],
            selectData:[{value:'1',text:'显示2'},{value:'2',text:'显示1'}],
        };
    },
    componentDidMount:function(){
        var d=[{
            id:"sfasdfsdf-wwww-qqqq",
            t1:'测试1',
            t2:'测试2',
            t3:'测试3'
        },{
            id:"xxxxx-wwww-qqqq",
            t1:'测试1',
            t2:'测试2',
            t3:'测试3'
        }];
        this.setState({
            totalRows:100,
            data:d

        });

    },
    _doList:function(data){
        this.setState({
            totalRows:100,
            pageSize:this.state.pageSize
        });

    },

    doList:function(d,pageSize){
        this.state.offset=d;
        if(pageSize){
            this.state.pageSize=pageSize;
        }
        this._doList(d);
    },
    submitAction:function(param){
       //this.setSubmitDisabled(true);
        var a=Grid.getCheckedValue();
       // alert(a);
        console.debug(param);
    },
    render:function() {
        var sd=[{value:'1',text:'显示2'},{value:'2',text:'显示1'}];
        var obj=this.state;
        obj.doList=this.doList;
        var formProps={
            submitAction:this.submitAction,
            //jsonFormat:true,
            okButtonName:"查询2"
        };
        return <BSSPanel pageTitle = "dddd"  ><QueryPanel {...formProps} disabledName="呵呵不好使" disabledSubmitBtn={this.state.formSubmitBtnDis}><Select  data={sd} disName="dddd" name="ddddddd"   /><Input disName="user" name="user"   /><Input disName="名称" name="name"   /><Button btnName="测dd试minus" doAction={this.submitAction}/></QueryPanel><ToolBarPanel ><Button btnName="测试minus"/></ToolBarPanel><TablePanel {...this.state}/></BSSPanel>
    }
});

// module.exports=BSSPanel;
module.exports=PanelDemo;