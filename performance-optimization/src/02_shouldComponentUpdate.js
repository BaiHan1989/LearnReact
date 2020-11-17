import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      message: "Hello World"
    }
  }

  render() {
    console.log("App 的render函数被调用")
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    );
  }

  // 返回Boolean值，是否允许调用render函数
  // 在需要进行调用render函数的时候再进行调用，否则不调用
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true
    }
    return false
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeText() {
    this.setState({
      message: "Hello React"
    })
  }
}

export default App;