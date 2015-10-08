var React = require('react');
var component = require('../index');
var DataGrid = component.DataGrid;

var Demo = React.createClass({
  render: function() {
    return (
      <DataGrid
          pageNo={1}
          totalPageNo={3}
          changePageSize={this._changePageSize}
          changePageNo={this._changePageNo}>
      <div>Welcome</div>
      </DataGrid>
    )
  },
  _changePageSize: function(size) {},
  _changePageNo: function(num) {}
});

React.render(<Demo />, document.getElementById('wrapper'));
