import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(config => {
  return config
}, err => {

})

// 响应拦截
instance.interceptors.response.use(res => {
  return res.data
}, error => {

  if (error && error.response) {
    const status = error.response.status
    switch (status) {
      case 400:
        console.log("400")
        break;
      default:
        console.log("其他错误")
    }
  }

  return error
})

export default instance