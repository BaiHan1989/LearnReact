import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: "Hello React"
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    );
  }

  // 获取到最新数据方式二
  componentDidUpdate() {
    console.log(this.state.message)
  }

  changeText() {
    // 获取到最新数据方式一：setState()第2个参数
    this.setState({
      message: "还好吗？Kobe"
    }, () => {
      console.log(this.state.message)
    })

    // setState 是异步更新的，所以此时获取到的message还是初始的数据
    // console.log(this.state.message)
  }
}

export default App;