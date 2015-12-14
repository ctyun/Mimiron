/*
 *@module html
 */
var React=require("react/addons");
/**
 * 下拉列表组件
 *```
 * 使用方法
 *var React = require('react');
 *var components=require("components");
 *var Select=components.Select;
 *var SelectDemo=React.createClass(
 *     render:function(){
 *         return (<Select data={this.state.selectData} defaultValue="2" onSelect={this._onSelect}/>);
 *     }
 * );
 *
 * 使用说明
 *  <Select data={this.state.selectData} defaultValue="2" onSelect={this._onSelect}/>
 *  disName:显示在左边的名称
 *  data:select的下拉列表要显示的值,数据格式为：[{value:'1',text:'显示2'},{value:'2',text:'显示1'}]
 *  defaultValue:默认要显示的值
 *  onSelect：选重下拉列表的值所触发的事件
 *  multiple:true
 *  支持多选
 *  noEmptyMsg:true
 *  不显示默认提示
 * ```
 * @class Select
 *
 */
var Select=React.createClass({
    _onChange:function(e){
        e.preventDefault();
        var v = e.target.value;
        var options=e.target.options;
        if(this.props.multiple&&this.props.multiple==true){
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            };
            v=value;
        };
        this.setState({
            defValue:v
        });

        if(this.props.onSelect){
            this.props.onSelect(v);
        }
    },
    getDefaultProps:function(){
        return{
            disName:"",
            cssClass:"input-nm"
        }       
    },
    getInitialState:function(){
        return {
            defValue:""
        };
    },
    componentDidMount:function(){

        this.setState({
            defValue:this.props.defaultValue
        })
    },
    componentWillReceiveProps:function(){

        this.setState({
            defValue:this.props.defaultValue
        })
    },
    componentDidUpdate: function (prevProps, prevState) {

        if (prevProps.defaultValue !== this.props.defaultValue) {
            this.setState({
                defValue:this.props.defaultValue
            })
        }
    },

    render:function(){
        var data=this.props.data;
        var name="bss-react-select-name";
        var defaultValue=this.state.defValue;

        if(this.props.name){
            name=this.props.name;
        }

        var options=[];
        var noEmptyMsg=this.props.noEmptyMsg;
        if(data&&data.length>0){
            if(!noEmptyMsg){
                options.push(<option value="" >选择全部</option>);
            }

            data.forEach(function(d){
                //if(defaultValue== d.value){
                //    options.push(<option value={d.value} selected>{d.text}</option>);
                //}else{
                //    options.push(<option value={d.value} >{d.text}</option>);
                //}
                options.push(<option value={d.value} disabled={d.disabled?"disabled":""}>{d.text}</option>);
            });
        }else{
            if(!noEmptyMsg){
                options.push(<option value="">请选择</option>);
            }
        }
        var className = "form-control "+this.props.cssClass;
        var toReturn = this.props.inRow?
            (<div className="row">
                <lable htmlFor={this.props.id} className="col-xs-3 control-label" title={this.props.disName}>{this.props.disName}</lable>
                <div className="col-xs-9">
                    <select name={name} value={defaultValue} multiple={this.props.multiple} className={className} onChange={this._onChange} style={this.props.style}>{options}
                    </select>
                </div>
            </div>):
            (<span>
                {this.props.disName}
                <select name={name} value={defaultValue} multiple={this.props.multiple} className={className} onChange={this._onChange} style={this.props.style}>{options}
                </select>
            </span>);
        return toReturn;
    }
});

module.exports=Select;