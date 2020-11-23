import axios from 'axios'
import store from '@/store'
import router from '@/router'
// import {message} from 'ant-design-vue'

/**
 *https://juejin.im/post/6844903652881072141#heading-0
 */
const instance = axios
  .create({
    baseURL: 'http://127.0.0.1:9000',
    timeout: 3000
  })

instance.defaults.headers.post.Content_Type = 'application/json'
instance.defaults.headers.put.Content_Type = 'application/json'

// request拦截器
instance
  .interceptors
  .request
  .use((config) => {
    // TODO: 请求拦截
    if (config.method === 'post' || config.method === 'put') {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  })

// response拦截器
instance
  .interceptors
  .response
  .use((response) => {
    // TODO: response 拦截
    const { data, config } = response
    console.log(data)
    return data
  },
  function (error) {
    // if (loadingInstance) loadingInstance.close()
    const { response, message } = error
    if (error.response && error.response.data) {
      const { status, data } = response
      handleCode(status, data.msg || message)
      return Promise.reject(error)
    } else {
      let { message } = error
      if (message === 'Network Error') {
        message = '后端接口连接异常'
      }
      if (message.includes('timeout')) {
        message = '后端接口请求超时'
      }
      if (message.includes('Request failed with status code')) {
        const code = message.substr(message.length - 3)
        message = '后端接口' + code + '异常'
      }
      message.error(message || '后端接口未知异常')
      return Promise.reject(error)
    }
  })

enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT'
}

// function callApi(method: string, url: string, headers = {}, params = {}) {
//   // FIXME: 此处有bug, 应获取token
//   switch (method) {
//     case method = HTTP_METHOD.GET:
//       return new Promise((resolve, reject) => {
//         instance
//           .get(url, {
//             headers: headers,
//             params: params
//           })
//           .then(response => {
//             console.log(response.data)
//             resolve(response.data)
//           }, err => {
//             reject(err.data)
//           })
//           .catch(e => {
//             console.log('err', e)
//           })
//       })
//     case method = HTTP_METHOD.POST:
//       return new Promise((resolve, reject) => {
//         axios
//           .post(url, {
//             headers: headers,
//             params: params
//           })
//           .then(response => {
//             resolve(response.data)
//           }, err => {
//             reject(err.data)
//           })
//       })
//   }
// }

function handleCode (code: any, msg: string) {
  switch (code) {
    case 401:
      // message.error(msg || '登录失效')
      store
        .dispatch('user/resetAll')
        .catch(() => {
          console.log('')
        })
      break
    case 403:
      router
        .push({ path: '/401' })
        .catch(() => {
          console.log('')
        })
      break
    default:
      // message.error(msg || `后端接口${code}异常`)
      break
  }
}

export default instance
