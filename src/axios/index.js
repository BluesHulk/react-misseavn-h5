import axios from 'axios';
import APIS from './apis'
import UTIL from './utils'
import handleError from './handleError'
const network = async function (requestName, params, body) {
  const obj = APIS[requestName];
  if (!obj) {
    console.error("obj is not found", requestName)
    return;
  }

  // const url = globalUrl + obj.url;  //static文件夹里有config.js
  // const url = process.env.BASE_API + obj.url
  const url = obj.url
  const method = obj.method;

  const ct = obj.method === 'GET' ? 'application/json; charset=utf-8 ' : 'application/x-www-form-urlencoded';

  // debugger
  //  console.log("params", params)
  let urlParams = UTIL.formatParams(params);
  if (urlParams) {
    urlParams = "?" + urlParams;
  }

  let config = {
    method: method,
    headers: {
      "Content-Type": ct
    },
    withCredentials: true
  }

  // const token = __MusicApp__.$cookie.get('iindex_token');
  // if (token && !obj.noToken) {
  //     config.headers.token = token;
  // }
  let requestUrl;
  if (method === "POST") {
    config.data = body;
    requestUrl = url;
  }

  if (method === "GET") {
    requestUrl = url + urlParams;
  }



  function successCallback(response) {
    // var result = _.get(response, 'data.result');
    // if (result == 1 && method == "GET") {
    //     response.data._lastRequestTime = _.now();
    //     localStorage.setItem(requestUrl, JSON.stringify(response.data))
    // }
    return response;
  }

  // 添加请求拦截器
  axios.interceptors.request.use(function (config) {
    // $store.dispatch("openLoading");
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // $store.dispatch("closeLoading");
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // $store.dispatch("closeLoading");
    // 对响应错误做点什么
    if (error && error.response) {
      var code = error.response.status;
      var errFun = handleError[code];
      if (errFun) {
        errFun();
      }
    }
    return Promise.reject(error);
  });

  if (method === "POST") {
    return axios.post(requestUrl, body, config).then(successCallback);
  } else {
    return axios.get(requestUrl, config).then(successCallback);
  }
}
export default network;