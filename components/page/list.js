var React = require('react');


/*var data = {
	"订单处理时间：":"这是一个测试",
	"订单状态：":"这是一个测试！！！",
	"任务流程状态1：":"这是一个测试！！！！！！！！",
	"任务流程状态2：":"这是一个测试！！！！！！！！",
	"任务流程状态3：":"这是一个测试！！！！！！！！",
	"任务流程状态4：":<a href="#">这是一个测试！！！！！！！！</a>,
}*/

var List = React.createClass({

	getDefaultProps: function() {
		return {
			data:{},
			tableCSS:{"border": "1px solid #ddd"},
			trCSS:{},
			leftTdCSS:{/*"width":"200px"*/},
			rightTdCSS:{/*"text-align":"center"*/},
			leftCSS : {"margin-right":"10%","text-align":"right"},
			rightCSS : {"margin-left":"10%","text-align":"left"}
		};
	},

	render: function() {

		var content = [];
		var data = this.props.data;
		var tableCSS = this.props.tableCSS;
		var trCSS = this.props.trCSS;
		var leftTdCSS = this.props.leftTdCSS;
		var rightTdCSS = this.props.rightTdCSS;
		var leftCSS = this.props.leftCSS;
		var rightCSS = this.props.rightCSS;

		for (var elem in data) {
		  content.push(
		  <tr style={trCSS}>
		  	<td style={leftTdCSS}><div style={leftCSS}>{elem}</div></td>
		  	<td style={rightTdCSS}><div style={rightCSS}>{data[elem]}</div></td>
		  </tr>);
		}

		return (
			<div>
				<table className="table table-hover table-bordered table-striped" style={tableCSS}>
					{
						content.map(function(index, elem) {
							return content[elem];
						})
					}
				</table>
			</div>
		);
	}

});

module.exports = List;