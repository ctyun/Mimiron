window.hasModule = 0; //this is due to a unhandled error information: hasModule is not defined

var React = require("react");
var components = require("./bss-entry.js");
var Tools = require("./utils/tools.js");

var Demo = require("./demo/demo-all-components.js");

var ThisPage = React.createClass({
    render: function(){
    	var params = {
    		name:"config",
    		id:null
    	};
        return(<Demo/>);
    }
});
React.render(<Demo />, document.getElementById('content'));