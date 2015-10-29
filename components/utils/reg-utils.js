
/*
 * 正则表达式验证
 *
 */
var RegUtils = {
    validate:function(valid,v){
        var result=true;
        if(valid.maxlength && v.length>valid.maxlength)
            return false;
        if(valid.minlength && v.length<valid.minlength)
            return false;
        switch(valid.type)
        {
            case "fail":
                return false;
            case "success":
                return true;
            case 'noEmpty':
                return v.length!=0;
            case "int": 
                return /^\d*$/.test(v);
            case "string":
                return /^\S*$/.test(v);
            case "email":
                return /^([a-zA-Z0-9\-]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9\-]+[_|\_|\.]?)*[a-zA-Z0-9\-]+\.[a-zA-Z]{2,3}$/.test(v);
            case "mobile-phone":
                return /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$/.test(v);
            default:
                console.info("没找到这种规则,默认返回成功验证了"+valid.type)
        }
        return result;
    }


};
module.exports = RegUtils;
