var React = require('react/addons');
var components = require('components');
var PortletHeader = components.PortletHeader;
var SearchPane = components.SearchPane;
var Api = require('../../api/resource');
var MessageBox=require("../message/message");
var Dropzone=require("./dropzone-upload");

var Uploader = React.createClass({
    render: function() {
        return <Dropzone url="/api/resource/uploadFile" addition="" />
    },

    _select: function(e){
        $('#file').click();
    },

    _uploader: function(e){
        e.preventDefault(); e.stopPropagation();
        var file = $("#file").val();
        if(file==""){
            MessageBox.alert('请选择上传的附件！');
            return;
        }

        var fileType = file.substring(file.lastIndexOf(".")+1);
        if(fileType == "exe" || fileType == "bat"){
            bootbox.alert('上传附件格式错误！');
            return;
        }

        var self = this;
        $.ajaxFileUpload({
            contentType: 'application/json',
            dataType: 'json',
            method: "POST",
            secureuri:false,
            fileElementId:"file",
            url: "/api/resource/uploadFile",
            data: JSON.stringify({billPeriod: self.state.query.billPeriod})
        }).done(function(data){

            });
    },

    _onChange: function(e){
        $('#selectImgPath').val($('#file').val());
    }
});

module.exports = Uploader;
