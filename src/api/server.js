import axios from 'axios';
import envconfig from '../envconfig/envconfig';

/**
 * 主要params参数
 * @params method {string} 方法名
 * @params url {string} 请求地址  例如：/login 配合baseURL组成完整请求地址
 * @params baseURL {string} 请求地址统一前缀 ***需要提前指定***  例如：http://cangdu.org
 * @params timeout {number} 请求超时时间 默认 30000
 * @params params {object}  get方式传参key值
 * @params headers {string} 指定请求头信息
 * @params withCredentials {boolean} 请求是否携带本地cookies信息默认开启
 * @params validateStatus {func} 默认判断请求成功的范围 200 - 300
 * @return {Promise}
 * 其他更多拓展参看axios文档后 自行拓展
 * 注意：params中的数据会覆盖method url 参数，所以如果指定了这2个参数则不需要在params中带入
*/

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default class Server{
    axios(method,url,params){
        return new Promise((resolve, reject) => {
            if(typeof params !== 'object') params={};
            let _options = params;
            _options = {
              method,
              url,
              baseURL:envconfig.baseUrl,
              timeout:30000,
              params:null,
              header:null,
              withCredentials:true,
              validateStatus: function (status) {
                return status >= 200 && status < 300; // default
              },
              ...params,
            }
            axios.request(_options).then(res => {
              resolve(typeof res.data === 'object'? res.data : JSON.parse(res.data))
            },error => {
              if(error.data){
                reject(error.data)
              }else{
                reject(error.data)
              }
            });
        })
    }
}


