/**
 * Created by Administrator on 2015/4/15.
 */
var React = require('react/addons');
var DND = require('react-dnd');
var DragDropMixin = DND.DragDropMixin;
var Input = require('./report-input');
var TD = require('./report-td');
var Radio = require('./report-radio');
var Select = require('./report-select');
var Action = require('../../action/report');

var dragSource = {
  beginDrag: function(component) {
    return {
      item: {
        id: component.props.id
      }
    }
  }
};

var dropTarget = {
  over: function(component, item) {
    component.props.move(item.id, component.props.id);
  }
};

var Module = React.createClass({
  mixins: [DragDropMixin],
  statics: {
    configureDragDrop: function(register) {
      register('module', {
        dragSource: dragSource,
        dropTarget: dropTarget
      });
    }
  },
  render : function() {
    var isDragging = this.getDragState('module');
    var _module = this.props.module;
      console.log(_module.modeType);
    if (this.props.location == 1) {
      if (_module.modeType == 'text') {
        return <div data-field-span="1" {...this.dragSourceFor('module')} {...this.dropTargetFor('module')}>
          <Input modes = {_module} delete={this._delete} />
        </div>
      }else if(_module.modeType == 'radio'){
        return <div data-field-span="1" {...this.dragSourceFor('module')} {...this.dropTargetFor('module')}>
          <Radio modes = {_module} delete={this._delete}/>
        </div>
      }else if(_module.modeType == '12'){
          return <div data-field-span="1" {...this.dragSourceFor('module')} {...this.dropTargetFor('module')}>
              <Select modes = {_module} delete={this._delete}/>
          </div>
      }
    }
    else if (this.props.location == 2){
      return <div className="list-group-item" {...this.dragSourceFor('module')} {...this.dropTargetFor('module')}>
        <TD content = {_module} delete={this._delete} />
      </div>
    }
  },
  _delete : function(mode, e){
    e.preventDefault();
    e.stopPropagation();
    Action.removeModule(mode);
  }
});


module.exports = Module;
