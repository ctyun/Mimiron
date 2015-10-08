var React = require('react/addons');
var HiddenDiv = React.createClass({

    render : function(){
        if(this.props.isShow == true){
            return <div>{this.props.children}</div>
        }else{
            return <div/>
        }
    }
});
module.exports = HiddenDiv;