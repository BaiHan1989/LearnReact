import React, { Component } from 'react'

class Cpn extends Component {
  render() {
    return <h2>我是Cpn组件</h2>
  }

  componentWillUnmount() {
    console.log("Cpn组件即将被卸载")
  }
}

export default class App extends Component {

  constructor() {
    super()

    this.state = {
      counter: 0,
      isShow: true
    }

    console.log("调用了组件的constructor()方法")
  }

  render() {
    console.log("调用了组件的render方法")

    return (
      <div>
        <h2>我是App组件</h2>
        <h2>当前计数：{ this.state.counter }</h2>
        <button onClick={e => {this.increment()}}>+</button>
        <hr/>
        <button onClick={e => {this.changeCpnShow()}}>切换</button>
        {this.state.isShow && <Cpn/>}
      </div>
    )
  }

  componentDidMount() {
    console.log("调用了组件的已经挂载方法")
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentDidUpdate() {
    console.log("调用组件已经发生更新方法")
  }

  changeCpnShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}