(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var React = require('react');
var component = require('../index');
var DataGrid = component.DataGrid;

var Demo = React.createClass({displayName: "Demo",
  render: function() {
    return (
      React.createElement(DataGrid, {
          pageNo: 1, 
          totalPageNo: 3, 
          changePageSize: this._changePageSize, 
          changePageNo: this._changePageNo}, 
      React.createElement("div", null, "Welcome")
      )
    )
  },
  _changePageSize: function(size) {},
  _changePageNo: function(num) {}
});

React.render(React.createElement(Demo, null), document.getElementById('wrapper'));

},{"../index":30,"react":"react"}],2:[function(require,module,exports){
 
var React = require('react');

var ActionButtonCancel = React.createClass({
    displayName: 'ActionButtonCancel',
    render: function () {
        return (
            React.createElement("button", {className: "btn btn-default", onClick: this.props.onClick}, 
              this.props.children
            )
        );
    }
});

module.exports = ActionButtonCancel;

},{"react":"react"}],3:[function(require,module,exports){
 
var React = require('react');

/**
 * 就是个普通button
 * @param  {空}
 * @return {React Component}
 */
var ActionButtonAdd = React.createClass({
    displayName: 'ActionButtonAdd',
    render: function () {
        return (
            React.createElement("button", {className: "btn btn-outlined btn-info btn-sm", onClick: this.props.onClick}, 
              React.createElement("i", {className: "fa fa-plus"}), " ", this.props.children
            )
        );
    }
});

module.exports = ActionButtonAdd;

},{"react":"react"}],4:[function(require,module,exports){
 
var React = require('react');

var ActionButtonDelete = React.createClass({
    displayName: 'ActionButtonDelete',
    render: function () {
        return (
            React.createElement("button", {className: "btn btn-danger btn-xs", onClick: this.props.onClick}, 
              React.createElement("i", {className: "fa fa-trash"}), " ", this.props.children
            )
        );
    }
});

module.exports = ActionButtonDelete;

},{"react":"react"}],5:[function(require,module,exports){
 
var React = require('react');

var ActionButtonEdit = React.createClass({
    displayName: 'ActionButtonEdit',
    render: function () {
        return (
            React.createElement("button", {className: "btn btn-info btn-xs", onClick: this.props.onClick}, 
              React.createElement("i", {className: "fa fa-edit"}), " ", this.props.children
            )
        );
    }
});

module.exports = ActionButtonEdit;

},{"react":"react"}],6:[function(require,module,exports){
 
var React = require('react');

var ActionButtonOpen = React.createClass({
    displayName: 'ActionButtonOpen',
    render: function () {
        return (
            React.createElement("button", {className: "btn btn-success btn-xs", onClick: this.props.onClick}, 
              React.createElement("i", {className: "fa fa-eye"}), " ", this.props.children
            )
        );
    }
});

module.exports = ActionButtonOpen;

},{"react":"react"}],7:[function(require,module,exports){
 
var React = require('react');

var ActionButtonSearch = React.createClass({
    displayName: 'ActionButtonSearch',
    render: function () {
        return (
            React.createElement("button", {className: "btn btn-outlined btn-warning btn-sm", onClick: this.props.onClick}, 
              React.createElement("i", {className: "fa fa-search"}), " ", this.props.children
            )
        );
    }
});

module.exports = ActionButtonSearch;

},{"react":"react"}],8:[function(require,module,exports){
 
var React = require('react');

var ActionButtonSubmit = React.createClass({
    displayName: 'ActionButtonSubmit',
    render: function () {
        return (
            React.createElement("button", {className: "btn btn-primary", onClick: this.props.onClick}, 
              this.props.children
            )
        );
    }
});

module.exports = ActionButtonSubmit;

},{"react":"react"}],9:[function(require,module,exports){
 
var React = require('react');

var Breadcrumb = React.createClass({
    displayName: 'Breadcrumb',
    render: function () {
        return (
            React.createElement("ol", {className: "breadcrumb page-breadcrumb pull-left pll"}, 
                React.createElement("li", null, React.createElement("i", {className: "fa fa-home"}), " ", React.createElement("a", {href: "/"}, this.props.root), "  ", React.createElement("i", {className: "fa fa-angle-right"}), "  "), 
                React.createElement("li", {className: "active"}, this.props.active)
            )
        );
    }
});

module.exports = Breadcrumb;

},{"react":"react"}],10:[function(require,module,exports){
var moment = require('moment');
var numeral = require('numeral');
var config = require('../constants/config');
var Header = require('./header');
var TopBar = require('./top-bar');
var SideBar = require('./side-bar');
var DataGrid = require('./datagrid');
var ActionButtonAdd = require('./action-button-add');
var ActionButtonEdit = require('./action-button-edit');
var ActionButtonDelete = require('./action-button-delete');
var ActionButtonSearch = require('./action-button-search');
var ActionButtonSubmit = require('./action-button-submit');
var ActionButtonCancel = require('./action-button-Cancel');
var ActionButtonOpen = require('./action-button-open');
var PageSize = require('./pagesize');
var Pagination = require('./pagination');
var PortletHeader = require('./portlet-header');
var ToTop = require('./to-top');
var SearchPane = require('./search-pane');
var TimeTD = require('./table-cell-time');
var CurrencyTD = require('./table-cell-currency');
var DateTimePicker = require('./datetimepicker');
var Dropzone = require('./dropzone-upload');
var Select2 = require('./select2');
var Spinner = require('./spinner');
var Tree = require('./ui-tree');

// bootstrapping
(function bootstrap() {
  // set moment locale
  moment.locale('zh-cn');
  numeral.language('chs', config.numeral.language);
  numeral.language('chs');

}());


module.exports = {
  TopBar: TopBar,
  Header: Header,
  SideBar: SideBar,
  DataGrid: DataGrid,
  PortletHeader: PortletHeader,
  ActionButtonAdd: ActionButtonAdd,
  ActionButtonEdit: ActionButtonEdit,
  ActionButtonDelete: ActionButtonDelete,
  ActionButtonSearch: ActionButtonSearch,
  ActionButtonSubmit: ActionButtonSubmit,
  ActionButtonCancel: ActionButtonCancel,
  ActionButtonOpen: ActionButtonOpen,
  PageSize: PageSize,
  Pagination: Pagination,
  ToTop: ToTop,
  SearchPane: SearchPane,
  TimeTD: TimeTD,
  CurrencyTD: CurrencyTD,
  DateTimePicker: DateTimePicker,
  Dropzone: Dropzone,
  Select2: Select2,
  Spinner: Spinner,
  Tree: Tree
};

},{"../constants/config":29,"./action-button-Cancel":2,"./action-button-add":3,"./action-button-delete":4,"./action-button-edit":5,"./action-button-open":6,"./action-button-search":7,"./action-button-submit":8,"./datagrid":11,"./datetimepicker":12,"./dropzone-upload":13,"./header":14,"./pagesize":17,"./pagination":18,"./portlet-header":19,"./search-pane":20,"./select2":21,"./side-bar":22,"./spinner":23,"./table-cell-currency":24,"./table-cell-time":25,"./to-top":26,"./top-bar":27,"./ui-tree":28,"moment":"moment","numeral":"numeral"}],11:[function(require,module,exports){
 
var React = require('react');
var PageSize = require('./pagesize');
var Pagination = require('./pagination');
var constants = require('../constants/config');

var DataGrid = React.createClass({
    displayName: 'DataGrid',

    PropTypes: {
      pageSize: React.PropTypes.number.isRequired, // 当前分页大小
      pageSizes: React.PropTypes.array.isRequired, // 分页大小数组
      changePageSize: React.PropTypes.func.isRequired, // 分页回调函数
      pageNo: React.PropTypes.number.isRequired, // 当前页码
      totalPageNo: React.PropTypes.number.isRequired, // 总页码
      changePageNo: React.PropTypes.func.isRequired // 翻页回调函数
    },

    getDefaultProps: function() {
      return {
        pageSize: constants.pageSizes[2], // 默认分页大小为 10
        pageSizes: constants.pageSizes,
        pageNo: 1 // 默认当前页码为1
      }
    },

    render: function () {
        return (
            React.createElement("div", {className: "portlet-body pan"}, 
              React.createElement("div", {className: "row mbm ptm"}, 
                React.createElement("div", {className: "col-lg-6"}, 
                  React.createElement("div", {className: "pagination-panel mlm"}, 
                    React.createElement(PageSize, {onChange: this.props.changePageSize, value: this.props.pageSize, options: this.props.pageSizes})
                  )
                ), 
                React.createElement("div", {className: "col-lg-6 text-right"}, 
                  React.createElement("div", {className: "pagination-panel mrm"}, 
                    React.createElement(Pagination, {pageNo: this.props.pageNo, totalPageNo: this.props.totalPageNo, onSelect: this.props.changePageNo})
                  )
                )
              ), 
              this.props.children, 
              React.createElement("div", {className: "row pbm"}, 
                React.createElement("div", {className: "col-lg-6"}, 
                  React.createElement("div", {className: "pagination-panel mlm"}, 
                    React.createElement(PageSize, {onChange: this.props.changePageSize, value: this.props.pageSize, options: this.props.pageSizes})
                  )
                ), 
                React.createElement("div", {className: "col-lg-6 text-right"}, 
                  React.createElement("div", {className: "pagination-panel mrm"}, 
                    React.createElement(Pagination, {pageNo: this.props.pageNo, totalPageNo: this.props.totalPageNo, onSelect: this.props.changePageNo})
                  )
                )
              )
            )
        );
    }
});

module.exports = DataGrid;

},{"../constants/config":29,"./pagesize":17,"./pagination":18,"react":"react"}],12:[function(require,module,exports){
 
var React = require('react');
var $ = require('jquery');
var _ = require('underscore');
var datetimepicker = require('eonasdan-bootstrap-datetimepicker');
var moment = require('moment');

var DateTimePicker = React.createClass({
  displayName: 'DateTimePicker',
  getInitialState: function() {
    return {
      options: {
        pickTime: false,
        language: moment.locale('zh-cn'),
        defaultDate: this.props.value ? moment(this.props.value) : ''
      }
    }
  },
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.options !== this.props.options) {
      if (nextProps.options.minDate) {
        $(this.getDOMNode()).find('input').data('DateTimePicker').setMinDate(nextProps.options.minDate);
      }
      if (nextProps.options.maxDate) {
        $(this.getDOMNode()).find('input').data('DateTimePicker').setMaxDate(nextProps.options.maxDate);
      }
    }
  },
  componentWillUnmount: function () {
    $(this.getDOMNode()).find('input').data('DateTimePicker').destroy();
  },
  componentDidMount: function () {
    $(this.getDOMNode()).find('input').datetimepicker(_.extend({}, this.state.options, this.props.options));
    $(this.getDOMNode()).find('input').on('dp.change', this._onChange);
  },
  render: function () {
    return (
        React.createElement("div", {className: "input-icon right"}, 
          React.createElement("i", {className: "fa fa-calendar"}), 
          React.createElement("input", {type: "text", className: "form-control", readOnly: true, id: this.props.id ? this.props.id : ''})
        )
    );
  },
  _onChange: function(e) {
    var val = $(this.getDOMNode()).find('input').val();
    val = moment(val,"MM/DD/YYYY").format("YYYY-MM-DD");
    this.props.onChange(e, val);
  }
});

