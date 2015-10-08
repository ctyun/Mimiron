/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');
var _ = require('underscore');
var datetimepicker = require('eonasdan-bootstrap-datetimepicker');
var moment = require('moment');

var DateMonthPicker = React.createClass({
  displayName: 'DateMonthPicker',
  getInitialState: function() {
    return {
      options: {
        pickTime: false,
        language: moment.locale('zh-cn'),
        defaultDate: this.props.value ? moment(this.props.value) : '2015-06'
      }
    }
  },
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.options !== this.props.options) {
      if (nextProps.options.minDate) {
        $(this.getDOMNode()).find('input').data('DateMonthPicker').setMinDate(nextProps.options.minDate);
      }
      if (nextProps.options.maxDate) {
        $(this.getDOMNode()).find('input').data('DateMonthPicker').setMaxDate(nextProps.options.maxDate);
      }
    }
  },
  componentWillUnmount: function () {
    $(this.getDOMNode()).find('input').data('DateMonthPicker').destroy();
  },
  componentDidMount: function () {
    $(this.getDOMNode()).find('input').datetimepicker(_.extend({}, this.state.options, this.props.options));
    $(this.getDOMNode()).find('input').on('dp.change', this._onChange);
  },
  render: function () {
    return (
        <div className="input-icon right">
          <i className="fa fa-calendar"></i>
          <input type="text" className="form-control" readOnly id={this.props.id ? this.props.id : ''} />
        </div>
    );
  },
  _onChange: function(e) {
    var val = $(this.getDOMNode()).find('input').val();
    val = moment(val,"MM/YYYY").format("YYYY-MM");
    this.props.onChange(e, val);
  }
});

module.exports = DateMonthPicker;
