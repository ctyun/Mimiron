    /**
     * Created by chenth on 15-7-24.
     */
var React=require("react/addons");
var components = require('../../vendors/components');

var Header = components.Header;
var PortletHeader = components.PortletHeader;
var BSSPanel=React.createClass({

    render:function(){
        var name=this.props.pageTitle;

        return <div>
            <Header pageTitle={name} />
                <div className="page-content">
                    {this.props.children}
                </div>
            </div>
        }
});



module.exports=BSSPanel;
