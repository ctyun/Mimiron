var Dropzone = require('dropzone');
var React = require('react/addons');
var _ = require('underscore');
var MessageBox=require("../message/message");

var DropzoneUpload = React.createClass({
    displayName: 'DropzoneUpload',
    getInitialState: function() {
            return {
                options: {
                    url: this.props.url,
                    uploadMultiple: true,
                    dictDefaultMessage: '拖拽上传或点击上传文件',
                    paramName: 'myfiles'
                }
            }
    },
    componentDidUpdate: function(){
        if(this.uploader){
            this.uploader.destroy();
            this.uploader = null;
        }

        var options = this.state.options;
        this.uploader = new Dropzone(this.getDOMNode(), _.extend({}, Dropzone.prototype.defaultOptions, options));
        this.uploader.on('sending', this._onSending);
        this.uploader.on('success', this._onSuccess);
        this.uploader.on('error', this._onError);
        this.uploader.on('addedfile', this._onAdded);
    },
    render: function () {
        return <div className="dropzone">
                </div>;
    },
    _onSending: function(file, xhr, formData) {
         var addition = this.props.addition;
         console.log(addition);
         formData.append("fkAccountId", addition.fkAccountId);
         formData.append("fkUserId", addition.fkUserId);
         formData.append("billPeriod", addition.billPeriod);
    },
    _onSuccess: function(file, res) {
         MessageBox.alert("上传成功!");
         this.props.refresh();
    },
    _onError: function(file, res) {
    },
    _onAdded: function(file) {
        file.previewElement.addEventListener('click', function() {
        }.bind(this));
    }
});

module.exports = DropzoneUpload;
