import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: "Hello React"
    }
  }

  componentDidMount() {
    // setState同步更新情况二：在真实DOM中
    document.getElementById("btn").addEventListener("click", () => {
      this.setState({
        message: "还好吗？易建联"
      })
      console.log(this.state.message)
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <button id="btn">修改文本2</button>
      </div>
    );
  }

  changeText() {
    // 同步更新情况一：setTimeout中调用
    setTimeout(() => {
      this.setState({
        message: "还好吗？易建联"
      })
      console.log(this.state.message)
    }, 0);
  }
}
export default App;