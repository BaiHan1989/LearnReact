// 组件间通信 - 父传子 - 类组件

import React, { Component } from 'react';

class ChildCpn extends Component {

  render() {

    const { name, age, height } = this.props

    return (
      <div>
        <h2>{name + " " + age + " " + height}</h2>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="YaoMing" age="40" height="2.26"/>
        <ChildCpn name="LaoBai" age="30" height="1.76"/>
      </div>
    );
  }
}

export default App;