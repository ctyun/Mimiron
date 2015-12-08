//var $ = require('jquery');
//var progressJS = require('Progress.js').progressJs;
//var ActionUtils = require('./action-utils');
// import MessageBox from "../message/messageBox";

var APIUtils = {
  request: function(req) {

    var deferred = $.Deferred();

    var request;
    if(req.form&&req.form==true){
      request = $.ajax({
        dataType: 'json',
        method: req.method,
        url: req.url,
        data: req.data
      });
    }else{
      request = $.ajax({
        contentType: 'application/json',
        dataType: 'json',
        method: req.method,
        url: req.url,
        data: JSON.stringify(req.data)
      });
    }
    $("#loading-layer")? $("#loading-layer").addClass("la-animate"): null;

    request.done(function(data) {
      $("#loading-layer")? $("#loading-layer").removeClass("la-animate"): null;
      deferred.resolve(data);
    });

    request.fail(function(xhr, textStatus, error) {
      $("#loading-layer")? $("#loading-layer").removeClass("la-animate"): null;
      if (xhr.status === 401) {
        window.location = '/login';
      }
      if (xhr.status === 500 || xhr.status === 503) {
        alert("服务器错误！","提示");
      }
      if (xhr.status === 200){
        deferred.resolve(); //如果返回的response完全为空, 则会抛出SyntaxError: Unexpected end of input的异常.
        return;
      }
      deferred.reject();
    });

    return deferred.promise();
  }
};

module.exports = APIUtils;
