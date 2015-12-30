/**
 * @module BSSFrame
 */

var React = require('react');
var BSSForm=require("../html/form");
var API = require("../const/API");
var Ajax = require("../utils/ajax");
var Input = require("../html/input");

var Login = React.createClass({
	locals:{
		okButtonCss:{
			"margin":"20px",
			"float":"right"
		}
	},
	getInitialState:function(){
    	return{
    		error:false,
    	}
    },
    getDefaultProps: function(){
        return{
            title:"请登录",
            loginUrl:API.LOGIN,
            select:null,
        }
    },
	render: function(){
    if(this.props.select){
      var opts = [];
      for(var i in this.props.select){
        opts.push(<option value={this.props.select[i]["value"]}>{this.props.select[i]["text"]}</option>)
      }
      var select = (<div className="form-group">
                  <select name="userSelect" id="selCountry" className="form-control">
                      <option>==请选择==</option>
                      {opts}
                  </select>
              </div>);
    } else{
      var select = null;
    }
		return(<div className="page-form">

              <BSSForm okButtonName="登陆" jsonFormat={true} submitAction={this.submitAction} okButtonCss={this.locals.okButtonCss}>
                  <div className="header-content"><h1>{this.props.title}</h1></div>
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
                      {select}
                  </div>
              </BSSForm>
              <div className="clearfix"></div>
          </div>);
	},
	submitAction: function(param){
		Ajax.post(this.props.loginUrl,param,function(d){
			if(d.handled){
				alert("用户名和/或密码错误"); //TODO 使用提示框
			}
			else{
				window.location.href = "/";
			}
		});
	}
});


module.exports = Login;