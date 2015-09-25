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
    onChange: function(e){
        this.props.children = e.target.value;
        this.props.onChange(this.props.children);
    },
    render:function(){
        return (<div className="form-group">
                    <label for="name">{this.props.name}</label>
                    <textarea className="form-control" rows={""+this.props.rows} onChange={this.onChange}>
                        {this.props.children}
                    </textarea>
                </div>);
    }
});
module.exports=Textarea;
