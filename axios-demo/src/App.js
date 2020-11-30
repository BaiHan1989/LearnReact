import React, { PureComponent } from 'react'

import axios from 'axios'

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

    const request1 = axios({
      url: "http://httpbin.org/get",
      params: {
        name: "Yang",
        age: 19
      }
    })

    const request2 = axios({
      url: "http://httpbin.org/post",
      data: {
        name: "Bai",
        age: 29
      },
      method: "post"
    })

    axios.all([request1, request2]).then(([res1, res2]) => {
      console.log(res1, res2)
    })
  }
  
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}