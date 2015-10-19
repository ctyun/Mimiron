/*
 * @module page
 */
var React = require('react/addons');
/**
 * 表格组件,是`TablePanel`的组成部分
 * ```
 * 示例:
 * <Grid id="uniqueId" title={this.props.title} noHasCheckBox={this.props.noHasCheckBox} jsonKey={this.props.jsonKey} data={this.props.data} checkType={this.props.checkType}/>
 * ```
 * @class Grid
 *
 */
var Grid=React.createClass({
    statics:{
        datas:{},
        /**
         * 获取表格数据
         * @method getCheckedValue
         * @static
         * @deprecated 请使用getCheckedValueById
         * @return {Array} 选中的数据
         */
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
        /**
         * 获取表格数据, 此方法有一个参数, 为Id
         * @method getCheckedValueById
         * @static
         * @return {Array} 选中的数据
         */
        getCheckedValueById: function(id){
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
         * 清除表格数据
         * @method cleanData
         * @static
         * @deprecated 请使用cleanDataById
         */
        cleanData:function(){
            Grid.datas=[];
        },
        /**
         * 清除表格数据, 此方法有一个输入值为Id
         * @method cleanData
         * @static
         */
        cleanDataById:function(id){
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
            datas:[],
            prifx:"id_"

        };
    },
    getDefaultProps: function(){
        return{
            checkType :"checkbox",
        }
    },
    _checkBoxOnChange:function(event){
        var datas=[];
        if(this.props.checkType == "checkbox"){
            if(this.props.id){
                datas = Grid.datas[id]||{};
                datas={};
            }else{
                datas=Grid.datas;
            }
        }
        else if(this.props.checkType == "radio"){
            if(this.props.id){
                Grid.datas = Grid.datas||{};
                Grid.datas[this.props.id]={};
                datas={};
            }
            else{
                Grid.datas = [];
            }
        }
        var v=event.target.value;

        if(event.target.checked){
            datas[this.state.prifx+v]=v;
        }else{
            datas[this.state.prifx+v]=0;
        }
        this.state.datas=datas;
        if(this.props.id){
            Grid.setData(this.props.id,datas);
        }else{
            Grid.datas=this.state.datas;
        }
    },
    render:function(){
        /**
         * @property {String} title 标题
         */
        var title=this.props.title; //这里不知道为什么不能直接在t中使用this.props.XXX
        /**
         * @property {Array} jsonKey 表格表头
         * @example
         * `jsonKey:['id','t1','t2','t3']`
         */
        var key=this.props.jsonKey;
        /**
         * @property {Array} data 表格数据
         * @example
         * ```
         * data:[{id:1,
         *      t1:'测试1',
         *      t2:'测试2',
         *      t3:'测试3'}],
         * ```
         */
        var data=this.props.data;
        /**
         * ```
         * 可选值:
         * 1."radio":   表格中的数据为单选
         * 2."select":  表格中的数据被多选
         * ```
         * @property {String} checkType 表格每一行的类型
         */
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

        var t= <table  className="table table-hover table-bordered">
        <thead>
        <tr>
        {titleData}
        </tr>
        </thead>
        <tbody>
        {data&&data.length>0? this.props.data.map(function(source, key) {
            return <tr key={key}>
            {this.props.jsonKey.map(function(column, columnKey) {
                if(columnKey==0){
                    if(self.props.noHasCheckBox&&self.props.noHasCheckBox==true){
                         return <td key={columnKey}>{source[column]}</td>
                    }
                    else{
                        return <td key={columnKey}><input type={checkType} onChange={self._checkBoxOnChange} name="id" value={source[column]}/></td>
                }
            }else{
                return <td key={columnKey}>{source[column]}</td>
            }
        })}
    </tr>
}.bind(this)) : <td colSpan={this.props.title.length + 1}><div className="text-center">暂无数据，请输入查询条件进行查询。</div></td>}
</tbody>
</table>;
return (t);
}
});
module.exports=Grid;