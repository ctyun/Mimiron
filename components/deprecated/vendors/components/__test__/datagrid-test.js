jest.dontMock('../components/datagrid');

describe('可以正常载入到任意DOM节点', function() {

  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var DataGrid;

  beforeEach(function() {
    DataGrid = require('../components/datagrid');
  })

  it('可以载入', function() {
    var grid = TestUtils.renderIntoDocument(<DataGrid />);
    expect(TestUtils.isCompositeComponent(grid)).toBeTruthy();
  });
});
