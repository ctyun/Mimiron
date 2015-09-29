/**
 * @module BSSFrame
 */

var React = require('react');
var BSSForm=require("../html/form");
var API = require("../const/API");
var Ajax = require("../utils/ajax");
var Input = require("../html/input");

var Login = React.createClass({
	locals:{},
	render: function(){
		return(<div className="page-form">
				<BSSForm okButtonName="登陆" jsonFormat={true} submitAction={this.submitAction}>
					<Input name="userLoginName" disName="用户名" placeholder="用户名" value={this.locals.username}/>
					<Input name="userPassword" disName="密码" placeholder="密码" value={this.locals.password}/>
				</BSSForm>
			</div>);
	},
	submitAction: function(param){
		Ajax.post(API.LOGIN,param,function(d){
			if(d.handled){
				alert("用户名和/或密码错误"); //TODO 使用提示框
			}
			else{
				try{
					history.go(-1);
				} catch(e) {
					//TODO Log模块
				} finally{
					window.location.href = "/";
				}
			}
		});
	}
});


module.exports = Login;