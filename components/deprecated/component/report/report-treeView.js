/**
 * Created by Administrator on 2015/4/21.
 */
var React = require('react/addons');
var $  = require('jquery');
var Li = require('./report-treeView-li');
var components = require('../../vendors/components');
var ActionButtonAdd=components.ActionButtonAdd;
var Bootstrap = require('react-bootstrap');
var Modal = Bootstrap.Modal;
var Label=Bootstrap.Label;
var Input=Bootstrap.Input;
/**
 * 报表配置组件
 * 主要处理表名下拉列表和显示该表下的原数据
 */
var TreeView = React.createClass({

    getInitialState : function(){
       return {
           showSpan : false,
           addConfirm: false,
           tableData:{tableName:'',displayName:''},
           talbeName:'',
           addTableNameBtnDisabled:false,
           tableNameErrorMsg:''
       }
    },
    componentDidMount : function(){
        //
    },
    render : function(){
         var addModal = <Modal title="添加表" onRequestHide={this._toggleAddConfirm}>
            <div className="modal-body">
            <b className="btn-primary">{this.state.tableNameErrorMsg.length>0?this.state.tableNameErrorMsg:''}</b>
            <p/>
             <Label>表名：</Label><Input type="text"  label='Text'  name='tableName' placeholder='请输入表名' onChange={this._onTableNameChange}/>
            <Label>中文表名：</Label><Input type="text"  label='Text' name='displayName' placeholder='请输入中文表名' onChange={this._onTableNameChange}/>
            </div>
            <div className="modal-footer">

                <button className="btn btn-primary" onClick={this._doAddTable} disabled={!this.state.addTableNameBtnDisabled}>确定</button>
                <button className="btn btn-default" onClick={this._toggleAddConfirm}>取消</button>
            </div>
        </Modal>;
        var self = this;
        var select = <select className="form-control" id="selectTree" value ={this.props.currentList} onChange={this._onChange}><option value="default">----请选择----</option>{this.props.options.map(function(item,key){
            return <option value={item.code} key={key}>{item.name}</option>;
        })}</select>
        if(this.props.hasId){
          var select = <select className="form-control" id="selectTree" value ={this.props.currentList} onChange={this._onChange} disabled><option value="default">----请选择----</option>{this.props.options.map(function(item,key){
              return <option value={item.code} key={key}>{item.name}</option>;
          })}</select>
        }
        var li = this.props.data.map(function(node,key){
           return  <Li node={node} key={key} addControl = {this.props.addControl}/>;
        }.bind(this));

        return (
               <div id='treeview' className='treeview'>
                  <button className="btn btn-primary" onClick={this._addTable}>增加表</button>
                  {this.state.addConfirm ? addModal : false}
                   {select}
                   <ul className='list-group h500px' id='tree-ui'>
                        {li}
                   </ul>
               </div>
               );
    },
    _onChange : function(e){

        this.props.onSelectList(e.target.value);

    },
    _showSpan : function(){
        this.setState({showSpan:!showSpan})
    },
    _toggleAddConfirm: function() {
    this.setState(
      { 
        addConfirm: !this.state.addConfirm,
        addTableNameBtnDisabled:false,
        tableNameErrorMsg:'',
        tableData:{tableName:'',displayName:''}

       });
  },
    _addTable:function(){
        this._toggleAddConfirm();
    } ,
   _onTableNameChange:function(e){
    var name=e.target.name;
    var v=e.target.value;
    var data=this.state.tableData;
     data[name]=v;
     var msg='';
     if(name=='tableName'&&v.length<=0){
      msg='表名不能为空';
     } 
      if(name=='displayName'&&v.length<=0){
      msg='表中文名不能为空';
     }
     
      var isEmpty=false;
      var name=data.tableName;
      var disName=data.displayName;
     if(name.length>0&&disName&&disName.length>0){
        isEmpty=true
     }
   
    
    this.setState({
      tableData:data,
      addTableNameBtnDisabled:isEmpty,
      tableNameErrorMsg:isEmpty?'':msg
    });
    
   }, 
 _doAddTable:function(e){
   e.preventDefault();
  var data=this.state.tableData;
  if(data.tableName&& data.tableName.length>0&&data.displayName&&data.displayName.length>0){
    if(this.state.addConfirm){
      this.setState({
        addConfirm:false,
        tableData:{tableName:'',displayName:''},
        tableNameErrorMsg:'',
        addTableNameBtnDisabled:false
      });
    }
    this.props.addTableName(data.tableName,data.displayName);
  }else{
    console.log(data);
  }
  
}

});

module.exports = TreeView;
