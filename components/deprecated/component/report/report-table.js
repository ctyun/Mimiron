var React = require('react/addons');
var components = require('../../vendors/components');
var Currency = components.CurrencyTD;
var Time = components.TimeTD;

var Table = React.createClass({
  render: function() {
    return (
      <div className="portlet portlet-white">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              {this.props.table.map(function(cell, key) {
                return <th key={key}>{cell.displayName}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.source && this.props.source.length ? this.props.source.map(function(source, key) {
              return <tr key={key}>
                {this.props.table.map(function(column, columnKey) {
                  if(column.reportMetadataCode === 'start_date' || column.reportMetadataCode === 'expire_date') {
                      return <Time key={columnKey}>{source[column.reportMetadataCode]}</Time>
                  } else {
                    return <td key={columnKey}>{source[column.reportMetadataCode]}</td>
                  }
                })}
              </tr>
            }.bind(this)) : <td colSpan={this.props.table.length + 1}><div className="text-center">暂无数据，请输入查询条件进行查询。</div></td>}
          </tbody>
        </table>

      </div>
    );
  }
});

module.exports = Table;
