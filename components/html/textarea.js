/*
 *@module html
 */
var React = require('react/addons');

/**
 * 文本区
 * ```
 *  <Textarea rows="4" onChange={this.textareaChange}>
        12234
    </Textarea>
 * ```
 * @class Textarea
 */
var Textarea=React.createClass({
    displayName:'Textarea',

    getInitialState:function(){
        return {
            text:""
        };
    },
    getDefaultProps: function(){
        return{
            /**
             * @property {String} name 显示在左边的名称
             * @default ""
             */
            name:"",
            /**
             * @property {String} rows 行数
             * @default "3"
             */
            rows:"3",
            /**
             * @property {Function} onChange 文本编辑时的回调函数
             */
            onChange: new Function(),
        }
    },
    componentWillMount: function(){
        this.setState({text:this.props.children});
    },
    componentWillReceiveProps: function(nextProps){
        this.setState({text:nextProps.children});
    },
    onChange: function(e){
        this.setState({text:e.target.value});
        this.props.onChange(e.target.value);
    },
    render:function(){
        return (<div className="form-group">
                    <label for="name">{this.props.name}</label>
                    <textarea {...this.props} className="form-control" rows={""+this.props.rows} onChange={this.onChange} value={this.state.text}>
                    </textarea>
                </div>);
    }
});
module.exports=Textarea;
