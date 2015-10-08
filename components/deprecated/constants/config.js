var moment = require('moment');

module.exports = {
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
