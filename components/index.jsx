window.hasModule = 0; //this is due to a unhandled error information: hasModule is not defined

var React = require("react");
var components = require("./bss-entry.js");
var Report = components.Report;

var ThisPage = React.createClass({
    componentDidMount: function(){
        Tools.loadScript(["/static/theme/theme.js"]);
    },
    render: function(){
    	var params = {
    		name:"config",
    		id:null
    	};
        return(<Report params={params}/>);
    }
});
React.render(<ThisPage />, document.getElementById('content'));