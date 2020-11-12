import React, { Component } from 'react'

import TabControl from './TabControl'

export default class App extends Component {

  constructor(props) {
    super(props)

    // 数据不会发生改变，放在属性里
    this.titles = ["新款", "精选", "流行"]

    // 可能状态发生改变的，放入this.state
    this.state = {
      currentTitle: "新款"
    }
  }

  render() {

    const { currentTitle } = this.state

    return (
      <div>
        <TabControl titles={this.titles} itemClick={index => this.itemClick(index)}/>
        <h2>{currentTitle}</h2>
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      currentTitle: this.titles[index]
    })
  }
}
