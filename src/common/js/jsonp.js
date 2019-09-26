import originaJsonp from "jsonp";  //引入库

const jsonp =  function jsonp(url,data,option){  //data为参数
      url += (url.indexOf("?") < 0 ? "?" : "&") +Param(data);
      return new Promise(function(resolve,reject){
          originaJsonp(url,option,function(err, data){
              if(!err){
                  resolve(data)
              }else{
                  reject(err)
              }
          })
          
      })
}

function Param(data){
    let url = "";
    for(var k in data){
        let value = data[k] !== undefined ? data[k] : "" ;
            url += '&' + k + '=' + encodeURIComponent(value);
    }
    return url ? url.substring(1) : '' ;
}

export default jsonp;