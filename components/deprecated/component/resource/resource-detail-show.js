var React = require('react/addons');
var components = require('../../vendors/components');
var PortletHeader = components.PortletHeader;
var SearchPane = components.SearchPane;
var Api = require('../../api/resource');
var MessageBox=require("../message/message");

var ResourceSearch = React.createClass({
    getInitialState: function() {
        return {
            billPeriod: this.props.billPeriod
        }
    },
    componentWillReceiveProps: function(nextProps){
        if(this.props.billPeriod != nextProps.billPeriod){
            $('#startTime').val(nextProps.billPeriod);
        }
    },
    render: function() {
        $('#startTime').datepicker({dateFormat:'yy-mm'});
        return (
            <form className="grid-form" onSubmit={this.props.onSubmit} >
                <div data-row-span="5">
                    <div data-field-span="2">
                        <label>账期</label>
                        <input type='text' id='startTime'  name='startTime' defaultValue={this.state.billPeriod} />
                    </div>
                    <div data-field-span="1">
                        <button type="submit" className="btn btn-block btn-primary">查询</button>
                    </div>
                </div>
            </form>
            )
    }
});

var ResourceTable = React.createClass({
    getInitialState : function(){
        return {
            tableHeadings : ['资源名称','服务类型','资源类型','计费类型','节点名称','使用量','单位']
        }
    },
    render : function(){
        var resource = this.props.resource;
        var thead = this.state.tableHeadings.map(function(item,key){
            return <th>{item}</th>
        });
        thead = <thead>{thead}</thead>;
        var unit = "";
        var self = this;
        var tbody = "";

        if(resource&&resource.length>0){
            tbody = resource.map(function(item, key){
                var each = item.itemConfig;
                var bill = "";
                var node = "";
                each.map(function(im){
                    if(im.attrCode === 'billType'){
                        bill = im.attrValue;
                    }
                    if(im.attrCode === 'node'){
                        node = im.attrValue;
                    }
                });

                return <tr key={key}>
                    <td>{item.salesEntryName}</td>
                    <td>{item.serviceTag}</td>
                    <td>{item.resourceType}</td>
                    <td>{bill}</td>
                    <td>{node}</td>
                    <td>
                        <input type="text" id={item.fkResourceId} name="resource" disabled onChange={self._onChange.bind(null, item)}
                        defaultValue={item.useAmount} />
                    </td>
                    <td>{unit}</td>
                </tr>
            });
        }
        tbody = <tbody>{tbody}</tbody>;

        return <div className="portlet portlet-white">
            <table className="table table-hover table-bordered">
                {thead}
                {tbody}
            </table>
        </div>
    },

    _onChange: function(item, e) {
        this.props.change({fkAccountId: item.fkAccountId, fkUserId: item.fkUserId, serviceTag: item.serviceTag,
            resourceType: item.resourceType,fkResourceId: item.fkResourceId, amount: e.target.value});
    }
});

var Resource = React.createClass({
    getInitialState : function(){
        var obj = {resource: [], data: []};
        obj.query = {fkAccountId: this.props.params.fkAccountId,
                      fkUserId: this.props.params.fkUserId,
                      billPeriod: this.getBillPeriod()};
        obj.save = false;
        obj.modify = true;
        return obj;
    },
    componentWillMount: function() {
        this.onSearch();
    },
    render: function() {
        $('#save').hide();
        return <div>
                <div className="page-content">
                    <SearchPane visible="true">
                        <ResourceSearch billPeriod={this.state.query.billPeriod} onSubmit={this._search} />
                    </SearchPane>
                    <div className="portlet portlet-white">
                        <PortletHeader title="资源列表">
                            <button className="btn btn-sm btn-success" id="modify" onClick={this._modify} > 修改 </button>
                            <button className="btn btn-sm btn-success" id="save" onClick={this._submit} > 保存 </button>
                            <button className="btn btn-sm btn-success" id="commit" onClick={this._commit} > 提交 </button>
                        </PortletHeader>
                        <ResourceTable resource={this.state.resource} change={this._usageChange}/>
                    </div>
                </div>
            </div>
        },

    _search : function(e){
        e.preventDefault();e.stopPropagation();
        var query = this.state.query;
        query.billPeriod = $('#startTime').val();
        this.onSearch();
    },

    onSearch: function(){
        this.setState({resource: []});
        var self = this;
        Api.getResource({query : this.state.query}).then(function(data){
            var resource = data.returnObj;
            self.setState({resource : data.returnObj});
            var commit = false;
            resource.map(function(item){
                if(item.commit === "1"){
                    commit = true;
                }
            });

            if(commit){
                $('#modify').hide();
                $('#save').hide();
                $('#commit').hide();
            }
        });
    },

    _modify : function(e){
        $("input[name$='resource']").each(function(){
            $(this).removeAttr("disabled");
        });
        $('#modify').hide();
        $('#save').show();
    },

    _submit : function(e){
        var self = this;
        $.ajax({
            contentType: 'application/json',
            dataType: 'json',
            method: "POST",
            url: "/api/resource/saveResourceUsage",
            data: JSON.stringify({billPeriod: self.state.query.billPeriod, data: self.state.data})
        }).done(function(e){
                MessageBox.alert("保存成功!");
                $('#modify').show();
                $('#save').hide();
                self.onSearch();
            });
    },

    _commit : function(){
        $.ajax({
            contentType: 'application/json',
            dataType: 'json',
            method: "POST",
            url: "/api/resource/commitResourceUsage",
            data: JSON.stringify(this.state.query)
        }).done(function(e){
                MessageBox.alert("提交成功!");
                $('#modify').hide();
                $('#save').hide();
                $('#commit').hide();
                self.onSearch();
            });
    },

    _usageChange : function(value){
        var data = this.state.data;
        if(data.length<1){
            data.push(value);
        }
        var match = false;
        data.map(function(item){
            if(item.fkResourceId === value.fkResourceId){
                match = true;
                item.amountMonth = value.amountMonth;
                item.amount = value.amount;
            }
        });

        if(!match){
            data.push(value);
        }
    },

    getBillPeriod: function(){
        var myDate = new Date();
        var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
        var month = myDate.getMonth() + 1;
        return year+"-"+(month<10?"0"+month:month);
    }
});

module.exports = Resource;
