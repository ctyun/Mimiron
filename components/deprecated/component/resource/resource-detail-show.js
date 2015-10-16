var React = require('react/addons');
var components = require('components');
var PortletHeader = components.PortletHeader;
var SearchPane = components.SearchPane;
var ActionButtonDelete = components.ActionButtonDelete;
var Api = require('../../api/resource');
var MessageBox=require("../message/message");
var Dropzone=require("./dropzone-upload");

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
                <div data-row-span="7">
                    <div data-field-span="2">
                        <label>账期</label>
                        <input type='text' id='startTime' name='startTime' readOnly='true' defaultValue={this.state.billPeriod} />
                    </div>
                    <div data-field-span="2">
                        <label>节点</label>
                        <input type='text' id='node' name='node' placeholder="请输入节点名称" />
                    </div>
                    <div data-field-span="1">
                        <button type="submit" className="btn btn-block btn-primary">查询</button>
                    </div>
                </div>
            </form>
            )
    }
});

var FileTable = React.createClass({
    getInitialState : function(){
        return {
            tableHeadings : ['附件名', '操作']
        }
    },

    render : function(){
        var files = this.props.files;
        var thead = this.state.tableHeadings.map(function(item,key){
            return <th>{item}</th>
        });
        thead = <thead>{thead}</thead>;
        var self = this;
        var tbody = "未上传附件!";
        if(files&&files.length>0){
            tbody = files.map(function(file, key){
                return <tr key={key}>
                    <td><a className="list-group-item" href={file.filePath} target="_blank">{file.fileName}</a></td>
                    <td><ActionButtonDelete children = "删除" onClick={self._delete.bind(null,file)} /></td>
                </tr>
            })
        }

        tbody = <tbody>{tbody}</tbody>;

        return <div className="portlet portlet-white">
            <table className="table table-hover table-bordered">
                {thead}
                {files&&files.length>0?files.map(function(file, key){
                    return <tr key={key}>
                                <td><a className="list-group-item" key={key} href={file.filePath} target="_blank">{file.fileName}</a></td>
                                <td><ActionButtonDelete children = "删除" onClick={self._delete.bind(null,file)} /></td>
                            </tr>
                }): <td colSpan={2}><div className="text-center">请上传附件!</div></td>}
            </table>
        </div>
    },

    _delete: function(item, e) {
        var self = this;
        Api.deleteFile({resourceFileId: item.resourceFileId, filePath: item.filePath}).then(function(data){
            if(data.returnObj === 800){
                MessageBox.alert("删除成功!");
                self.props.refresh();
            }else{
                MessageBox.alert("删除失败!");
            }
        });
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
            billPeriod: this.props.params.billPeriod,
            node: ""};
        obj.addition = {fkAccountId: this.props.params.fkAccountId,
            fkUserId: this.props.params.fkUserId,
            billPeriod: this.props.params.billPeriod};
        obj.uploadedFiles = [];
        return obj;
    },
    componentWillMount: function() {
        this.onSearch();
        this._refreshFile();
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
                <div className="portlet portlet-while">
                    <PortletHeader title="附件列表">
                    </PortletHeader>
                    <Dropzone url="/api/resource/uploadFile" refresh={this._refreshFile} uploadedFiles={this.state.uploadedFiles} addition={this.state.addition} />
                    <FileTable refresh={this._refreshFile} files={this.state.uploadedFiles} />
                </div>
            </div>
        </div>
    },

    _search : function(e){
        e.preventDefault();e.stopPropagation();
        var query = this.state.query;
        query.billPeriod = $('#startTime').val();
        query.node = $('#node').val();
        var addition = this.state.addition;
        addition.billPeriod = $('startTime').val();
        this.onSearch();
    },

    onSearch: function(){
        this.setState({resource: []});
        var self = this;
        //默认查询按钮设置
        $('#modify').show();
        $('#save').hide();
        $('#commit').show();
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
        }).done(function(data){
                if(data.returnObj.statusCode === 800){
                    MessageBox.alert("保存成功!");
                    $('#modify').show();
                    $('#save').hide();
                    self.onSearch();
                }
            });
    },

    _commit : function(){
        var uploadedFiles = this.state.uploadedFiles;
//        if(uploadedFiles|uploadedFiles.length===0){
//            MessageBox.alert("未上传附件,请上传附件后再提交!");
//            return;
//        }
        var self = this;
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

    _refreshFile: function(){
        var self = this;
        Api.getUploadedFiles({query : this.state.addition}).then(function(data){
            self.setState({uploadedFiles: data.returnObj});
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
    }
});

module.exports = Resource;
