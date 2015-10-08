/** @jsx React.DOM */
var React = require('react/addons');
var Action = require('../../action/admin-user');
var Store = require('../../store/admin-user');

var Login = React.createClass({
    displayName: 'Login',
    getInitialState: function() {
      return {
        user: {},
        isSubmited: false,
        remember: false,
        error: ''
      }
    },
    componentDidMount: function() {
      Store.addChangeListener(this._update);
    },
    componentWillUnmount: function () {
      Store.removeChangeListener(this._update);
    },
    render: function () {
        return (
            <div className="page-form">

              <form onChange={this._onChange} onSubmit={this._onSubmit} className="form" role="form" name="loginForm" noValidate>
                  <div className="header-content"><h1>云公司权限管理系统</h1></div>
                  {this.state.error ? <div className="alert alert-danger">{this.state.error}</div> : ''}
                  <div className="body-content">
                      <div className="form-group">
                          <div className="input-icon right">
                              <i className="fa fa-user"></i>
                              <input type="text" placeholder="用户名" name="userLoginName" className="form-control" required autofocus />
                          </div>
                      </div>
                      <div className="form-group">
                          <div className="input-icon right">
                              <i className="fa fa-key"></i>
                              <input type="password" placeholder="密码" name="userPassword" className="form-control" required />
                          </div>
                      </div>

                      <div className="form-group pull-right">
                          <button type="submit" className="btn btn-success" disabled={this.state.isSubmited}>登录
                              &nbsp;<i className="fa fa-chevron-circle-right"></i></button>
                      </div>
                      <div className="clearfix"></div>
                  </div>
              </form>

          </div>
        );
    },
    _update: function() {
      this.setState({error: Store.getLoginError(), isSubmited: false });
    },
    _changeRemember: function(e) {
      this.setState({ remember: !this.state.remember });
    },
    _onChange: function(e) {
      var user = this.state.user;
      if (e.target.name === "remember") {
        user[e.target.name] = e.target.checked;
      } else {
        user[e.target.name] = e.target.value;
      }
      this.setState({ user: user });
    },
    _onSubmit: function(e) {
      e.preventDefault(); 
      e.stopPropagation();
      this.setState({ isSubmited: true }, function() {
        Action.login(this.state.user);
      }.bind(this));
    }
});

module.exports = Login;
