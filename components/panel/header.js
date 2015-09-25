/**
 * @module panel
 */
var React = require('react');

/**
 * BSS页面头部组件, 在BSSPanel中使用, 一般不单独使用.
 * ```
 * <Header pageTitle={name} />
 * ```
 * @class Header
 */
var Header = React.createClass({
    displayName: 'Header',
    getDefaultProps : function(){
    	return {
            /**
             * @property {String} root 根节点名称
             * @default "首页"
             */
    		root:"首页",
            /**
             * @property {String} pageTitle 本页标题
             * @default "(空)"
             */
    		pageTitle:"(空)",
    	}
    },
    render: function () {
        return (
            <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb clearfix">
              <div className="page-header pull-left">
                <div className="page-title">{this.props.pageTitle}</div>
              </div>
              <ol className="breadcrumb page-breadcrumb pull-left pll">
                <li><i className="fa fa-home"></i>&nbsp;<a href="/">{this.props.root}</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="active">{this.props.pageTitle}</li>
              </ol>
            </div>
        );
    }
});

module.exports = Header;