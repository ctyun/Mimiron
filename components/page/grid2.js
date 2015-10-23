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
        /**
         * 获取表格数据, 此方法有一个参数, 为Id
         * @method getCheckedValue
         * @static
         * @return {Array} 选中的数据
         */
        getCheckedValue: function(id){
            Grid.datas = Grid.datas || {};
            var arr=[];
            var datas=Grid.datas[id];
            for(var k in datas){
                var d=datas[k];
                if(d>0 || d.length>0){
                    arr.push(d);
                }
            }
            return arr;
        },
        /**
         * 清除表格数据, 此方法有一个输入值为Id
         * @method cleanData
         * @static
         */
        cleanData:function(id){
            Grid.datas = Grid.datas || {};
            Grid.datas[id]={};
        },
        setData:function(id,obj){
            Grid.datas = Grid.datas || {};
            Grid.datas[id] = obj;
        }
    },

    getInitialState : function(){
        return {
            prifx:"id_",
            checkedValues:this.props.checkedValues,
            currentTr:null, //当前激活的tr, 激活的Tr会显示额外信息
            activeTr:null,
        };
    },
    getDefaultProps: function(){
        return{
            checkType :"checkbox",
            checkedValues:[],
            id:"defaultId"
        }
    },
    componentWillMount: function() {
        var datas={};
        this.props.checkedValues.map(function(v) {
            datas[this.state.prifx+v]=v;
        });
        Grid.datas = Grid.datas||{};
        Grid.datas[this.props.id]=datas;
    },
    componentDidMount: function(){
        //$(".dummyTr").hide();
    },
    componentWillReceiveProps: function(nextProps) {
        if(nextProps.checkedValues != this.props.checkedValues){
            var datas=[];
            var self = this;
            nextProps.checkedValues.map(function(v) {
                datas[self.state.prifx+v]=v;
            });
            Grid.datas = Grid.datas || {};
            Grid.datas[this.props.id]=datas;
        }
        
    },
    componentDidUpdate: function(){
        //$(".dummyTr").hide();
        if(this.state.currentTr){
            $(this.state.currentTr).next().show();
        }
    },
    _checkBoxOnChange:function(event){
        var datas={};
        var v=event.target.value;
        if(this.props.checkType=="checkbox"){
            datas = Grid.datas[this.props.id]|| datas; 
        }
        if(event.target.checked){
            datas[this.state.prifx+v]=v;
        }else{
            datas[this.state.prifx+v]=0;
        }
        Grid.setData(this.props.id,datas);
    },
    clickTr: function(e){
        //显示children 使用的是React方式
        if(this.props.toShow){
            if(this.state.activeTr==$(e.target).parent().attr("data-key")){
                this.setState({activeTr:null}); //点击同一个Tr 循环展开和关闭
            } else{
                this.setState({activeTr:$(e.target).parent().attr("data-key")});
            }
        }
        return;

        //显示dummyTr 使用的是jquery方式
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
            return [<tr data-key={key} onClick={this.clickTr}>
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
    </tr>,<tr className="dummyTr" style={{"display":this.state.activeTr==key?"":"none"}}><td colSpan={this.props.title.length + 1} >{this.state.activeTr==key?this.props.toShow:null}</td></tr>];
}.bind(this)) : <td colSpan={this.props.title.length + 1}><div className="text-center">暂无数据，请输入查询条件进行查询。</div></td>}
</tbody>
</table>;
return (t);
}
});
module.exports=Grid;