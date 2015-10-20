
var React = require('react/addons');
var components = require('../../vendors/components');
var ActionButtonEdit = components.ActionButtonEdit;
var ActionButtonDelete = components.ActionButtonDelete;
var ActionButtonSearch = components.ActionButtonSearch;
var Header = components.Header;
var SearchPane = components.SearchPane;
var DataGrid = components.DataGrid;
var PortletHeader = components.PortletHeader;
var Bootstrap = require('react-bootstrap');
var Modal = Bootstrap.Modal;
var Label=Bootstrap.Label;
var Input=Bootstrap.Input;
var FormInput=require("../html/input");
var Button=require("../button/button");
var Tools = require("../../../utils/tools");

var QueryPanel=require("../panel/query-panel");

var Link = React.createClass({
  displayName: "Link",
  getDefaultProps: function(){
        return{
          to:"#",
        }
    },
  render: function(){
    return(<a href={"#" + this.props.to} onClick={this._onClick}>
        {this.props.children}
      </a>)
  },
  _onClick: function(e){
      e.preventDefault();
      window.location.hash = this.props.to;
      Tools.goJSX(this.props.to);
  }
})

var Manage = React.createClass({
  getInitialState: function() {
    return {
      deleteConfirm: false,
      menuConfirm:false,
      menuName:'',

      menuBtnDisabled:false,
      menuErrorMsg:''
    }
  },
  render: function() {

    var deleteModal = <Modal title="提示" onRequestHide={this._toggleDeleteConfirm}>
            <div className="modal-body">确认删除吗？</div>
            <div className="modal-footer">
                <button className="btn btn-primary" onClick={this._doDelete}>确定</button>
                <button className="btn btn-default" onClick={this._toggleDeleteConfirm}>取消</button>
            </div>
        </Modal>;
        var addMenuModal = <Modal title="添加菜单" onRequestHide={this._toggleAddMenuConfirm}>
            <div className="modal-body">
             <b className="btn-primary">{this.state.menuErrorMsg.length>0?this.state.menuErrorMsg:""}</b>
            <Input type="text"  label='菜单名' placeholder='请输入菜单名' onChange={this._menuNameChange}/>
            </div>
            <div className="modal-footer">
               
                <button className="btn btn-primary" onClick={this._doAddMenu} disabled={!this.state.menuBtnDisabled}>确定</button>
                <button className="btn btn-default" onClick={this._toggleAddMenuConfirm}>取消</button>
            </div>
        </Modal>;

    return (
      <div>
        <Header pageTitle="报表模板管理" />
        <div className="page-content">

        <QueryPanel  submitAction={this.submitAction} okButtonName="查询">
            <FormInput disName="表名" name="resourceTableName" value={this.props.resourceTableName}  />
            <FormInput disName="模板名" name="reportModelName"  value={this.props.reportModelName} />
       </QueryPanel>

          <div className="portlet portlet-white">
            <PortletHeader title="模板列表">

            </PortletHeader>
            <DataGrid
              pageNo={this.props.pageNo}
              totalPageNo={this.props.totalPageNo}
              changePageSize={this._onChangePageSize}
              changePageNo={this._onChangePageNo}>

            {this.props.contents && this.props.contents.length
              ? <table className="table table-bordered table-hover">
                  <tr>
                    <th>数据源表</th>
                    <th>报表模板名称</th>
                    <th>操作</th>
                  </tr>
                  <tbody>
                    {this.props.contents.map(function(content, key) {
                      return (
                        <tr key={key}>
                          <td>{content.resourceTableName}</td>
                          <td><Link className="text-success" to={content.menuUrl}>{content.reportModelName}</Link></td>
                          <td>
                            <Link className="btn btn-xs btn-success" to={"/report/config/" + content.reportModelId}><i className="fa fa-edit"></i> 修改</Link>
                            <ActionButtonDelete onClick={this._delete.bind(null, content.reportModelId)}>删除</ActionButtonDelete>
                            <ActionButtonEdit onClick={this._doToggleMenu.bind(null,content.reportModelId)} >增加菜单名称</ActionButtonEdit>
                          </td>
                        </tr>
                      )
                    }.bind(this))}
                  </tbody>
                </table>
              : <div className="text-center pvl">暂无数据</div>
            }
            </DataGrid>
            {this.state.deleteConfirm ? deleteModal : false}
            {this.state.menuConfirm?addMenuModal:false}
          </div>
        </div>
      </div>
    )
  },
/**
 * 查询
 */
submitAction:function(param){
    this.props.queryAction(param);
},

  _onChangePageSize: function(size) {
      if(this.props.doChangePageSize){
        this.props.doChangePageSize(size);
      }
  },
  _onChangePageNo: function(num) {
      if(this.props.doChangePageNo){
          this.props.doChangePageNo(num);
      }

  },

  _edit: function(id) {},
  _delete: function(id) {
    this._toggleDeleteConfirm();
    this.setState({ deleteId: id });
  },
  _toggleDeleteConfirm: function() {
    this.setState({ deleteConfirm: !this.state.deleteConfirm });
  },
  _doDelete: function(e) {
    e.preventDefault();
    if (this.state.deleteId) {
     // Action.deleteReport(this.state.deleteId);
      this.setState({
        deleteConfirm: !this.state.deleteConfirm,
        deleteId: ''
      });
      this.props.deleteTemplate(this.state.deleteId);
    }
  },
  _doToggleMenu:function(id){
    //e.preventDefault();
    this._toggleAddMenuConfirm();
    this.setState({ menuId: id });
  },
  /**
   * 触发菜单Model窗口是否显示
   * @return {[type]} [description]
   */
  _toggleAddMenuConfirm:function(){
    this.setState({
      menuConfirm:!this.state.menuConfirm,
      menuBtnDisabled:false,
      menuErrorMsg:''
    });
  },
  /**
   * 监听菜单名称输入
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  _menuNameChange:function(e){
    

    this.setState({
      menuName:e.target.value,
      menuErrorMsg:e.target.value.length>0?'':'菜单名不能为空',
      menuBtnDisabled:e.target.value.length>0?true:false
    });
  },
/**
 *    增加菜单
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
  _doAddMenu:function(e){
    if(this.state.menuName.length>0){
         this._toggleAddMenuConfirm();
      //console.log(this.state.menuName+";id="+this.state.menuId);
      this.props.addMenu(this.state.menuId,this.state.menuName);//
    }else{
      this.setState({
        menuErrorMsg:'菜单名不能为空'
      });
    }
  }
});

module.exports = Manage;
