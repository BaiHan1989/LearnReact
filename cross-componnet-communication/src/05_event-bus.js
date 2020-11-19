import React, { PureComponent } from 'react';

import { EventEmitter } from 'events'

// 全局事件总线
const eventBus = new EventEmitter()

class Home extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      message: null,
      number: null
    }
  }

  componentDidMount() {
    // 注册事件监听
    eventBus.addListener("sayHello", (message, number) => this.handleSayHello(message, number))
  }

  componentWillUnmount() {
    // 移除事件监听
    eventBus.removeListener()
  }

  handleSayHello(message, number) {
    console.log(message, number)
    this.setState({
      message,
      number
    })
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <h2>{this.state.message}</h2>
        <h2>{this.state.number}</h2>
      </div>
    )
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <button onClick={e => this.sayHello()}>Hello Home</button>
      </div>
    )
  }

  sayHello() {
    // 发射事件,并传递参数
    eventBus.emit("sayHello", "Hello Home", 666)
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }
}

export default App;