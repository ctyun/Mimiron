/**
 * @module utils
 */
var APIUtils = require('./api-utils');

/**
 * Ajax调用工具方法
 * 用法示例:
 * ```
 * Ajax.post(this.static.URL["query"],param,this.setMetadata);
 * Ajax.get(this.static.URL["add"]+param["resourceTableName"]+"/"+param["tableDispName"],this.addSuccess);
 * ```
 * 其post方法有三个参数,分别是:
 * 1.url
 * 2.参数
 * 3.回调方法
 * 其get方法有两个参数:
 * 1.url
 * 2.回调方法
 * @class Ajax
 */
var AjaxUtils = {
  get:function(url,sucCall){
      var req={
          url:url,
          method:"GET"
      };
      APIUtils.request(req).then(function(d){
          sucCall(d);
      });
  },
  post:function(url,data,sucCall){
      var req = {
          url:url,
          method:"POST",
          form:false,
          data:data
      };
      APIUtils.request(req).then(function(d){
        sucCall(d);
      });
  },
  postForm:function(url,data,sucCall) {
      var req={
          url:url,
          method:"POST",
          form:true,
          data:data
      };
      APIUtils.request(req).then(function(d){
        sucCall(d);
      });
    }
};
module.exports = AjaxUtils;
