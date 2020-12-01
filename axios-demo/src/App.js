import React, { PureComponent } from 'react'

import axios from 'axios'

import request from './network/request'

export default class App extends PureComponent {

  async componentDidMount() {
    // 发送网络请求
    // axios({
    //   url: "http://httpbin.org/get",
    //   params: {
    //     username: "lazyload",
    //     age: 34
    //   }
    // }).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })

    // axios({
    //   url: "http://httpbin.org/post",
    //   method: "post",
    //   data: {
    //     username: "LBJ",
    //     age: 36
    //   }
    // }).then(console.log)

    // axios.get("http://httpbin.org/get", {
    //   params: {
    //     username: "kobe",
    //     age: 40
    //   }
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })

    // 本质都是调用request方法
    // axios.request({

    // })

    // const result = await axios.post("http://httpbin.org/post", {username: "Yao", age: 40})
    // console.log(result)

    // try {
    //   const result = await axios.post("http://httpbin.org/post", {username: "Yao", age: 40})
    //   console.log(result)
    // } catch(err) {
    //   console.log(err)
    // }

    // const request1 = axios({
    //   url: "/get",
    //   params: {
    //     name: "Yang",
    //     age: 19
    //   }
    // })

    // const request2 = axios({
    //   url: "/post",
    //   data: {
    //     name: "Bai",
    //     age: 29
    //   },
    //   method: "post"
    // })

    // axios.all([request1, request2]).then(([res1, res2]) => {
    //   console.log(res1, res2)
    // })

    // // 创建新的axios实例
    // const instance1 = axios.create({
    //   baseURL: "https;//baidu.com",
    //   timeout: 10000
    // })

    // const instance2 = axios.create({
    //   baseURL: "http://jd.com",
    //   timeout: 8000
    // })

    // 请求和响应拦截
    // 请求拦截
    // axios.interceptors.request.use(config => {

      // Loading的展示
      // 其他业务操作

    //   console.log("请求拦截")
    //   return config
    // }, err => {

    // })

    // 响应拦截
    // axios.interceptors.response.use(res => {
    //   console.log(res.data)
    //   return res.data
    // }, error => {

    //   if (error && error.response) {
    //     const status = error.response.status
    //     switch (status) {
    //       case 400:
    //         console.log("400")
    //         break;
    //       default:
    //         console.log("其他错误")
    //     }
    //   }

    //   return error
    // })

    // axios({
    //   url: "https://httpbin.org/get",
    //   params: {
    //     name: "Kobe"
    //   }
    // })

    request({
      url: "/get",
      params: {
        name: "Yao",
        age: 40
      }
    }).then(console.log)
  }
  
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}