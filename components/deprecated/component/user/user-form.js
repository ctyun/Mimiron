var React = require('react/addons');
var _ = require('underscore');
var $ = require('jquery');
var constants = require('../../constants/constants');
// var common = require('../common/common');
var District = require('../district/district');


var RoleForm;
RoleForm = React.createClass({
    displayName: 'RoleForm',

    getInitialState: function () {
        return {
            schema: this.props.schema
        };
    },

    componentDidMount: function () {


    },

    render: function() {
        var options = this.props.department.map(function (item,key){
            return <option value={item.id} key={key}>{item.departmentName}</option>
        });
        var formGroups = this.state.schema.map(function (group, key) {
            var district = '';
            if(group.type == 'citySelect') {
                district = this.props.data ? <District hasCity={true} province = {this.props.data.province} city = {this.props.data.city} /> : <District hasCity={true} />;
            }
            return <div className="form-group" key={key}>
            <label className="control-label col-lg-3" htmlFor={group._id}>{group.label}</label>
                <div className="col-lg-7">
                    {group.type=='text' ? <input type="text" className="form-control" defaultValue={this.props.data ? this.props.data[group._id] : ''} id={group._id} placeholder={group.label} />
                        : group.type == 'select' ? <select defaultValue={this.props.data? this.props.data.fkUserDepId : ''} className='form-control' id={group._id}>{options}</select>
                        : group.type == 'citySelect' ?
                          {district}
                        : false
                    }
                </div>
            </div>;
        }.bind(this));

        return (
            <form className="form-horizontal" onSubmit={this.props.onSubmit} onChange={this.props.onChange}>
                 {formGroups}
            </form>
        );
    }
});

module.exports = RoleForm;
