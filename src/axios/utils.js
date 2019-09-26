// 页面路由
const util = {
    formatParams: function (paramsObj) {
        // debugger
        var arr = [];
        for (var key in paramsObj) {
            if (paramsObj.hasOwnProperty(key)) {
                var val = paramsObj[key];
                arr.push(key + "=" + val);
            }
        }
        return arr.join("&")
    },
   
    /**
     * 对url请求参数进行md5处理得到sign
     * @param {Object} params 
     */
    getSign(params) {
        // debugger
        delete params.sign;
        var result = [];
        var sortOrderArr = Object.keys(params).sort();
        for (var i = 0; i < sortOrderArr.length; i++) {
            var key = sortOrderArr[i];
            var val = params[key];
            result.push(key);
            result.push(val);
        }
        var sign = result.join("_");
        var signMd5 =sign;

        return signMd5;
    }

   
}

export default util;