module.exports = DateTimePicker;

},{"eonasdan-bootstrap-datetimepicker":"eonasdan-bootstrap-datetimepicker","jquery":"jquery","moment":"moment","react":"react","underscore":"underscore"}],13:[function(require,module,exports){
var Dropzone = require('dropzone');
var React = require('react');
var _ = require('underscore');

var DropzoneUpload = React.createClass({
    displayName: 'DropzoneUpload',
    getInitialState: function() {
      return {
        options: {
          url: this.props.url,
          uploadMultiple: true,
          dictDefaultMessage: '拖拽上传或点击上传文件',
          paramName: 'myfiles'
        }
      }
    },
    componentDidMount: function () {
      if (!this.props.uploadedFiles) {
        var options = this.state.options;
        this.uploader = new Dropzone(this.getDOMNode(), _.extend({}, Dropzone.prototype.defaultOptions, options));
        this.uploader.on('sending', this._onSending);
        this.uploader.on('success', this._onSuccess);
        this.uploader.on('error', this._onError);
        this.uploader.on('addedfile', this._onAdded);
      }
    },
    componentWillUnmount: function () {
      if (!this.props.uploadedFiles) {
        this.uploader.destroy();
        this.uploader = null;
      }
    },
    render: function () {
      var children = this.props.children;
      return React.createElement("div", React.__spread({className: "dropzone"},  this.props), 
          children ? React.createElement("div", {className: "fallback"}, children) : null
        );
    },
    _onSending: function(file, xhr, formData) {
      var addition = this.props.addition ? this.props.addition : [];
      if (addition) {
        _.keys(addition).forEach(function(key) {
          _.values(addition).forEach(function(value) {
            formData.append(key, value);
          });
        });
      }
    },
    _onSuccess: function(file, res) {
    },
    _onError: function(file, res) {
      console.log(res);
    },
    _onAdded: function(file) {
      file.previewElement.addEventListener('click', function() {
      }.bind(this));
    }
});

module.exports = DropzoneUpload;

},{"dropzone":"dropzone","react":"react","underscore":"underscore"}],14:[function(require,module,exports){
 
var React = require('react');
var PageHeader = require('./page-header');
var Breadcrumb = require('./breadcrumb');

var Header = React.createClass({
    displayName: 'Header',
    render: function () {
        return (
            React.createElement("div", {id: "title-breadcrumb-option-demo", className: "page-title-breadcrumb clearfix"}, 
              React.createElement(PageHeader, {pageTitle: this.props.pageTitle}), 
              React.createElement(Breadcrumb, {active: this.props.pageTitle, root: "首页"})
            )
        );
    }
});

module.exports = Header;

},{"./breadcrumb":9,"./page-header":16,"react":"react"}],15:[function(require,module,exports){

var $ = jQuery = require('jquery');

/**
 * parser - jQuery EasyUI
 *
 * Copyright (c) 2009-2013 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the GPL or commercial licenses
 * To use it on other terms please contact us: info@jeasyui.com
 * http://www.gnu.org/licenses/gpl.txt
 * http://www.jeasyui.com/license_commercial.php
 *
 */

(function($){
    $.parser = {
        auto: true,
        onComplete: function(context){},
        plugins:['draggable','droppable','resizable','pagination','tooltip',
                 'linkbutton','menu','menubutton','splitbutton','progressbar',
                 'tree','combobox','combotree','combogrid','numberbox','validatebox','searchbox',
                 'numberspinner','timespinner','calendar','datebox','datetimebox','slider',
                 'layout','panel','datagrid','propertygrid','treegrid','tabs','accordion','window','dialog'
        ],
        parse: function(context){
            var aa = [];
            for(var i=0; i<$.parser.plugins.length; i++){
                var name = $.parser.plugins[i];
                var r = $('.easyui-' + name, context);
                if (r.length){
                    if (r[name]){
                        r[name]();
                    } else {
                        aa.push({name:name,jq:r});
                    }
                }
            }
            if (aa.length && window.easyloader){
                var names = [];
                for(var i=0; i<aa.length; i++){
                    names.push(aa[i].name);
                }
                easyloader.load(names, function(){
                    for(var i=0; i<aa.length; i++){
                        var name = aa[i].name;
                        var jq = aa[i].jq;
                        jq[name]();
                    }
                    $.parser.onComplete.call($.parser, context);
                });
            } else {
                $.parser.onComplete.call($.parser, context);
            }
        },

        /**
         * parse options, including standard 'data-options' attribute.
         *
         * calling examples:
         * $.parser.parseOptions(target);
         * $.parser.parseOptions(target, ['id','title','width',{fit:'boolean',border:'boolean'},{min:'number'}]);
         */
        parseOptions: function(target, properties){
            var t = $(target);
            var options = {};

            var s = $.trim(t.attr('data-options'));
            if (s){
//              var first = s.substring(0,1);
//              var last = s.substring(s.length-1,1);
//              if (first != '{') s = '{' + s;
//              if (last != '}') s = s + '}';
                if (s.substring(0, 1) != '{'){
                    s = '{' + s + '}';
                }
                options = (new Function('return ' + s))();
            }

            if (properties){
                var opts = {};
                for(var i=0; i<properties.length; i++){
                    var pp = properties[i];
                    if (typeof pp == 'string'){
                        if (pp == 'width' || pp == 'height' || pp == 'left' || pp == 'top'){
                            opts[pp] = parseInt(target.style[pp]) || undefined;
                        } else {
                            opts[pp] = t.attr(pp);
                        }
                    } else {
                        for(var name in pp){
                            var type = pp[name];
                            if (type == 'boolean'){
                                opts[name] = t.attr(name) ? (t.attr(name) == 'true') : undefined;
                            } else if (type == 'number'){
                                opts[name] = t.attr(name)=='0' ? 0 : parseFloat(t.attr(name)) || undefined;
                            }
                        }
                    }
                }
                $.extend(options, opts);
            }
            return options;
        }
    };
    $(function(){
        var d = $('<div style="position:absolute;top:-1000px;width:100px;height:100px;padding:5px"></div>').appendTo('body');
        d.width(100);
        $._boxModel = parseInt(d.width()) == 100;
        d.remove();

        if (!window.easyloader && $.parser.auto){
            $.parser.parse();
        }
    });

    /**
     * extend plugin to set box model width
     */
    $.fn._outerWidth = function(width){
        if (width == undefined){
            if (this[0] == window){
                return this.width() || document.body.clientWidth;
            }
            return this.outerWidth()||0;
        }
        return this.each(function(){
            if ($._boxModel){
                $(this).width(width - ($(this).outerWidth() - $(this).width()));
            } else {
                $(this).width(width);
            }
        });
    };

    /**
     * extend plugin to set box model height
     */
    $.fn._outerHeight = function(height){
        if (height == undefined){
            if (this[0] == window){
                return this.height() || document.body.clientHeight;
            }
            return this.outerHeight()||0;
        }
        return this.each(function(){
            if ($._boxModel){
                $(this).height(height - ($(this).outerHeight() - $(this).height()));
            } else {
                $(this).height(height);
            }
        });
    };

    $.fn._scrollLeft = function(left){
        if (left == undefined){
            return this.scrollLeft();
        } else {
            return this.each(function(){$(this).scrollLeft(left)});
        }
    }

    $.fn._propAttr = $.fn.prop || $.fn.attr;

    /**
     * set or unset the fit property of parent container, return the width and height of parent container
     */
    $.fn._fit = function(fit){
        fit = fit == undefined ? true : fit;
        var t = this[0];
        var p = (t.tagName == 'BODY' ? t : this.parent()[0]);
        var fcount = p.fcount || 0;
        if (fit){
            if (!t.fitted){
                t.fitted = true;
                p.fcount = fcount + 1;
                $(p).addClass('panel-noscroll');
                if (p.tagName == 'BODY'){
                    $('html').addClass('panel-fit');
                }
            }
        } else {
            if (t.fitted){
                t.fitted = false;
                p.fcount = fcount - 1;
                if (p.fcount == 0){
                    $(p).removeClass('panel-noscroll');
                    if (p.tagName == 'BODY'){
                        $('html').removeClass('panel-fit');
                    }
                }
            }
        }
        return {
            width: $(p).width(),
            height: $(p).height()
        }
    }

    return $.parser;

})(jQuery);

/**
 * support for mobile devices
 */
(function($){
    var longTouchTimer = null;
    var dblTouchTimer = null;
    var isDblClick = false;

    function onTouchStart(e){
        if (e.touches.length != 1){return}
        if (!isDblClick){
            isDblClick = true;
            dblClickTimer = setTimeout(function(){
                isDblClick = false;
            }, 500);
        } else {
            clearTimeout(dblClickTimer);
            isDblClick = false;
            fire(e, 'dblclick');
//          e.preventDefault();
        }
        longTouchTimer = setTimeout(function(){
            fire(e, 'contextmenu', 3);
        }, 1000);
        fire(e, 'mousedown');
        if ($.fn.draggable.isDragging || $.fn.resizable.isResizing){
            e.preventDefault();
        }
    }
    function onTouchMove(e){
        if (e.touches.length != 1){return}
        if (longTouchTimer){
            clearTimeout(longTouchTimer);
        }
        fire(e, 'mousemove');
        if ($.fn.draggable.isDragging || $.fn.resizable.isResizing){
            e.preventDefault();
        }
    }
    function onTouchEnd(e){
//      if (e.touches.length > 0){return}
        if (longTouchTimer){
            clearTimeout(longTouchTimer);
        }
        fire(e, 'mouseup');
        if ($.fn.draggable.isDragging || $.fn.resizable.isResizing){
            e.preventDefault();
        }
    }

    function fire(e, name, which){
        var event = new $.Event(name);
        event.pageX = e.changedTouches[0].pageX;
        event.pageY = e.changedTouches[0].pageY;
        event.which = which || 1;
        $(e.target).trigger(event);
    }

    if (document.addEventListener){
        document.addEventListener("touchstart", onTouchStart, true);
        document.addEventListener("touchmove", onTouchMove, true);
        document.addEventListener("touchend", onTouchEnd, true);
    }
})(jQuery);


/**
 * draggable - jQuery EasyUI
 *
 * Copyright (c) 2009-2013 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the GPL or commercial licenses
 * To use it on other terms please contact us: info@jeasyui.com
 * http://www.gnu.org/licenses/gpl.txt
 * http://www.jeasyui.com/license_commercial.php
 */
(function($){
//  var isDragging = false;
    function drag(e){
        var state = $.data(e.data.target, 'draggable');
        var opts = state.options;
        var proxy = state.proxy;

        var dragData = e.data;
        var left = dragData.startLeft + e.pageX - dragData.startX;
        var top = dragData.startTop + e.pageY - dragData.startY;

        if (proxy){
            if (proxy.parent()[0] == document.body){
                if (opts.deltaX != null && opts.deltaX != undefined){
                    left = e.pageX + opts.deltaX;
                } else {
                    left = e.pageX - e.data.offsetWidth;
                }
                if (opts.deltaY != null && opts.deltaY != undefined){
                    top = e.pageY + opts.deltaY;
                } else {
                    top = e.pageY - e.data.offsetHeight;
                }
            } else {
                if (opts.deltaX != null && opts.deltaX != undefined){
                    left += e.data.offsetWidth + opts.deltaX;
                }
                if (opts.deltaY != null && opts.deltaY != undefined){
                    top += e.data.offsetHeight + opts.deltaY;
                }
            }
        }

//      if (opts.deltaX != null && opts.deltaX != undefined){
//          left = e.pageX + opts.deltaX;
//      }
//      if (opts.deltaY != null && opts.deltaY != undefined){
//          top = e.pageY + opts.deltaY;
//      }

        if (e.data.parent != document.body) {
            left += $(e.data.parent).scrollLeft();
            top += $(e.data.parent).scrollTop();
        }

        if (opts.axis == 'h') {
            dragData.left = left;
        } else if (opts.axis == 'v') {
            dragData.top = top;
        } else {
            dragData.left = left;
            dragData.top = top;
        }
    }

    function applyDrag(e){
        var state = $.data(e.data.target, 'draggable');
        var opts = state.options;
        var proxy = state.proxy;
        if (!proxy){
            proxy = $(e.data.target);
        }
//      if (proxy){
//          proxy.css('cursor', opts.cursor);
//      } else {
//          proxy = $(e.data.target);
//          $.data(e.data.target, 'draggable').handle.css('cursor', opts.cursor);
//      }
        proxy.css({
            left:e.data.left,
            top:e.data.top
        });
        $('body').css('cursor', opts.cursor);
    }

    function doDown(e){
//      isDragging = true;
        $.fn.draggable.isDragging = true;
        var state = $.data(e.data.target, 'draggable');
        var opts = state.options;

        var droppables = $('.droppable').filter(function(){
            return e.data.target != this;
        }).filter(function(){
            var accept = $.data(this, 'droppable').options.accept;
            if (accept){
                return $(accept).filter(function(){
                    return this == e.data.target;
                }).length > 0;
            } else {
                return true;
            }
        });
        state.droppables = droppables;

        var proxy = state.proxy;
        if (!proxy){
            if (opts.proxy){
                if (opts.proxy == 'clone'){
                    proxy = $(e.data.target).clone().insertAfter(e.data.target);
                } else {
                    proxy = opts.proxy.call(e.data.target, e.data.target);
                }
                state.proxy = proxy;
            } else {
                proxy = $(e.data.target);
            }
        }

        proxy.css('position', 'absolute');
        drag(e);
        applyDrag(e);

        opts.onStartDrag.call(e.data.target, e);
        return false;
    }

    function doMove(e){
        var state = $.data(e.data.target, 'draggable');
        drag(e);
        if (state.options.onDrag.call(e.data.target, e) != false){
            applyDrag(e);
        }

        var source = e.data.target;
        state.droppables.each(function(){
            var dropObj = $(this);
            if (dropObj.droppable('options').disabled){return;}

            var p2 = dropObj.offset();
            if (e.pageX > p2.left && e.pageX < p2.left + dropObj.outerWidth()
                    && e.pageY > p2.top && e.pageY < p2.top + dropObj.outerHeight()){
                if (!this.entered){
                    $(this).trigger('_dragenter', [source]);
                    this.entered = true;
                }
                $(this).trigger('_dragover', [source]);
            } else {
                if (this.entered){
                    $(this).trigger('_dragleave', [source]);
                    this.entered = false;
                }
            }
        });

        return false;
    }

    function doUp(e){
//      isDragging = false;
        $.fn.draggable.isDragging = false;
//      drag(e);
        doMove(e);

        var state = $.data(e.data.target, 'draggable');
        var proxy = state.proxy;
        var opts = state.options;
        if (opts.revert){
            if (checkDrop() == true){
                $(e.data.target).css({
                    position:e.data.startPosition,
                    left:e.data.startLeft,
                    top:e.data.startTop
                });
            } else {
                if (proxy){
                    var left, top;
                    if (proxy.parent()[0] == document.body){
                        left = e.data.startX - e.data.offsetWidth;
                        top = e.data.startY - e.data.offsetHeight;
                    } else {
                        left = e.data.startLeft;
                        top = e.data.startTop;
                    }
                    proxy.animate({
                        left: left,
                        top: top
                    }, function(){
                        removeProxy();
                    });
                } else {
                    $(e.data.target).animate({
                        left:e.data.startLeft,
                        top:e.data.startTop
                    }, function(){
                        $(e.data.target).css('position', e.data.startPosition);
                    });
                }
            }
        } else {
            $(e.data.target).css({
                position:'absolute',
                left:e.data.left,
                top:e.data.top
            });
            checkDrop();
        }

        opts.onStopDrag.call(e.data.target, e);

        $(document).unbind('.draggable');
        setTimeout(function(){
            $('body').css('cursor','');
        },100);

        function removeProxy(){
            if (proxy){
                proxy.remove();
            }
            state.proxy = null;
        }

        function checkDrop(){
            var dropped = false;
            state.droppables.each(function(){
                var dropObj = $(this);
                if (dropObj.droppable('options').disabled){return;}

                var p2 = dropObj.offset();
                if (e.pageX > p2.left && e.pageX < p2.left + dropObj.outerWidth()
                        && e.pageY > p2.top && e.pageY < p2.top + dropObj.outerHeight()){
                    if (opts.revert){
                        $(e.data.target).css({
                            position:e.data.startPosition,
                            left:e.data.startLeft,
                            top:e.data.startTop
                        });
                    }
                    $(this).trigger('_drop', [e.data.target]);
                    removeProxy();
                    dropped = true;
                    this.entered = false;
                    return false;
                }
            });
            if (!dropped && !opts.revert){
                removeProxy();
            }
            return dropped;
        }

        return false;
    }

    $.fn.draggable = function(options, param){
        if (typeof options == 'string'){
            return $.fn.draggable.methods[options](this, param);
        }

        return this.each(function(){
            var opts;
            var state = $.data(this, 'draggable');
            if (state) {
                state.handle.unbind('.draggable');
                opts = $.extend(state.options, options);
            } else {
                opts = $.extend({}, $.fn.draggable.defaults, $.fn.draggable.parseOptions(this), options || {});
            }
            var handle = opts.handle ? (typeof opts.handle=='string' ? $(opts.handle, this) : opts.handle) : $(this);

            $.data(this, 'draggable', {
                options: opts,
                handle: handle
            });

            if (opts.disabled) {
                $(this).css('cursor', '');
                return;
            }

            handle.unbind('.draggable').bind('mousemove.draggable', {target:this}, function(e){
//              if (isDragging) return;
                if ($.fn.draggable.isDragging){return}
                var opts = $.data(e.data.target, 'draggable').options;
                if (checkArea(e)){
                    $(this).css('cursor', opts.cursor);
                } else {
                    $(this).css('cursor', '');
                }
            }).bind('mouseleave.draggable', {target:this}, function(e){
                $(this).css('cursor', '');
            }).bind('mousedown.draggable', {target:this}, function(e){
                if (checkArea(e) == false) return;
                $(this).css('cursor', '');

                var position = $(e.data.target).position();
                var offset = $(e.data.target).offset();
                var data = {
                    startPosition: $(e.data.target).css('position'),
                    startLeft: position.left,
                    startTop: position.top,
                    left: position.left,
                    top: position.top,
                    startX: e.pageX,
                    startY: e.pageY,
                    offsetWidth: (e.pageX - offset.left),
                    offsetHeight: (e.pageY - offset.top),
                    target: e.data.target,
                    parent: $(e.data.target).parent()[0]
                };

                $.extend(e.data, data);
                var opts = $.data(e.data.target, 'draggable').options;
                if (opts.onBeforeDrag.call(e.data.target, e) == false) return;

                $(document).bind('mousedown.draggable', e.data, doDown);
                $(document).bind('mousemove.draggable', e.data, doMove);
                $(document).bind('mouseup.draggable', e.data, doUp);
//              $('body').css('cursor', opts.cursor);
            });

            // check if the handle can be dragged
            function checkArea(e) {
                var state = $.data(e.data.target, 'draggable');
                var handle = state.handle;
                var offset = $(handle).offset();
                var width = $(handle).outerWidth();
                var height = $(handle).outerHeight();
                var t = e.pageY - offset.top;
                var r = offset.left + width - e.pageX;
                var b = offset.top + height - e.pageY;
                var l = e.pageX - offset.left;

                return Math.min(t,r,b,l) > state.options.edge;
            }

        });
    };

    $.fn.draggable.methods = {
        options: function(jq){
            return $.data(jq[0], 'draggable').options;
        },
        proxy: function(jq){
            return $.data(jq[0], 'draggable').proxy;
        },
        enable: function(jq){
            return jq.each(function(){
                $(this).draggable({disabled:false});
            });
        },
        disable: function(jq){
            return jq.each(function(){
                $(this).draggable({disabled:true});
            });
        }
    };

    $.fn.draggable.parseOptions = function(target){
        var t = $(target);
        return $.extend({},
                $.parser.parseOptions(target, ['cursor','handle','axis',
                       {'revert':'boolean','deltaX':'number','deltaY':'number','edge':'number'}]), {
            disabled: (t.attr('disabled') ? true : undefined)
        });
    };

    $.fn.draggable.defaults = {
        proxy:null, // 'clone' or a function that will create the proxy object,
                    // the function has the source parameter that indicate the source object dragged.
        revert:false,
        cursor:'move',
        deltaX:null,
        deltaY:null,
        handle: null,
        disabled: false,
        edge:0,
        axis:null,  // v or h

        onBeforeDrag: function(e){},
        onStartDrag: function(e){},
        onDrag: function(e){},
        onStopDrag: function(e){}
    };

    $.fn.draggable.isDragging = false;

//  $(function(){
//      function touchHandler(e) {
//          var touches = e.changedTouches, first = touches[0], type = "";
//
//          switch(e.type) {
//              case "touchstart": type = "mousedown"; break;
//              case "touchmove":  type = "mousemove"; break;
//              case "touchend":   type = "mouseup";   break;
//              default: return;
//          }
//          var simulatedEvent = document.createEvent("MouseEvent");
//          simulatedEvent.initMouseEvent(type, true, true, window, 1,
//                                    first.screenX, first.screenY,
//                                    first.clientX, first.clientY, false,
//                                    false, false, false, 0/*left*/, null);
//
//          first.target.dispatchEvent(simulatedEvent);
//          if (isDragging){
//              e.preventDefault();
//          }
//      }
//
//      if (document.addEventListener){
//          document.addEventListener("touchstart", touchHandler, true);
//          document.addEventListener("touchmove", touchHandler, true);
//          document.addEventListener("touchend", touchHandler, true);
//          document.addEventListener("touchcancel", touchHandler, true);
//      }
//  });
})(jQuery);


/**
 * droppable - jQuery EasyUI
 *
 * Copyright (c) 2009-2013 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the GPL or commercial licenses
 * To use it on other terms please contact us: info@jeasyui.com
 * http://www.gnu.org/licenses/gpl.txt
 * http://www.jeasyui.com/license_commercial.php
 */
(function($){
    function init(target){
        $(target).addClass('droppable');
        $(target).bind('_dragenter', function(e, source){
            $.data(target, 'droppable').options.onDragEnter.apply(target, [e, source]);
        });
        $(target).bind('_dragleave', function(e, source){
            $.data(target, 'droppable').options.onDragLeave.apply(target, [e, source]);
        });
        $(target).bind('_dragover', function(e, source){
            $.data(target, 'droppable').options.onDragOver.apply(target, [e, source]);
        });
        $(target).bind('_drop', function(e, source){
            $.data(target, 'droppable').options.onDrop.apply(target, [e, source]);
        });
    }

    $.fn.droppable = function(options, param){
        if (typeof options == 'string'){
            return $.fn.droppable.methods[options](this, param);
        }

        options = options || {};
        return this.each(function(){
            var state = $.data(this, 'droppable');
            if (state){
                $.extend(state.options, options);
            } else {
                init(this);
                $.data(this, 'droppable', {
                    options: $.extend({}, $.fn.droppable.defaults, $.fn.droppable.parseOptions(this), options)
                });
            }
        });
    };

    $.fn.droppable.methods = {
        options: function(jq){
            return $.data(jq[0], 'droppable').options;
        },
        enable: function(jq){
            return jq.each(function(){
                $(this).droppable({disabled:false});
            });
        },
        disable: function(jq){
            return jq.each(function(){
                $(this).droppable({disabled:true});
            });
        }
    };

    $.fn.droppable.parseOptions = function(target){
        var t = $(target);
        return $.extend({}, $.parser.parseOptions(target, ['accept']), {
            disabled: (t.attr('disabled') ? true : undefined)
        });
    };

    $.fn.droppable.defaults = {
        accept:null,
        disabled:false,
        onDragEnter:function(e, source){},
        onDragOver:function(e, source){},
        onDragLeave:function(e, source){},
        onDrop:function(e, source){}
    };
})(jQuery);



/**
 * jQuery EasyUI 1.3.5
 *
 * Copyright (c) 2009-2013 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the GPL or commercial licenses
 * To use it on other terms please contact us: info@jeasyui.com
 * http://www.gnu.org/licenses/gpl.txt
 * http://www.jeasyui.com/license_commercial.php
 *
 */ (function($) {
    function _1(_2) {
        var _3 = $(_2);
        _3.addClass("tree");
        return _3;
    };

    function _4(_5) {
        var _6 = $.data(_5, "tree").options;
        $(_5).unbind().bind("mouseover", function(e) {
            var tt = $(e.target);
            var _7 = tt.closest("div.tree-node");
            if (!_7.length) {
                return;
            }
            _7.addClass("tree-node-hover");
            if (tt.hasClass("tree-hit")) {
                if (tt.hasClass("tree-expanded")) {
                    tt.addClass("tree-expanded-hover");
                } else {
                    tt.addClass("tree-collapsed-hover");
                }
            }
            e.stopPropagation();
        }).bind("mouseout", function(e) {
            var tt = $(e.target);
            var _8 = tt.closest("div.tree-node");
            if (!_8.length) {
                return;
            }
            _8.removeClass("tree-node-hover");
            if (tt.hasClass("tree-hit")) {
                if (tt.hasClass("tree-expanded")) {
                    tt.removeClass("tree-expanded-hover");
                } else {
                    tt.removeClass("tree-collapsed-hover");
                }
            }
            e.stopPropagation();
        }).bind("click", function(e) {
            var tt = $(e.target);
            var _9 = tt.closest("div.tree-node");
            if (!_9.length) {
                return;
            }
            if (tt.hasClass("tree-hit")) {
                _7e(_5, _9[0]);
                return false;
            } else {
                if (tt.hasClass("tree-checkbox")) {
                    _32(_5, _9[0], !tt.hasClass("tree-checkbox1"));
                    return false;
                } else {
                    _d6(_5, _9[0]);
                    _6.onClick.call(_5, _c(_5, _9[0]));
                }
            }
            e.stopPropagation();
        }).bind("dblclick", function(e) {
            var _a = $(e.target).closest("div.tree-node");
            if (!_a.length) {
                return;
            }
            _d6(_5, _a[0]);
            _6.onDblClick.call(_5, _c(_5, _a[0]));
            e.stopPropagation();
        }).bind("contextmenu", function(e) {
            var _b = $(e.target).closest("div.tree-node");
            if (!_b.length) {
                return;
            }
            _6.onContextMenu.call(_5, e, _c(_5, _b[0]));
            e.stopPropagation();
        });
    };

    function _d(_e) {
        var _f = $.data(_e, "tree").options;
        _f.dnd = false;
        var _10 = $(_e).find("div.tree-node");
        _10.draggable("disable");
        _10.css("cursor", "pointer");
    };

    function _11(_12) {
        var _13 = $.data(_12, "tree");
        var _14 = _13.options;
        var _15 = _13.tree;
        _13.disabledNodes = [];
        _14.dnd = true;
        _15.find("div.tree-node").draggable({
            disabled: false,
            revert: true,
            cursor: "pointer",
            proxy: function(_16) {
                var p = $("<div class=\"tree-node-proxy\"></div>").appendTo("body");
                p.html("<span class=\"tree-dnd-icon tree-dnd-no\"> </span>" + $(_16).find(".tree-title").html());
                p.hide();
                return p;
            },
            deltaX: 15,
            deltaY: 15,
            onBeforeDrag: function(e) {
                if (_14.onBeforeDrag.call(_12, _c(_12, this)) == false) {
                    return false;
                }
                if ($(e.target).hasClass("tree-hit") || $(e.target).hasClass("tree-checkbox")) {
                    return false;
                }
                if (e.which != 1) {
                    return false;
                }
                $(this).next("ul").find("div.tree-node").droppable({
                    accept: "no-accept"
                });
                var _17 = $(this).find("span.tree-indent");
                if (_17.length) {
                    e.data.offsetWidth -= _17.length * _17.width();
                }
            },
            onStartDrag: function() {
                $(this).draggable("proxy").css({
                    left: -10000,
                    top: -10000
                });
                _14.onStartDrag.call(_12, _c(_12, this));
                var _18 = _c(_12, this);
                if (_18.id == undefined) {
                    _18.id = "easyui_tree_node_id_temp";
                    _54(_12, _18);
                }
                _13.draggingNodeId = _18.id;
            },
            onDrag: function(e) {
                var x1 = e.pageX,
                    y1 = e.pageY,
                    x2 = e.data.startX,
                    y2 = e.data.startY;
                var d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
                if (d > 3) {
                    $(this).draggable("proxy").show();
                }
                this.pageY = e.pageY;
            },
            onStopDrag: function() {
                $(this).next("ul").find("div.tree-node").droppable({
                    accept: "div.tree-node"
                });
                for (var i = 0; i < _13.disabledNodes.length; i++) {
                    $(_13.disabledNodes[i]).droppable("enable");
                }
                _13.disabledNodes = [];
                var _19 = _c9(_12, _13.draggingNodeId);
                if (_19 && _19.id == "easyui_tree_node_id_temp") {
                    _19.id = "";
                    _54(_12, _19);
                }
                _14.onStopDrag.call(_12, _19);
            }
        }).droppable({
            accept: "div.tree-node",
            onDragEnter: function(e, _1a) {
                if (_14.onDragEnter.call(_12, this, _c(_12, _1a)) == false) {
                    _1b(_1a, false);
                    $(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
                    $(this).droppable("disable");
                    _13.disabledNodes.push(this);
                }
            },
            onDragOver: function(e, _1c) {
                if ($(this).droppable("options").disabled) {
                    return;
                }
                var _1d = _1c.pageY;
                var top = $(this).offset().top;
                var _1e = top + $(this).outerHeight();
                _1b(_1c, true);
                $(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
                if (_1d > top + (_1e - top) / 2) {
                    if (_1e - _1d < 5) {
                        $(this).addClass("tree-node-bottom");
                    } else {
                        $(this).addClass("tree-node-append");
                    }
                } else {
                    if (_1d - top < 5) {
                        $(this).addClass("tree-node-top");
                    } else {
                        $(this).addClass("tree-node-append");
                    }
                }
                if (_14.onDragOver.call(_12, this, _c(_12, _1c)) == false) {
                    _1b(_1c, false);
                    $(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
                    $(this).droppable("disable");
                    _13.disabledNodes.push(this);
                }
            },
            onDragLeave: function(e, _1f) {
                _1b(_1f, false);
                $(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
                _14.onDragLeave.call(_12, this, _c(_12, _1f));
            },
            onDrop: function(e, _20) {
                var _21 = this;
                var _22, _23;
                if ($(this).hasClass("tree-node-append")) {
                    _22 = _24;
                    _23 = "append";
                } else {
                    _22 = _25;
                    _23 = $(this).hasClass("tree-node-top") ? "top" : "bottom";
                }
                if (_14.onBeforeDrop.call(_12, _21, _c2(_12, _20), _23) == false) {
                    $(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
                    return;
                }
                _22(_20, _21, _23);
                $(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
            }
        });

        function _1b(_26, _27) {
            var _28 = $(_26).draggable("proxy").find("span.tree-dnd-icon");
            _28.removeClass("tree-dnd-yes tree-dnd-no").addClass(_27 ? "tree-dnd-yes" : "tree-dnd-no");
        };

        function _24(_29, _2a) {
            if (_c(_12, _2a).state == "closed") {
                _72(_12, _2a, function() {
                    _2b();
                });
            } else {
                _2b();
            }

            function _2b() {
                var _2c = $(_12).tree("pop", _29);
                $(_12).tree("append", {
                    parent: _2a,
                    data: [_2c]
                });
                _14.onDrop.call(_12, _2a, _2c, "append");
            };
        };

        function _25(_2d, _2e, _2f) {
            var _30 = {};
            if (_2f == "top") {
                _30.before = _2e;
            } else {
                _30.after = _2e;
            }
            var _31 = $(_12).tree("pop", _2d);
            _30.data = _31;
            $(_12).tree("insert", _30);
            _14.onDrop.call(_12, _2e, _31, _2f);
        };
    };

    function _32(_33, _34, _35) {
        var _36 = $.data(_33, "tree").options;
        if (!_36.checkbox) {
            return;
        }
        var _37 = _c(_33, _34);
        if (_36.onBeforeCheck.call(_33, _37, _35) == false) {
            return;
        }
        var _38 = $(_34);
        var ck = _38.find(".tree-checkbox");
        ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
        if (_35) {
            ck.addClass("tree-checkbox1");
        } else {
            ck.addClass("tree-checkbox0");
        }
        if (_36.cascadeCheck) {
            _39(_38);
            _3a(_38);
        }
        _36.onCheck.call(_33, _37, _35);

        function _3a(_3b) {
            var _3c = _3b.next().find(".tree-checkbox");
            _3c.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
            if (_3b.find(".tree-checkbox").hasClass("tree-checkbox1")) {
                _3c.addClass("tree-checkbox1");
            } else {
                _3c.addClass("tree-checkbox0");
            }
        };

        function _39(_3d) {
            var _3e = _89(_33, _3d[0]);
            if (_3e) {
                var ck = $(_3e.target).find(".tree-checkbox");
                ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
                if (_3f(_3d)) {
                    ck.addClass("tree-checkbox1");
                } else {
                    if (_40(_3d)) {
                        ck.addClass("tree-checkbox0");
                    } else {
                        ck.addClass("tree-checkbox2");
                    }
                }
                _39($(_3e.target));
            }

            function _3f(n) {
                var ck = n.find(".tree-checkbox");
                if (ck.hasClass("tree-checkbox0") || ck.hasClass("tree-checkbox2")) {
                    return false;
                }
                var b = true;
                n.parent().siblings().each(function() {
                    if (!$(this).children("div.tree-node").children(".tree-checkbox").hasClass("tree-checkbox1")) {
                        b = false;
                    }
                });
                return b;
            };

            function _40(n) {
                var ck = n.find(".tree-checkbox");
                if (ck.hasClass("tree-checkbox1") || ck.hasClass("tree-checkbox2")) {
                    return false;
                }
                var b = true;
                n.parent().siblings().each(function() {
                    if (!$(this).children("div.tree-node").children(".tree-checkbox").hasClass("tree-checkbox0")) {
                        b = false;
                    }
                });
                return b;
            };
        };
    };

    function _41(_42, _43) {
        var _44 = $.data(_42, "tree").options;
        if (!_44.checkbox) {
            return;
        }
        var _45 = $(_43);
        if (_46(_42, _43)) {
            var ck = _45.find(".tree-checkbox");
            if (ck.length) {
                if (ck.hasClass("tree-checkbox1")) {
                    _32(_42, _43, true);
                } else {
                    _32(_42, _43, false);
                }
            } else {
                if (_44.onlyLeafCheck) {
                    $("<span class=\"tree-checkbox tree-checkbox0\"></span>").insertBefore(_45.find(".tree-title"));
                }
            }
        } else {
            var ck = _45.find(".tree-checkbox");
            if (_44.onlyLeafCheck) {
                ck.remove();
            } else {
                if (ck.hasClass("tree-checkbox1")) {
                    _32(_42, _43, true);
                } else {
                    if (ck.hasClass("tree-checkbox2")) {
                        var _47 = true;
                        var _48 = true;
                        var _49 = _4a(_42, _43);
                        for (var i = 0; i < _49.length; i++) {
                            if (_49[i].checked) {
                                _48 = false;
                            } else {
                                _47 = false;
                            }
                        }
                        if (_47) {
                            _32(_42, _43, true);
                        }
                        if (_48) {
                            _32(_42, _43, false);
                        }
                    }
                }
            }
        }
    };

    function _4b(_4c, ul, _4d, _4e) {
        var _4f = $.data(_4c, "tree");
        var _50 = _4f.options;
        var _51 = $(ul).prevAll("div.tree-node:first");
        _4d = _50.loadFilter.call(_4c, _4d, _51[0]);
        var _52 = _53(_4c, "domId", _51.attr("id"));
        if (!_4e) {
            _52 ? _52.children = _4d : _4f.data = _4d;
            $(ul).empty();
        } else {
            if (_52) {
                _52.children ? _52.children = _52.children.concat(_4d) : _52.children = _4d;
            } else {
                _4f.data = _4f.data.concat(_4d);
            }
        }
        _50.view.render.call(_50.view, _4c, ul, _4d);
        if (_50.dnd) {
            _11(_4c);
        }
        if (_52) {
            _54(_4c, _52);
        }
        var _55 = [];
        var _56 = [];
        for (var i = 0; i < _4d.length; i++) {
            var _57 = _4d[i];
            if (!_57.checked) {
                _55.push(_57);
            }
        }
        _58(_4d, function(_59) {
            if (_59.checked) {
                _56.push(_59);
            }
        });
        if (_55.length) {
            _32(_4c, $("#" + _55[0].domId)[0], false);
        }
        for (var i = 0; i < _56.length; i++) {
            _32(_4c, $("#" + _56[i].domId)[0], true);
        }
        setTimeout(function() {
            _5a(_4c, _4c);
        }, 0);
        _50.onLoadSuccess.call(_4c, _52, _4d);
    };

    function _5a(_5b, ul, _5c) {
        var _5d = $.data(_5b, "tree").options;
        if (_5d.lines) {
            $(_5b).addClass("tree-lines");
        } else {
            $(_5b).removeClass("tree-lines");
            return;
        }
        if (!_5c) {
            _5c = true;
            $(_5b).find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
            $(_5b).find("div.tree-node").removeClass("tree-node-last tree-root-first tree-root-one");
            var _5e = $(_5b).tree("getRoots");
            if (_5e.length > 1) {
                $(_5e[0].target).addClass("tree-root-first");
            } else {
                if (_5e.length == 1) {
                    $(_5e[0].target).addClass("tree-root-one");
                }
            }
        }
        $(ul).children("li").each(function() {
            var _5f = $(this).children("div.tree-node");
            var ul = _5f.next("ul");
            if (ul.length) {
                if ($(this).next().length) {
                    _60(_5f);
                }
                _5a(_5b, ul, _5c);
            } else {
                _61(_5f);
            }
        });
        var _62 = $(ul).children("li:last").children("div.tree-node").addClass("tree-node-last");
        _62.children("span.tree-join").removeClass("tree-join").addClass("tree-joinbottom");

        function _61(_63, _64) {
            var _65 = _63.find("span.tree-icon");
            _65.prev("span.tree-indent").addClass("tree-join");
        };

        function _60(_66) {
            var _67 = _66.find("span.tree-indent, span.tree-hit").length;
            _66.next().find("div.tree-node").each(function() {
                $(this).children("span:eq(" + (_67 - 1) + ")").addClass("tree-line");
            });
        };
    };

    function _68(_69, ul, _6a, _6b) {
        var _6c = $.data(_69, "tree").options;
        _6a = _6a || {};
        var _6d = null;
        if (_69 != ul) {
            var _6e = $(ul).prev();
            _6d = _c(_69, _6e[0]);
        }
        if (_6c.onBeforeLoad.call(_69, _6d, _6a) == false) {
            return;
        }
        var _6f = $(ul).prev().children("span.tree-folder");
        _6f.addClass("tree-loading");
        var _70 = _6c.loader.call(_69, _6a, function(_71) {
            _6f.removeClass("tree-loading");
            _4b(_69, ul, _71);
            if (_6b) {
                _6b();
            }
        }, function() {
            _6f.removeClass("tree-loading");
            _6c.onLoadError.apply(_69, arguments);
            if (_6b) {
                _6b();
            }
        });
        if (_70 == false) {
            _6f.removeClass("tree-loading");
        }
    };

    function _72(_73, _74, _75) {
        var _76 = $.data(_73, "tree").options;
        var hit = $(_74).children("span.tree-hit");
        if (hit.length == 0) {
            return;
        }
        if (hit.hasClass("tree-expanded")) {
            return;
        }
        var _77 = _c(_73, _74);
        if (_76.onBeforeExpand.call(_73, _77) == false) {
            return;
        }
        hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
        hit.next().addClass("tree-folder-open");
        var ul = $(_74).next();
        if (ul.length) {
            if (_76.animate) {
                ul.slideDown("normal", function() {
                    _77.state = "open";
                    _76.onExpand.call(_73, _77);
                    if (_75) {
                        _75();
                    }
                });
            } else {
                ul.css("display", "block");
                _77.state = "open";
                _76.onExpand.call(_73, _77);
                if (_75) {
                    _75();
                }
            }
        } else {
            var _78 = $("<ul style=\"display:none\"></ul>").insertAfter(_74);
            _68(_73, _78[0], {
                id: _77.id
            }, function() {
                if (_78.is(":empty")) {
                    _78.remove();
                }
                if (_76.animate) {
                    _78.slideDown("normal", function() {
                        _77.state = "open";
                        _76.onExpand.call(_73, _77);
                        if (_75) {
                            _75();
                        }
                    });
                } else {
                    _78.css("display", "block");
                    _77.state = "open";
                    _76.onExpand.call(_73, _77);
                    if (_75) {
                        _75();
                    }
                }
            });
        }
    };

    function _79(_7a, _7b) {
        var _7c = $.data(_7a, "tree").options;
        var hit = $(_7b).children("span.tree-hit");
        if (hit.length == 0) {
            return;
        }
        if (hit.hasClass("tree-collapsed")) {
            return;
        }
        var _7d = _c(_7a, _7b);
        if (_7c.onBeforeCollapse.call(_7a, _7d) == false) {
            return;
        }
        hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
        hit.next().removeClass("tree-folder-open");
        var ul = $(_7b).next();
        if (_7c.animate) {
            ul.slideUp("normal", function() {
                _7d.state = "closed";
                _7c.onCollapse.call(_7a, _7d);
            });
        } else {
            ul.css("display", "none");
            _7d.state = "closed";
            _7c.onCollapse.call(_7a, _7d);
        }
    };

    function _7e(_7f, _80) {
        var hit = $(_80).children("span.tree-hit");
        if (hit.length == 0) {
            return;
        }
        if (hit.hasClass("tree-expanded")) {
            _79(_7f, _80);
        } else {
            _72(_7f, _80);
        }
    };

    function _81(_82, _83) {
        var _84 = _4a(_82, _83);
        if (_83) {
            _84.unshift(_c(_82, _83));
        }
        for (var i = 0; i < _84.length; i++) {
            _72(_82, _84[i].target);
        }
    };

    function _85(_86, _87) {
        var _88 = [];
        var p = _89(_86, _87);
        while (p) {
            _88.unshift(p);
            p = _89(_86, p.target);
        }
        for (var i = 0; i < _88.length; i++) {
            _72(_86, _88[i].target);
        }
    };

    function _8a(_8b, _8c) {
        var c = $(_8b).parent();
        while (c[0].tagName != "BODY" && c.css("overflow-y") != "auto") {
            c = c.parent();
        }
        var n = $(_8c);
        var _8d = n.offset().top;
        if (c[0].tagName != "BODY") {
            var _8e = c.offset().top;
            if (_8d < _8e) {
                c.scrollTop(c.scrollTop() + _8d - _8e);
            } else {
                if (_8d + n.outerHeight() > _8e + c.outerHeight() - 18) {
                    c.scrollTop(c.scrollTop() + _8d + n.outerHeight() - _8e - c.outerHeight() + 18);
                }
            }
        } else {
            c.scrollTop(_8d);
        }
    };

    function _8f(_90, _91) {
        var _92 = _4a(_90, _91);
        if (_91) {
            _92.unshift(_c(_90, _91));
        }
        for (var i = 0; i < _92.length; i++) {
            _79(_90, _92[i].target);
        }
    };

    function _93(_94, _95) {
        var _96 = $(_95.parent);
        var _97 = _95.data;
        if (!_97) {
            return;
        }
        _97 = $.isArray(_97) ? _97 : [_97];
        if (!_97.length) {
            return;
        }
        var ul;
        if (_96.length == 0) {
            ul = $(_94);
        } else {
            if (_46(_94, _96[0])) {
                var _98 = _96.find("span.tree-icon");
                _98.removeClass("tree-file").addClass("tree-folder tree-folder-open");
                var hit = $("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_98);
                if (hit.prev().length) {
                    hit.prev().remove();
                }
            }
            ul = _96.next();
            if (!ul.length) {
                ul = $("<ul></ul>").insertAfter(_96);
            }
        }
        _4b(_94, ul[0], _97, true);
        _41(_94, ul.prev());
    };

    function _99(_9a, _9b) {
        var ref = _9b.before || _9b.after;
        var _9c = _89(_9a, ref);
        var _9d = _9b.data;
        if (!_9d) {
            return;
        }
        _9d = $.isArray(_9d) ? _9d : [_9d];
        if (!_9d.length) {
            return;
        }
        _93(_9a, {
            parent: (_9c ? _9c.target : null),
            data: _9d
        });
        var li = $();
        for (var i = 0; i < _9d.length; i++) {
            li = li.add($("#" + _9d[i].domId).parent());
        }
        if (_9b.before) {
            li.insertBefore($(ref).parent());
        } else {
            li.insertAfter($(ref).parent());
        }
    };

    function _9e(_9f, _a0) {
        var _a1 = del(_a0);
        $(_a0).parent().remove();
        if (_a1) {
            if (!_a1.children || !_a1.children.length) {
                var _a2 = $(_a1.target);
                _a2.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
                _a2.find(".tree-hit").remove();
                $("<span class=\"tree-indent\"></span>").prependTo(_a2);
                _a2.next().remove();
            }
            _54(_9f, _a1);
            _41(_9f, _a1.target);
        }
        _5a(_9f, _9f);

        function del(_a3) {
            var id = $(_a3).attr("id");
            var _a4 = _89(_9f, _a3);
            var cc = _a4 ? _a4.children : $.data(_9f, "tree").data;
            for (var i = 0; i < cc.length; i++) {
                if (cc[i].domId == id) {
                    cc.splice(i, 1);
                    break;
                }
            }
            return _a4;
        };
    };

    function _54(_a5, _a6) {
        var _a7 = $.data(_a5, "tree").options;
        var _a8 = $(_a6.target);
        var _a9 = _c(_a5, _a6.target);
        var _aa = _a9.checked;
        if (_a9.iconCls) {
            _a8.find(".tree-icon").removeClass(_a9.iconCls);
        }
        $.extend(_a9, _a6);
        _a8.find(".tree-title").html(_a7.formatter.call(_a5, _a9));
        if (_a9.iconCls) {
            _a8.find(".tree-icon").addClass(_a9.iconCls);
        }
        if (_aa != _a9.checked) {
            _32(_a5, _a6.target, _a9.checked);
        }
    };

    function _ab(_ac) {
        var _ad = _ae(_ac);
        return _ad.length ? _ad[0] : null;
    };

    function _ae(_af) {
        var _b0 = $.data(_af, "tree").data;
        for (var i = 0; i < _b0.length; i++) {
            _b1(_b0[i]);
        }
        return _b0;
    };

    function _4a(_b2, _b3) {
        var _b4 = [];
        var n = _c(_b2, _b3);
        var _b5 = n ? n.children : $.data(_b2, "tree").data;
        _58(_b5, function(_b6) {
            _b4.push(_b1(_b6));
        });
        return _b4;
    };

    function _89(_b7, _b8) {
        var p = $(_b8).closest("ul").prevAll("div.tree-node:first");
        return _c(_b7, p[0]);
    };

    function _b9(_ba, _bb) {
        _bb = _bb || "checked";
        if (!$.isArray(_bb)) {
            _bb = [_bb];
        }
        var _bc = [];
        for (var i = 0; i < _bb.length; i++) {
            var s = _bb[i];
            if (s == "checked") {
                _bc.push("span.tree-checkbox1");
            } else {
                if (s == "unchecked") {
                    _bc.push("span.tree-checkbox0");
                } else {
                    if (s == "indeterminate") {
                        _bc.push("span.tree-checkbox2");
                    }
                }
            }
        }
        var _bd = [];
        $(_ba).find(_bc.join(",")).each(function() {
            var _be = $(this).parent();
            _bd.push(_c(_ba, _be[0]));
        });
        return _bd;
    };

    function _bf(_c0) {
        var _c1 = $(_c0).find("div.tree-node-selected");
        return _c1.length ? _c(_c0, _c1[0]) : null;
    };

    function _c2(_c3, _c4) {
        var _c5 = _c(_c3, _c4);
        if (_c5 && _c5.children) {
            _58(_c5.children, function(_c6) {
                _b1(_c6);
            });
        }
        return _c5;
    };

    function _c(_c7, _c8) {
        return _53(_c7, "domId", $(_c8).attr("id"));
    };

    function _c9(_ca, id) {
        return _53(_ca, "id", id);
    };

    function _53(_cb, _cc, _cd) {
        var _ce = $.data(_cb, "tree").data;
        var _cf = null;
        _58(_ce, function(_d0) {
            if (_d0[_cc] == _cd) {
                _cf = _b1(_d0);
                return false;
            }
        });
        return _cf;
    };

    function _b1(_d1) {
        var d = $("#" + _d1.domId);
        _d1.target = d[0];
        _d1.checked = d.find(".tree-checkbox").hasClass("tree-checkbox1");
        return _d1;
    };

    function _58(_d2, _d3) {
        var _d4 = [];
        for (var i = 0; i < _d2.length; i++) {
            _d4.push(_d2[i]);
        }
        while (_d4.length) {
            var _d5 = _d4.shift();
            if (_d3(_d5) == false) {
                return;
            }
            if (_d5.children) {
                for (var i = _d5.children.length - 1; i >= 0; i--) {
                    _d4.unshift(_d5.children[i]);
                }
            }
        }
    };

    function _d6(_d7, _d8) {
        var _d9 = $.data(_d7, "tree").options;
        var _da = _c(_d7, _d8);
        if (_d9.onBeforeSelect.call(_d7, _da) == false) {
            return;
        }
        $(_d7).find("div.tree-node-selected").removeClass("tree-node-selected");
        $(_d8).addClass("tree-node-selected");
        _d9.onSelect.call(_d7, _da);
    };

    function _46(_db, _dc) {
        return $(_dc).children("span.tree-hit").length == 0;
    };

    function _dd(_de, _df) {
        var _e0 = $.data(_de, "tree").options;
        var _e1 = _c(_de, _df);
        if (_e0.onBeforeEdit.call(_de, _e1) == false) {
            return;
        }
        $(_df).css("position", "relative");
        var nt = $(_df).find(".tree-title");
        var _e2 = nt.outerWidth();
        nt.empty();
        var _e3 = $("<input class=\"tree-editor\">").appendTo(nt);
        _e3.val(_e1.text).focus();
        _e3.width(_e2 + 20);
        _e3.height(document.compatMode == "CSS1Compat" ? (18 - (_e3.outerHeight() - _e3.height())) : 18);
        _e3.bind("click", function(e) {
            return false;
        }).bind("mousedown", function(e) {
            e.stopPropagation();
        }).bind("mousemove", function(e) {
            e.stopPropagation();
        }).bind("keydown", function(e) {
            if (e.keyCode == 13) {
                _e4(_de, _df);
                return false;
            } else {
                if (e.keyCode == 27) {
                    _ea(_de, _df);
                    return false;
                }
            }
        }).bind("blur", function(e) {
            e.stopPropagation();
            _e4(_de, _df);
        });
    };

    function _e4(_e5, _e6) {
        var _e7 = $.data(_e5, "tree").options;
        $(_e6).css("position", "");
        var _e8 = $(_e6).find("input.tree-editor");
        var val = _e8.val();
        _e8.remove();
        var _e9 = _c(_e5, _e6);
        _e9.text = val;
        _54(_e5, _e9);
        _e7.onAfterEdit.call(_e5, _e9);
    };

    function _ea(_eb, _ec) {
        var _ed = $.data(_eb, "tree").options;
        $(_ec).css("position", "");
        $(_ec).find("input.tree-editor").remove();
        var _ee = _c(_eb, _ec);
        _54(_eb, _ee);
        _ed.onCancelEdit.call(_eb, _ee);
    };
    $.fn.tree = function(_ef, _f0) {
        if (typeof _ef == "string") {
            return $.fn.tree.methods[_ef](this, _f0);
        }
        var _ef = _ef || {};
        return this.each(function() {
            var _f1 = $.data(this, "tree");
            var _f2;
            if (_f1) {
                _f2 = $.extend(_f1.options, _ef);
                _f1.options = _f2;
            } else {
                _f2 = $.extend({}, $.fn.tree.defaults, $.fn.tree.parseOptions(this), _ef);
                $.data(this, "tree", {
                    options: _f2,
                    tree: _1(this),
                    data: []
                });
                var _f3 = $.fn.tree.parseData(this);
                if (_f3.length) {
                    _4b(this, this, _f3);
                }
            }
            _4(this);
            if (_f2.data) {
                _4b(this, this, _f2.data);
            }
            _68(this, this);
        });
    };
    $.fn.tree.methods = {
        options: function(jq) {
            return $.data(jq[0], "tree").options;
        },
        loadData: function(jq, _f4) {
            return jq.each(function() {
                _4b(this, this, _f4);
            });
        },
        getNode: function(jq, _f5) {
            return _c(jq[0], _f5);
        },
        getData: function(jq, _f6) {
            return _c2(jq[0], _f6);
        },
        reload: function(jq, _f7) {
            return jq.each(function() {
                if (_f7) {
                    var _f8 = $(_f7);
                    var hit = _f8.children("span.tree-hit");
                    hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
                    _f8.next().remove();
                    _72(this, _f7);
                } else {
                    $(this).empty();
                    _68(this, this);
                }
            });
        },
        getRoot: function(jq) {
            return _ab(jq[0]);
        },
        getRoots: function(jq) {
            return _ae(jq[0]);
        },
        getParent: function(jq, _f9) {
            return _89(jq[0], _f9);
        },
        getChildren: function(jq, _fa) {
            return _4a(jq[0], _fa);
        },
        getChecked: function(jq, _fb) {
            return _b9(jq[0], _fb);
        },
        getSelected: function(jq) {
            return _bf(jq[0]);
        },
        isLeaf: function(jq, _fc) {
            return _46(jq[0], _fc);
        },
        find: function(jq, id) {
            return _c9(jq[0], id);
        },
        select: function(jq, _fd) {
            return jq.each(function() {
                _d6(this, _fd);
            });
        },
        check: function(jq, _fe) {
            return jq.each(function() {
                _32(this, _fe, true);
            });
        },
        uncheck: function(jq, _ff) {
            return jq.each(function() {
                _32(this, _ff, false);
            });
        },
        collapse: function(jq, _100) {
            return jq.each(function() {
                _79(this, _100);
            });
        },
        expand: function(jq, _101) {
            return jq.each(function() {
                _72(this, _101);
            });
        },
        collapseAll: function(jq, _102) {
            return jq.each(function() {
                _8f(this, _102);
            });
        },
        expandAll: function(jq, _103) {
            return jq.each(function() {
                _81(this, _103);
            });
        },
        expandTo: function(jq, _104) {
            return jq.each(function() {
                _85(this, _104);
            });
        },
        scrollTo: function(jq, _105) {
            return jq.each(function() {
                _8a(this, _105);
            });
        },
        toggle: function(jq, _106) {
            return jq.each(function() {
                _7e(this, _106);
            });
        },
        append: function(jq, _107) {
            return jq.each(function() {
                _93(this, _107);
            });
        },
        insert: function(jq, _108) {
            return jq.each(function() {
                _99(this, _108);
            });
        },
        remove: function(jq, _109) {
            return jq.each(function() {
                _9e(this, _109);
            });
        },
        pop: function(jq, _10a) {
            var node = jq.tree("getData", _10a);
            jq.tree("remove", _10a);
            return node;
        },
        update: function(jq, _10b) {
            return jq.each(function() {
                _54(this, _10b);
            });
        },
        enableDnd: function(jq) {
            return jq.each(function() {
                _11(this);
            });
        },
        disableDnd: function(jq) {
            return jq.each(function() {
                _d(this);
            });
        },
        beginEdit: function(jq, _10c) {
            return jq.each(function() {
                _dd(this, _10c);
            });
        },
        endEdit: function(jq, _10d) {
            return jq.each(function() {
                _e4(this, _10d);
            });
        },
        cancelEdit: function(jq, _10e) {
            return jq.each(function() {
                _ea(this, _10e);
            });
        }
    };
    $.fn.tree.parseOptions = function(_10f) {
        var t = $(_10f);
        return $.extend({}, $.parser.parseOptions(_10f, ["url", "method", {
            checkbox: "boolean",
            cascadeCheck: "boolean",
            onlyLeafCheck: "boolean"
        }, {
            animate: "boolean",
            lines: "boolean",
            dnd: "boolean"
        }]));
    };
    $.fn.tree.parseData = function(_110) {
        var data = [];
        _111(data, $(_110));
        return data;

        function _111(aa, tree) {
            tree.children("li").each(function() {
                var node = $(this);
                var item = $.extend({}, $.parser.parseOptions(this, ["id", "iconCls", "state"]), {
                    checked: (node.attr("checked") ? true : undefined)
                });
                item.text = node.children("span").html();
                if (!item.text) {
                    item.text = node.html();
                }
                var _112 = node.children("ul");
                if (_112.length) {
                    item.children = [];
                    _111(item.children, _112);
                }
                aa.push(item);
            });
        };
    };
    var _113 = 1;
    var _114 = {
        render: function(_115, ul, data) {
            var opts = $.data(_115, "tree").options;
            var _116 = $(ul).prev("div.tree-node").find("span.tree-indent, span.tree-hit").length;
            var cc = _117(_116, data);
            $(ul).append(cc.join(""));

            function _117(_118, _119) {
                var cc = [];
                for (var i = 0; i < _119.length; i++) {
                    var item = _119[i];
                    if (item.state != "open" && item.state != "closed") {
                        item.state = "open";
                    }
                    item.domId = "_easyui_tree_" + _113++;
                    cc.push("<li>");
                    cc.push("<div id=\"" + item.domId + "\" class=\"tree-node\">");
                    for (var j = 0; j < _118; j++) {
                        cc.push("<span class=\"tree-indent\"></span>");
                    }
                    if (item.state == "closed") {
                        cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
                        cc.push("<span class=\"tree-icon tree-folder " + (item.iconCls ? item.iconCls : "") + "\"></span>");
                    } else {
                        if (item.children && item.children.length) {
                            cc.push("<span class=\"tree-hit tree-expanded\"></span>");
                            cc.push("<span class=\"tree-icon tree-folder tree-folder-open " + (item.iconCls ? item.iconCls : "") + "\"></span>");
                        } else {
                            cc.push("<span class=\"tree-indent\"></span>");
                            cc.push("<span class=\"tree-icon tree-file " + (item.iconCls ? item.iconCls : "") + "\"></span>");
                        }
                    }
                    if (opts.checkbox) {
                        if ((!opts.onlyLeafCheck) || (opts.onlyLeafCheck && (!item.children || !item.children.length))) {
                            cc.push("<span class=\"tree-checkbox tree-checkbox0\"></span>");
                        }
                    }
                    cc.push("<span class=\"tree-title\">" + opts.formatter.call(_115, item) + "</span>");
                    cc.push("</div>");
                    if (item.children && item.children.length) {
                        var tmp = _117(_118 + 1, item.children);
                        cc.push("<ul style=\"display:" + (item.state == "closed" ? "none" : "block") + "\">");
                        cc = cc.concat(tmp);
                        cc.push("</ul>");
                    }
                    cc.push("</li>");
                }
                return cc;
            };
        }
    };
    $.fn.tree.defaults = {
        url: null,
        method: "post",
        animate: false,
        checkbox: false,
        cascadeCheck: true,
        onlyLeafCheck: false,
        lines: false,
        dnd: false,
        data: null,
        formatter: function(node) {
            return node.text;
        },
        loader: function(_11a, _11b, _11c) {
            var opts = $(this).tree("options");
            if (!opts.url) {
                return false;
            }
            $.ajax({
                type: opts.method,
                url: opts.url,
                data: _11a,
                dataType: "json",
                success: function(data) {
                    _11b(data);
                },
                error: function() {
                    _11c.apply(this, arguments);
                }
            });
        },
        loadFilter: function(data, _11d) {
            return data;
        },
        view: _114,
        onBeforeLoad: function(node, _11e) {},
        onLoadSuccess: function(node, data) {},
        onLoadError: function() {},
        onClick: function(node) {},
        onDblClick: function(node) {},
        onBeforeExpand: function(node) {},
        onExpand: function(node) {},
        onBeforeCollapse: function(node) {},
        onCollapse: function(node) {},
        onBeforeCheck: function(node, _11f) {},
        onCheck: function(node, _120) {},
        onBeforeSelect: function(node) {},
        onSelect: function(node) {},
        onContextMenu: function(e, node) {},
        onBeforeDrag: function(node) {},
        onStartDrag: function(node) {},
        onStopDrag: function(node) {},
        onDragEnter: function(_121, _122) {},
        onDragOver: function(_123, _124) {},
        onDragLeave: function(_125, _126) {},
        onBeforeDrop: function(_127, _128, _129) {},
        onDrop: function(_12a, _12b, _12c) {},
        onBeforeEdit: function(node) {},
        onAfterEdit: function(node) {},
        onCancelEdit: function(node) {}
    };

})(jQuery);


    hasModule = (typeof module !== 'undefined' && module.exports);
    // CommonJS module is defined
    if (hasModule) {
        module.exports = $.fn.tree;
    }

},{"jquery":"jquery"}],16:[function(require,module,exports){
 
var React = require('react');

var PageHeader = React.createClass({
    displayName: 'PageHeader',
    render: function () {
        return (
            React.createElement("div", {className: "page-header pull-left"}, 
                React.createElement("div", {className: "page-title"}, this.props.pageTitle)
            )
        );
    }
});

module.exports = PageHeader;

},{"react":"react"}],17:[function(require,module,exports){
 
var React = require('react');

var PageSize = React.createClass({
    displayName: 'PageSize',

    propTypes: {
      options: React.PropTypes.array.isRequired, // 分页大小数组
      value: React.PropTypes.number.isRequired, // 当前分页大小
      onChange: React.PropTypes.func.isRequired // 分页回调函数
    },

    render: function () {
      var options = this.props.options.map(function(option, key) {
        return React.createElement("option", {key: key, value: option}, "每页显示 ", option, " 个");
      });
        return (
            React.createElement("div", {className: "inline"}, 
              React.createElement("select", {value: this.props.value ? this.props.value : '', onChange: this._onChange, className: "form-control input-xsmall input-sm input-inline"}, 
                options
              )
            )
        );
    },
    _onChange: function(e) {
      this.props.onChange(e.target.value);
    }
});

module.exports = PageSize;

},{"react":"react"}],18:[function(require,module,exports){
 
var React = require('react');
var Bootstrap = require('react-bootstrap');
var classNames = require('classNames');
var Pager = Bootstrap.Pager;
var PageItem = Bootstrap.PageItem;

var Pagination = React.createClass({
    displayName: 'Pagination',

    propTypes: {
      pageNo: React.PropTypes.number.isRequired, // 当前页
      totalPageNo: React.PropTypes.number.isRequired, // 总页数
      onSelect: React.PropTypes.func.isRequired // 回调函数
    },

    getInitialState : function(){
      return {
      }
    },
    render: function () {
      var prevClassNames = classNames({
        'disabled': this.props.pageNo <= 1
      });
      var nextClassNames = classNames({
        'disabled': this.props.pageNo >= this.props.totalPageNo
      });
      return (
          React.createElement(Pager, {className: "mtn mbn text-force-right"}, 
            React.createElement(PageItem, {className: prevClassNames, onClick: this._prev}, React.createElement("i", {className: "fa fa-angle-double-left"}), " 上一页"), 
            React.createElement(PageItem, {className: nextClassNames, onClick: this._next}, "下一页 ", React.createElement("i", {className: "fa fa-angle-double-right"}))
          )
      );
    },
    _prev: function(e) {
      e.preventDefault();
      var pageNo = this.props.pageNo;
      if (pageNo <= 1) return;
      pageNo--;
      this.props.onSelect(pageNo);
    },
    _next: function(e) {
      e.preventDefault();
      var pageNo = this.props.pageNo;
      if (pageNo >= this.props.totalPageNo) return;
      pageNo++;
      this.props.onSelect(pageNo);
    }
});

module.exports = Pagination;

},{"classNames":31,"react":"react","react-bootstrap":"react-bootstrap"}],19:[function(require,module,exports){
 
var React = require('react');

var PortletHeader = React.createClass({
    displayName: 'PortletHeader',
    render: function () {
        return (
            React.createElement("div", {className: "portlet-header pam mbn"}, 
              React.createElement("div", {className: "caption"}, this.props.title), 
              React.createElement("div", {className: "actions"}, 
                this.props.children
              )
            )
        );
    }
});

module.exports = PortletHeader;

},{"react":"react"}],20:[function(require,module,exports){
 
var React = require('react');
var $ = require('jquery');

var SearchPane = React.createClass({displayName: "SearchPane",
    render: function () {
      var classes = React.addons.classSet({
        'portlet': true,
        'box': true,
        'portlet-grey': true,
        'hide': !this.props.visible
      });
        return (
            React.createElement("div", {className: classes}, 
              React.createElement("div", {className: "portlet-header"}, 
                  React.createElement("div", {className: "caption"}, "查询条件"), 
                  React.createElement("div", {className: "tools"}, 
                      React.createElement("i", {className: "fa fa-chevron-up", onClick: this._togglePanel})
                  )
              ), 
              React.createElement("div", {className: "portlet-body ptn pbn", ref: "portletBody"}, 
                  React.createElement("div", {className: "row"}, 
                    this.props.children
                  )
              )
          )
        );
    },

    _togglePanel: function(e) {
      e.preventDefault();
      $(e.currentTarget).toggleClass('fa-chevron-up fa-chevron-down');
      $(this.refs.portletBody.getDOMNode()).toggle();
    }
});

module.exports = SearchPane;

},{"jquery":"jquery","react":"react"}],21:[function(require,module,exports){
var React = require('react');
var select2 = require('select2');
var $ = require('jquery');
var _ = require('underscore');

var Select2Component = React.createClass({displayName: "Select2Component",
  propTypes: {
    id: React.PropTypes.string.isRequired,
    dataSet: React.PropTypes.array.isRequired, // 数据列表
    hasError: React.PropTypes.bool,
    errorClass: React.PropTypes.string,
    onSelection: React.PropTypes.func, // 当选择完成时的回调函数，参数为当前已选择项
    multiple: React.PropTypes.bool, // 是否多选
    placeholder: React.PropTypes.string,
    val: React.PropTypes.arrayOf(React.PropTypes.number), // 初始化数据，若是多个提供一个id list，若是单个提供一个id即可
    styleWidth: React.PropTypes.string, // styles for select2
    enabled: React.PropTypes.bool // disabled or not
  },

  getDefaultProps: function() {
    return {
      hasError: false,
      errorClass: 'has-error',
      multiple: false,
      placeholder: '-----请选择-----',
      val: [],
      styleWidth: '100%',
      enabled: true,
      dataSet: []
    }
  },

  getInitialState: function() {
    return {
      options: this.props.options ? this.props.options : {}
    }
  },

  componentDidUpdate: function(prevProps, prevState) {
    var self = this;
    if (this._isDataUpdated(prevProps.dataSet)) {
      this.createSelect2();
    } else {
      if (prevProps.placeholder !== this.props.placeholder) {
        this.setPlaceholderTo(this.getInputElem(), this.props.placeholder);
      }

      var updateVal = false;

      if (prevProps.val.length == this.props.val.length) {
        $.each(prevProps.val, function(index, value) {
          if (self.props.val[index] != value) {
            updateVal = true;
          }
        });
      } else {
        updateVal = true;
      }

      if (updateVal) {
        this.getInputElem().select2('val', this.props.val);
      }

      if (prevProps.enabled != this.props.enabled) {
        this.getInputElem().select2('enable', this.props.enabled);
      }
    }
  },

  componentDidMount: function () {
    var $node = this.createSelect2();
  },

  createSelect2: function() {
    var val = null;
    if (this.props.val.length > 0) {
      val = this.props.multiple ? this.props.val : this.props.val[0];
    }

    var opts = {
      data: this.props.dataSet,
      multiple: this.props.multiple,
      val: val
    };

    opts = _.extend({}, opts, this.state.options);

    var $el = this.getInputElem();

    $el.val(val)
       .select2(opts)
       .on('change', this.handleChange)
       .on('select2-open', this.handleErrorState)
       .select2('enable', this.props.enabled);

    this.setPlaceholderTo($el, this.props.placeholder);
  },

  setPlaceholderTo: function($el, placeholder) {
    if (!placeholder) {
      placeholder = '';
    }
    var currData = $el.select2('data');

    $el.attr('placeholder', placeholder);
    $el.select2('data', null);
    $el.select2('data', {});
    $el.select2('data', currData);
  },

  handleErrorState: function() {
    var $drop = $('#select2-drop');
    var className = $drop[0].className.split(/\s+/);

    if (this.props.hasError) {
      var hasErrorClass = $.inArray(this.props.errorClass, className);

      if (hasErrorClass == -1) {
        $drop.addClass(this.props.errorClass);
      }
    } else {
      $drop.removeClass(this.props.errorClass);
    }
  },

  handleChange: function(e) {
    if (this.props.onSelection) {
      this.props.onSelection(e, this.getInputElem().select2('data'));
    }
  },

  getInputElem: function() {
    return $('#' + this.props.id);
  },

  _isDataUpdated: function(oldData) {
    if (oldData.length !== this.props.dataSet.length) {
      return true;
    }
    return false;
  },

  render: function() {
    var style = {width: this.props.styleWidth};
    return (
      React.createElement("div", {className: this.props.hasError ? this.props.errorClass : ''}, 
        React.createElement("input", {type: "hidden", style: style, id: this.props.id})
      )
    );
  }
});

module.exports = Select2Component;

},{"jquery":"jquery","react":"react","select2":"select2","underscore":"underscore"}],22:[function(require,module,exports){
/**
 * Created by Administrator on 2015/5/7.
 */
var _ = require('underscore');
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var $ = require('jquery');

var SideBar = React.createClass({displayName: "SideBar",
    getInitialState: function() {
        return {
            toggle: true
        }
    },
    componentDidMount : function(){
        var self = this;
        var $this = $('#sidebar-menu');

        $this.find('a').each(function() {
            if ($(this).attr('href') === window.location.pathname) {
                $(this).parent('li').addClass('active');
                $(this).closest('.nav-second-level, .nav-third-level').addClass('in');
                $(this).closest('#sidebar-menu > li').addClass('active');
            }
        })

        $this.find('li.active').has('ul').children('ul').addClass('collapse in');
        $this.find('li').not('.active').has('ul').children('ul').addClass('collapse');

        $this.find('li').children('a').on('click', function(e) {
            var $link = $(this);
            if ($link.attr('href') === '#') {
                e.preventDefault();
            }
            if ($link.next('ul').length) {
                if ($link.parent('li').hasClass('active')) {
                    $link.parent('li').removeClass('active').children('ul').removeClass('in');
                } else {
                    $link.parent('li').addClass('active').children('ul').addClass('in');
                }

                if (self.state.toggle) {
                    $link.parent('li').siblings().removeClass('active').children('ul').removeClass('in');
                }

                setTimeout(function() {
                    if ($link.parent().hasClass('active')) {
                        $('html, body').animate({
                            scrollTop: ($link.offset().top - 100)
                        }, 'slow');
                    }
                }, 300);
            } else {
                $link.parent('li').addClass('active').siblings('li').removeClass('active');
            }
        });
    },
    render : function(){
        var list = this.props.list;
        var menu = list && list.length ? list.map(function(item, key) {
            if (null !== item.url) {
                return React.createElement("li", {key: key}, React.createElement(Link, {to: item.url}, React.createElement("span", {className: "menu-title"}, item.name)))
            } else {
                if (item.data && item.data.length) {
                    return (
                        React.createElement("li", {key: key}, 
                            React.createElement("a", {href: "#"}, 
                                React.createElement("span", {className: "menu-title"}, item.name), 
                                React.createElement("span", {className: "fa fa-arrow arrow"})
                            ), 
                            React.createElement("ul", {className: "nav nav-second-level mtn collapse"}, 
                                item.data.map(function(sub, subKey) {
                                    if (null !== sub.url) {
                                        return React.createElement("li", {key: subKey}, 
                                            React.createElement(Link, {to: sub.url}, React.createElement("i", {className: "fa fa-angle-right"}), React.createElement("span", {className: "submenu-title"}, sub.name))
                                        )
                                    } else {
                                        if (sub.data && sub.data.length) {
                                            return (
                                                React.createElement("li", {key: subKey}, 
                                                    React.createElement("a", {href: "#"}, 
                                                        React.createElement("i", {className: "fa fa-angle-right"}), 
                                                        React.createElement("span", {className: "submenu-title"}, sub.name), 
                                                        React.createElement("span", {className: "fa fa-arrow arrow"})
                                                    ), 
                                                    React.createElement("ul", {className: "nav nav-third-level mtn collapse"}, 
                                                    sub.data.map(function(third, thirdKey) {
                                                        return React.createElement("li", {key: thirdKey}, 
                                                            React.createElement(Link, {to: third.url}, 
                                                                React.createElement("i", {className: "fa fa-angle-double-right"}), 
                                                                React.createElement("span", {className: "submenu-title"}, third.name)
                                                            )
                                                        )
                                                    })
                                                    )
                                                )
                                            )
                                        }
                                    }
                                    return React.createElement("li", {key: subKey}, 
                                        React.createElement(Link, {to: sub.url}, sub.name)
                                    )
                                })
                            )
                        )
                    )
                }
            }
        }) : false;
        return React.createElement("nav", {id: "sidebar", className: "navbar-default navbar-static-side"}, 
            React.createElement("div", {className: "sidebar-collapse menu-scroll"}, 
                React.createElement("ul", {id: "sidebar-menu", className: "nav mtn"}, 
                    menu
                )
            )
        );

    }
});

module.exports = SideBar;

},{"jquery":"jquery","react":"react","react-router":"react-router","underscore":"underscore"}],23:[function(require,module,exports){
var React = require('react');

var Spinner = React.createClass({displayName: "Spinner",
  render: function() {
    return React.createElement("div", {className: "spinner-container"}, 
      React.createElement("div", {className: "spinner"})
    )
  }
});

module.exports = Spinner;

},{"react":"react"}],24:[function(require,module,exports){
 
var React = require('react');
var numeral = require('numeral');

var CurrencyTD = React.createClass({
  displayName: 'CurrencyTD',
  render: function () {
    var result = numeral(this.props.children).format('$0,0.00');
    return (
      React.createElement("td", null, result)
    );
  }
});

module.exports = CurrencyTD;

},{"numeral":"numeral","react":"react"}],25:[function(require,module,exports){
/**
 * Created by Marshall on 1/12/15.
 */
var React = require('react');
var moment = require('moment');

var TimeTD = React.createClass({displayName: "TimeTD",
  render: function() {
    return React.createElement("td", null, this.props.children ? moment(this.props.children).format('YYYY-MM-DD') : ' - ');
  }
});

module.exports = TimeTD;

},{"moment":"moment","react":"react"}],26:[function(require,module,exports){
 
var React = require('react');
var $ = require('jquery');

var ToTop = React.createClass({
    displayName: 'ToTop',
    componentDidMount: function () {
        $(window).scroll(function() {
          if($(this).scrollTop() < 200) {
            $('#totop').fadeOut();
          } else {
            $('#totop').fadeIn();
          }
        });
    },
    render: function () {
        return (
            React.createElement("a", {id: "totop", onClick: this._handleClick, href: "#"}, React.createElement("i", {className: "fa fa-angle-up"}))
        );
    },
    _handleClick: function(e) {
      e.stopPropagation(); e.preventDefault();
      $('html, body').animate({scrollTop:0}, 'fast');
    }
});

module.exports = ToTop;

},{"jquery":"jquery","react":"react"}],27:[function(require,module,exports){
 
var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');

var ProfileDropdown = React.createClass({displayName: "ProfileDropdown",
    getInitialState: function() {
        return {
            isOpen: false,
            avatar: 'http://i.imgur.com/zvrN7xN.jpg?1',
            name: 'guest'
        }
    },
    render: function() {
        var cx = React.addons.classSet;
        var classes = cx({
            "dropdown": true,
            "topbar-user": true,
            "open": this.state.isOpen
        })
        return (
            React.createElement("ul", {className: "nav navbar navbar-top-links pull-right mbn mtn", onMouseEnter: this._toggleDropdown, onMouseLeave: this._toggleDropdown}, 
                React.createElement("li", {className: classes}, React.createElement("a", {href: "#", className: "dropdown-toggle"}, React.createElement("img", {src: this.state.avatar, alt: "", className: "img-responsive img-circle"}), " ", React.createElement("span", {className: "hidden-xs"}, this.state.name), " ", React.createElement("span", {className: "caret"})), 
                    React.createElement("ul", {className: "dropdown-menu dropdown-user pull-right"}, 
                        React.createElement("li", null, React.createElement("a", {href: "/settings"}, React.createElement("i", {className: "fa fa-user"}), "设置")), 
                        React.createElement("li", {className: "divider"}), 
                        React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.props.logout}, React.createElement("i", {className: "fa fa-sign-out"}), "退出"))
                    )
                )
            )
        );
    },
    _toggleDropdown: function() {
        this.setState({ isOpen: !this.state.isOpen });
    }
});

var TopBar = React.createClass({
    displayName: 'TopBar',
    render: function () {
        var style = {
            marginBottom: 0
        };
        return (
            React.createElement("div", {className: "page-header-topbar"}, 
                React.createElement("nav", {id: "topbar", role: "navigation", style: style, className: "navbar navbar-default navbar-static-top"}, 
                    React.createElement("div", {className: "navbar-header"}, 
                        React.createElement("button", {type: "button", "data-toggle": "collapse", "data-target": ".sidebar-collapse", className: "navbar-toggle"}, 
                            React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                            React.createElement("span", {className: "icon-bar"}), 
                            React.createElement("span", {className: "icon-bar"}), 
                            React.createElement("span", {className: "icon-bar"})
                        ), 
                        React.createElement(Link, {id: "logo", to: "/", className: "navbar-brand"}, 
                            React.createElement("span", {className: "fa fa-rocket"}), 
                            React.createElement("span", {className: "logo-text"}, "电信云公司", React.createElement("span", {className: "logo-text-sup"}, "报表查询"))
                        )
                    ), 
                    React.createElement("div", {className: "topbar-main"}, 
                        /*<SidebarToggle toggleSidebar={this._toggleSidebar} cName='fa fa-bars'/>*/
                        React.createElement(Link, {id: "menu-toggle", to: "/", className: "hidden-xs"}, React.createElement("i", {className: "fa fa-home"})), 
                        React.createElement(ProfileDropdown, {logout: this.props.logout})
                    )
                )
            )
        );
    },

    _toggleSidebar: function(e) {
        $(document.body).toggleClass('sidebar-collapsed');
        if(!$('.sidebar-left').is(":hidden")){
            $('.sidebar-left').fadeOut();
        }else{
            $('.sidebar-left').fadeIn();
        }
        e.preventDefault();
    }
});

module.exports = TopBar;

},{"jquery":"jquery","react":"react","react-router":"react-router"}],28:[function(require,module,exports){
/**
 * Created by Administrator on 2015/4/2.
 */
var React = require('react');
var $ = require('jquery');
var tree = require('./jquery-tree');
var TreeDemo = React.createClass({displayName: "TreeDemo",

    componentDidMount: function(){
         var _data = this.props.data === undefined ? []:this.props.data;
         var _checkboxFlag = this.props.checkbox === undefined ? false : this.props.checkbox;
         if(typeof _checkboxFlag !== 'boolean')_checkboxFlag = false;
         var _obj = this.props.fn;
         if(_obj==undefined){
            _obj = {};
         }
         _obj.data = _data;
         _obj.checkbox = _checkboxFlag;
         _obj.animate = true;
         $('#myTree').tree(_obj);
   },

    render : function(){
       var style = { display: 'none' };
       return  (React.createElement("div", {id: "myTree", className: "tree"}, 
           React.createElement("div", {className: "tree-folder", style: style}, 
               React.createElement("div", {className: "tree-folder-header"}, 
                   React.createElement("i", {className: "icon-folder-close"}), 
                   React.createElement("div", {className: "tree-folder-name"})
               ), 
               React.createElement("div", {className: "tree-folder-content"}), 
               React.createElement("div", {className: "tree-loader", style: style})
           ), 
           React.createElement("div", {className: "tree-item", style: style}, 
               React.createElement("i", {className: "tree-dot"}), 
               React.createElement("div", {className: "tree-item-name"})
           )
       ));
   }
});

module.exports = TreeDemo;

},{"./jquery-tree":15,"jquery":"jquery","react":"react"}],29:[function(require,module,exports){
var moment = require('moment');

module.exports = {
  pageSizes: [2,5,10, 15, 20, 30, 50, 100],
  daterangepicker: {
    ranges: {
      // "今天": [moment(), moment()],
      // "昨天": [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      "过去7天" : [moment().subtract(6, 'days'), moment()],
      "过去30天": [moment().subtract(29, 'days'), moment()],
      "这个月"  : [moment().startOf('month'), moment().endOf('month')],
      "上个月"  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    locale: {
      applyLabel      : '确定',
      cancelLabel     : '取消',
      fromLabel       : '开始',
      toLabel         : '结束',
      customRangeLabel: '自定义区间',
      daysOfWeek      : moment.weekdaysMin(),
      monthNames      : moment.monthsShort(),
      firstDay        : moment.localeData()._week.dow
    },
    format: 'YYYY-MM-DD'
  },
  numeral: {
    language: {
      delimiters: {
          thousands: ',',
          decimal: '.'
      },
      abbreviations: {
          thousand: '千',
          million : '百万',
          billion : '十亿',
          trillion: '兆'
      },
      ordinal: function (number) {
          return '.';
      },
      currency: {
          symbol: '¥'
      }
    }
  }
};

},{"moment":"moment"}],30:[function(require,module,exports){
var common = require('./components/common');

module.exports = common;

},{"./components/common":10}],31:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

function classNames () {
	'use strict';

	var classes = '';

	for (var i = 0; i < arguments.length; i++) {
		var arg = arguments[i];
		if (!arg) continue;

		var argType = typeof arg;

		if ('string' === argType || 'number' === argType) {
			classes += ' ' + arg;

		} else if (Array.isArray(arg)) {
			classes += ' ' + classNames.apply(null, arg);

		} else if ('object' === argType) {
			for (var key in arg) {
				if (arg.hasOwnProperty(key) && arg[key]) {
					classes += ' ' + key;
				}
			}
		}
	}

	return classes.substr(1);
}

// safely export classNames for node / browserify
if (typeof module !== 'undefined' && module.exports) {
	module.exports = classNames;
}

/* global define */
// safely export classNames for RequireJS
if (typeof define !== 'undefined' && define.amd) {
	define('classnames', [], function() {
		return classNames;
	});
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlcy9kZW1vLmpzIiwiY29tcG9uZW50cy9hY3Rpb24tYnV0dG9uLUNhbmNlbC5qcyIsImNvbXBvbmVudHMvYWN0aW9uLWJ1dHRvbi1hZGQuanMiLCJjb21wb25lbnRzL2FjdGlvbi1idXR0b24tZGVsZXRlLmpzIiwiY29tcG9uZW50cy9hY3Rpb24tYnV0dG9uLWVkaXQuanMiLCJjb21wb25lbnRzL2FjdGlvbi1idXR0b24tb3Blbi5qcyIsImNvbXBvbmVudHMvYWN0aW9uLWJ1dHRvbi1zZWFyY2guanMiLCJjb21wb25lbnRzL2FjdGlvbi1idXR0b24tc3VibWl0LmpzIiwiY29tcG9uZW50cy9icmVhZGNydW1iLmpzIiwiY29tcG9uZW50cy9jb21tb24uanMiLCJjb21wb25lbnRzL2RhdGFncmlkLmpzIiwiY29tcG9uZW50cy9kYXRldGltZXBpY2tlci5qcyIsImNvbXBvbmVudHMvZHJvcHpvbmUtdXBsb2FkLmpzIiwiY29tcG9uZW50cy9oZWFkZXIuanMiLCJjb21wb25lbnRzL2pxdWVyeS10cmVlLmpzIiwiY29tcG9uZW50cy9wYWdlLWhlYWRlci5qcyIsImNvbXBvbmVudHMvcGFnZXNpemUuanMiLCJjb21wb25lbnRzL3BhZ2luYXRpb24uanMiLCJjb21wb25lbnRzL3BvcnRsZXQtaGVhZGVyLmpzIiwiY29tcG9uZW50cy9zZWFyY2gtcGFuZS5qcyIsImNvbXBvbmVudHMvc2VsZWN0Mi5qcyIsImNvbXBvbmVudHMvc2lkZS1iYXIuanMiLCJjb21wb25lbnRzL3NwaW5uZXIuanMiLCJjb21wb25lbnRzL3RhYmxlLWNlbGwtY3VycmVuY3kuanMiLCJjb21wb25lbnRzL3RhYmxlLWNlbGwtdGltZS5qcyIsImNvbXBvbmVudHMvdG8tdG9wLmpzIiwiY29tcG9uZW50cy90b3AtYmFyLmpzIiwiY29tcG9uZW50cy91aS10cmVlLmpzIiwiY29uc3RhbnRzL2NvbmZpZy5qcyIsImluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NsYXNzTmFtZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjb21wb25lbnQgPSByZXF1aXJlKCcuLi9pbmRleCcpO1xudmFyIERhdGFHcmlkID0gY29tcG9uZW50LkRhdGFHcmlkO1xuXG52YXIgRGVtbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJEZW1vXCIsXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0YUdyaWQsIHtcbiAgICAgICAgICBwYWdlTm86IDEsIFxuICAgICAgICAgIHRvdGFsUGFnZU5vOiAzLCBcbiAgICAgICAgICBjaGFuZ2VQYWdlU2l6ZTogdGhpcy5fY2hhbmdlUGFnZVNpemUsIFxuICAgICAgICAgIGNoYW5nZVBhZ2VObzogdGhpcy5fY2hhbmdlUGFnZU5vfSwgXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFwiV2VsY29tZVwiKVxuICAgICAgKVxuICAgIClcbiAgfSxcbiAgX2NoYW5nZVBhZ2VTaXplOiBmdW5jdGlvbihzaXplKSB7fSxcbiAgX2NoYW5nZVBhZ2VObzogZnVuY3Rpb24obnVtKSB7fVxufSk7XG5cblJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KERlbW8sIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpKTtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEFjdGlvbkJ1dHRvbkNhbmNlbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0FjdGlvbkJ1dHRvbkNhbmNlbCcsXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsIG9uQ2xpY2s6IHRoaXMucHJvcHMub25DbGlja30sIFxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0aW9uQnV0dG9uQ2FuY2VsO1xuIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKipcbiAqIOWwseaYr+S4quaZrumAmmJ1dHRvblxuICogQHBhcmFtICB756m6fVxuICogQHJldHVybiB7UmVhY3QgQ29tcG9uZW50fVxuICovXG52YXIgQWN0aW9uQnV0dG9uQWRkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnQWN0aW9uQnV0dG9uQWRkJyxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge2NsYXNzTmFtZTogXCJidG4gYnRuLW91dGxpbmVkIGJ0bi1pbmZvIGJ0bi1zbVwiLCBvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2t9LCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge2NsYXNzTmFtZTogXCJmYSBmYS1wbHVzXCJ9KSwgXCIgXCIsIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBY3Rpb25CdXR0b25BZGQ7XG4iLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBBY3Rpb25CdXR0b25EZWxldGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdBY3Rpb25CdXR0b25EZWxldGUnLFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7Y2xhc3NOYW1lOiBcImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiLCBvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2t9LCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge2NsYXNzTmFtZTogXCJmYSBmYS10cmFzaFwifSksIFwiIFwiLCB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0aW9uQnV0dG9uRGVsZXRlO1xuIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQWN0aW9uQnV0dG9uRWRpdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0FjdGlvbkJ1dHRvbkVkaXQnLFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7Y2xhc3NOYW1lOiBcImJ0biBidG4taW5mbyBidG4teHNcIiwgb25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrfSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtjbGFzc05hbWU6IFwiZmEgZmEtZWRpdFwifSksIFwiIFwiLCB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0aW9uQnV0dG9uRWRpdDtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEFjdGlvbkJ1dHRvbk9wZW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdBY3Rpb25CdXR0b25PcGVuJyxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge2NsYXNzTmFtZTogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXhzXCIsIG9uQ2xpY2s6IHRoaXMucHJvcHMub25DbGlja30sIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7Y2xhc3NOYW1lOiBcImZhIGZhLWV5ZVwifSksIFwiIFwiLCB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0aW9uQnV0dG9uT3BlbjtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEFjdGlvbkJ1dHRvblNlYXJjaCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0FjdGlvbkJ1dHRvblNlYXJjaCcsXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi1vdXRsaW5lZCBidG4td2FybmluZyBidG4tc21cIiwgb25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrfSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtjbGFzc05hbWU6IFwiZmEgZmEtc2VhcmNoXCJ9KSwgXCIgXCIsIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBY3Rpb25CdXR0b25TZWFyY2g7XG4iLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBBY3Rpb25CdXR0b25TdWJtaXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdBY3Rpb25CdXR0b25TdWJtaXQnLFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7Y2xhc3NOYW1lOiBcImJ0biBidG4tcHJpbWFyeVwiLCBvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2t9LCBcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdGlvbkJ1dHRvblN1Ym1pdDtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEJyZWFkY3J1bWIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdCcmVhZGNydW1iJyxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvbFwiLCB7Y2xhc3NOYW1lOiBcImJyZWFkY3J1bWIgcGFnZS1icmVhZGNydW1iIHB1bGwtbGVmdCBwbGxcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7Y2xhc3NOYW1lOiBcImZhIGZhLWhvbWVcIn0pLCBcIsKgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIi9cIn0sIHRoaXMucHJvcHMucm9vdCksIFwiwqDCoFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7Y2xhc3NOYW1lOiBcImZhIGZhLWFuZ2xlLXJpZ2h0XCJ9KSwgXCLCoMKgXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJhY3RpdmVcIn0sIHRoaXMucHJvcHMuYWN0aXZlKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJyZWFkY3J1bWI7XG4iLCJ2YXIgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG52YXIgbnVtZXJhbCA9IHJlcXVpcmUoJ251bWVyYWwnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvY29uZmlnJyk7XG52YXIgSGVhZGVyID0gcmVxdWlyZSgnLi9oZWFkZXInKTtcbnZhciBUb3BCYXIgPSByZXF1aXJlKCcuL3RvcC1iYXInKTtcbnZhciBTaWRlQmFyID0gcmVxdWlyZSgnLi9zaWRlLWJhcicpO1xudmFyIERhdGFHcmlkID0gcmVxdWlyZSgnLi9kYXRhZ3JpZCcpO1xudmFyIEFjdGlvbkJ1dHRvbkFkZCA9IHJlcXVpcmUoJy4vYWN0aW9uLWJ1dHRvbi1hZGQnKTtcbnZhciBBY3Rpb25CdXR0b25FZGl0ID0gcmVxdWlyZSgnLi9hY3Rpb24tYnV0dG9uLWVkaXQnKTtcbnZhciBBY3Rpb25CdXR0b25EZWxldGUgPSByZXF1aXJlKCcuL2FjdGlvbi1idXR0b24tZGVsZXRlJyk7XG52YXIgQWN0aW9uQnV0dG9uU2VhcmNoID0gcmVxdWlyZSgnLi9hY3Rpb24tYnV0dG9uLXNlYXJjaCcpO1xudmFyIEFjdGlvbkJ1dHRvblN1Ym1pdCA9IHJlcXVpcmUoJy4vYWN0aW9uLWJ1dHRvbi1zdWJtaXQnKTtcbnZhciBBY3Rpb25CdXR0b25DYW5jZWwgPSByZXF1aXJlKCcuL2FjdGlvbi1idXR0b24tQ2FuY2VsJyk7XG52YXIgQWN0aW9uQnV0dG9uT3BlbiA9IHJlcXVpcmUoJy4vYWN0aW9uLWJ1dHRvbi1vcGVuJyk7XG52YXIgUGFnZVNpemUgPSByZXF1aXJlKCcuL3BhZ2VzaXplJyk7XG52YXIgUGFnaW5hdGlvbiA9IHJlcXVpcmUoJy4vcGFnaW5hdGlvbicpO1xudmFyIFBvcnRsZXRIZWFkZXIgPSByZXF1aXJlKCcuL3BvcnRsZXQtaGVhZGVyJyk7XG52YXIgVG9Ub3AgPSByZXF1aXJlKCcuL3RvLXRvcCcpO1xudmFyIFNlYXJjaFBhbmUgPSByZXF1aXJlKCcuL3NlYXJjaC1wYW5lJyk7XG52YXIgVGltZVREID0gcmVxdWlyZSgnLi90YWJsZS1jZWxsLXRpbWUnKTtcbnZhciBDdXJyZW5jeVREID0gcmVxdWlyZSgnLi90YWJsZS1jZWxsLWN1cnJlbmN5Jyk7XG52YXIgRGF0ZVRpbWVQaWNrZXIgPSByZXF1aXJlKCcuL2RhdGV0aW1lcGlja2VyJyk7XG52YXIgRHJvcHpvbmUgPSByZXF1aXJlKCcuL2Ryb3B6b25lLXVwbG9hZCcpO1xudmFyIFNlbGVjdDIgPSByZXF1aXJlKCcuL3NlbGVjdDInKTtcbnZhciBTcGlubmVyID0gcmVxdWlyZSgnLi9zcGlubmVyJyk7XG52YXIgVHJlZSA9IHJlcXVpcmUoJy4vdWktdHJlZScpO1xuXG4vLyBib290c3RyYXBwaW5nXG4oZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuICAvLyBzZXQgbW9tZW50IGxvY2FsZVxuICBtb21lbnQubG9jYWxlKCd6aC1jbicpO1xuICBudW1lcmFsLmxhbmd1YWdlKCdjaHMnLCBjb25maWcubnVtZXJhbC5sYW5ndWFnZSk7XG4gIG51bWVyYWwubGFuZ3VhZ2UoJ2NocycpO1xuXG59KCkpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBUb3BCYXI6IFRvcEJhcixcbiAgSGVhZGVyOiBIZWFkZXIsXG4gIFNpZGVCYXI6IFNpZGVCYXIsXG4gIERhdGFHcmlkOiBEYXRhR3JpZCxcbiAgUG9ydGxldEhlYWRlcjogUG9ydGxldEhlYWRlcixcbiAgQWN0aW9uQnV0dG9uQWRkOiBBY3Rpb25CdXR0b25BZGQsXG4gIEFjdGlvbkJ1dHRvbkVkaXQ6IEFjdGlvbkJ1dHRvbkVkaXQsXG4gIEFjdGlvbkJ1dHRvbkRlbGV0ZTogQWN0aW9uQnV0dG9uRGVsZXRlLFxuICBBY3Rpb25CdXR0b25TZWFyY2g6IEFjdGlvbkJ1dHRvblNlYXJjaCxcbiAgQWN0aW9uQnV0dG9uU3VibWl0OiBBY3Rpb25CdXR0b25TdWJtaXQsXG4gIEFjdGlvbkJ1dHRvbkNhbmNlbDogQWN0aW9uQnV0dG9uQ2FuY2VsLFxuICBBY3Rpb25CdXR0b25PcGVuOiBBY3Rpb25CdXR0b25PcGVuLFxuICBQYWdlU2l6ZTogUGFnZVNpemUsXG4gIFBhZ2luYXRpb246IFBhZ2luYXRpb24sXG4gIFRvVG9wOiBUb1RvcCxcbiAgU2VhcmNoUGFuZTogU2VhcmNoUGFuZSxcbiAgVGltZVREOiBUaW1lVEQsXG4gIEN1cnJlbmN5VEQ6IEN1cnJlbmN5VEQsXG4gIERhdGVUaW1lUGlja2VyOiBEYXRlVGltZVBpY2tlcixcbiAgRHJvcHpvbmU6IERyb3B6b25lLFxuICBTZWxlY3QyOiBTZWxlY3QyLFxuICBTcGlubmVyOiBTcGlubmVyLFxuICBUcmVlOiBUcmVlXG59O1xuIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFBhZ2VTaXplID0gcmVxdWlyZSgnLi9wYWdlc2l6ZScpO1xudmFyIFBhZ2luYXRpb24gPSByZXF1aXJlKCcuL3BhZ2luYXRpb24nKTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvY29uZmlnJyk7XG5cbnZhciBEYXRhR3JpZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0RhdGFHcmlkJyxcblxuICAgIFByb3BUeXBlczoge1xuICAgICAgcGFnZVNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCwgLy8g5b2T5YmN5YiG6aG15aSn5bCPXG4gICAgICBwYWdlU2l6ZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyDliIbpobXlpKflsI/mlbDnu4RcbiAgICAgIGNoYW5nZVBhZ2VTaXplOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyDliIbpobXlm57osIPlh73mlbBcbiAgICAgIHBhZ2VObzogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLCAvLyDlvZPliY3pobXnoIFcbiAgICAgIHRvdGFsUGFnZU5vOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsIC8vIOaAu+mhteeggVxuICAgICAgY2hhbmdlUGFnZU5vOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkIC8vIOe/u+mhteWbnuiwg+WHveaVsFxuICAgIH0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVNpemU6IGNvbnN0YW50cy5wYWdlU2l6ZXNbMl0sIC8vIOm7mOiupOWIhumhteWkp+Wwj+S4uiAxMFxuICAgICAgICBwYWdlU2l6ZXM6IGNvbnN0YW50cy5wYWdlU2l6ZXMsXG4gICAgICAgIHBhZ2VObzogMSAvLyDpu5jorqTlvZPliY3pobXnoIHkuLoxXG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBvcnRsZXQtYm9keSBwYW5cIn0sIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicm93IG1ibSBwdG1cIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbGctNlwifSwgXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnaW5hdGlvbi1wYW5lbCBtbG1cIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VTaXplLCB7b25DaGFuZ2U6IHRoaXMucHJvcHMuY2hhbmdlUGFnZVNpemUsIHZhbHVlOiB0aGlzLnByb3BzLnBhZ2VTaXplLCBvcHRpb25zOiB0aGlzLnByb3BzLnBhZ2VTaXplc30pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1sZy02IHRleHQtcmlnaHRcIn0sIFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2luYXRpb24tcGFuZWwgbXJtXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdpbmF0aW9uLCB7cGFnZU5vOiB0aGlzLnByb3BzLnBhZ2VObywgdG90YWxQYWdlTm86IHRoaXMucHJvcHMudG90YWxQYWdlTm8sIG9uU2VsZWN0OiB0aGlzLnByb3BzLmNoYW5nZVBhZ2VOb30pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbiwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3cgcGJtXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLWxnLTZcIn0sIFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2luYXRpb24tcGFuZWwgbWxtXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdlU2l6ZSwge29uQ2hhbmdlOiB0aGlzLnByb3BzLmNoYW5nZVBhZ2VTaXplLCB2YWx1ZTogdGhpcy5wcm9wcy5wYWdlU2l6ZSwgb3B0aW9uczogdGhpcy5wcm9wcy5wYWdlU2l6ZXN9KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbGctNiB0ZXh0LXJpZ2h0XCJ9LCBcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdpbmF0aW9uLXBhbmVsIG1ybVwifSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdGlvbiwge3BhZ2VObzogdGhpcy5wcm9wcy5wYWdlTm8sIHRvdGFsUGFnZU5vOiB0aGlzLnByb3BzLnRvdGFsUGFnZU5vLCBvblNlbGVjdDogdGhpcy5wcm9wcy5jaGFuZ2VQYWdlTm99KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFHcmlkO1xuIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIGRhdGV0aW1lcGlja2VyID0gcmVxdWlyZSgnZW9uYXNkYW4tYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJyk7XG52YXIgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbnZhciBEYXRlVGltZVBpY2tlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdEYXRlVGltZVBpY2tlcicsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgcGlja1RpbWU6IGZhbHNlLFxuICAgICAgICBsYW5ndWFnZTogbW9tZW50LmxvY2FsZSgnemgtY24nKSxcbiAgICAgICAgZGVmYXVsdERhdGU6IHRoaXMucHJvcHMudmFsdWUgPyBtb21lbnQodGhpcy5wcm9wcy52YWx1ZSkgOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMub3B0aW9ucyAhPT0gdGhpcy5wcm9wcy5vcHRpb25zKSB7XG4gICAgICBpZiAobmV4dFByb3BzLm9wdGlvbnMubWluRGF0ZSkge1xuICAgICAgICAkKHRoaXMuZ2V0RE9NTm9kZSgpKS5maW5kKCdpbnB1dCcpLmRhdGEoJ0RhdGVUaW1lUGlja2VyJykuc2V0TWluRGF0ZShuZXh0UHJvcHMub3B0aW9ucy5taW5EYXRlKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0UHJvcHMub3B0aW9ucy5tYXhEYXRlKSB7XG4gICAgICAgICQodGhpcy5nZXRET01Ob2RlKCkpLmZpbmQoJ2lucHV0JykuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5zZXRNYXhEYXRlKG5leHRQcm9wcy5vcHRpb25zLm1heERhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMuZ2V0RE9NTm9kZSgpKS5maW5kKCdpbnB1dCcpLmRhdGEoJ0RhdGVUaW1lUGlja2VyJykuZGVzdHJveSgpO1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICQodGhpcy5nZXRET01Ob2RlKCkpLmZpbmQoJ2lucHV0JykuZGF0ZXRpbWVwaWNrZXIoXy5leHRlbmQoe30sIHRoaXMuc3RhdGUub3B0aW9ucywgdGhpcy5wcm9wcy5vcHRpb25zKSk7XG4gICAgJCh0aGlzLmdldERPTU5vZGUoKSkuZmluZCgnaW5wdXQnKS5vbignZHAuY2hhbmdlJywgdGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaW5wdXQtaWNvbiByaWdodFwifSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge2NsYXNzTmFtZTogXCJmYSBmYS1jYWxlbmRhclwifSksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcmVhZE9ubHk6IHRydWUsIGlkOiB0aGlzLnByb3BzLmlkID8gdGhpcy5wcm9wcy5pZCA6ICcnfSlcbiAgICAgICAgKVxuICAgICk7XG4gIH0sXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgIHZhciB2YWwgPSAkKHRoaXMuZ2V0RE9NTm9kZSgpKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgIHZhbCA9IG1vbWVudCh2YWwsXCJNTS9ERC9ZWVlZXCIpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWwpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRlVGltZVBpY2tlcjtcbiIsInZhciBEcm9wem9uZSA9IHJlcXVpcmUoJ2Ryb3B6b25lJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5cbnZhciBEcm9wem9uZVVwbG9hZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0Ryb3B6b25lVXBsb2FkJyxcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHVybDogdGhpcy5wcm9wcy51cmwsXG4gICAgICAgICAgdXBsb2FkTXVsdGlwbGU6IHRydWUsXG4gICAgICAgICAgZGljdERlZmF1bHRNZXNzYWdlOiAn5ouW5ou95LiK5Lyg5oiW54K55Ye75LiK5Lyg5paH5Lu2JyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdteWZpbGVzJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnVwbG9hZGVkRmlsZXMpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLnN0YXRlLm9wdGlvbnM7XG4gICAgICAgIHRoaXMudXBsb2FkZXIgPSBuZXcgRHJvcHpvbmUodGhpcy5nZXRET01Ob2RlKCksIF8uZXh0ZW5kKHt9LCBEcm9wem9uZS5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgICAgICAgdGhpcy51cGxvYWRlci5vbignc2VuZGluZycsIHRoaXMuX29uU2VuZGluZyk7XG4gICAgICAgIHRoaXMudXBsb2FkZXIub24oJ3N1Y2Nlc3MnLCB0aGlzLl9vblN1Y2Nlc3MpO1xuICAgICAgICB0aGlzLnVwbG9hZGVyLm9uKCdlcnJvcicsIHRoaXMuX29uRXJyb3IpO1xuICAgICAgICB0aGlzLnVwbG9hZGVyLm9uKCdhZGRlZGZpbGUnLCB0aGlzLl9vbkFkZGVkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMudXBsb2FkZWRGaWxlcykge1xuICAgICAgICB0aGlzLnVwbG9hZGVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy51cGxvYWRlciA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBSZWFjdC5fX3NwcmVhZCh7Y2xhc3NOYW1lOiBcImRyb3B6b25lXCJ9LCAgdGhpcy5wcm9wcyksIFxuICAgICAgICAgIGNoaWxkcmVuID8gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImZhbGxiYWNrXCJ9LCBjaGlsZHJlbikgOiBudWxsXG4gICAgICAgICk7XG4gICAgfSxcbiAgICBfb25TZW5kaW5nOiBmdW5jdGlvbihmaWxlLCB4aHIsIGZvcm1EYXRhKSB7XG4gICAgICB2YXIgYWRkaXRpb24gPSB0aGlzLnByb3BzLmFkZGl0aW9uID8gdGhpcy5wcm9wcy5hZGRpdGlvbiA6IFtdO1xuICAgICAgaWYgKGFkZGl0aW9uKSB7XG4gICAgICAgIF8ua2V5cyhhZGRpdGlvbikuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICBfLnZhbHVlcyhhZGRpdGlvbikuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9vblN1Y2Nlc3M6IGZ1bmN0aW9uKGZpbGUsIHJlcykge1xuICAgIH0sXG4gICAgX29uRXJyb3I6IGZ1bmN0aW9uKGZpbGUsIHJlcykge1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB9LFxuICAgIF9vbkFkZGVkOiBmdW5jdGlvbihmaWxlKSB7XG4gICAgICBmaWxlLnByZXZpZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERyb3B6b25lVXBsb2FkO1xuIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFBhZ2VIZWFkZXIgPSByZXF1aXJlKCcuL3BhZ2UtaGVhZGVyJyk7XG52YXIgQnJlYWRjcnVtYiA9IHJlcXVpcmUoJy4vYnJlYWRjcnVtYicpO1xuXG52YXIgSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnSGVhZGVyJyxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2lkOiBcInRpdGxlLWJyZWFkY3J1bWItb3B0aW9uLWRlbW9cIiwgY2xhc3NOYW1lOiBcInBhZ2UtdGl0bGUtYnJlYWRjcnVtYiBjbGVhcmZpeFwifSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZUhlYWRlciwge3BhZ2VUaXRsZTogdGhpcy5wcm9wcy5wYWdlVGl0bGV9KSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnJlYWRjcnVtYiwge2FjdGl2ZTogdGhpcy5wcm9wcy5wYWdlVGl0bGUsIHJvb3Q6IFwi6aaW6aG1XCJ9KVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlcjtcbiIsIlxudmFyICQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuLyoqXG4gKiBwYXJzZXIgLSBqUXVlcnkgRWFzeVVJXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDA5LTIwMTMgd3d3LmplYXN5dWkuY29tLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBHUEwgb3IgY29tbWVyY2lhbCBsaWNlbnNlc1xuICogVG8gdXNlIGl0IG9uIG90aGVyIHRlcm1zIHBsZWFzZSBjb250YWN0IHVzOiBpbmZvQGplYXN5dWkuY29tXG4gKiBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLnR4dFxuICogaHR0cDovL3d3dy5qZWFzeXVpLmNvbS9saWNlbnNlX2NvbW1lcmNpYWwucGhwXG4gKlxuICovXG5cbihmdW5jdGlvbigkKXtcbiAgICAkLnBhcnNlciA9IHtcbiAgICAgICAgYXV0bzogdHJ1ZSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oY29udGV4dCl7fSxcbiAgICAgICAgcGx1Z2luczpbJ2RyYWdnYWJsZScsJ2Ryb3BwYWJsZScsJ3Jlc2l6YWJsZScsJ3BhZ2luYXRpb24nLCd0b29sdGlwJyxcbiAgICAgICAgICAgICAgICAgJ2xpbmtidXR0b24nLCdtZW51JywnbWVudWJ1dHRvbicsJ3NwbGl0YnV0dG9uJywncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgICAgICAndHJlZScsJ2NvbWJvYm94JywnY29tYm90cmVlJywnY29tYm9ncmlkJywnbnVtYmVyYm94JywndmFsaWRhdGVib3gnLCdzZWFyY2hib3gnLFxuICAgICAgICAgICAgICAgICAnbnVtYmVyc3Bpbm5lcicsJ3RpbWVzcGlubmVyJywnY2FsZW5kYXInLCdkYXRlYm94JywnZGF0ZXRpbWVib3gnLCdzbGlkZXInLFxuICAgICAgICAgICAgICAgICAnbGF5b3V0JywncGFuZWwnLCdkYXRhZ3JpZCcsJ3Byb3BlcnR5Z3JpZCcsJ3RyZWVncmlkJywndGFicycsJ2FjY29yZGlvbicsJ3dpbmRvdycsJ2RpYWxvZydcbiAgICAgICAgXSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKGNvbnRleHQpe1xuICAgICAgICAgICAgdmFyIGFhID0gW107XG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTwkLnBhcnNlci5wbHVnaW5zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9ICQucGFyc2VyLnBsdWdpbnNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHIgPSAkKCcuZWFzeXVpLScgKyBuYW1lLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoci5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBpZiAocltuYW1lXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICByW25hbWVdKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhYS5wdXNoKHtuYW1lOm5hbWUsanE6cn0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFhLmxlbmd0aCAmJiB3aW5kb3cuZWFzeWxvYWRlcil7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVzID0gW107XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8YWEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKGFhW2ldLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlYXN5bG9hZGVyLmxvYWQobmFtZXMsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPGFhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gYWFbaV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBqcSA9IGFhW2ldLmpxO1xuICAgICAgICAgICAgICAgICAgICAgICAganFbbmFtZV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkLnBhcnNlci5vbkNvbXBsZXRlLmNhbGwoJC5wYXJzZXIsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkLnBhcnNlci5vbkNvbXBsZXRlLmNhbGwoJC5wYXJzZXIsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwYXJzZSBvcHRpb25zLCBpbmNsdWRpbmcgc3RhbmRhcmQgJ2RhdGEtb3B0aW9ucycgYXR0cmlidXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBjYWxsaW5nIGV4YW1wbGVzOlxuICAgICAgICAgKiAkLnBhcnNlci5wYXJzZU9wdGlvbnModGFyZ2V0KTtcbiAgICAgICAgICogJC5wYXJzZXIucGFyc2VPcHRpb25zKHRhcmdldCwgWydpZCcsJ3RpdGxlJywnd2lkdGgnLHtmaXQ6J2Jvb2xlYW4nLGJvcmRlcjonYm9vbGVhbid9LHttaW46J251bWJlcid9XSk7XG4gICAgICAgICAqL1xuICAgICAgICBwYXJzZU9wdGlvbnM6IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydGllcyl7XG4gICAgICAgICAgICB2YXIgdCA9ICQodGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge307XG5cbiAgICAgICAgICAgIHZhciBzID0gJC50cmltKHQuYXR0cignZGF0YS1vcHRpb25zJykpO1xuICAgICAgICAgICAgaWYgKHMpe1xuLy8gICAgICAgICAgICAgIHZhciBmaXJzdCA9IHMuc3Vic3RyaW5nKDAsMSk7XG4vLyAgICAgICAgICAgICAgdmFyIGxhc3QgPSBzLnN1YnN0cmluZyhzLmxlbmd0aC0xLDEpO1xuLy8gICAgICAgICAgICAgIGlmIChmaXJzdCAhPSAneycpIHMgPSAneycgKyBzO1xuLy8gICAgICAgICAgICAgIGlmIChsYXN0ICE9ICd9JykgcyA9IHMgKyAnfSc7XG4gICAgICAgICAgICAgICAgaWYgKHMuc3Vic3RyaW5nKDAsIDEpICE9ICd7Jyl7XG4gICAgICAgICAgICAgICAgICAgIHMgPSAneycgKyBzICsgJ30nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zID0gKG5ldyBGdW5jdGlvbigncmV0dXJuICcgKyBzKSkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMpe1xuICAgICAgICAgICAgICAgIHZhciBvcHRzID0ge307XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8cHJvcGVydGllcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcCA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHAgPT0gJ3N0cmluZycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBwID09ICd3aWR0aCcgfHwgcHAgPT0gJ2hlaWdodCcgfHwgcHAgPT0gJ2xlZnQnIHx8IHBwID09ICd0b3AnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzW3BwXSA9IHBhcnNlSW50KHRhcmdldC5zdHlsZVtwcF0pIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0c1twcF0gPSB0LmF0dHIocHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBuYW1lIGluIHBwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHBwW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09ICdib29sZWFuJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHNbbmFtZV0gPSB0LmF0dHIobmFtZSkgPyAodC5hdHRyKG5hbWUpID09ICd0cnVlJykgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICdudW1iZXInKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0c1tuYW1lXSA9IHQuYXR0cihuYW1lKT09JzAnID8gMCA6IHBhcnNlRmxvYXQodC5hdHRyKG5hbWUpKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQuZXh0ZW5kKG9wdGlvbnMsIG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICB9O1xuICAgICQoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGQgPSAkKCc8ZGl2IHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMDAwcHg7d2lkdGg6MTAwcHg7aGVpZ2h0OjEwMHB4O3BhZGRpbmc6NXB4XCI+PC9kaXY+JykuYXBwZW5kVG8oJ2JvZHknKTtcbiAgICAgICAgZC53aWR0aCgxMDApO1xuICAgICAgICAkLl9ib3hNb2RlbCA9IHBhcnNlSW50KGQud2lkdGgoKSkgPT0gMTAwO1xuICAgICAgICBkLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmICghd2luZG93LmVhc3lsb2FkZXIgJiYgJC5wYXJzZXIuYXV0byl7XG4gICAgICAgICAgICAkLnBhcnNlci5wYXJzZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBleHRlbmQgcGx1Z2luIHRvIHNldCBib3ggbW9kZWwgd2lkdGhcbiAgICAgKi9cbiAgICAkLmZuLl9vdXRlcldpZHRoID0gZnVuY3Rpb24od2lkdGgpe1xuICAgICAgICBpZiAod2lkdGggPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGlmICh0aGlzWzBdID09IHdpbmRvdyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGgoKSB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0ZXJXaWR0aCgpfHwwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICgkLl9ib3hNb2RlbCl7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS53aWR0aCh3aWR0aCAtICgkKHRoaXMpLm91dGVyV2lkdGgoKSAtICQodGhpcykud2lkdGgoKSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLndpZHRoKHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGV4dGVuZCBwbHVnaW4gdG8gc2V0IGJveCBtb2RlbCBoZWlnaHRcbiAgICAgKi9cbiAgICAkLmZuLl9vdXRlckhlaWdodCA9IGZ1bmN0aW9uKGhlaWdodCl7XG4gICAgICAgIGlmIChoZWlnaHQgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGlmICh0aGlzWzBdID09IHdpbmRvdyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0KCkgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vdXRlckhlaWdodCgpfHwwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICgkLl9ib3hNb2RlbCl7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oZWlnaHQoaGVpZ2h0IC0gKCQodGhpcykub3V0ZXJIZWlnaHQoKSAtICQodGhpcykuaGVpZ2h0KCkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oZWlnaHQoaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQuZm4uX3Njcm9sbExlZnQgPSBmdW5jdGlvbihsZWZ0KXtcbiAgICAgICAgaWYgKGxlZnQgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjcm9sbExlZnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXskKHRoaXMpLnNjcm9sbExlZnQobGVmdCl9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICQuZm4uX3Byb3BBdHRyID0gJC5mbi5wcm9wIHx8ICQuZm4uYXR0cjtcblxuICAgIC8qKlxuICAgICAqIHNldCBvciB1bnNldCB0aGUgZml0IHByb3BlcnR5IG9mIHBhcmVudCBjb250YWluZXIsIHJldHVybiB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiBwYXJlbnQgY29udGFpbmVyXG4gICAgICovXG4gICAgJC5mbi5fZml0ID0gZnVuY3Rpb24oZml0KXtcbiAgICAgICAgZml0ID0gZml0ID09IHVuZGVmaW5lZCA/IHRydWUgOiBmaXQ7XG4gICAgICAgIHZhciB0ID0gdGhpc1swXTtcbiAgICAgICAgdmFyIHAgPSAodC50YWdOYW1lID09ICdCT0RZJyA/IHQgOiB0aGlzLnBhcmVudCgpWzBdKTtcbiAgICAgICAgdmFyIGZjb3VudCA9IHAuZmNvdW50IHx8IDA7XG4gICAgICAgIGlmIChmaXQpe1xuICAgICAgICAgICAgaWYgKCF0LmZpdHRlZCl7XG4gICAgICAgICAgICAgICAgdC5maXR0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHAuZmNvdW50ID0gZmNvdW50ICsgMTtcbiAgICAgICAgICAgICAgICAkKHApLmFkZENsYXNzKCdwYW5lbC1ub3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIGlmIChwLnRhZ05hbWUgPT0gJ0JPRFknKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCdwYW5lbC1maXQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodC5maXR0ZWQpe1xuICAgICAgICAgICAgICAgIHQuZml0dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcC5mY291bnQgPSBmY291bnQgLSAxO1xuICAgICAgICAgICAgICAgIGlmIChwLmZjb3VudCA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgJChwKS5yZW1vdmVDbGFzcygncGFuZWwtbm9zY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAudGFnTmFtZSA9PSAnQk9EWScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdwYW5lbC1maXQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6ICQocCkud2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodDogJChwKS5oZWlnaHQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICQucGFyc2VyO1xuXG59KShqUXVlcnkpO1xuXG4vKipcbiAqIHN1cHBvcnQgZm9yIG1vYmlsZSBkZXZpY2VzXG4gKi9cbihmdW5jdGlvbigkKXtcbiAgICB2YXIgbG9uZ1RvdWNoVGltZXIgPSBudWxsO1xuICAgIHZhciBkYmxUb3VjaFRpbWVyID0gbnVsbDtcbiAgICB2YXIgaXNEYmxDbGljayA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpe1xuICAgICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCAhPSAxKXtyZXR1cm59XG4gICAgICAgIGlmICghaXNEYmxDbGljayl7XG4gICAgICAgICAgICBpc0RibENsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIGRibENsaWNrVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaXNEYmxDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChkYmxDbGlja1RpbWVyKTtcbiAgICAgICAgICAgIGlzRGJsQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGZpcmUoZSwgJ2RibGNsaWNrJyk7XG4vLyAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9uZ1RvdWNoVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBmaXJlKGUsICdjb250ZXh0bWVudScsIDMpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgZmlyZShlLCAnbW91c2Vkb3duJyk7XG4gICAgICAgIGlmICgkLmZuLmRyYWdnYWJsZS5pc0RyYWdnaW5nIHx8ICQuZm4ucmVzaXphYmxlLmlzUmVzaXppbmcpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpe1xuICAgICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCAhPSAxKXtyZXR1cm59XG4gICAgICAgIGlmIChsb25nVG91Y2hUaW1lcil7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobG9uZ1RvdWNoVGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIGZpcmUoZSwgJ21vdXNlbW92ZScpO1xuICAgICAgICBpZiAoJC5mbi5kcmFnZ2FibGUuaXNEcmFnZ2luZyB8fCAkLmZuLnJlc2l6YWJsZS5pc1Jlc2l6aW5nKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvblRvdWNoRW5kKGUpe1xuLy8gICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA+IDApe3JldHVybn1cbiAgICAgICAgaWYgKGxvbmdUb3VjaFRpbWVyKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChsb25nVG91Y2hUaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgZmlyZShlLCAnbW91c2V1cCcpO1xuICAgICAgICBpZiAoJC5mbi5kcmFnZ2FibGUuaXNEcmFnZ2luZyB8fCAkLmZuLnJlc2l6YWJsZS5pc1Jlc2l6aW5nKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcmUoZSwgbmFtZSwgd2hpY2gpe1xuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgJC5FdmVudChuYW1lKTtcbiAgICAgICAgZXZlbnQucGFnZVggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICBldmVudC5wYWdlWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgIGV2ZW50LndoaWNoID0gd2hpY2ggfHwgMTtcbiAgICAgICAgJChlLnRhcmdldCkudHJpZ2dlcihldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpe1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBvblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG9uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIG9uVG91Y2hFbmQsIHRydWUpO1xuICAgIH1cbn0pKGpRdWVyeSk7XG5cblxuLyoqXG4gKiBkcmFnZ2FibGUgLSBqUXVlcnkgRWFzeVVJXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDA5LTIwMTMgd3d3LmplYXN5dWkuY29tLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBHUEwgb3IgY29tbWVyY2lhbCBsaWNlbnNlc1xuICogVG8gdXNlIGl0IG9uIG90aGVyIHRlcm1zIHBsZWFzZSBjb250YWN0IHVzOiBpbmZvQGplYXN5dWkuY29tXG4gKiBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLnR4dFxuICogaHR0cDovL3d3dy5qZWFzeXVpLmNvbS9saWNlbnNlX2NvbW1lcmNpYWwucGhwXG4gKi9cbihmdW5jdGlvbigkKXtcbi8vICB2YXIgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGRyYWcoZSl7XG4gICAgICAgIHZhciBzdGF0ZSA9ICQuZGF0YShlLmRhdGEudGFyZ2V0LCAnZHJhZ2dhYmxlJyk7XG4gICAgICAgIHZhciBvcHRzID0gc3RhdGUub3B0aW9ucztcbiAgICAgICAgdmFyIHByb3h5ID0gc3RhdGUucHJveHk7XG5cbiAgICAgICAgdmFyIGRyYWdEYXRhID0gZS5kYXRhO1xuICAgICAgICB2YXIgbGVmdCA9IGRyYWdEYXRhLnN0YXJ0TGVmdCArIGUucGFnZVggLSBkcmFnRGF0YS5zdGFydFg7XG4gICAgICAgIHZhciB0b3AgPSBkcmFnRGF0YS5zdGFydFRvcCArIGUucGFnZVkgLSBkcmFnRGF0YS5zdGFydFk7XG5cbiAgICAgICAgaWYgKHByb3h5KXtcbiAgICAgICAgICAgIGlmIChwcm94eS5wYXJlbnQoKVswXSA9PSBkb2N1bWVudC5ib2R5KXtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5kZWx0YVggIT0gbnVsbCAmJiBvcHRzLmRlbHRhWCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gZS5wYWdlWCArIG9wdHMuZGVsdGFYO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBlLnBhZ2VYIC0gZS5kYXRhLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3B0cy5kZWx0YVkgIT0gbnVsbCAmJiBvcHRzLmRlbHRhWSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICB0b3AgPSBlLnBhZ2VZICsgb3B0cy5kZWx0YVk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gZS5wYWdlWSAtIGUuZGF0YS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5kZWx0YVggIT0gbnVsbCAmJiBvcHRzLmRlbHRhWCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0ICs9IGUuZGF0YS5vZmZzZXRXaWR0aCArIG9wdHMuZGVsdGFYO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3B0cy5kZWx0YVkgIT0gbnVsbCAmJiBvcHRzLmRlbHRhWSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICB0b3AgKz0gZS5kYXRhLm9mZnNldEhlaWdodCArIG9wdHMuZGVsdGFZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4vLyAgICAgIGlmIChvcHRzLmRlbHRhWCAhPSBudWxsICYmIG9wdHMuZGVsdGFYICE9IHVuZGVmaW5lZCl7XG4vLyAgICAgICAgICBsZWZ0ID0gZS5wYWdlWCArIG9wdHMuZGVsdGFYO1xuLy8gICAgICB9XG4vLyAgICAgIGlmIChvcHRzLmRlbHRhWSAhPSBudWxsICYmIG9wdHMuZGVsdGFZICE9IHVuZGVmaW5lZCl7XG4vLyAgICAgICAgICB0b3AgPSBlLnBhZ2VZICsgb3B0cy5kZWx0YVk7XG4vLyAgICAgIH1cblxuICAgICAgICBpZiAoZS5kYXRhLnBhcmVudCAhPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBsZWZ0ICs9ICQoZS5kYXRhLnBhcmVudCkuc2Nyb2xsTGVmdCgpO1xuICAgICAgICAgICAgdG9wICs9ICQoZS5kYXRhLnBhcmVudCkuc2Nyb2xsVG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0cy5heGlzID09ICdoJykge1xuICAgICAgICAgICAgZHJhZ0RhdGEubGVmdCA9IGxlZnQ7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0cy5heGlzID09ICd2Jykge1xuICAgICAgICAgICAgZHJhZ0RhdGEudG9wID0gdG9wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhZ0RhdGEubGVmdCA9IGxlZnQ7XG4gICAgICAgICAgICBkcmFnRGF0YS50b3AgPSB0b3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseURyYWcoZSl7XG4gICAgICAgIHZhciBzdGF0ZSA9ICQuZGF0YShlLmRhdGEudGFyZ2V0LCAnZHJhZ2dhYmxlJyk7XG4gICAgICAgIHZhciBvcHRzID0gc3RhdGUub3B0aW9ucztcbiAgICAgICAgdmFyIHByb3h5ID0gc3RhdGUucHJveHk7XG4gICAgICAgIGlmICghcHJveHkpe1xuICAgICAgICAgICAgcHJveHkgPSAkKGUuZGF0YS50YXJnZXQpO1xuICAgICAgICB9XG4vLyAgICAgIGlmIChwcm94eSl7XG4vLyAgICAgICAgICBwcm94eS5jc3MoJ2N1cnNvcicsIG9wdHMuY3Vyc29yKTtcbi8vICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgIHByb3h5ID0gJChlLmRhdGEudGFyZ2V0KTtcbi8vICAgICAgICAgICQuZGF0YShlLmRhdGEudGFyZ2V0LCAnZHJhZ2dhYmxlJykuaGFuZGxlLmNzcygnY3Vyc29yJywgb3B0cy5jdXJzb3IpO1xuLy8gICAgICB9XG4gICAgICAgIHByb3h5LmNzcyh7XG4gICAgICAgICAgICBsZWZ0OmUuZGF0YS5sZWZ0LFxuICAgICAgICAgICAgdG9wOmUuZGF0YS50b3BcbiAgICAgICAgfSk7XG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ2N1cnNvcicsIG9wdHMuY3Vyc29yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb0Rvd24oZSl7XG4vLyAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAkLmZuLmRyYWdnYWJsZS5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIHN0YXRlID0gJC5kYXRhKGUuZGF0YS50YXJnZXQsICdkcmFnZ2FibGUnKTtcbiAgICAgICAgdmFyIG9wdHMgPSBzdGF0ZS5vcHRpb25zO1xuXG4gICAgICAgIHZhciBkcm9wcGFibGVzID0gJCgnLmRyb3BwYWJsZScpLmZpbHRlcihmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIGUuZGF0YS50YXJnZXQgIT0gdGhpcztcbiAgICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgYWNjZXB0ID0gJC5kYXRhKHRoaXMsICdkcm9wcGFibGUnKS5vcHRpb25zLmFjY2VwdDtcbiAgICAgICAgICAgIGlmIChhY2NlcHQpe1xuICAgICAgICAgICAgICAgIHJldHVybiAkKGFjY2VwdCkuZmlsdGVyKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzID09IGUuZGF0YS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgfSkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZS5kcm9wcGFibGVzID0gZHJvcHBhYmxlcztcblxuICAgICAgICB2YXIgcHJveHkgPSBzdGF0ZS5wcm94eTtcbiAgICAgICAgaWYgKCFwcm94eSl7XG4gICAgICAgICAgICBpZiAob3B0cy5wcm94eSl7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMucHJveHkgPT0gJ2Nsb25lJyl7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5ID0gJChlLmRhdGEudGFyZ2V0KS5jbG9uZSgpLmluc2VydEFmdGVyKGUuZGF0YS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5ID0gb3B0cy5wcm94eS5jYWxsKGUuZGF0YS50YXJnZXQsIGUuZGF0YS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm94eSA9IHByb3h5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm94eSA9ICQoZS5kYXRhLnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcm94eS5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICAgIGRyYWcoZSk7XG4gICAgICAgIGFwcGx5RHJhZyhlKTtcblxuICAgICAgICBvcHRzLm9uU3RhcnREcmFnLmNhbGwoZS5kYXRhLnRhcmdldCwgZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb01vdmUoZSl7XG4gICAgICAgIHZhciBzdGF0ZSA9ICQuZGF0YShlLmRhdGEudGFyZ2V0LCAnZHJhZ2dhYmxlJyk7XG4gICAgICAgIGRyYWcoZSk7XG4gICAgICAgIGlmIChzdGF0ZS5vcHRpb25zLm9uRHJhZy5jYWxsKGUuZGF0YS50YXJnZXQsIGUpICE9IGZhbHNlKXtcbiAgICAgICAgICAgIGFwcGx5RHJhZyhlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzb3VyY2UgPSBlLmRhdGEudGFyZ2V0O1xuICAgICAgICBzdGF0ZS5kcm9wcGFibGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBkcm9wT2JqID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmIChkcm9wT2JqLmRyb3BwYWJsZSgnb3B0aW9ucycpLmRpc2FibGVkKXtyZXR1cm47fVxuXG4gICAgICAgICAgICB2YXIgcDIgPSBkcm9wT2JqLm9mZnNldCgpO1xuICAgICAgICAgICAgaWYgKGUucGFnZVggPiBwMi5sZWZ0ICYmIGUucGFnZVggPCBwMi5sZWZ0ICsgZHJvcE9iai5vdXRlcldpZHRoKClcbiAgICAgICAgICAgICAgICAgICAgJiYgZS5wYWdlWSA+IHAyLnRvcCAmJiBlLnBhZ2VZIDwgcDIudG9wICsgZHJvcE9iai5vdXRlckhlaWdodCgpKXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZW50ZXJlZCl7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykudHJpZ2dlcignX2RyYWdlbnRlcicsIFtzb3VyY2VdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdfZHJhZ292ZXInLCBbc291cmNlXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVudGVyZWQpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ19kcmFnbGVhdmUnLCBbc291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvVXAoZSl7XG4vLyAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgJC5mbi5kcmFnZ2FibGUuaXNEcmFnZ2luZyA9IGZhbHNlO1xuLy8gICAgICBkcmFnKGUpO1xuICAgICAgICBkb01vdmUoZSk7XG5cbiAgICAgICAgdmFyIHN0YXRlID0gJC5kYXRhKGUuZGF0YS50YXJnZXQsICdkcmFnZ2FibGUnKTtcbiAgICAgICAgdmFyIHByb3h5ID0gc3RhdGUucHJveHk7XG4gICAgICAgIHZhciBvcHRzID0gc3RhdGUub3B0aW9ucztcbiAgICAgICAgaWYgKG9wdHMucmV2ZXJ0KXtcbiAgICAgICAgICAgIGlmIChjaGVja0Ryb3AoKSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAkKGUuZGF0YS50YXJnZXQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmUuZGF0YS5zdGFydFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OmUuZGF0YS5zdGFydExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDplLmRhdGEuc3RhcnRUb3BcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3h5KXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlZnQsIHRvcDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3h5LnBhcmVudCgpWzBdID09IGRvY3VtZW50LmJvZHkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGUuZGF0YS5zdGFydFggLSBlLmRhdGEub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBlLmRhdGEuc3RhcnRZIC0gZS5kYXRhLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBlLmRhdGEuc3RhcnRMZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gZS5kYXRhLnN0YXJ0VG9wO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByb3h5LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdG9wXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm94eSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKGUuZGF0YS50YXJnZXQpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDplLmRhdGEuc3RhcnRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOmUuZGF0YS5zdGFydFRvcFxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJChlLmRhdGEudGFyZ2V0KS5jc3MoJ3Bvc2l0aW9uJywgZS5kYXRhLnN0YXJ0UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKGUuZGF0YS50YXJnZXQpLmNzcyh7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246J2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OmUuZGF0YS5sZWZ0LFxuICAgICAgICAgICAgICAgIHRvcDplLmRhdGEudG9wXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNoZWNrRHJvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0cy5vblN0b3BEcmFnLmNhbGwoZS5kYXRhLnRhcmdldCwgZSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkudW5iaW5kKCcuZHJhZ2dhYmxlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ2N1cnNvcicsJycpO1xuICAgICAgICB9LDEwMCk7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlUHJveHkoKXtcbiAgICAgICAgICAgIGlmIChwcm94eSl7XG4gICAgICAgICAgICAgICAgcHJveHkucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0ZS5wcm94eSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja0Ryb3AoKXtcbiAgICAgICAgICAgIHZhciBkcm9wcGVkID0gZmFsc2U7XG4gICAgICAgICAgICBzdGF0ZS5kcm9wcGFibGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgZHJvcE9iaiA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGRyb3BPYmouZHJvcHBhYmxlKCdvcHRpb25zJykuZGlzYWJsZWQpe3JldHVybjt9XG5cbiAgICAgICAgICAgICAgICB2YXIgcDIgPSBkcm9wT2JqLm9mZnNldCgpO1xuICAgICAgICAgICAgICAgIGlmIChlLnBhZ2VYID4gcDIubGVmdCAmJiBlLnBhZ2VYIDwgcDIubGVmdCArIGRyb3BPYmoub3V0ZXJXaWR0aCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBlLnBhZ2VZID4gcDIudG9wICYmIGUucGFnZVkgPCBwMi50b3AgKyBkcm9wT2JqLm91dGVySGVpZ2h0KCkpe1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5yZXZlcnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJChlLmRhdGEudGFyZ2V0KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmUuZGF0YS5zdGFydFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ZS5kYXRhLnN0YXJ0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6ZS5kYXRhLnN0YXJ0VG9wXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ19kcm9wJywgW2UuZGF0YS50YXJnZXRdKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUHJveHkoKTtcbiAgICAgICAgICAgICAgICAgICAgZHJvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWRyb3BwZWQgJiYgIW9wdHMucmV2ZXJ0KXtcbiAgICAgICAgICAgICAgICByZW1vdmVQcm94eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRyb3BwZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgJC5mbi5kcmFnZ2FibGUgPSBmdW5jdGlvbihvcHRpb25zLCBwYXJhbSl7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PSAnc3RyaW5nJyl7XG4gICAgICAgICAgICByZXR1cm4gJC5mbi5kcmFnZ2FibGUubWV0aG9kc1tvcHRpb25zXSh0aGlzLCBwYXJhbSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgb3B0cztcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9ICQuZGF0YSh0aGlzLCAnZHJhZ2dhYmxlJyk7XG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5oYW5kbGUudW5iaW5kKCcuZHJhZ2dhYmxlJyk7XG4gICAgICAgICAgICAgICAgb3B0cyA9ICQuZXh0ZW5kKHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRzID0gJC5leHRlbmQoe30sICQuZm4uZHJhZ2dhYmxlLmRlZmF1bHRzLCAkLmZuLmRyYWdnYWJsZS5wYXJzZU9wdGlvbnModGhpcyksIG9wdGlvbnMgfHwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IG9wdHMuaGFuZGxlID8gKHR5cGVvZiBvcHRzLmhhbmRsZT09J3N0cmluZycgPyAkKG9wdHMuaGFuZGxlLCB0aGlzKSA6IG9wdHMuaGFuZGxlKSA6ICQodGhpcyk7XG5cbiAgICAgICAgICAgICQuZGF0YSh0aGlzLCAnZHJhZ2dhYmxlJywge1xuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdHMsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAob3B0cy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdjdXJzb3InLCAnJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoYW5kbGUudW5iaW5kKCcuZHJhZ2dhYmxlJykuYmluZCgnbW91c2Vtb3ZlLmRyYWdnYWJsZScsIHt0YXJnZXQ6dGhpc30sIGZ1bmN0aW9uKGUpe1xuLy8gICAgICAgICAgICAgIGlmIChpc0RyYWdnaW5nKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCQuZm4uZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpe3JldHVybn1cbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9ICQuZGF0YShlLmRhdGEudGFyZ2V0LCAnZHJhZ2dhYmxlJykub3B0aW9ucztcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tBcmVhKGUpKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsIG9wdHMuY3Vyc29yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnY3Vyc29yJywgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmJpbmQoJ21vdXNlbGVhdmUuZHJhZ2dhYmxlJywge3RhcmdldDp0aGlzfSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsICcnKTtcbiAgICAgICAgICAgIH0pLmJpbmQoJ21vdXNlZG93bi5kcmFnZ2FibGUnLCB7dGFyZ2V0OnRoaXN9LCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tBcmVhKGUpID09IGZhbHNlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsICcnKTtcblxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9ICQoZS5kYXRhLnRhcmdldCkucG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gJChlLmRhdGEudGFyZ2V0KS5vZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRQb3NpdGlvbjogJChlLmRhdGEudGFyZ2V0KS5jc3MoJ3Bvc2l0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0TGVmdDogcG9zaXRpb24ubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUb3A6IHBvc2l0aW9uLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogcG9zaXRpb24ubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBwb3NpdGlvbi50b3AsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WDogZS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRZOiBlLnBhZ2VZLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRXaWR0aDogKGUucGFnZVggLSBvZmZzZXQubGVmdCksXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldEhlaWdodDogKGUucGFnZVkgLSBvZmZzZXQudG9wKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBlLmRhdGEudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6ICQoZS5kYXRhLnRhcmdldCkucGFyZW50KClbMF1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgJC5leHRlbmQoZS5kYXRhLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9ICQuZGF0YShlLmRhdGEudGFyZ2V0LCAnZHJhZ2dhYmxlJykub3B0aW9ucztcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5vbkJlZm9yZURyYWcuY2FsbChlLmRhdGEudGFyZ2V0LCBlKSA9PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkuYmluZCgnbW91c2Vkb3duLmRyYWdnYWJsZScsIGUuZGF0YSwgZG9Eb3duKTtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5iaW5kKCdtb3VzZW1vdmUuZHJhZ2dhYmxlJywgZS5kYXRhLCBkb01vdmUpO1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ21vdXNldXAuZHJhZ2dhYmxlJywgZS5kYXRhLCBkb1VwKTtcbi8vICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKCdjdXJzb3InLCBvcHRzLmN1cnNvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGhhbmRsZSBjYW4gYmUgZHJhZ2dlZFxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tBcmVhKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSAkLmRhdGEoZS5kYXRhLnRhcmdldCwgJ2RyYWdnYWJsZScpO1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSBzdGF0ZS5oYW5kbGU7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9ICQoaGFuZGxlKS5vZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSAkKGhhbmRsZSkub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKGhhbmRsZSkub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IGUucGFnZVkgLSBvZmZzZXQudG9wO1xuICAgICAgICAgICAgICAgIHZhciByID0gb2Zmc2V0LmxlZnQgKyB3aWR0aCAtIGUucGFnZVg7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSBvZmZzZXQudG9wICsgaGVpZ2h0IC0gZS5wYWdlWTtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IGUucGFnZVggLSBvZmZzZXQubGVmdDtcblxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbih0LHIsYixsKSA+IHN0YXRlLm9wdGlvbnMuZWRnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJC5mbi5kcmFnZ2FibGUubWV0aG9kcyA9IHtcbiAgICAgICAgb3B0aW9uczogZnVuY3Rpb24oanEpe1xuICAgICAgICAgICAgcmV0dXJuICQuZGF0YShqcVswXSwgJ2RyYWdnYWJsZScpLm9wdGlvbnM7XG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiBmdW5jdGlvbihqcSl7XG4gICAgICAgICAgICByZXR1cm4gJC5kYXRhKGpxWzBdLCAnZHJhZ2dhYmxlJykucHJveHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZTogZnVuY3Rpb24oanEpe1xuICAgICAgICAgICAgcmV0dXJuIGpxLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRyYWdnYWJsZSh7ZGlzYWJsZWQ6ZmFsc2V9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlOiBmdW5jdGlvbihqcSl7XG4gICAgICAgICAgICByZXR1cm4ganEuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQodGhpcykuZHJhZ2dhYmxlKHtkaXNhYmxlZDp0cnVlfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLmZuLmRyYWdnYWJsZS5wYXJzZU9wdGlvbnMgPSBmdW5jdGlvbih0YXJnZXQpe1xuICAgICAgICB2YXIgdCA9ICQodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuICQuZXh0ZW5kKHt9LFxuICAgICAgICAgICAgICAgICQucGFyc2VyLnBhcnNlT3B0aW9ucyh0YXJnZXQsIFsnY3Vyc29yJywnaGFuZGxlJywnYXhpcycsXG4gICAgICAgICAgICAgICAgICAgICAgIHsncmV2ZXJ0JzonYm9vbGVhbicsJ2RlbHRhWCc6J251bWJlcicsJ2RlbHRhWSc6J251bWJlcicsJ2VkZ2UnOidudW1iZXInfV0pLCB7XG4gICAgICAgICAgICBkaXNhYmxlZDogKHQuYXR0cignZGlzYWJsZWQnKSA/IHRydWUgOiB1bmRlZmluZWQpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkLmZuLmRyYWdnYWJsZS5kZWZhdWx0cyA9IHtcbiAgICAgICAgcHJveHk6bnVsbCwgLy8gJ2Nsb25lJyBvciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjcmVhdGUgdGhlIHByb3h5IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGZ1bmN0aW9uIGhhcyB0aGUgc291cmNlIHBhcmFtZXRlciB0aGF0IGluZGljYXRlIHRoZSBzb3VyY2Ugb2JqZWN0IGRyYWdnZWQuXG4gICAgICAgIHJldmVydDpmYWxzZSxcbiAgICAgICAgY3Vyc29yOidtb3ZlJyxcbiAgICAgICAgZGVsdGFYOm51bGwsXG4gICAgICAgIGRlbHRhWTpudWxsLFxuICAgICAgICBoYW5kbGU6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgZWRnZTowLFxuICAgICAgICBheGlzOm51bGwsICAvLyB2IG9yIGhcblxuICAgICAgICBvbkJlZm9yZURyYWc6IGZ1bmN0aW9uKGUpe30sXG4gICAgICAgIG9uU3RhcnREcmFnOiBmdW5jdGlvbihlKXt9LFxuICAgICAgICBvbkRyYWc6IGZ1bmN0aW9uKGUpe30sXG4gICAgICAgIG9uU3RvcERyYWc6IGZ1bmN0aW9uKGUpe31cbiAgICB9O1xuXG4gICAgJC5mbi5kcmFnZ2FibGUuaXNEcmFnZ2luZyA9IGZhbHNlO1xuXG4vLyAgJChmdW5jdGlvbigpe1xuLy8gICAgICBmdW5jdGlvbiB0b3VjaEhhbmRsZXIoZSkge1xuLy8gICAgICAgICAgdmFyIHRvdWNoZXMgPSBlLmNoYW5nZWRUb3VjaGVzLCBmaXJzdCA9IHRvdWNoZXNbMF0sIHR5cGUgPSBcIlwiO1xuLy9cbi8vICAgICAgICAgIHN3aXRjaChlLnR5cGUpIHtcbi8vICAgICAgICAgICAgICBjYXNlIFwidG91Y2hzdGFydFwiOiB0eXBlID0gXCJtb3VzZWRvd25cIjsgYnJlYWs7XG4vLyAgICAgICAgICAgICAgY2FzZSBcInRvdWNobW92ZVwiOiAgdHlwZSA9IFwibW91c2Vtb3ZlXCI7IGJyZWFrO1xuLy8gICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaGVuZFwiOiAgIHR5cGUgPSBcIm1vdXNldXBcIjsgICBicmVhaztcbi8vICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm47XG4vLyAgICAgICAgICB9XG4vLyAgICAgICAgICB2YXIgc2ltdWxhdGVkRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRcIik7XG4vLyAgICAgICAgICBzaW11bGF0ZWRFdmVudC5pbml0TW91c2VFdmVudCh0eXBlLCB0cnVlLCB0cnVlLCB3aW5kb3csIDEsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0LnNjcmVlblgsIGZpcnN0LnNjcmVlblksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0LmNsaWVudFgsIGZpcnN0LmNsaWVudFksIGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLypsZWZ0Ki8sIG51bGwpO1xuLy9cbi8vICAgICAgICAgIGZpcnN0LnRhcmdldC5kaXNwYXRjaEV2ZW50KHNpbXVsYXRlZEV2ZW50KTtcbi8vICAgICAgICAgIGlmIChpc0RyYWdnaW5nKXtcbi8vICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICB9XG4vLyAgICAgIH1cbi8vXG4vLyAgICAgIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKXtcbi8vICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoSGFuZGxlciwgdHJ1ZSk7XG4vLyAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRvdWNoSGFuZGxlciwgdHJ1ZSk7XG4vLyAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdG91Y2hIYW5kbGVyLCB0cnVlKTtcbi8vICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0b3VjaEhhbmRsZXIsIHRydWUpO1xuLy8gICAgICB9XG4vLyAgfSk7XG59KShqUXVlcnkpO1xuXG5cbi8qKlxuICogZHJvcHBhYmxlIC0galF1ZXJ5IEVhc3lVSVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAwOS0yMDEzIHd3dy5qZWFzeXVpLmNvbS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgR1BMIG9yIGNvbW1lcmNpYWwgbGljZW5zZXNcbiAqIFRvIHVzZSBpdCBvbiBvdGhlciB0ZXJtcyBwbGVhc2UgY29udGFjdCB1czogaW5mb0BqZWFzeXVpLmNvbVxuICogaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC50eHRcbiAqIGh0dHA6Ly93d3cuamVhc3l1aS5jb20vbGljZW5zZV9jb21tZXJjaWFsLnBocFxuICovXG4oZnVuY3Rpb24oJCl7XG4gICAgZnVuY3Rpb24gaW5pdCh0YXJnZXQpe1xuICAgICAgICAkKHRhcmdldCkuYWRkQ2xhc3MoJ2Ryb3BwYWJsZScpO1xuICAgICAgICAkKHRhcmdldCkuYmluZCgnX2RyYWdlbnRlcicsIGZ1bmN0aW9uKGUsIHNvdXJjZSl7XG4gICAgICAgICAgICAkLmRhdGEodGFyZ2V0LCAnZHJvcHBhYmxlJykub3B0aW9ucy5vbkRyYWdFbnRlci5hcHBseSh0YXJnZXQsIFtlLCBzb3VyY2VdKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGFyZ2V0KS5iaW5kKCdfZHJhZ2xlYXZlJywgZnVuY3Rpb24oZSwgc291cmNlKXtcbiAgICAgICAgICAgICQuZGF0YSh0YXJnZXQsICdkcm9wcGFibGUnKS5vcHRpb25zLm9uRHJhZ0xlYXZlLmFwcGx5KHRhcmdldCwgW2UsIHNvdXJjZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0YXJnZXQpLmJpbmQoJ19kcmFnb3ZlcicsIGZ1bmN0aW9uKGUsIHNvdXJjZSl7XG4gICAgICAgICAgICAkLmRhdGEodGFyZ2V0LCAnZHJvcHBhYmxlJykub3B0aW9ucy5vbkRyYWdPdmVyLmFwcGx5KHRhcmdldCwgW2UsIHNvdXJjZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0YXJnZXQpLmJpbmQoJ19kcm9wJywgZnVuY3Rpb24oZSwgc291cmNlKXtcbiAgICAgICAgICAgICQuZGF0YSh0YXJnZXQsICdkcm9wcGFibGUnKS5vcHRpb25zLm9uRHJvcC5hcHBseSh0YXJnZXQsIFtlLCBzb3VyY2VdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJC5mbi5kcm9wcGFibGUgPSBmdW5jdGlvbihvcHRpb25zLCBwYXJhbSl7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PSAnc3RyaW5nJyl7XG4gICAgICAgICAgICByZXR1cm4gJC5mbi5kcm9wcGFibGUubWV0aG9kc1tvcHRpb25zXSh0aGlzLCBwYXJhbSk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gJC5kYXRhKHRoaXMsICdkcm9wcGFibGUnKTtcbiAgICAgICAgICAgIGlmIChzdGF0ZSl7XG4gICAgICAgICAgICAgICAgJC5leHRlbmQoc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGluaXQodGhpcyk7XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdkcm9wcGFibGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6ICQuZXh0ZW5kKHt9LCAkLmZuLmRyb3BwYWJsZS5kZWZhdWx0cywgJC5mbi5kcm9wcGFibGUucGFyc2VPcHRpb25zKHRoaXMpLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJC5mbi5kcm9wcGFibGUubWV0aG9kcyA9IHtcbiAgICAgICAgb3B0aW9uczogZnVuY3Rpb24oanEpe1xuICAgICAgICAgICAgcmV0dXJuICQuZGF0YShqcVswXSwgJ2Ryb3BwYWJsZScpLm9wdGlvbnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZTogZnVuY3Rpb24oanEpe1xuICAgICAgICAgICAgcmV0dXJuIGpxLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRyb3BwYWJsZSh7ZGlzYWJsZWQ6ZmFsc2V9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlOiBmdW5jdGlvbihqcSl7XG4gICAgICAgICAgICByZXR1cm4ganEuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQodGhpcykuZHJvcHBhYmxlKHtkaXNhYmxlZDp0cnVlfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLmZuLmRyb3BwYWJsZS5wYXJzZU9wdGlvbnMgPSBmdW5jdGlvbih0YXJnZXQpe1xuICAgICAgICB2YXIgdCA9ICQodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuICQuZXh0ZW5kKHt9LCAkLnBhcnNlci5wYXJzZU9wdGlvbnModGFyZ2V0LCBbJ2FjY2VwdCddKSwge1xuICAgICAgICAgICAgZGlzYWJsZWQ6ICh0LmF0dHIoJ2Rpc2FibGVkJykgPyB0cnVlIDogdW5kZWZpbmVkKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJC5mbi5kcm9wcGFibGUuZGVmYXVsdHMgPSB7XG4gICAgICAgIGFjY2VwdDpudWxsLFxuICAgICAgICBkaXNhYmxlZDpmYWxzZSxcbiAgICAgICAgb25EcmFnRW50ZXI6ZnVuY3Rpb24oZSwgc291cmNlKXt9LFxuICAgICAgICBvbkRyYWdPdmVyOmZ1bmN0aW9uKGUsIHNvdXJjZSl7fSxcbiAgICAgICAgb25EcmFnTGVhdmU6ZnVuY3Rpb24oZSwgc291cmNlKXt9LFxuICAgICAgICBvbkRyb3A6ZnVuY3Rpb24oZSwgc291cmNlKXt9XG4gICAgfTtcbn0pKGpRdWVyeSk7XG5cblxuXG4vKipcbiAqIGpRdWVyeSBFYXN5VUkgMS4zLjVcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMDktMjAxMyB3d3cuamVhc3l1aS5jb20uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEdQTCBvciBjb21tZXJjaWFsIGxpY2Vuc2VzXG4gKiBUbyB1c2UgaXQgb24gb3RoZXIgdGVybXMgcGxlYXNlIGNvbnRhY3QgdXM6IGluZm9AamVhc3l1aS5jb21cbiAqIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwudHh0XG4gKiBodHRwOi8vd3d3LmplYXN5dWkuY29tL2xpY2Vuc2VfY29tbWVyY2lhbC5waHBcbiAqXG4gKi8gKGZ1bmN0aW9uKCQpIHtcbiAgICBmdW5jdGlvbiBfMShfMikge1xuICAgICAgICB2YXIgXzMgPSAkKF8yKTtcbiAgICAgICAgXzMuYWRkQ2xhc3MoXCJ0cmVlXCIpO1xuICAgICAgICByZXR1cm4gXzM7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF80KF81KSB7XG4gICAgICAgIHZhciBfNiA9ICQuZGF0YShfNSwgXCJ0cmVlXCIpLm9wdGlvbnM7XG4gICAgICAgICQoXzUpLnVuYmluZCgpLmJpbmQoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHR0ID0gJChlLnRhcmdldCk7XG4gICAgICAgICAgICB2YXIgXzcgPSB0dC5jbG9zZXN0KFwiZGl2LnRyZWUtbm9kZVwiKTtcbiAgICAgICAgICAgIGlmICghXzcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXzcuYWRkQ2xhc3MoXCJ0cmVlLW5vZGUtaG92ZXJcIik7XG4gICAgICAgICAgICBpZiAodHQuaGFzQ2xhc3MoXCJ0cmVlLWhpdFwiKSkge1xuICAgICAgICAgICAgICAgIGlmICh0dC5oYXNDbGFzcyhcInRyZWUtZXhwYW5kZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdHQuYWRkQ2xhc3MoXCJ0cmVlLWV4cGFuZGVkLWhvdmVyXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR0LmFkZENsYXNzKFwidHJlZS1jb2xsYXBzZWQtaG92ZXJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSkuYmluZChcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciB0dCA9ICQoZS50YXJnZXQpO1xuICAgICAgICAgICAgdmFyIF84ID0gdHQuY2xvc2VzdChcImRpdi50cmVlLW5vZGVcIik7XG4gICAgICAgICAgICBpZiAoIV84Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF84LnJlbW92ZUNsYXNzKFwidHJlZS1ub2RlLWhvdmVyXCIpO1xuICAgICAgICAgICAgaWYgKHR0Lmhhc0NsYXNzKFwidHJlZS1oaXRcIikpIHtcbiAgICAgICAgICAgICAgICBpZiAodHQuaGFzQ2xhc3MoXCJ0cmVlLWV4cGFuZGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHR0LnJlbW92ZUNsYXNzKFwidHJlZS1leHBhbmRlZC1ob3ZlclwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0dC5yZW1vdmVDbGFzcyhcInRyZWUtY29sbGFwc2VkLWhvdmVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgdHQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciBfOSA9IHR0LmNsb3Nlc3QoXCJkaXYudHJlZS1ub2RlXCIpO1xuICAgICAgICAgICAgaWYgKCFfOS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHQuaGFzQ2xhc3MoXCJ0cmVlLWhpdFwiKSkge1xuICAgICAgICAgICAgICAgIF83ZShfNSwgXzlbMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR0Lmhhc0NsYXNzKFwidHJlZS1jaGVja2JveFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBfMzIoXzUsIF85WzBdLCAhdHQuaGFzQ2xhc3MoXCJ0cmVlLWNoZWNrYm94MVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfZDYoXzUsIF85WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgXzYub25DbGljay5jYWxsKF81LCBfYyhfNSwgXzlbMF0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KS5iaW5kKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gJChlLnRhcmdldCkuY2xvc2VzdChcImRpdi50cmVlLW5vZGVcIik7XG4gICAgICAgICAgICBpZiAoIV9hLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9kNihfNSwgX2FbMF0pO1xuICAgICAgICAgICAgXzYub25EYmxDbGljay5jYWxsKF81LCBfYyhfNSwgX2FbMF0pKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pLmJpbmQoXCJjb250ZXh0bWVudVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFwiZGl2LnRyZWUtbm9kZVwiKTtcbiAgICAgICAgICAgIGlmICghX2IubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXzYub25Db250ZXh0TWVudS5jYWxsKF81LCBlLCBfYyhfNSwgX2JbMF0pKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfZChfZSkge1xuICAgICAgICB2YXIgX2YgPSAkLmRhdGEoX2UsIFwidHJlZVwiKS5vcHRpb25zO1xuICAgICAgICBfZi5kbmQgPSBmYWxzZTtcbiAgICAgICAgdmFyIF8xMCA9ICQoX2UpLmZpbmQoXCJkaXYudHJlZS1ub2RlXCIpO1xuICAgICAgICBfMTAuZHJhZ2dhYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgXzEwLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF8xMShfMTIpIHtcbiAgICAgICAgdmFyIF8xMyA9ICQuZGF0YShfMTIsIFwidHJlZVwiKTtcbiAgICAgICAgdmFyIF8xNCA9IF8xMy5vcHRpb25zO1xuICAgICAgICB2YXIgXzE1ID0gXzEzLnRyZWU7XG4gICAgICAgIF8xMy5kaXNhYmxlZE5vZGVzID0gW107XG4gICAgICAgIF8xNC5kbmQgPSB0cnVlO1xuICAgICAgICBfMTUuZmluZChcImRpdi50cmVlLW5vZGVcIikuZHJhZ2dhYmxlKHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHJldmVydDogdHJ1ZSxcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICBwcm94eTogZnVuY3Rpb24oXzE2KSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSAkKFwiPGRpdiBjbGFzcz1cXFwidHJlZS1ub2RlLXByb3h5XFxcIj48L2Rpdj5cIikuYXBwZW5kVG8oXCJib2R5XCIpO1xuICAgICAgICAgICAgICAgIHAuaHRtbChcIjxzcGFuIGNsYXNzPVxcXCJ0cmVlLWRuZC1pY29uIHRyZWUtZG5kLW5vXFxcIj4gPC9zcGFuPlwiICsgJChfMTYpLmZpbmQoXCIudHJlZS10aXRsZVwiKS5odG1sKCkpO1xuICAgICAgICAgICAgICAgIHAuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbHRhWDogMTUsXG4gICAgICAgICAgICBkZWx0YVk6IDE1LFxuICAgICAgICAgICAgb25CZWZvcmVEcmFnOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8xNC5vbkJlZm9yZURyYWcuY2FsbChfMTIsIF9jKF8xMiwgdGhpcykpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwidHJlZS1oaXRcIikgfHwgJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJ0cmVlLWNoZWNrYm94XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUud2hpY2ggIT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQodGhpcykubmV4dChcInVsXCIpLmZpbmQoXCJkaXYudHJlZS1ub2RlXCIpLmRyb3BwYWJsZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdDogXCJuby1hY2NlcHRcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBfMTcgPSAkKHRoaXMpLmZpbmQoXCJzcGFuLnRyZWUtaW5kZW50XCIpO1xuICAgICAgICAgICAgICAgIGlmIChfMTcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YS5vZmZzZXRXaWR0aCAtPSBfMTcubGVuZ3RoICogXzE3LndpZHRoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3RhcnREcmFnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRyYWdnYWJsZShcInByb3h5XCIpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDAwMCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTAwMDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfMTQub25TdGFydERyYWcuY2FsbChfMTIsIF9jKF8xMiwgdGhpcykpO1xuICAgICAgICAgICAgICAgIHZhciBfMTggPSBfYyhfMTIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChfMTguaWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF8xOC5pZCA9IFwiZWFzeXVpX3RyZWVfbm9kZV9pZF90ZW1wXCI7XG4gICAgICAgICAgICAgICAgICAgIF81NChfMTIsIF8xOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8xMy5kcmFnZ2luZ05vZGVJZCA9IF8xOC5pZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRyYWc6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgeDEgPSBlLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICB5MSA9IGUucGFnZVksXG4gICAgICAgICAgICAgICAgICAgIHgyID0gZS5kYXRhLnN0YXJ0WCxcbiAgICAgICAgICAgICAgICAgICAgeTIgPSBlLmRhdGEuc3RhcnRZO1xuICAgICAgICAgICAgICAgIHZhciBkID0gTWF0aC5zcXJ0KCh4MSAtIHgyKSAqICh4MSAtIHgyKSArICh5MSAtIHkyKSAqICh5MSAtIHkyKSk7XG4gICAgICAgICAgICAgICAgaWYgKGQgPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZHJhZ2dhYmxlKFwicHJveHlcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VZID0gZS5wYWdlWTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN0b3BEcmFnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoXCJ1bFwiKS5maW5kKFwiZGl2LnRyZWUtbm9kZVwiKS5kcm9wcGFibGUoe1xuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ6IFwiZGl2LnRyZWUtbm9kZVwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfMTMuZGlzYWJsZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAkKF8xMy5kaXNhYmxlZE5vZGVzW2ldKS5kcm9wcGFibGUoXCJlbmFibGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8xMy5kaXNhYmxlZE5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIF8xOSA9IF9jOShfMTIsIF8xMy5kcmFnZ2luZ05vZGVJZCk7XG4gICAgICAgICAgICAgICAgaWYgKF8xOSAmJiBfMTkuaWQgPT0gXCJlYXN5dWlfdHJlZV9ub2RlX2lkX3RlbXBcIikge1xuICAgICAgICAgICAgICAgICAgICBfMTkuaWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBfNTQoXzEyLCBfMTkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfMTQub25TdG9wRHJhZy5jYWxsKF8xMiwgXzE5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuZHJvcHBhYmxlKHtcbiAgICAgICAgICAgIGFjY2VwdDogXCJkaXYudHJlZS1ub2RlXCIsXG4gICAgICAgICAgICBvbkRyYWdFbnRlcjogZnVuY3Rpb24oZSwgXzFhKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8xNC5vbkRyYWdFbnRlci5jYWxsKF8xMiwgdGhpcywgX2MoXzEyLCBfMWEpKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBfMWIoXzFhLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJ0cmVlLW5vZGUtYXBwZW5kIHRyZWUtbm9kZS10b3AgdHJlZS1ub2RlLWJvdHRvbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5kcm9wcGFibGUoXCJkaXNhYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBfMTMuZGlzYWJsZWROb2Rlcy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRyYWdPdmVyOiBmdW5jdGlvbihlLCBfMWMpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5kcm9wcGFibGUoXCJvcHRpb25zXCIpLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIF8xZCA9IF8xYy5wYWdlWTtcbiAgICAgICAgICAgICAgICB2YXIgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICAgICAgdmFyIF8xZSA9IHRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBfMWIoXzFjLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwidHJlZS1ub2RlLWFwcGVuZCB0cmVlLW5vZGUtdG9wIHRyZWUtbm9kZS1ib3R0b21cIik7XG4gICAgICAgICAgICAgICAgaWYgKF8xZCA+IHRvcCArIChfMWUgLSB0b3ApIC8gMikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXzFlIC0gXzFkIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInRyZWUtbm9kZS1ib3R0b21cIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwidHJlZS1ub2RlLWFwcGVuZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfMWQgLSB0b3AgPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwidHJlZS1ub2RlLXRvcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJ0cmVlLW5vZGUtYXBwZW5kXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfMTQub25EcmFnT3Zlci5jYWxsKF8xMiwgdGhpcywgX2MoXzEyLCBfMWMpKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBfMWIoXzFjLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJ0cmVlLW5vZGUtYXBwZW5kIHRyZWUtbm9kZS10b3AgdHJlZS1ub2RlLWJvdHRvbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5kcm9wcGFibGUoXCJkaXNhYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBfMTMuZGlzYWJsZWROb2Rlcy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRyYWdMZWF2ZTogZnVuY3Rpb24oZSwgXzFmKSB7XG4gICAgICAgICAgICAgICAgXzFiKF8xZiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJ0cmVlLW5vZGUtYXBwZW5kIHRyZWUtbm9kZS10b3AgdHJlZS1ub2RlLWJvdHRvbVwiKTtcbiAgICAgICAgICAgICAgICBfMTQub25EcmFnTGVhdmUuY2FsbChfMTIsIHRoaXMsIF9jKF8xMiwgXzFmKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Ecm9wOiBmdW5jdGlvbihlLCBfMjApIHtcbiAgICAgICAgICAgICAgICB2YXIgXzIxID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgXzIyLCBfMjM7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJ0cmVlLW5vZGUtYXBwZW5kXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8yMiA9IF8yNDtcbiAgICAgICAgICAgICAgICAgICAgXzIzID0gXCJhcHBlbmRcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfMjIgPSBfMjU7XG4gICAgICAgICAgICAgICAgICAgIF8yMyA9ICQodGhpcykuaGFzQ2xhc3MoXCJ0cmVlLW5vZGUtdG9wXCIpID8gXCJ0b3BcIiA6IFwiYm90dG9tXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfMTQub25CZWZvcmVEcm9wLmNhbGwoXzEyLCBfMjEsIF9jMihfMTIsIF8yMCksIF8yMykgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcInRyZWUtbm9kZS1hcHBlbmQgdHJlZS1ub2RlLXRvcCB0cmVlLW5vZGUtYm90dG9tXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8yMihfMjAsIF8yMSwgXzIzKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwidHJlZS1ub2RlLWFwcGVuZCB0cmVlLW5vZGUtdG9wIHRyZWUtbm9kZS1ib3R0b21cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIF8xYihfMjYsIF8yNykge1xuICAgICAgICAgICAgdmFyIF8yOCA9ICQoXzI2KS5kcmFnZ2FibGUoXCJwcm94eVwiKS5maW5kKFwic3Bhbi50cmVlLWRuZC1pY29uXCIpO1xuICAgICAgICAgICAgXzI4LnJlbW92ZUNsYXNzKFwidHJlZS1kbmQteWVzIHRyZWUtZG5kLW5vXCIpLmFkZENsYXNzKF8yNyA/IFwidHJlZS1kbmQteWVzXCIgOiBcInRyZWUtZG5kLW5vXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIF8yNChfMjksIF8yYSkge1xuICAgICAgICAgICAgaWYgKF9jKF8xMiwgXzJhKS5zdGF0ZSA9PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgICAgICAgXzcyKF8xMiwgXzJhLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXzJiKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8yYigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfMmIoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF8yYyA9ICQoXzEyKS50cmVlKFwicG9wXCIsIF8yOSk7XG4gICAgICAgICAgICAgICAgJChfMTIpLnRyZWUoXCJhcHBlbmRcIiwge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IF8yYSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW18yY11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfMTQub25Ecm9wLmNhbGwoXzEyLCBfMmEsIF8yYywgXCJhcHBlbmRcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIF8yNShfMmQsIF8yZSwgXzJmKSB7XG4gICAgICAgICAgICB2YXIgXzMwID0ge307XG4gICAgICAgICAgICBpZiAoXzJmID09IFwidG9wXCIpIHtcbiAgICAgICAgICAgICAgICBfMzAuYmVmb3JlID0gXzJlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfMzAuYWZ0ZXIgPSBfMmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgXzMxID0gJChfMTIpLnRyZWUoXCJwb3BcIiwgXzJkKTtcbiAgICAgICAgICAgIF8zMC5kYXRhID0gXzMxO1xuICAgICAgICAgICAgJChfMTIpLnRyZWUoXCJpbnNlcnRcIiwgXzMwKTtcbiAgICAgICAgICAgIF8xNC5vbkRyb3AuY2FsbChfMTIsIF8yZSwgXzMxLCBfMmYpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfMzIoXzMzLCBfMzQsIF8zNSkge1xuICAgICAgICB2YXIgXzM2ID0gJC5kYXRhKF8zMywgXCJ0cmVlXCIpLm9wdGlvbnM7XG4gICAgICAgIGlmICghXzM2LmNoZWNrYm94KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF8zNyA9IF9jKF8zMywgXzM0KTtcbiAgICAgICAgaWYgKF8zNi5vbkJlZm9yZUNoZWNrLmNhbGwoXzMzLCBfMzcsIF8zNSkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgXzM4ID0gJChfMzQpO1xuICAgICAgICB2YXIgY2sgPSBfMzguZmluZChcIi50cmVlLWNoZWNrYm94XCIpO1xuICAgICAgICBjay5yZW1vdmVDbGFzcyhcInRyZWUtY2hlY2tib3gwIHRyZWUtY2hlY2tib3gxIHRyZWUtY2hlY2tib3gyXCIpO1xuICAgICAgICBpZiAoXzM1KSB7XG4gICAgICAgICAgICBjay5hZGRDbGFzcyhcInRyZWUtY2hlY2tib3gxXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2suYWRkQ2xhc3MoXCJ0cmVlLWNoZWNrYm94MFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXzM2LmNhc2NhZGVDaGVjaykge1xuICAgICAgICAgICAgXzM5KF8zOCk7XG4gICAgICAgICAgICBfM2EoXzM4KTtcbiAgICAgICAgfVxuICAgICAgICBfMzYub25DaGVjay5jYWxsKF8zMywgXzM3LCBfMzUpO1xuXG4gICAgICAgIGZ1bmN0aW9uIF8zYShfM2IpIHtcbiAgICAgICAgICAgIHZhciBfM2MgPSBfM2IubmV4dCgpLmZpbmQoXCIudHJlZS1jaGVja2JveFwiKTtcbiAgICAgICAgICAgIF8zYy5yZW1vdmVDbGFzcyhcInRyZWUtY2hlY2tib3gwIHRyZWUtY2hlY2tib3gxIHRyZWUtY2hlY2tib3gyXCIpO1xuICAgICAgICAgICAgaWYgKF8zYi5maW5kKFwiLnRyZWUtY2hlY2tib3hcIikuaGFzQ2xhc3MoXCJ0cmVlLWNoZWNrYm94MVwiKSkge1xuICAgICAgICAgICAgICAgIF8zYy5hZGRDbGFzcyhcInRyZWUtY2hlY2tib3gxXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfM2MuYWRkQ2xhc3MoXCJ0cmVlLWNoZWNrYm94MFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBfMzkoXzNkKSB7XG4gICAgICAgICAgICB2YXIgXzNlID0gXzg5KF8zMywgXzNkWzBdKTtcbiAgICAgICAgICAgIGlmIChfM2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2sgPSAkKF8zZS50YXJnZXQpLmZpbmQoXCIudHJlZS1jaGVja2JveFwiKTtcbiAgICAgICAgICAgICAgICBjay5yZW1vdmVDbGFzcyhcInRyZWUtY2hlY2tib3gwIHRyZWUtY2hlY2tib3gxIHRyZWUtY2hlY2tib3gyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChfM2YoXzNkKSkge1xuICAgICAgICAgICAgICAgICAgICBjay5hZGRDbGFzcyhcInRyZWUtY2hlY2tib3gxXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfNDAoXzNkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2suYWRkQ2xhc3MoXCJ0cmVlLWNoZWNrYm94MFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNrLmFkZENsYXNzKFwidHJlZS1jaGVja2JveDJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXzM5KCQoXzNlLnRhcmdldCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfM2Yobikge1xuICAgICAgICAgICAgICAgIHZhciBjayA9IG4uZmluZChcIi50cmVlLWNoZWNrYm94XCIpO1xuICAgICAgICAgICAgICAgIGlmIChjay5oYXNDbGFzcyhcInRyZWUtY2hlY2tib3gwXCIpIHx8IGNrLmhhc0NsYXNzKFwidHJlZS1jaGVja2JveDJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYiA9IHRydWU7XG4gICAgICAgICAgICAgICAgbi5wYXJlbnQoKS5zaWJsaW5ncygpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5jaGlsZHJlbihcImRpdi50cmVlLW5vZGVcIikuY2hpbGRyZW4oXCIudHJlZS1jaGVja2JveFwiKS5oYXNDbGFzcyhcInRyZWUtY2hlY2tib3gxXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF80MChuKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNrID0gbi5maW5kKFwiLnRyZWUtY2hlY2tib3hcIik7XG4gICAgICAgICAgICAgICAgaWYgKGNrLmhhc0NsYXNzKFwidHJlZS1jaGVja2JveDFcIikgfHwgY2suaGFzQ2xhc3MoXCJ0cmVlLWNoZWNrYm94MlwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBiID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBuLnBhcmVudCgpLnNpYmxpbmdzKCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmNoaWxkcmVuKFwiZGl2LnRyZWUtbm9kZVwiKS5jaGlsZHJlbihcIi50cmVlLWNoZWNrYm94XCIpLmhhc0NsYXNzKFwidHJlZS1jaGVja2JveDBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gXzQxKF80MiwgXzQzKSB7XG4gICAgICAgIHZhciBfNDQgPSAkLmRhdGEoXzQyLCBcInRyZWVcIikub3B0aW9ucztcbiAgICAgICAgaWYgKCFfNDQuY2hlY2tib3gpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgXzQ1ID0gJChfNDMpO1xuICAgICAgICBpZiAoXzQ2KF80MiwgXzQzKSkge1xuICAgICAgICAgICAgdmFyIGNrID0gXzQ1LmZpbmQoXCIudHJlZS1jaGVja2JveFwiKTtcbiAgICAgICAgICAgIGlmIChjay5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2suaGFzQ2xhc3MoXCJ0cmVlLWNoZWNrYm94MVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBfMzIoXzQyLCBfNDMsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8zMihfNDIsIF80MywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF80NC5vbmx5TGVhZkNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCI8c3BhbiBjbGFzcz1cXFwidHJlZS1jaGVja2JveCB0cmVlLWNoZWNrYm94MFxcXCI+PC9zcGFuPlwiKS5pbnNlcnRCZWZvcmUoXzQ1LmZpbmQoXCIudHJlZS10aXRsZVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNrID0gXzQ1LmZpbmQoXCIudHJlZS1jaGVja2JveFwiKTtcbiAgICAgICAgICAgIGlmIChfNDQub25seUxlYWZDaGVjaykge1xuICAgICAgICAgICAgICAgIGNrLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY2suaGFzQ2xhc3MoXCJ0cmVlLWNoZWNrYm94MVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBfMzIoXzQyLCBfNDMsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjay5oYXNDbGFzcyhcInRyZWUtY2hlY2tib3gyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgXzQ3ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfNDggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF80OSA9IF80YShfNDIsIF80Myk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF80OS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfNDlbaV0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfNDggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfNDcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXzQ3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXzMyKF80MiwgXzQzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfNDgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMzIoXzQyLCBfNDMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfNGIoXzRjLCB1bCwgXzRkLCBfNGUpIHtcbiAgICAgICAgdmFyIF80ZiA9ICQuZGF0YShfNGMsIFwidHJlZVwiKTtcbiAgICAgICAgdmFyIF81MCA9IF80Zi5vcHRpb25zO1xuICAgICAgICB2YXIgXzUxID0gJCh1bCkucHJldkFsbChcImRpdi50cmVlLW5vZGU6Zmlyc3RcIik7XG4gICAgICAgIF80ZCA9IF81MC5sb2FkRmlsdGVyLmNhbGwoXzRjLCBfNGQsIF81MVswXSk7XG4gICAgICAgIHZhciBfNTIgPSBfNTMoXzRjLCBcImRvbUlkXCIsIF81MS5hdHRyKFwiaWRcIikpO1xuICAgICAgICBpZiAoIV80ZSkge1xuICAgICAgICAgICAgXzUyID8gXzUyLmNoaWxkcmVuID0gXzRkIDogXzRmLmRhdGEgPSBfNGQ7XG4gICAgICAgICAgICAkKHVsKS5lbXB0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKF81Mikge1xuICAgICAgICAgICAgICAgIF81Mi5jaGlsZHJlbiA/IF81Mi5jaGlsZHJlbiA9IF81Mi5jaGlsZHJlbi5jb25jYXQoXzRkKSA6IF81Mi5jaGlsZHJlbiA9IF80ZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXzRmLmRhdGEgPSBfNGYuZGF0YS5jb25jYXQoXzRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfNTAudmlldy5yZW5kZXIuY2FsbChfNTAudmlldywgXzRjLCB1bCwgXzRkKTtcbiAgICAgICAgaWYgKF81MC5kbmQpIHtcbiAgICAgICAgICAgIF8xMShfNGMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfNTIpIHtcbiAgICAgICAgICAgIF81NChfNGMsIF81Mik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF81NSA9IFtdO1xuICAgICAgICB2YXIgXzU2ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXzRkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgXzU3ID0gXzRkW2ldO1xuICAgICAgICAgICAgaWYgKCFfNTcuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIF81NS5wdXNoKF81Nyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXzU4KF80ZCwgZnVuY3Rpb24oXzU5KSB7XG4gICAgICAgICAgICBpZiAoXzU5LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBfNTYucHVzaChfNTkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKF81NS5sZW5ndGgpIHtcbiAgICAgICAgICAgIF8zMihfNGMsICQoXCIjXCIgKyBfNTVbMF0uZG9tSWQpWzBdLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfNTYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF8zMihfNGMsICQoXCIjXCIgKyBfNTZbaV0uZG9tSWQpWzBdLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgXzVhKF80YywgXzRjKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIF81MC5vbkxvYWRTdWNjZXNzLmNhbGwoXzRjLCBfNTIsIF80ZCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF81YShfNWIsIHVsLCBfNWMpIHtcbiAgICAgICAgdmFyIF81ZCA9ICQuZGF0YShfNWIsIFwidHJlZVwiKS5vcHRpb25zO1xuICAgICAgICBpZiAoXzVkLmxpbmVzKSB7XG4gICAgICAgICAgICAkKF81YikuYWRkQ2xhc3MoXCJ0cmVlLWxpbmVzXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChfNWIpLnJlbW92ZUNsYXNzKFwidHJlZS1saW5lc1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV81Yykge1xuICAgICAgICAgICAgXzVjID0gdHJ1ZTtcbiAgICAgICAgICAgICQoXzViKS5maW5kKFwic3Bhbi50cmVlLWluZGVudFwiKS5yZW1vdmVDbGFzcyhcInRyZWUtbGluZSB0cmVlLWpvaW4gdHJlZS1qb2luYm90dG9tXCIpO1xuICAgICAgICAgICAgJChfNWIpLmZpbmQoXCJkaXYudHJlZS1ub2RlXCIpLnJlbW92ZUNsYXNzKFwidHJlZS1ub2RlLWxhc3QgdHJlZS1yb290LWZpcnN0IHRyZWUtcm9vdC1vbmVcIik7XG4gICAgICAgICAgICB2YXIgXzVlID0gJChfNWIpLnRyZWUoXCJnZXRSb290c1wiKTtcbiAgICAgICAgICAgIGlmIChfNWUubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICQoXzVlWzBdLnRhcmdldCkuYWRkQ2xhc3MoXCJ0cmVlLXJvb3QtZmlyc3RcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfNWUubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgJChfNWVbMF0udGFyZ2V0KS5hZGRDbGFzcyhcInRyZWUtcm9vdC1vbmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICQodWwpLmNoaWxkcmVuKFwibGlcIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBfNWYgPSAkKHRoaXMpLmNoaWxkcmVuKFwiZGl2LnRyZWUtbm9kZVwiKTtcbiAgICAgICAgICAgIHZhciB1bCA9IF81Zi5uZXh0KFwidWxcIik7XG4gICAgICAgICAgICBpZiAodWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykubmV4dCgpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBfNjAoXzVmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXzVhKF81YiwgdWwsIF81Yyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF82MShfNWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF82MiA9ICQodWwpLmNoaWxkcmVuKFwibGk6bGFzdFwiKS5jaGlsZHJlbihcImRpdi50cmVlLW5vZGVcIikuYWRkQ2xhc3MoXCJ0cmVlLW5vZGUtbGFzdFwiKTtcbiAgICAgICAgXzYyLmNoaWxkcmVuKFwic3Bhbi50cmVlLWpvaW5cIikucmVtb3ZlQ2xhc3MoXCJ0cmVlLWpvaW5cIikuYWRkQ2xhc3MoXCJ0cmVlLWpvaW5ib3R0b21cIik7XG5cbiAgICAgICAgZnVuY3Rpb24gXzYxKF82MywgXzY0KSB7XG4gICAgICAgICAgICB2YXIgXzY1ID0gXzYzLmZpbmQoXCJzcGFuLnRyZWUtaWNvblwiKTtcbiAgICAgICAgICAgIF82NS5wcmV2KFwic3Bhbi50cmVlLWluZGVudFwiKS5hZGRDbGFzcyhcInRyZWUtam9pblwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBfNjAoXzY2KSB7XG4gICAgICAgICAgICB2YXIgXzY3ID0gXzY2LmZpbmQoXCJzcGFuLnRyZWUtaW5kZW50LCBzcGFuLnRyZWUtaGl0XCIpLmxlbmd0aDtcbiAgICAgICAgICAgIF82Ni5uZXh0KCkuZmluZChcImRpdi50cmVlLW5vZGVcIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwic3BhbjplcShcIiArIChfNjcgLSAxKSArIFwiKVwiKS5hZGRDbGFzcyhcInRyZWUtbGluZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfNjgoXzY5LCB1bCwgXzZhLCBfNmIpIHtcbiAgICAgICAgdmFyIF82YyA9ICQuZGF0YShfNjksIFwidHJlZVwiKS5vcHRpb25zO1xuICAgICAgICBfNmEgPSBfNmEgfHwge307XG4gICAgICAgIHZhciBfNmQgPSBudWxsO1xuICAgICAgICBpZiAoXzY5ICE9IHVsKSB7XG4gICAgICAgICAgICB2YXIgXzZlID0gJCh1bCkucHJldigpO1xuICAgICAgICAgICAgXzZkID0gX2MoXzY5LCBfNmVbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfNmMub25CZWZvcmVMb2FkLmNhbGwoXzY5LCBfNmQsIF82YSkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgXzZmID0gJCh1bCkucHJldigpLmNoaWxkcmVuKFwic3Bhbi50cmVlLWZvbGRlclwiKTtcbiAgICAgICAgXzZmLmFkZENsYXNzKFwidHJlZS1sb2FkaW5nXCIpO1xuICAgICAgICB2YXIgXzcwID0gXzZjLmxvYWRlci5jYWxsKF82OSwgXzZhLCBmdW5jdGlvbihfNzEpIHtcbiAgICAgICAgICAgIF82Zi5yZW1vdmVDbGFzcyhcInRyZWUtbG9hZGluZ1wiKTtcbiAgICAgICAgICAgIF80YihfNjksIHVsLCBfNzEpO1xuICAgICAgICAgICAgaWYgKF82Yikge1xuICAgICAgICAgICAgICAgIF82YigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF82Zi5yZW1vdmVDbGFzcyhcInRyZWUtbG9hZGluZ1wiKTtcbiAgICAgICAgICAgIF82Yy5vbkxvYWRFcnJvci5hcHBseShfNjksIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZiAoXzZiKSB7XG4gICAgICAgICAgICAgICAgXzZiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoXzcwID09IGZhbHNlKSB7XG4gICAgICAgICAgICBfNmYucmVtb3ZlQ2xhc3MoXCJ0cmVlLWxvYWRpbmdcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gXzcyKF83MywgXzc0LCBfNzUpIHtcbiAgICAgICAgdmFyIF83NiA9ICQuZGF0YShfNzMsIFwidHJlZVwiKS5vcHRpb25zO1xuICAgICAgICB2YXIgaGl0ID0gJChfNzQpLmNoaWxkcmVuKFwic3Bhbi50cmVlLWhpdFwiKTtcbiAgICAgICAgaWYgKGhpdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoaXQuaGFzQ2xhc3MoXCJ0cmVlLWV4cGFuZGVkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF83NyA9IF9jKF83MywgXzc0KTtcbiAgICAgICAgaWYgKF83Ni5vbkJlZm9yZUV4cGFuZC5jYWxsKF83MywgXzc3KSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhpdC5yZW1vdmVDbGFzcyhcInRyZWUtY29sbGFwc2VkIHRyZWUtY29sbGFwc2VkLWhvdmVyXCIpLmFkZENsYXNzKFwidHJlZS1leHBhbmRlZFwiKTtcbiAgICAgICAgaGl0Lm5leHQoKS5hZGRDbGFzcyhcInRyZWUtZm9sZGVyLW9wZW5cIik7XG4gICAgICAgIHZhciB1bCA9ICQoXzc0KS5uZXh0KCk7XG4gICAgICAgIGlmICh1bC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChfNzYuYW5pbWF0ZSkge1xuICAgICAgICAgICAgICAgIHVsLnNsaWRlRG93bihcIm5vcm1hbFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXzc3LnN0YXRlID0gXCJvcGVuXCI7XG4gICAgICAgICAgICAgICAgICAgIF83Ni5vbkV4cGFuZC5jYWxsKF83MywgXzc3KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF83NSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXzc1KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdWwuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAgICAgICAgIF83Ny5zdGF0ZSA9IFwib3BlblwiO1xuICAgICAgICAgICAgICAgIF83Ni5vbkV4cGFuZC5jYWxsKF83MywgXzc3KTtcbiAgICAgICAgICAgICAgICBpZiAoXzc1KSB7XG4gICAgICAgICAgICAgICAgICAgIF83NSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBfNzggPSAkKFwiPHVsIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmVcXFwiPjwvdWw+XCIpLmluc2VydEFmdGVyKF83NCk7XG4gICAgICAgICAgICBfNjgoXzczLCBfNzhbMF0sIHtcbiAgICAgICAgICAgICAgICBpZDogXzc3LmlkXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoXzc4LmlzKFwiOmVtcHR5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIF83OC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF83Ni5hbmltYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIF83OC5zbGlkZURvd24oXCJub3JtYWxcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfNzcuc3RhdGUgPSBcIm9wZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF83Ni5vbkV4cGFuZC5jYWxsKF83MywgXzc3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfNzUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfNzUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXzc4LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgXzc3LnN0YXRlID0gXCJvcGVuXCI7XG4gICAgICAgICAgICAgICAgICAgIF83Ni5vbkV4cGFuZC5jYWxsKF83MywgXzc3KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF83NSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXzc1KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfNzkoXzdhLCBfN2IpIHtcbiAgICAgICAgdmFyIF83YyA9ICQuZGF0YShfN2EsIFwidHJlZVwiKS5vcHRpb25zO1xuICAgICAgICB2YXIgaGl0ID0gJChfN2IpLmNoaWxkcmVuKFwic3Bhbi50cmVlLWhpdFwiKTtcbiAgICAgICAgaWYgKGhpdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoaXQuaGFzQ2xhc3MoXCJ0cmVlLWNvbGxhcHNlZFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfN2QgPSBfYyhfN2EsIF83Yik7XG4gICAgICAgIGlmIChfN2Mub25CZWZvcmVDb2xsYXBzZS5jYWxsKF83YSwgXzdkKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhpdC5yZW1vdmVDbGFzcyhcInRyZWUtZXhwYW5kZWQgdHJlZS1leHBhbmRlZC1ob3ZlclwiKS5hZGRDbGFzcyhcInRyZWUtY29sbGFwc2VkXCIpO1xuICAgICAgICBoaXQubmV4dCgpLnJlbW92ZUNsYXNzKFwidHJlZS1mb2xkZXItb3BlblwiKTtcbiAgICAgICAgdmFyIHVsID0gJChfN2IpLm5leHQoKTtcbiAgICAgICAgaWYgKF83Yy5hbmltYXRlKSB7XG4gICAgICAgICAgICB1bC5zbGlkZVVwKFwibm9ybWFsXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF83ZC5zdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgICAgICAgICAgXzdjLm9uQ29sbGFwc2UuY2FsbChfN2EsIF83ZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVsLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgXzdkLnN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgICAgIF83Yy5vbkNvbGxhcHNlLmNhbGwoXzdhLCBfN2QpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF83ZShfN2YsIF84MCkge1xuICAgICAgICB2YXIgaGl0ID0gJChfODApLmNoaWxkcmVuKFwic3Bhbi50cmVlLWhpdFwiKTtcbiAgICAgICAgaWYgKGhpdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoaXQuaGFzQ2xhc3MoXCJ0cmVlLWV4cGFuZGVkXCIpKSB7XG4gICAgICAgICAgICBfNzkoXzdmLCBfODApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXzcyKF83ZiwgXzgwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfODEoXzgyLCBfODMpIHtcbiAgICAgICAgdmFyIF84NCA9IF80YShfODIsIF84Myk7XG4gICAgICAgIGlmIChfODMpIHtcbiAgICAgICAgICAgIF84NC51bnNoaWZ0KF9jKF84MiwgXzgzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfODQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF83MihfODIsIF84NFtpXS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF84NShfODYsIF84Nykge1xuICAgICAgICB2YXIgXzg4ID0gW107XG4gICAgICAgIHZhciBwID0gXzg5KF84NiwgXzg3KTtcbiAgICAgICAgd2hpbGUgKHApIHtcbiAgICAgICAgICAgIF84OC51bnNoaWZ0KHApO1xuICAgICAgICAgICAgcCA9IF84OShfODYsIHAudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF84OC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgXzcyKF84NiwgXzg4W2ldLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gXzhhKF84YiwgXzhjKSB7XG4gICAgICAgIHZhciBjID0gJChfOGIpLnBhcmVudCgpO1xuICAgICAgICB3aGlsZSAoY1swXS50YWdOYW1lICE9IFwiQk9EWVwiICYmIGMuY3NzKFwib3ZlcmZsb3cteVwiKSAhPSBcImF1dG9cIikge1xuICAgICAgICAgICAgYyA9IGMucGFyZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSAkKF84Yyk7XG4gICAgICAgIHZhciBfOGQgPSBuLm9mZnNldCgpLnRvcDtcbiAgICAgICAgaWYgKGNbMF0udGFnTmFtZSAhPSBcIkJPRFlcIikge1xuICAgICAgICAgICAgdmFyIF84ZSA9IGMub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgaWYgKF84ZCA8IF84ZSkge1xuICAgICAgICAgICAgICAgIGMuc2Nyb2xsVG9wKGMuc2Nyb2xsVG9wKCkgKyBfOGQgLSBfOGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXzhkICsgbi5vdXRlckhlaWdodCgpID4gXzhlICsgYy5vdXRlckhlaWdodCgpIC0gMTgpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5zY3JvbGxUb3AoYy5zY3JvbGxUb3AoKSArIF84ZCArIG4ub3V0ZXJIZWlnaHQoKSAtIF84ZSAtIGMub3V0ZXJIZWlnaHQoKSArIDE4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnNjcm9sbFRvcChfOGQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF84ZihfOTAsIF85MSkge1xuICAgICAgICB2YXIgXzkyID0gXzRhKF85MCwgXzkxKTtcbiAgICAgICAgaWYgKF85MSkge1xuICAgICAgICAgICAgXzkyLnVuc2hpZnQoX2MoXzkwLCBfOTEpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF85Mi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgXzc5KF85MCwgXzkyW2ldLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gXzkzKF85NCwgXzk1KSB7XG4gICAgICAgIHZhciBfOTYgPSAkKF85NS5wYXJlbnQpO1xuICAgICAgICB2YXIgXzk3ID0gXzk1LmRhdGE7XG4gICAgICAgIGlmICghXzk3KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXzk3ID0gJC5pc0FycmF5KF85NykgPyBfOTcgOiBbXzk3XTtcbiAgICAgICAgaWYgKCFfOTcubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVsO1xuICAgICAgICBpZiAoXzk2Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB1bCA9ICQoXzk0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChfNDYoXzk0LCBfOTZbMF0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIF85OCA9IF85Ni5maW5kKFwic3Bhbi50cmVlLWljb25cIik7XG4gICAgICAgICAgICAgICAgXzk4LnJlbW92ZUNsYXNzKFwidHJlZS1maWxlXCIpLmFkZENsYXNzKFwidHJlZS1mb2xkZXIgdHJlZS1mb2xkZXItb3BlblwiKTtcbiAgICAgICAgICAgICAgICB2YXIgaGl0ID0gJChcIjxzcGFuIGNsYXNzPVxcXCJ0cmVlLWhpdCB0cmVlLWV4cGFuZGVkXFxcIj48L3NwYW4+XCIpLmluc2VydEJlZm9yZShfOTgpO1xuICAgICAgICAgICAgICAgIGlmIChoaXQucHJldigpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBoaXQucHJldigpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsID0gXzk2Lm5leHQoKTtcbiAgICAgICAgICAgIGlmICghdWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdWwgPSAkKFwiPHVsPjwvdWw+XCIpLmluc2VydEFmdGVyKF85Nik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXzRiKF85NCwgdWxbMF0sIF85NywgdHJ1ZSk7XG4gICAgICAgIF80MShfOTQsIHVsLnByZXYoKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF85OShfOWEsIF85Yikge1xuICAgICAgICB2YXIgcmVmID0gXzliLmJlZm9yZSB8fCBfOWIuYWZ0ZXI7XG4gICAgICAgIHZhciBfOWMgPSBfODkoXzlhLCByZWYpO1xuICAgICAgICB2YXIgXzlkID0gXzliLmRhdGE7XG4gICAgICAgIGlmICghXzlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXzlkID0gJC5pc0FycmF5KF85ZCkgPyBfOWQgOiBbXzlkXTtcbiAgICAgICAgaWYgKCFfOWQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXzkzKF85YSwge1xuICAgICAgICAgICAgcGFyZW50OiAoXzljID8gXzljLnRhcmdldCA6IG51bGwpLFxuICAgICAgICAgICAgZGF0YTogXzlkXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbGkgPSAkKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXzlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaSA9IGxpLmFkZCgkKFwiI1wiICsgXzlkW2ldLmRvbUlkKS5wYXJlbnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF85Yi5iZWZvcmUpIHtcbiAgICAgICAgICAgIGxpLmluc2VydEJlZm9yZSgkKHJlZikucGFyZW50KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGkuaW5zZXJ0QWZ0ZXIoJChyZWYpLnBhcmVudCgpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfOWUoXzlmLCBfYTApIHtcbiAgICAgICAgdmFyIF9hMSA9IGRlbChfYTApO1xuICAgICAgICAkKF9hMCkucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgIGlmIChfYTEpIHtcbiAgICAgICAgICAgIGlmICghX2ExLmNoaWxkcmVuIHx8ICFfYTEuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hMiA9ICQoX2ExLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgX2EyLmZpbmQoXCIudHJlZS1pY29uXCIpLnJlbW92ZUNsYXNzKFwidHJlZS1mb2xkZXJcIikuYWRkQ2xhc3MoXCJ0cmVlLWZpbGVcIik7XG4gICAgICAgICAgICAgICAgX2EyLmZpbmQoXCIudHJlZS1oaXRcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJChcIjxzcGFuIGNsYXNzPVxcXCJ0cmVlLWluZGVudFxcXCI+PC9zcGFuPlwiKS5wcmVwZW5kVG8oX2EyKTtcbiAgICAgICAgICAgICAgICBfYTIubmV4dCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXzU0KF85ZiwgX2ExKTtcbiAgICAgICAgICAgIF80MShfOWYsIF9hMS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIF81YShfOWYsIF85Zik7XG5cbiAgICAgICAgZnVuY3Rpb24gZGVsKF9hMykge1xuICAgICAgICAgICAgdmFyIGlkID0gJChfYTMpLmF0dHIoXCJpZFwiKTtcbiAgICAgICAgICAgIHZhciBfYTQgPSBfODkoXzlmLCBfYTMpO1xuICAgICAgICAgICAgdmFyIGNjID0gX2E0ID8gX2E0LmNoaWxkcmVuIDogJC5kYXRhKF85ZiwgXCJ0cmVlXCIpLmRhdGE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNjW2ldLmRvbUlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9hNDtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gXzU0KF9hNSwgX2E2KSB7XG4gICAgICAgIHZhciBfYTcgPSAkLmRhdGEoX2E1LCBcInRyZWVcIikub3B0aW9ucztcbiAgICAgICAgdmFyIF9hOCA9ICQoX2E2LnRhcmdldCk7XG4gICAgICAgIHZhciBfYTkgPSBfYyhfYTUsIF9hNi50YXJnZXQpO1xuICAgICAgICB2YXIgX2FhID0gX2E5LmNoZWNrZWQ7XG4gICAgICAgIGlmIChfYTkuaWNvbkNscykge1xuICAgICAgICAgICAgX2E4LmZpbmQoXCIudHJlZS1pY29uXCIpLnJlbW92ZUNsYXNzKF9hOS5pY29uQ2xzKTtcbiAgICAgICAgfVxuICAgICAgICAkLmV4dGVuZChfYTksIF9hNik7XG4gICAgICAgIF9hOC5maW5kKFwiLnRyZWUtdGl0bGVcIikuaHRtbChfYTcuZm9ybWF0dGVyLmNhbGwoX2E1LCBfYTkpKTtcbiAgICAgICAgaWYgKF9hOS5pY29uQ2xzKSB7XG4gICAgICAgICAgICBfYTguZmluZChcIi50cmVlLWljb25cIikuYWRkQ2xhc3MoX2E5Lmljb25DbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfYWEgIT0gX2E5LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIF8zMihfYTUsIF9hNi50YXJnZXQsIF9hOS5jaGVja2VkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfYWIoX2FjKSB7XG4gICAgICAgIHZhciBfYWQgPSBfYWUoX2FjKTtcbiAgICAgICAgcmV0dXJuIF9hZC5sZW5ndGggPyBfYWRbMF0gOiBudWxsO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfYWUoX2FmKSB7XG4gICAgICAgIHZhciBfYjAgPSAkLmRhdGEoX2FmLCBcInRyZWVcIikuZGF0YTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfYjAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9iMShfYjBbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfYjA7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF80YShfYjIsIF9iMykge1xuICAgICAgICB2YXIgX2I0ID0gW107XG4gICAgICAgIHZhciBuID0gX2MoX2IyLCBfYjMpO1xuICAgICAgICB2YXIgX2I1ID0gbiA/IG4uY2hpbGRyZW4gOiAkLmRhdGEoX2IyLCBcInRyZWVcIikuZGF0YTtcbiAgICAgICAgXzU4KF9iNSwgZnVuY3Rpb24oX2I2KSB7XG4gICAgICAgICAgICBfYjQucHVzaChfYjEoX2I2KSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX2I0O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfODkoX2I3LCBfYjgpIHtcbiAgICAgICAgdmFyIHAgPSAkKF9iOCkuY2xvc2VzdChcInVsXCIpLnByZXZBbGwoXCJkaXYudHJlZS1ub2RlOmZpcnN0XCIpO1xuICAgICAgICByZXR1cm4gX2MoX2I3LCBwWzBdKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2I5KF9iYSwgX2JiKSB7XG4gICAgICAgIF9iYiA9IF9iYiB8fCBcImNoZWNrZWRcIjtcbiAgICAgICAgaWYgKCEkLmlzQXJyYXkoX2JiKSkge1xuICAgICAgICAgICAgX2JiID0gW19iYl07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9iYyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9iYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHMgPSBfYmJbaV07XG4gICAgICAgICAgICBpZiAocyA9PSBcImNoZWNrZWRcIikge1xuICAgICAgICAgICAgICAgIF9iYy5wdXNoKFwic3Bhbi50cmVlLWNoZWNrYm94MVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHMgPT0gXCJ1bmNoZWNrZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBfYmMucHVzaChcInNwYW4udHJlZS1jaGVja2JveDBcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMgPT0gXCJpbmRldGVybWluYXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iYy5wdXNoKFwic3Bhbi50cmVlLWNoZWNrYm94MlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgX2JkID0gW107XG4gICAgICAgICQoX2JhKS5maW5kKF9iYy5qb2luKFwiLFwiKSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBfYmUgPSAkKHRoaXMpLnBhcmVudCgpO1xuICAgICAgICAgICAgX2JkLnB1c2goX2MoX2JhLCBfYmVbMF0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfYmQ7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9iZihfYzApIHtcbiAgICAgICAgdmFyIF9jMSA9ICQoX2MwKS5maW5kKFwiZGl2LnRyZWUtbm9kZS1zZWxlY3RlZFwiKTtcbiAgICAgICAgcmV0dXJuIF9jMS5sZW5ndGggPyBfYyhfYzAsIF9jMVswXSkgOiBudWxsO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfYzIoX2MzLCBfYzQpIHtcbiAgICAgICAgdmFyIF9jNSA9IF9jKF9jMywgX2M0KTtcbiAgICAgICAgaWYgKF9jNSAmJiBfYzUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIF81OChfYzUuY2hpbGRyZW4sIGZ1bmN0aW9uKF9jNikge1xuICAgICAgICAgICAgICAgIF9iMShfYzYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9jNTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2MoX2M3LCBfYzgpIHtcbiAgICAgICAgcmV0dXJuIF81MyhfYzcsIFwiZG9tSWRcIiwgJChfYzgpLmF0dHIoXCJpZFwiKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9jOShfY2EsIGlkKSB7XG4gICAgICAgIHJldHVybiBfNTMoX2NhLCBcImlkXCIsIGlkKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gXzUzKF9jYiwgX2NjLCBfY2QpIHtcbiAgICAgICAgdmFyIF9jZSA9ICQuZGF0YShfY2IsIFwidHJlZVwiKS5kYXRhO1xuICAgICAgICB2YXIgX2NmID0gbnVsbDtcbiAgICAgICAgXzU4KF9jZSwgZnVuY3Rpb24oX2QwKSB7XG4gICAgICAgICAgICBpZiAoX2QwW19jY10gPT0gX2NkKSB7XG4gICAgICAgICAgICAgICAgX2NmID0gX2IxKF9kMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9jZjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2IxKF9kMSkge1xuICAgICAgICB2YXIgZCA9ICQoXCIjXCIgKyBfZDEuZG9tSWQpO1xuICAgICAgICBfZDEudGFyZ2V0ID0gZFswXTtcbiAgICAgICAgX2QxLmNoZWNrZWQgPSBkLmZpbmQoXCIudHJlZS1jaGVja2JveFwiKS5oYXNDbGFzcyhcInRyZWUtY2hlY2tib3gxXCIpO1xuICAgICAgICByZXR1cm4gX2QxO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfNTgoX2QyLCBfZDMpIHtcbiAgICAgICAgdmFyIF9kNCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9kMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2Q0LnB1c2goX2QyW2ldKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoX2Q0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIF9kNSA9IF9kNC5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKF9kMyhfZDUpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9kNS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBfZDUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgX2Q0LnVuc2hpZnQoX2Q1LmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2Q2KF9kNywgX2Q4KSB7XG4gICAgICAgIHZhciBfZDkgPSAkLmRhdGEoX2Q3LCBcInRyZWVcIikub3B0aW9ucztcbiAgICAgICAgdmFyIF9kYSA9IF9jKF9kNywgX2Q4KTtcbiAgICAgICAgaWYgKF9kOS5vbkJlZm9yZVNlbGVjdC5jYWxsKF9kNywgX2RhKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQoX2Q3KS5maW5kKFwiZGl2LnRyZWUtbm9kZS1zZWxlY3RlZFwiKS5yZW1vdmVDbGFzcyhcInRyZWUtbm9kZS1zZWxlY3RlZFwiKTtcbiAgICAgICAgJChfZDgpLmFkZENsYXNzKFwidHJlZS1ub2RlLXNlbGVjdGVkXCIpO1xuICAgICAgICBfZDkub25TZWxlY3QuY2FsbChfZDcsIF9kYSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF80NihfZGIsIF9kYykge1xuICAgICAgICByZXR1cm4gJChfZGMpLmNoaWxkcmVuKFwic3Bhbi50cmVlLWhpdFwiKS5sZW5ndGggPT0gMDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2RkKF9kZSwgX2RmKSB7XG4gICAgICAgIHZhciBfZTAgPSAkLmRhdGEoX2RlLCBcInRyZWVcIikub3B0aW9ucztcbiAgICAgICAgdmFyIF9lMSA9IF9jKF9kZSwgX2RmKTtcbiAgICAgICAgaWYgKF9lMC5vbkJlZm9yZUVkaXQuY2FsbChfZGUsIF9lMSkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKF9kZikuY3NzKFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZVwiKTtcbiAgICAgICAgdmFyIG50ID0gJChfZGYpLmZpbmQoXCIudHJlZS10aXRsZVwiKTtcbiAgICAgICAgdmFyIF9lMiA9IG50Lm91dGVyV2lkdGgoKTtcbiAgICAgICAgbnQuZW1wdHkoKTtcbiAgICAgICAgdmFyIF9lMyA9ICQoXCI8aW5wdXQgY2xhc3M9XFxcInRyZWUtZWRpdG9yXFxcIj5cIikuYXBwZW5kVG8obnQpO1xuICAgICAgICBfZTMudmFsKF9lMS50ZXh0KS5mb2N1cygpO1xuICAgICAgICBfZTMud2lkdGgoX2UyICsgMjApO1xuICAgICAgICBfZTMuaGVpZ2h0KGRvY3VtZW50LmNvbXBhdE1vZGUgPT0gXCJDU1MxQ29tcGF0XCIgPyAoMTggLSAoX2UzLm91dGVySGVpZ2h0KCkgLSBfZTMuaGVpZ2h0KCkpKSA6IDE4KTtcbiAgICAgICAgX2UzLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLmJpbmQoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSkuYmluZChcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KS5iaW5kKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICAgICAgX2U0KF9kZSwgX2RmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gMjcpIHtcbiAgICAgICAgICAgICAgICAgICAgX2VhKF9kZSwgX2RmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuYmluZChcImJsdXJcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIF9lNChfZGUsIF9kZik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfZTQoX2U1LCBfZTYpIHtcbiAgICAgICAgdmFyIF9lNyA9ICQuZGF0YShfZTUsIFwidHJlZVwiKS5vcHRpb25zO1xuICAgICAgICAkKF9lNikuY3NzKFwicG9zaXRpb25cIiwgXCJcIik7XG4gICAgICAgIHZhciBfZTggPSAkKF9lNikuZmluZChcImlucHV0LnRyZWUtZWRpdG9yXCIpO1xuICAgICAgICB2YXIgdmFsID0gX2U4LnZhbCgpO1xuICAgICAgICBfZTgucmVtb3ZlKCk7XG4gICAgICAgIHZhciBfZTkgPSBfYyhfZTUsIF9lNik7XG4gICAgICAgIF9lOS50ZXh0ID0gdmFsO1xuICAgICAgICBfNTQoX2U1LCBfZTkpO1xuICAgICAgICBfZTcub25BZnRlckVkaXQuY2FsbChfZTUsIF9lOSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9lYShfZWIsIF9lYykge1xuICAgICAgICB2YXIgX2VkID0gJC5kYXRhKF9lYiwgXCJ0cmVlXCIpLm9wdGlvbnM7XG4gICAgICAgICQoX2VjKS5jc3MoXCJwb3NpdGlvblwiLCBcIlwiKTtcbiAgICAgICAgJChfZWMpLmZpbmQoXCJpbnB1dC50cmVlLWVkaXRvclwiKS5yZW1vdmUoKTtcbiAgICAgICAgdmFyIF9lZSA9IF9jKF9lYiwgX2VjKTtcbiAgICAgICAgXzU0KF9lYiwgX2VlKTtcbiAgICAgICAgX2VkLm9uQ2FuY2VsRWRpdC5jYWxsKF9lYiwgX2VlKTtcbiAgICB9O1xuICAgICQuZm4udHJlZSA9IGZ1bmN0aW9uKF9lZiwgX2YwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgX2VmID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAkLmZuLnRyZWUubWV0aG9kc1tfZWZdKHRoaXMsIF9mMCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9lZiA9IF9lZiB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBfZjEgPSAkLmRhdGEodGhpcywgXCJ0cmVlXCIpO1xuICAgICAgICAgICAgdmFyIF9mMjtcbiAgICAgICAgICAgIGlmIChfZjEpIHtcbiAgICAgICAgICAgICAgICBfZjIgPSAkLmV4dGVuZChfZjEub3B0aW9ucywgX2VmKTtcbiAgICAgICAgICAgICAgICBfZjEub3B0aW9ucyA9IF9mMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2YyID0gJC5leHRlbmQoe30sICQuZm4udHJlZS5kZWZhdWx0cywgJC5mbi50cmVlLnBhcnNlT3B0aW9ucyh0aGlzKSwgX2VmKTtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgXCJ0cmVlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX2YyLFxuICAgICAgICAgICAgICAgICAgICB0cmVlOiBfMSh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgX2YzID0gJC5mbi50cmVlLnBhcnNlRGF0YSh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoX2YzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBfNGIodGhpcywgdGhpcywgX2YzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfNCh0aGlzKTtcbiAgICAgICAgICAgIGlmIChfZjIuZGF0YSkge1xuICAgICAgICAgICAgICAgIF80Yih0aGlzLCB0aGlzLCBfZjIuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfNjgodGhpcywgdGhpcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgJC5mbi50cmVlLm1ldGhvZHMgPSB7XG4gICAgICAgIG9wdGlvbnM6IGZ1bmN0aW9uKGpxKSB7XG4gICAgICAgICAgICByZXR1cm4gJC5kYXRhKGpxWzBdLCBcInRyZWVcIikub3B0aW9ucztcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZERhdGE6IGZ1bmN0aW9uKGpxLCBfZjQpIHtcbiAgICAgICAgICAgIHJldHVybiBqcS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF80Yih0aGlzLCB0aGlzLCBfZjQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldE5vZGU6IGZ1bmN0aW9uKGpxLCBfZjUpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhqcVswXSwgX2Y1KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGF0YTogZnVuY3Rpb24oanEsIF9mNikge1xuICAgICAgICAgICAgcmV0dXJuIF9jMihqcVswXSwgX2Y2KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVsb2FkOiBmdW5jdGlvbihqcSwgX2Y3KSB7XG4gICAgICAgICAgICByZXR1cm4ganEuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2Y3KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfZjggPSAkKF9mNyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoaXQgPSBfZjguY2hpbGRyZW4oXCJzcGFuLnRyZWUtaGl0XCIpO1xuICAgICAgICAgICAgICAgICAgICBoaXQucmVtb3ZlQ2xhc3MoXCJ0cmVlLWV4cGFuZGVkIHRyZWUtZXhwYW5kZWQtaG92ZXJcIikuYWRkQ2xhc3MoXCJ0cmVlLWNvbGxhcHNlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgX2Y4Lm5leHQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgXzcyKHRoaXMsIF9mNyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICBfNjgodGhpcywgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFJvb3Q6IGZ1bmN0aW9uKGpxKSB7XG4gICAgICAgICAgICByZXR1cm4gX2FiKGpxWzBdKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Um9vdHM6IGZ1bmN0aW9uKGpxKSB7XG4gICAgICAgICAgICByZXR1cm4gX2FlKGpxWzBdKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UGFyZW50OiBmdW5jdGlvbihqcSwgX2Y5KSB7XG4gICAgICAgICAgICByZXR1cm4gXzg5KGpxWzBdLCBfZjkpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDaGlsZHJlbjogZnVuY3Rpb24oanEsIF9mYSkge1xuICAgICAgICAgICAgcmV0dXJuIF80YShqcVswXSwgX2ZhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2hlY2tlZDogZnVuY3Rpb24oanEsIF9mYikge1xuICAgICAgICAgICAgcmV0dXJuIF9iOShqcVswXSwgX2ZiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uKGpxKSB7XG4gICAgICAgICAgICByZXR1cm4gX2JmKGpxWzBdKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNMZWFmOiBmdW5jdGlvbihqcSwgX2ZjKSB7XG4gICAgICAgICAgICByZXR1cm4gXzQ2KGpxWzBdLCBfZmMpO1xuICAgICAgICB9LFxuICAgICAgICBmaW5kOiBmdW5jdGlvbihqcSwgaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBfYzkoanFbMF0sIGlkKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0OiBmdW5jdGlvbihqcSwgX2ZkKSB7XG4gICAgICAgICAgICByZXR1cm4ganEuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfZDYodGhpcywgX2ZkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjaGVjazogZnVuY3Rpb24oanEsIF9mZSkge1xuICAgICAgICAgICAgcmV0dXJuIGpxLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXzMyKHRoaXMsIF9mZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5jaGVjazogZnVuY3Rpb24oanEsIF9mZikge1xuICAgICAgICAgICAgcmV0dXJuIGpxLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXzMyKHRoaXMsIF9mZiwgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbGxhcHNlOiBmdW5jdGlvbihqcSwgXzEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGpxLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXzc5KHRoaXMsIF8xMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV4cGFuZDogZnVuY3Rpb24oanEsIF8xMDEpIHtcbiAgICAgICAgICAgIHJldHVybiBqcS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF83Mih0aGlzLCBfMTAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjb2xsYXBzZUFsbDogZnVuY3Rpb24oanEsIF8xMDIpIHtcbiAgICAgICAgICAgIHJldHVybiBqcS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF84Zih0aGlzLCBfMTAyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBleHBhbmRBbGw6IGZ1bmN0aW9uKGpxLCBfMTAzKSB7XG4gICAgICAgICAgICByZXR1cm4ganEuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfODEodGhpcywgXzEwMyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXhwYW5kVG86IGZ1bmN0aW9uKGpxLCBfMTA0KSB7XG4gICAgICAgICAgICByZXR1cm4ganEuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfODUodGhpcywgXzEwNCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsVG86IGZ1bmN0aW9uKGpxLCBfMTA1KSB7XG4gICAgICAgICAgICByZXR1cm4ganEuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfOGEodGhpcywgXzEwNSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbihqcSwgXzEwNikge1xuICAgICAgICAgICAgcmV0dXJuIGpxLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXzdlKHRoaXMsIF8xMDYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFwcGVuZDogZnVuY3Rpb24oanEsIF8xMDcpIHtcbiAgICAgICAgICAgIHJldHVybiBqcS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF85Myh0aGlzLCBfMTA3KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnQ6IGZ1bmN0aW9uKGpxLCBfMTA4KSB7XG4gICAgICAgICAgICByZXR1cm4ganEuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfOTkodGhpcywgXzEwOCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbihqcSwgXzEwOSkge1xuICAgICAgICAgICAgcmV0dXJuIGpxLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXzllKHRoaXMsIF8xMDkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHBvcDogZnVuY3Rpb24oanEsIF8xMGEpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0ganEudHJlZShcImdldERhdGFcIiwgXzEwYSk7XG4gICAgICAgICAgICBqcS50cmVlKFwicmVtb3ZlXCIsIF8xMGEpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oanEsIF8xMGIpIHtcbiAgICAgICAgICAgIHJldHVybiBqcS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF81NCh0aGlzLCBfMTBiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGVEbmQ6IGZ1bmN0aW9uKGpxKSB7XG4gICAgICAgICAgICByZXR1cm4ganEuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfMTEodGhpcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZURuZDogZnVuY3Rpb24oanEpIHtcbiAgICAgICAgICAgIHJldHVybiBqcS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF9kKHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGJlZ2luRWRpdDogZnVuY3Rpb24oanEsIF8xMGMpIHtcbiAgICAgICAgICAgIHJldHVybiBqcS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF9kZCh0aGlzLCBfMTBjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbmRFZGl0OiBmdW5jdGlvbihqcSwgXzEwZCkge1xuICAgICAgICAgICAgcmV0dXJuIGpxLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX2U0KHRoaXMsIF8xMGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbEVkaXQ6IGZ1bmN0aW9uKGpxLCBfMTBlKSB7XG4gICAgICAgICAgICByZXR1cm4ganEuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfZWEodGhpcywgXzEwZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgJC5mbi50cmVlLnBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uKF8xMGYpIHtcbiAgICAgICAgdmFyIHQgPSAkKF8xMGYpO1xuICAgICAgICByZXR1cm4gJC5leHRlbmQoe30sICQucGFyc2VyLnBhcnNlT3B0aW9ucyhfMTBmLCBbXCJ1cmxcIiwgXCJtZXRob2RcIiwge1xuICAgICAgICAgICAgY2hlY2tib3g6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgY2FzY2FkZUNoZWNrOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIG9ubHlMZWFmQ2hlY2s6IFwiYm9vbGVhblwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGFuaW1hdGU6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgbGluZXM6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgZG5kOiBcImJvb2xlYW5cIlxuICAgICAgICB9XSkpO1xuICAgIH07XG4gICAgJC5mbi50cmVlLnBhcnNlRGF0YSA9IGZ1bmN0aW9uKF8xMTApIHtcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgXzExMShkYXRhLCAkKF8xMTApKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG5cbiAgICAgICAgZnVuY3Rpb24gXzExMShhYSwgdHJlZSkge1xuICAgICAgICAgICAgdHJlZS5jaGlsZHJlbihcImxpXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJC5leHRlbmQoe30sICQucGFyc2VyLnBhcnNlT3B0aW9ucyh0aGlzLCBbXCJpZFwiLCBcImljb25DbHNcIiwgXCJzdGF0ZVwiXSksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogKG5vZGUuYXR0cihcImNoZWNrZWRcIikgPyB0cnVlIDogdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dCA9IG5vZGUuY2hpbGRyZW4oXCJzcGFuXCIpLmh0bWwoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHQgPSBub2RlLmh0bWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIF8xMTIgPSBub2RlLmNoaWxkcmVuKFwidWxcIik7XG4gICAgICAgICAgICAgICAgaWYgKF8xMTIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgXzExMShpdGVtLmNoaWxkcmVuLCBfMTEyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWEucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIF8xMTMgPSAxO1xuICAgIHZhciBfMTE0ID0ge1xuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKF8xMTUsIHVsLCBkYXRhKSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9ICQuZGF0YShfMTE1LCBcInRyZWVcIikub3B0aW9ucztcbiAgICAgICAgICAgIHZhciBfMTE2ID0gJCh1bCkucHJldihcImRpdi50cmVlLW5vZGVcIikuZmluZChcInNwYW4udHJlZS1pbmRlbnQsIHNwYW4udHJlZS1oaXRcIikubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNjID0gXzExNyhfMTE2LCBkYXRhKTtcbiAgICAgICAgICAgICQodWwpLmFwcGVuZChjYy5qb2luKFwiXCIpKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gXzExNyhfMTE4LCBfMTE5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNjID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfMTE5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gXzExOVtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uc3RhdGUgIT0gXCJvcGVuXCIgJiYgaXRlbS5zdGF0ZSAhPSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXRlID0gXCJvcGVuXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kb21JZCA9IFwiX2Vhc3l1aV90cmVlX1wiICsgXzExMysrO1xuICAgICAgICAgICAgICAgICAgICBjYy5wdXNoKFwiPGxpPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2MucHVzaChcIjxkaXYgaWQ9XFxcIlwiICsgaXRlbS5kb21JZCArIFwiXFxcIiBjbGFzcz1cXFwidHJlZS1ub2RlXFxcIj5cIik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgXzExODsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5wdXNoKFwiPHNwYW4gY2xhc3M9XFxcInRyZWUtaW5kZW50XFxcIj48L3NwYW4+XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnN0YXRlID09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnB1c2goXCI8c3BhbiBjbGFzcz1cXFwidHJlZS1oaXQgdHJlZS1jb2xsYXBzZWRcXFwiPjwvc3Bhbj5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5wdXNoKFwiPHNwYW4gY2xhc3M9XFxcInRyZWUtaWNvbiB0cmVlLWZvbGRlciBcIiArIChpdGVtLmljb25DbHMgPyBpdGVtLmljb25DbHMgOiBcIlwiKSArIFwiXFxcIj48L3NwYW4+XCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5wdXNoKFwiPHNwYW4gY2xhc3M9XFxcInRyZWUtaGl0IHRyZWUtZXhwYW5kZWRcXFwiPjwvc3Bhbj5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MucHVzaChcIjxzcGFuIGNsYXNzPVxcXCJ0cmVlLWljb24gdHJlZS1mb2xkZXIgdHJlZS1mb2xkZXItb3BlbiBcIiArIChpdGVtLmljb25DbHMgPyBpdGVtLmljb25DbHMgOiBcIlwiKSArIFwiXFxcIj48L3NwYW4+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5wdXNoKFwiPHNwYW4gY2xhc3M9XFxcInRyZWUtaW5kZW50XFxcIj48L3NwYW4+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnB1c2goXCI8c3BhbiBjbGFzcz1cXFwidHJlZS1pY29uIHRyZWUtZmlsZSBcIiArIChpdGVtLmljb25DbHMgPyBpdGVtLmljb25DbHMgOiBcIlwiKSArIFwiXFxcIj48L3NwYW4+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLmNoZWNrYm94KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKCFvcHRzLm9ubHlMZWFmQ2hlY2spIHx8IChvcHRzLm9ubHlMZWFmQ2hlY2sgJiYgKCFpdGVtLmNoaWxkcmVuIHx8ICFpdGVtLmNoaWxkcmVuLmxlbmd0aCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MucHVzaChcIjxzcGFuIGNsYXNzPVxcXCJ0cmVlLWNoZWNrYm94IHRyZWUtY2hlY2tib3gwXFxcIj48L3NwYW4+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNjLnB1c2goXCI8c3BhbiBjbGFzcz1cXFwidHJlZS10aXRsZVxcXCI+XCIgKyBvcHRzLmZvcm1hdHRlci5jYWxsKF8xMTUsIGl0ZW0pICsgXCI8L3NwYW4+XCIpO1xuICAgICAgICAgICAgICAgICAgICBjYy5wdXNoKFwiPC9kaXY+XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IF8xMTcoXzExOCArIDEsIGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MucHVzaChcIjx1bCBzdHlsZT1cXFwiZGlzcGxheTpcIiArIChpdGVtLnN0YXRlID09IFwiY2xvc2VkXCIgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIikgKyBcIlxcXCI+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MgPSBjYy5jb25jYXQodG1wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnB1c2goXCI8L3VsPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYy5wdXNoKFwiPC9saT5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjYztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgICQuZm4udHJlZS5kZWZhdWx0cyA9IHtcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgICAgY2hlY2tib3g6IGZhbHNlLFxuICAgICAgICBjYXNjYWRlQ2hlY2s6IHRydWUsXG4gICAgICAgIG9ubHlMZWFmQ2hlY2s6IGZhbHNlLFxuICAgICAgICBsaW5lczogZmFsc2UsXG4gICAgICAgIGRuZDogZmFsc2UsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUudGV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGVyOiBmdW5jdGlvbihfMTFhLCBfMTFiLCBfMTFjKSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9ICQodGhpcykudHJlZShcIm9wdGlvbnNcIik7XG4gICAgICAgICAgICBpZiAoIW9wdHMudXJsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBvcHRzLm1ldGhvZCxcbiAgICAgICAgICAgICAgICB1cmw6IG9wdHMudXJsLFxuICAgICAgICAgICAgICAgIGRhdGE6IF8xMWEsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgXzExYihkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXzExYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkRmlsdGVyOiBmdW5jdGlvbihkYXRhLCBfMTFkKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgdmlldzogXzExNCxcbiAgICAgICAgb25CZWZvcmVMb2FkOiBmdW5jdGlvbihub2RlLCBfMTFlKSB7fSxcbiAgICAgICAgb25Mb2FkU3VjY2VzczogZnVuY3Rpb24obm9kZSwgZGF0YSkge30sXG4gICAgICAgIG9uTG9hZEVycm9yOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbihub2RlKSB7fSxcbiAgICAgICAgb25EYmxDbGljazogZnVuY3Rpb24obm9kZSkge30sXG4gICAgICAgIG9uQmVmb3JlRXhwYW5kOiBmdW5jdGlvbihub2RlKSB7fSxcbiAgICAgICAgb25FeHBhbmQ6IGZ1bmN0aW9uKG5vZGUpIHt9LFxuICAgICAgICBvbkJlZm9yZUNvbGxhcHNlOiBmdW5jdGlvbihub2RlKSB7fSxcbiAgICAgICAgb25Db2xsYXBzZTogZnVuY3Rpb24obm9kZSkge30sXG4gICAgICAgIG9uQmVmb3JlQ2hlY2s6IGZ1bmN0aW9uKG5vZGUsIF8xMWYpIHt9LFxuICAgICAgICBvbkNoZWNrOiBmdW5jdGlvbihub2RlLCBfMTIwKSB7fSxcbiAgICAgICAgb25CZWZvcmVTZWxlY3Q6IGZ1bmN0aW9uKG5vZGUpIHt9LFxuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24obm9kZSkge30sXG4gICAgICAgIG9uQ29udGV4dE1lbnU6IGZ1bmN0aW9uKGUsIG5vZGUpIHt9LFxuICAgICAgICBvbkJlZm9yZURyYWc6IGZ1bmN0aW9uKG5vZGUpIHt9LFxuICAgICAgICBvblN0YXJ0RHJhZzogZnVuY3Rpb24obm9kZSkge30sXG4gICAgICAgIG9uU3RvcERyYWc6IGZ1bmN0aW9uKG5vZGUpIHt9LFxuICAgICAgICBvbkRyYWdFbnRlcjogZnVuY3Rpb24oXzEyMSwgXzEyMikge30sXG4gICAgICAgIG9uRHJhZ092ZXI6IGZ1bmN0aW9uKF8xMjMsIF8xMjQpIHt9LFxuICAgICAgICBvbkRyYWdMZWF2ZTogZnVuY3Rpb24oXzEyNSwgXzEyNikge30sXG4gICAgICAgIG9uQmVmb3JlRHJvcDogZnVuY3Rpb24oXzEyNywgXzEyOCwgXzEyOSkge30sXG4gICAgICAgIG9uRHJvcDogZnVuY3Rpb24oXzEyYSwgXzEyYiwgXzEyYykge30sXG4gICAgICAgIG9uQmVmb3JlRWRpdDogZnVuY3Rpb24obm9kZSkge30sXG4gICAgICAgIG9uQWZ0ZXJFZGl0OiBmdW5jdGlvbihub2RlKSB7fSxcbiAgICAgICAgb25DYW5jZWxFZGl0OiBmdW5jdGlvbihub2RlKSB7fVxuICAgIH07XG5cbn0pKGpRdWVyeSk7XG5cblxuICAgIGhhc01vZHVsZSA9ICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyk7XG4gICAgLy8gQ29tbW9uSlMgbW9kdWxlIGlzIGRlZmluZWRcbiAgICBpZiAoaGFzTW9kdWxlKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gJC5mbi50cmVlO1xuICAgIH1cbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFBhZ2VIZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdQYWdlSGVhZGVyJyxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLWhlYWRlciBwdWxsLWxlZnRcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCJ9LCB0aGlzLnByb3BzLnBhZ2VUaXRsZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYWdlSGVhZGVyO1xuIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUGFnZVNpemUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdQYWdlU2l6ZScsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIG9wdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyDliIbpobXlpKflsI/mlbDnu4RcbiAgICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsIC8vIOW9k+WJjeWIhumhteWkp+Wwj1xuICAgICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQgLy8g5YiG6aG15Zue6LCD5Ye95pWwXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKGZ1bmN0aW9uKG9wdGlvbiwga2V5KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHtrZXk6IGtleSwgdmFsdWU6IG9wdGlvbn0sIFwi5q+P6aG15pi+56S6IFwiLCBvcHRpb24sIFwiIOS4qlwiKTtcbiAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImlubGluZVwifSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwge3ZhbHVlOiB0aGlzLnByb3BzLnZhbHVlID8gdGhpcy5wcm9wcy52YWx1ZSA6ICcnLCBvbkNoYW5nZTogdGhpcy5fb25DaGFuZ2UsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2wgaW5wdXQteHNtYWxsIGlucHV0LXNtIGlucHV0LWlubGluZVwifSwgXG4gICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSxcbiAgICBfb25DaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2VTaXplO1xuIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEJvb3RzdHJhcCA9IHJlcXVpcmUoJ3JlYWN0LWJvb3RzdHJhcCcpO1xudmFyIGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc05hbWVzJyk7XG52YXIgUGFnZXIgPSBCb290c3RyYXAuUGFnZXI7XG52YXIgUGFnZUl0ZW0gPSBCb290c3RyYXAuUGFnZUl0ZW07XG5cbnZhciBQYWdpbmF0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnUGFnaW5hdGlvbicsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIHBhZ2VObzogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLCAvLyDlvZPliY3pobVcbiAgICAgIHRvdGFsUGFnZU5vOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsIC8vIOaAu+mhteaVsFxuICAgICAgb25TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQgLy8g5Zue6LCD5Ye95pWwXG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZSA6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4ge1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJldkNsYXNzTmFtZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgJ2Rpc2FibGVkJzogdGhpcy5wcm9wcy5wYWdlTm8gPD0gMVxuICAgICAgfSk7XG4gICAgICB2YXIgbmV4dENsYXNzTmFtZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgJ2Rpc2FibGVkJzogdGhpcy5wcm9wcy5wYWdlTm8gPj0gdGhpcy5wcm9wcy50b3RhbFBhZ2VOb1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZXIsIHtjbGFzc05hbWU6IFwibXRuIG1ibiB0ZXh0LWZvcmNlLXJpZ2h0XCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZUl0ZW0sIHtjbGFzc05hbWU6IHByZXZDbGFzc05hbWVzLCBvbkNsaWNrOiB0aGlzLl9wcmV2fSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge2NsYXNzTmFtZTogXCJmYSBmYS1hbmdsZS1kb3VibGUtbGVmdFwifSksIFwiIOS4iuS4gOmhtVwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VJdGVtLCB7Y2xhc3NOYW1lOiBuZXh0Q2xhc3NOYW1lcywgb25DbGljazogdGhpcy5fbmV4dH0sIFwi5LiL5LiA6aG1IFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7Y2xhc3NOYW1lOiBcImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwifSkpXG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgICB9LFxuICAgIF9wcmV2OiBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgcGFnZU5vID0gdGhpcy5wcm9wcy5wYWdlTm87XG4gICAgICBpZiAocGFnZU5vIDw9IDEpIHJldHVybjtcbiAgICAgIHBhZ2VOby0tO1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChwYWdlTm8pO1xuICAgIH0sXG4gICAgX25leHQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBwYWdlTm8gPSB0aGlzLnByb3BzLnBhZ2VObztcbiAgICAgIGlmIChwYWdlTm8gPj0gdGhpcy5wcm9wcy50b3RhbFBhZ2VObykgcmV0dXJuO1xuICAgICAgcGFnZU5vKys7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHBhZ2VObyk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFnaW5hdGlvbjtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFBvcnRsZXRIZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdQb3J0bGV0SGVhZGVyJyxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwb3J0bGV0LWhlYWRlciBwYW0gbWJuXCJ9LCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNhcHRpb25cIn0sIHRoaXMucHJvcHMudGl0bGUpLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFjdGlvbnNcIn0sIFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcnRsZXRIZWFkZXI7XG4iLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgU2VhcmNoUGFuZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJTZWFyY2hQYW5lXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldCh7XG4gICAgICAgICdwb3J0bGV0JzogdHJ1ZSxcbiAgICAgICAgJ2JveCc6IHRydWUsXG4gICAgICAgICdwb3J0bGV0LWdyZXknOiB0cnVlLFxuICAgICAgICAnaGlkZSc6ICF0aGlzLnByb3BzLnZpc2libGVcbiAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc2VzfSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwb3J0bGV0LWhlYWRlclwifSwgXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY2FwdGlvblwifSwgXCLmn6Xor6LmnaHku7ZcIiksIFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInRvb2xzXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7Y2xhc3NOYW1lOiBcImZhIGZhLWNoZXZyb24tdXBcIiwgb25DbGljazogdGhpcy5fdG9nZ2xlUGFuZWx9KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBvcnRsZXQtYm9keSBwdG4gcGJuXCIsIHJlZjogXCJwb3J0bGV0Qm9keVwifSwgXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicm93XCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICBfdG9nZ2xlUGFuZWw6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS50b2dnbGVDbGFzcygnZmEtY2hldnJvbi11cCBmYS1jaGV2cm9uLWRvd24nKTtcbiAgICAgICQodGhpcy5yZWZzLnBvcnRsZXRCb2R5LmdldERPTU5vZGUoKSkudG9nZ2xlKCk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VhcmNoUGFuZTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgc2VsZWN0MiA9IHJlcXVpcmUoJ3NlbGVjdDInKTtcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcblxudmFyIFNlbGVjdDJDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiU2VsZWN0MkNvbXBvbmVudFwiLFxuICBwcm9wVHlwZXM6IHtcbiAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRhdGFTZXQ6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyDmlbDmja7liJfooahcbiAgICBoYXNFcnJvcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3JDbGFzczogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblNlbGVjdGlvbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsIC8vIOW9k+mAieaLqeWujOaIkOaXtueahOWbnuiwg+WHveaVsO+8jOWPguaVsOS4uuW9k+WJjeW3sumAieaLqemhuVxuICAgIG11bHRpcGxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgLy8g5piv5ZCm5aSa6YCJXG4gICAgcGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMubnVtYmVyKSwgLy8g5Yid5aeL5YyW5pWw5o2u77yM6Iul5piv5aSa5Liq5o+Q5L6b5LiA5LiqaWQgbGlzdO+8jOiLpeaYr+WNleS4quaPkOS+m+S4gOS4qmlk5Y2z5Y+vXG4gICAgc3R5bGVXaWR0aDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgLy8gc3R5bGVzIGZvciBzZWxlY3QyXG4gICAgZW5hYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wgLy8gZGlzYWJsZWQgb3Igbm90XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgICAgZXJyb3JDbGFzczogJ2hhcy1lcnJvcicsXG4gICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICBwbGFjZWhvbGRlcjogJy0tLS0t6K+36YCJ5oupLS0tLS0nLFxuICAgICAgdmFsOiBbXSxcbiAgICAgIHN0eWxlV2lkdGg6ICcxMDAlJyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBkYXRhU2V0OiBbXVxuICAgIH1cbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHRpb25zOiB0aGlzLnByb3BzLm9wdGlvbnMgPyB0aGlzLnByb3BzLm9wdGlvbnMgOiB7fVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9pc0RhdGFVcGRhdGVkKHByZXZQcm9wcy5kYXRhU2V0KSkge1xuICAgICAgdGhpcy5jcmVhdGVTZWxlY3QyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcmV2UHJvcHMucGxhY2Vob2xkZXIgIT09IHRoaXMucHJvcHMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclRvKHRoaXMuZ2V0SW5wdXRFbGVtKCksIHRoaXMucHJvcHMucGxhY2Vob2xkZXIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdXBkYXRlVmFsID0gZmFsc2U7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMudmFsLmxlbmd0aCA9PSB0aGlzLnByb3BzLnZhbC5sZW5ndGgpIHtcbiAgICAgICAgJC5lYWNoKHByZXZQcm9wcy52YWwsIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgIGlmIChzZWxmLnByb3BzLnZhbFtpbmRleF0gIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHVwZGF0ZVZhbCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZVZhbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh1cGRhdGVWYWwpIHtcbiAgICAgICAgdGhpcy5nZXRJbnB1dEVsZW0oKS5zZWxlY3QyKCd2YWwnLCB0aGlzLnByb3BzLnZhbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2UHJvcHMuZW5hYmxlZCAhPSB0aGlzLnByb3BzLmVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5nZXRJbnB1dEVsZW0oKS5zZWxlY3QyKCdlbmFibGUnLCB0aGlzLnByb3BzLmVuYWJsZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIHZhciAkbm9kZSA9IHRoaXMuY3JlYXRlU2VsZWN0MigpO1xuICB9LFxuXG4gIGNyZWF0ZVNlbGVjdDI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWwgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLnZhbC5sZW5ndGggPiAwKSB7XG4gICAgICB2YWwgPSB0aGlzLnByb3BzLm11bHRpcGxlID8gdGhpcy5wcm9wcy52YWwgOiB0aGlzLnByb3BzLnZhbFswXTtcbiAgICB9XG5cbiAgICB2YXIgb3B0cyA9IHtcbiAgICAgIGRhdGE6IHRoaXMucHJvcHMuZGF0YVNldCxcbiAgICAgIG11bHRpcGxlOiB0aGlzLnByb3BzLm11bHRpcGxlLFxuICAgICAgdmFsOiB2YWxcbiAgICB9O1xuXG4gICAgb3B0cyA9IF8uZXh0ZW5kKHt9LCBvcHRzLCB0aGlzLnN0YXRlLm9wdGlvbnMpO1xuXG4gICAgdmFyICRlbCA9IHRoaXMuZ2V0SW5wdXRFbGVtKCk7XG5cbiAgICAkZWwudmFsKHZhbClcbiAgICAgICAuc2VsZWN0MihvcHRzKVxuICAgICAgIC5vbignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2UpXG4gICAgICAgLm9uKCdzZWxlY3QyLW9wZW4nLCB0aGlzLmhhbmRsZUVycm9yU3RhdGUpXG4gICAgICAgLnNlbGVjdDIoJ2VuYWJsZScsIHRoaXMucHJvcHMuZW5hYmxlZCk7XG5cbiAgICB0aGlzLnNldFBsYWNlaG9sZGVyVG8oJGVsLCB0aGlzLnByb3BzLnBsYWNlaG9sZGVyKTtcbiAgfSxcblxuICBzZXRQbGFjZWhvbGRlclRvOiBmdW5jdGlvbigkZWwsIHBsYWNlaG9sZGVyKSB7XG4gICAgaWYgKCFwbGFjZWhvbGRlcikge1xuICAgICAgcGxhY2Vob2xkZXIgPSAnJztcbiAgICB9XG4gICAgdmFyIGN1cnJEYXRhID0gJGVsLnNlbGVjdDIoJ2RhdGEnKTtcblxuICAgICRlbC5hdHRyKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcbiAgICAkZWwuc2VsZWN0MignZGF0YScsIG51bGwpO1xuICAgICRlbC5zZWxlY3QyKCdkYXRhJywge30pO1xuICAgICRlbC5zZWxlY3QyKCdkYXRhJywgY3VyckRhdGEpO1xuICB9LFxuXG4gIGhhbmRsZUVycm9yU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkZHJvcCA9ICQoJyNzZWxlY3QyLWRyb3AnKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gJGRyb3BbMF0uY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5oYXNFcnJvcikge1xuICAgICAgdmFyIGhhc0Vycm9yQ2xhc3MgPSAkLmluQXJyYXkodGhpcy5wcm9wcy5lcnJvckNsYXNzLCBjbGFzc05hbWUpO1xuXG4gICAgICBpZiAoaGFzRXJyb3JDbGFzcyA9PSAtMSkge1xuICAgICAgICAkZHJvcC5hZGRDbGFzcyh0aGlzLnByb3BzLmVycm9yQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkZHJvcC5yZW1vdmVDbGFzcyh0aGlzLnByb3BzLmVycm9yQ2xhc3MpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdGlvbikge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdGlvbihlLCB0aGlzLmdldElucHV0RWxlbSgpLnNlbGVjdDIoJ2RhdGEnKSk7XG4gICAgfVxuICB9LFxuXG4gIGdldElucHV0RWxlbTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICQoJyMnICsgdGhpcy5wcm9wcy5pZCk7XG4gIH0sXG5cbiAgX2lzRGF0YVVwZGF0ZWQ6IGZ1bmN0aW9uKG9sZERhdGEpIHtcbiAgICBpZiAob2xkRGF0YS5sZW5ndGggIT09IHRoaXMucHJvcHMuZGF0YVNldC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3R5bGUgPSB7d2lkdGg6IHRoaXMucHJvcHMuc3R5bGVXaWR0aH07XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogdGhpcy5wcm9wcy5oYXNFcnJvciA/IHRoaXMucHJvcHMuZXJyb3JDbGFzcyA6ICcnfSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJoaWRkZW5cIiwgc3R5bGU6IHN0eWxlLCBpZDogdGhpcy5wcm9wcy5pZH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0MkNvbXBvbmVudDtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTUvNS83LlxuICovXG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIFNpZGVCYXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiU2lkZUJhclwiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b2dnbGU6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQgOiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciAkdGhpcyA9ICQoJyNzaWRlYmFyLW1lbnUnKTtcblxuICAgICAgICAkdGhpcy5maW5kKCdhJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2hyZWYnKSA9PT0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLm5hdi1zZWNvbmQtbGV2ZWwsIC5uYXYtdGhpcmQtbGV2ZWwnKS5hZGRDbGFzcygnaW4nKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJyNzaWRlYmFyLW1lbnUgPiBsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAkdGhpcy5maW5kKCdsaS5hY3RpdmUnKS5oYXMoJ3VsJykuY2hpbGRyZW4oJ3VsJykuYWRkQ2xhc3MoJ2NvbGxhcHNlIGluJyk7XG4gICAgICAgICR0aGlzLmZpbmQoJ2xpJykubm90KCcuYWN0aXZlJykuaGFzKCd1bCcpLmNoaWxkcmVuKCd1bCcpLmFkZENsYXNzKCdjb2xsYXBzZScpO1xuXG4gICAgICAgICR0aGlzLmZpbmQoJ2xpJykuY2hpbGRyZW4oJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgJGxpbmsgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCRsaW5rLmF0dHIoJ2hyZWYnKSA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCRsaW5rLm5leHQoJ3VsJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCRsaW5rLnBhcmVudCgnbGknKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxpbmsucGFyZW50KCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5jaGlsZHJlbigndWwnKS5yZW1vdmVDbGFzcygnaW4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkbGluay5wYXJlbnQoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLmNoaWxkcmVuKCd1bCcpLmFkZENsYXNzKCdpbicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0YXRlLnRvZ2dsZSkge1xuICAgICAgICAgICAgICAgICAgICAkbGluay5wYXJlbnQoJ2xpJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuY2hpbGRyZW4oJ3VsJykucmVtb3ZlQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRsaW5rLnBhcmVudCgpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogKCRsaW5rLm9mZnNldCgpLnRvcCAtIDEwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sICdzbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbGluay5wYXJlbnQoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgbGlzdCA9IHRoaXMucHJvcHMubGlzdDtcbiAgICAgICAgdmFyIG1lbnUgPSBsaXN0ICYmIGxpc3QubGVuZ3RoID8gbGlzdC5tYXAoZnVuY3Rpb24oaXRlbSwga2V5KSB7XG4gICAgICAgICAgICBpZiAobnVsbCAhPT0gaXRlbS51cmwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGtleX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBpdGVtLnVybH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwibWVudS10aXRsZVwifSwgaXRlbS5uYW1lKSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmRhdGEgJiYgaXRlbS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGtleX0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcIm1lbnUtdGl0bGVcIn0sIGl0ZW0ubmFtZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImZhIGZhLWFycm93IGFycm93XCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm5hdiBuYXYtc2Vjb25kLWxldmVsIG10biBjb2xsYXBzZVwifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0YS5tYXAoZnVuY3Rpb24oc3ViLCBzdWJLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBzdWIudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBzdWJLZXl9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IHN1Yi51cmx9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7Y2xhc3NOYW1lOiBcImZhIGZhLWFuZ2xlLXJpZ2h0XCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJzdWJtZW51LXRpdGxlXCJ9LCBzdWIubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViLmRhdGEgJiYgc3ViLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2tleTogc3ViS2V5fSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtjbGFzc05hbWU6IFwiZmEgZmEtYW5nbGUtcmlnaHRcIn0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJzdWJtZW51LXRpdGxlXCJ9LCBzdWIubmFtZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImZhIGZhLWFycm93IGFycm93XCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm5hdiBuYXYtdGhpcmQtbGV2ZWwgbXRuIGNvbGxhcHNlXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWIuZGF0YS5tYXAoZnVuY3Rpb24odGhpcmQsIHRoaXJkS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2tleTogdGhpcmRLZXl9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiB0aGlyZC51cmx9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7Y2xhc3NOYW1lOiBcImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwifSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwic3VibWVudS10aXRsZVwifSwgdGhpcmQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBzdWJLZXl9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogc3ViLnVybH0sIHN1Yi5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwge2lkOiBcInNpZGViYXJcIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1kZWZhdWx0IG5hdmJhci1zdGF0aWMtc2lkZVwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic2lkZWJhci1jb2xsYXBzZSBtZW51LXNjcm9sbFwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtpZDogXCJzaWRlYmFyLW1lbnVcIiwgY2xhc3NOYW1lOiBcIm5hdiBtdG5cIn0sIFxuICAgICAgICAgICAgICAgICAgICBtZW51XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZUJhcjtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBTcGlubmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlNwaW5uZXJcIixcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInNwaW5uZXItY29udGFpbmVyXCJ9LCBcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzcGlubmVyXCJ9KVxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3Bpbm5lcjtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBudW1lcmFsID0gcmVxdWlyZSgnbnVtZXJhbCcpO1xuXG52YXIgQ3VycmVuY3lURCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdDdXJyZW5jeVREJyxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bWVyYWwodGhpcy5wcm9wcy5jaGlsZHJlbikuZm9ybWF0KCckMCwwLjAwJyk7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCByZXN1bHQpXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ3VycmVuY3lURDtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBNYXJzaGFsbCBvbiAxLzEyLzE1LlxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG52YXIgVGltZVREID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlRpbWVURFwiLFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgdGhpcy5wcm9wcy5jaGlsZHJlbiA/IG1vbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuKS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6ICcgLSAnKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZVREO1xuIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIFRvVG9wID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnVG9Ub3AnLFxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA8IDIwMCkge1xuICAgICAgICAgICAgJCgnI3RvdG9wJykuZmFkZU91dCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjdG90b3AnKS5mYWRlSW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aWQ6IFwidG90b3BcIiwgb25DbGljazogdGhpcy5faGFuZGxlQ2xpY2ssIGhyZWY6IFwiI1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge2NsYXNzTmFtZTogXCJmYSBmYS1hbmdsZS11cFwifSkpXG4gICAgICAgICk7XG4gICAgfSxcbiAgICBfaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6MH0sICdmYXN0Jyk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVG9Ub3A7XG4iLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbms7XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgUHJvZmlsZURyb3Bkb3duID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlByb2ZpbGVEcm9wZG93blwiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL2kuaW1ndXIuY29tL3p2ck43eE4uanBnPzEnLFxuICAgICAgICAgICAgbmFtZTogJ2d1ZXN0J1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXQ7XG4gICAgICAgIHZhciBjbGFzc2VzID0gY3goe1xuICAgICAgICAgICAgXCJkcm9wZG93blwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ0b3BiYXItdXNlclwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRoaXMuc3RhdGUuaXNPcGVuXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJuYXYgbmF2YmFyIG5hdmJhci10b3AtbGlua3MgcHVsbC1yaWdodCBtYm4gbXRuXCIsIG9uTW91c2VFbnRlcjogdGhpcy5fdG9nZ2xlRHJvcGRvd24sIG9uTW91c2VMZWF2ZTogdGhpcy5fdG9nZ2xlRHJvcGRvd259LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogY2xhc3Nlc30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIiwgY2xhc3NOYW1lOiBcImRyb3Bkb3duLXRvZ2dsZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiB0aGlzLnN0YXRlLmF2YXRhciwgYWx0OiBcIlwiLCBjbGFzc05hbWU6IFwiaW1nLXJlc3BvbnNpdmUgaW1nLWNpcmNsZVwifSksIFwiwqBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJoaWRkZW4teHNcIn0sIHRoaXMuc3RhdGUubmFtZSksIFwiwqBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJjYXJldFwifSkpLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwiZHJvcGRvd24tbWVudSBkcm9wZG93bi11c2VyIHB1bGwtcmlnaHRcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIi9zZXR0aW5nc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge2NsYXNzTmFtZTogXCJmYSBmYS11c2VyXCJ9KSwgXCLorr7nva5cIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcImRpdmlkZXJcIn0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCIsIG9uQ2xpY2s6IHRoaXMucHJvcHMubG9nb3V0fSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge2NsYXNzTmFtZTogXCJmYSBmYS1zaWduLW91dFwifSksIFwi6YCA5Ye6XCIpKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0sXG4gICAgX3RvZ2dsZURyb3Bkb3duOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuIH0pO1xuICAgIH1cbn0pO1xuXG52YXIgVG9wQmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnVG9wQmFyJyxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS1oZWFkZXItdG9wYmFyXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibmF2XCIsIHtpZDogXCJ0b3BiYXJcIiwgcm9sZTogXCJuYXZpZ2F0aW9uXCIsIHN0eWxlOiBzdHlsZSwgY2xhc3NOYW1lOiBcIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItc3RhdGljLXRvcFwifSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJuYXZiYXItaGVhZGVyXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge3R5cGU6IFwiYnV0dG9uXCIsIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLCBcImRhdGEtdGFyZ2V0XCI6IFwiLnNpZGViYXItY29sbGFwc2VcIiwgY2xhc3NOYW1lOiBcIm5hdmJhci10b2dnbGVcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwic3Itb25seVwifSwgXCJUb2dnbGUgbmF2aWdhdGlvblwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJpY29uLWJhclwifSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiaWNvbi1iYXJcIn0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImljb24tYmFyXCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtpZDogXCJsb2dvXCIsIHRvOiBcIi9cIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJmYSBmYS1yb2NrZXRcIn0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImxvZ28tdGV4dFwifSwgXCLnlLXkv6HkupHlhazlj7hcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJsb2dvLXRleHQtc3VwXCJ9LCBcIuaKpeihqOafpeivolwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ0b3BiYXItbWFpblwifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvKjxTaWRlYmFyVG9nZ2xlIHRvZ2dsZVNpZGViYXI9e3RoaXMuX3RvZ2dsZVNpZGViYXJ9IGNOYW1lPSdmYSBmYS1iYXJzJy8+Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge2lkOiBcIm1lbnUtdG9nZ2xlXCIsIHRvOiBcIi9cIiwgY2xhc3NOYW1lOiBcImhpZGRlbi14c1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge2NsYXNzTmFtZTogXCJmYSBmYS1ob21lXCJ9KSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQcm9maWxlRHJvcGRvd24sIHtsb2dvdXQ6IHRoaXMucHJvcHMubG9nb3V0fSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgX3RvZ2dsZVNpZGViYXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS50b2dnbGVDbGFzcygnc2lkZWJhci1jb2xsYXBzZWQnKTtcbiAgICAgICAgaWYoISQoJy5zaWRlYmFyLWxlZnQnKS5pcyhcIjpoaWRkZW5cIikpe1xuICAgICAgICAgICAgJCgnLnNpZGViYXItbGVmdCcpLmZhZGVPdXQoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcuc2lkZWJhci1sZWZ0JykuZmFkZUluKCk7XG4gICAgICAgIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvcEJhcjtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTUvNC8yLlxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciB0cmVlID0gcmVxdWlyZSgnLi9qcXVlcnktdHJlZScpO1xudmFyIFRyZWVEZW1vID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlRyZWVEZW1vXCIsXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcbiAgICAgICAgIHZhciBfZGF0YSA9IHRoaXMucHJvcHMuZGF0YSA9PT0gdW5kZWZpbmVkID8gW106dGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICAgdmFyIF9jaGVja2JveEZsYWcgPSB0aGlzLnByb3BzLmNoZWNrYm94ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IHRoaXMucHJvcHMuY2hlY2tib3g7XG4gICAgICAgICBpZih0eXBlb2YgX2NoZWNrYm94RmxhZyAhPT0gJ2Jvb2xlYW4nKV9jaGVja2JveEZsYWcgPSBmYWxzZTtcbiAgICAgICAgIHZhciBfb2JqID0gdGhpcy5wcm9wcy5mbjtcbiAgICAgICAgIGlmKF9vYmo9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICBfb2JqID0ge307XG4gICAgICAgICB9XG4gICAgICAgICBfb2JqLmRhdGEgPSBfZGF0YTtcbiAgICAgICAgIF9vYmouY2hlY2tib3ggPSBfY2hlY2tib3hGbGFnO1xuICAgICAgICAgX29iai5hbmltYXRlID0gdHJ1ZTtcbiAgICAgICAgICQoJyNteVRyZWUnKS50cmVlKF9vYmopO1xuICAgfSxcblxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCl7XG4gICAgICAgdmFyIHN0eWxlID0geyBkaXNwbGF5OiAnbm9uZScgfTtcbiAgICAgICByZXR1cm4gIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtpZDogXCJteVRyZWVcIiwgY2xhc3NOYW1lOiBcInRyZWVcIn0sIFxuICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidHJlZS1mb2xkZXJcIiwgc3R5bGU6IHN0eWxlfSwgXG4gICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidHJlZS1mb2xkZXItaGVhZGVyXCJ9LCBcbiAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7Y2xhc3NOYW1lOiBcImljb24tZm9sZGVyLWNsb3NlXCJ9KSwgXG4gICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInRyZWUtZm9sZGVyLW5hbWVcIn0pXG4gICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ0cmVlLWZvbGRlci1jb250ZW50XCJ9KSwgXG4gICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidHJlZS1sb2FkZXJcIiwgc3R5bGU6IHN0eWxlfSlcbiAgICAgICAgICAgKSwgXG4gICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ0cmVlLWl0ZW1cIiwgc3R5bGU6IHN0eWxlfSwgXG4gICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7Y2xhc3NOYW1lOiBcInRyZWUtZG90XCJ9KSwgXG4gICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidHJlZS1pdGVtLW5hbWVcIn0pXG4gICAgICAgICAgIClcbiAgICAgICApKTtcbiAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyZWVEZW1vO1xuIiwidmFyIG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFnZVNpemVzOiBbMiw1LDEwLCAxNSwgMjAsIDMwLCA1MCwgMTAwXSxcbiAgZGF0ZXJhbmdlcGlja2VyOiB7XG4gICAgcmFuZ2VzOiB7XG4gICAgICAvLyBcIuS7iuWkqVwiOiBbbW9tZW50KCksIG1vbWVudCgpXSxcbiAgICAgIC8vIFwi5pio5aSpXCI6IFttb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5cycpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5cycpXSxcbiAgICAgIFwi6L+H5Y67N+WkqVwiIDogW21vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJyksIG1vbWVudCgpXSxcbiAgICAgIFwi6L+H5Y67MzDlpKlcIjogW21vbWVudCgpLnN1YnRyYWN0KDI5LCAnZGF5cycpLCBtb21lbnQoKV0sXG4gICAgICBcIui/meS4quaciFwiICA6IFttb21lbnQoKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5lbmRPZignbW9udGgnKV0sXG4gICAgICBcIuS4iuS4quaciFwiICA6IFttb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKV1cbiAgICB9LFxuICAgIGxvY2FsZToge1xuICAgICAgYXBwbHlMYWJlbCAgICAgIDogJ+ehruWumicsXG4gICAgICBjYW5jZWxMYWJlbCAgICAgOiAn5Y+W5raIJyxcbiAgICAgIGZyb21MYWJlbCAgICAgICA6ICflvIDlp4snLFxuICAgICAgdG9MYWJlbCAgICAgICAgIDogJ+e7k+adnycsXG4gICAgICBjdXN0b21SYW5nZUxhYmVsOiAn6Ieq5a6a5LmJ5Yy66Ze0JyxcbiAgICAgIGRheXNPZldlZWsgICAgICA6IG1vbWVudC53ZWVrZGF5c01pbigpLFxuICAgICAgbW9udGhOYW1lcyAgICAgIDogbW9tZW50Lm1vbnRoc1Nob3J0KCksXG4gICAgICBmaXJzdERheSAgICAgICAgOiBtb21lbnQubG9jYWxlRGF0YSgpLl93ZWVrLmRvd1xuICAgIH0sXG4gICAgZm9ybWF0OiAnWVlZWS1NTS1ERCdcbiAgfSxcbiAgbnVtZXJhbDoge1xuICAgIGxhbmd1YWdlOiB7XG4gICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICB9LFxuICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgIHRob3VzYW5kOiAn5Y2DJyxcbiAgICAgICAgICBtaWxsaW9uIDogJ+eZvuS4hycsXG4gICAgICAgICAgYmlsbGlvbiA6ICfljYHkur8nLFxuICAgICAgICAgIHRyaWxsaW9uOiAn5YWGJ1xuICAgICAgfSxcbiAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgfSxcbiAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgc3ltYm9sOiAnwqUnXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwidmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jb21tb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb21tb247XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG5cbmZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0aWYgKCdzdHJpbmcnID09PSBhcmdUeXBlIHx8ICdudW1iZXInID09PSBhcmdUeXBlKSB7XG5cdFx0XHRjbGFzc2VzICs9ICcgJyArIGFyZztcblxuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblxuXHRcdH0gZWxzZSBpZiAoJ29iamVjdCcgPT09IGFyZ1R5cGUpIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0aWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBrZXk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG59XG5cbi8vIHNhZmVseSBleHBvcnQgY2xhc3NOYW1lcyBmb3Igbm9kZSAvIGJyb3dzZXJpZnlcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG59XG5cbi8qIGdsb2JhbCBkZWZpbmUgKi9cbi8vIHNhZmVseSBleHBvcnQgY2xhc3NOYW1lcyBmb3IgUmVxdWlyZUpTXG5pZiAodHlwZW9mIGRlZmluZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVmaW5lLmFtZCkge1xuXHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdH0pO1xufVxuIl19
