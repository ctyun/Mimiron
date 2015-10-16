/**
 * @module page
 */
var React = require('react/addons');
/**
 * 一个更复杂的表格, 可以直接在table-panel中使用
 * @class Grid2
 */
var Grid=React.createClass({
    statics:{
        datas:{},
        getCheckedValue:function(){
            var arr=[];
            var datas=Grid.datas;
            for(var k in datas){
                var d=datas[k];

                if(d>0 || d.length>0){
                    arr.push(d);
                }
            }
            return arr;
        },
        cleanData:function(){
            Grid.datas=[];
        }
    },

    getInitialState : function(){
        return {
            prifx:"id_",
            checkedValues:this.props.checkedValues,
            currentTr:null, //当前激活的tr, 激活的Tr会显示额外信息
        };
    },
    getDefaultProps: function(){
        return{
            checkType :"checkbox",
            checkedValues:[]
        }
    },
    componentWillMount: function() {
        var datas=[];
        this.props.checkedValues.map(function(v) {
            datas[this.state.prifx+v]=v;
        });
        Grid.datas=datas;
    },
    componentWillReceiveProps: function(nextProps) {
        if(nextProps.checkedValues != this.props.checkedValues){
            var datas=[];
            var self = this;
            nextProps.checkedValues.map(function(v) {
                datas[self.state.prifx+v]=v;
            });
            Grid.datas=datas;
        }
        
    },
    componentDidUpdate: function(){
        $(".dummyTr").hide();
        if(this.state.currentTr){
            $(this.state.currentTr).next().show();
        }
    },
    _checkBoxOnChange:function(event){

        var datas=[];
        if(this.props.checkType == "checkbox"){
            datas=Grid.datas;
        }
        else if(this.props.checkType == "radio"){
            Grid.datas = [];
            Grid.cleanData();
        }
        var v=event.target.value;

        if(event.target.checked){
            datas[this.state.prifx+v]=v;
        }else{
            datas[this.state.prifx+v]=0;
        }
        //this.state.datas=datas;
        Grid.datas=datas;
        this.forceUpdate();
    },
    clickTr: function(e){
        var currentTr = $(e.target).parent();
        if($(currentTr).next().hasClass("dummyTr")&&$(currentTr).next().is(":visible")){
            window.tempFunc = function(){$(currentTr).next().hide();};
            setTimeout("tempFunc()",0);
        }
        this.setState({currentTr:currentTr});
        //TODO 设置单元格内容
        if($(currentTr).next().children().html()==""){
            for(var i=0;i<this.props.isDummy.length;i++){
                if(this.props.isDummy[i]){
                    $(currentTr).next().children().html($(currentTr).next().children().html()+"<br /><b>"+this.props.title[i] +"</b> : " + $(currentTr).children().eq(i).html());
                }
            }
        }
    },
    render:function(){
        var title=this.props.title; //这里不知道为什么不能直接在t中使用this.props.XXX
        var key=this.props.jsonKey;
        var data=this.props.data;
        var checkType = this.props.checkType;
        var rows=[];
        var titleData=[];
        if(title){
            title.forEach(function(d){
                var t=<th>{d}</th>;
                titleData.push(t);
            });
        }

        var self=this;
        var t= <table  className="table table-hover table-bordered table-striped">
        <thead>
        <tr>
        {titleData}
        </tr>
        </thead>
        <tbody className="grid-2">
        {data&&data.length>0? this.props.data.map(function(source, key) {
            return [<tr key={key} onClick={this.clickTr}>
            {this.props.jsonKey.map(function(column, columnKey) {
                if(columnKey==0){
                    if(self.props.noHasCheckBox&&self.props.noHasCheckBox==true){
                         return <td key={columnKey}>{source[column]}</td>
                    }
                    else{
                        if(Grid.datas[self.state.prifx+source[column]]){
                            return <td key={columnKey}><input type={checkType} onChange={self._checkBoxOnChange} name="id" value={source[column]} checked="checked"/></td>
                        }else{
                            return <td key={columnKey}><input type={checkType} onChange={self._checkBoxOnChange} name="id" value={source[column]}/></td>
                        }
                        
                    }
            }else{
                return <td key={columnKey}>{source[column]}</td>
            }
        })}
    </tr>,<tr className="dummyTr"><td colSpan={this.props.title.length + 1} ></td></tr>];
}.bind(this)) : <td colSpan={this.props.title.length + 1}><div className="text-center">暂无数据，请输入查询条件进行查询。</div></td>}
</tbody>
</table>;
return (t);
}
});
module.exports=Grid;