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
			data:{}
		};
	},

	render: function() {

		var tdCSS = {"width":"50%","text-align":"center"};
		var leftDivCSS = {"margin-right":"20%","text-align":"right"};
		var rightDivCSS = {"margin-left":"20%","text-align":"left"};

		var content = [];
		var data = this.props.data;
		for (var elem in data) {
		  content.push(<tr><td style={tdCSS}><div style={leftDivCSS}>{elem}</div></td><td style={tdCSS}><div style={rightDivCSS}>{data[elem]}</div></td></tr>);
		}


		return (
			<div>
				<table className="table table-hover table-bordered table-striped">
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