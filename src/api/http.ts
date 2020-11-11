import axios from 'axios'

/**
 *https://juejin.im/post/6844903652881072141#heading-0
 */
let service = axios
  .create({
    baseURL: "http://127.0.0.1:18808",
    timeout: 3000
  })

service.defaults.headers.post['Content_Type'] = 'application/json'
service.defaults.headers.put['Content_Type'] = 'application/json'

// request拦截器
service
  .interceptors
  .request
  .use((config) => {
      // TODO: 请求拦截
      if (config.method === 'post' || config.method === 'put') {
        config.data = JSON.stringify(config.data)
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    });

// response拦截器
service
  .interceptors
  .response
  .use(function (response) {
      // TODO: response 拦截
      // let {data} = response
      // return data;
      return Promise.resolve(response)
    },
    function (error) {
      console.log(error)
      console.log('拦截器报错');
      return Promise.reject(error);
    });


enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT'
}

function callApi(method: string, url: string, headers = {}, params = {}) {
  // FIXME: 此处有bug
  switch (method) {
    case method = HTTP_METHOD.GET:
      return new Promise((resolve, reject) => {
        service
          .get(url, {
            headers: headers,
            params: params
          })
          .then(response => {
            console.log(response.data)
            resolve(response.data)
          }, err => {
            reject(err.data)
          })
          .catch(e => {
            console.log('err', e)
          })
      })
    case method = HTTP_METHOD.POST:
      return new Promise((resolve, reject) => {
        axios
          .post(url, {
            headers: headers,
            params: params
          })
          .then(response => {
            resolve(response.data)
          }, err => {
            reject(err.data)
          })
      })
  }
}

export default service
// get(path: string, headers = {}, params = {}) {
//   return callApi(HTTP_METHOD.GET, path, headers, params)
// },
//
// post(contextPath: string, path: string, headers = {}, params = {}) {
//   let baseUrl = axios.arguments.baseUrl;
//   return callApi(HTTP_METHOD.POST, baseUrl + "/" + contextPath + "/" + path, headers, params)
// }
