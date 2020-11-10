import React, { Component } from 'react'

// 类组件的定义
// export default class App extends Component {

//   constructor() {
//     super()
//     this.state = {
//       message: "你好啊！周大福"
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h2>我是类组件</h2>
//         <h2>{ this.state.message }</h2>
//       </div>
//     )
//   }
// }

// 函数式组件的定义
/**
 * 函数式组件的特点
 * 1. 没有this对象
 * 2. 没有内部的状态
 */
export default function App() {
  return (
    <div>
      <h2>我是函数式组件</h2>
      <h2>counter</h2>
      <button>+</button>
      <h2>你好啊~打工人！</h2>
    </div>
  )
}