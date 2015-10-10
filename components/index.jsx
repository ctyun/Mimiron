
var React = require("react");
var components = require("./bss-entry.js");
var Metadata = components.Metadata;

var ThisPage = React.createClass({
    componentDidMount: function(){
        Tools.loadScript(["/static/theme/theme.js"]);
    },
    render: function(){
    	var params = {
    		name:"config",
    		id:null
    	};
        return(<components.TopBar/>);
    }
});
React.render(<ThisPage />, document.getElementById('content'));