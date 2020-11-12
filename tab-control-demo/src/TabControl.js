import React, { Component } from 'react'

export default class TabControl extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  render() {

    const { titles } = this.props
    const { currentIndex } = this.state
    
    return (
      <div className="tab-control">
        {
          titles.map((item, index) => {
            return (
              <div key={index} 
                   className={"tab-item " + (currentIndex === index ? "active" : "")}
                   onClick={e => {this.itemClick(index)}}>
                <span>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      currentIndex: index
    })

    // 获取父组件传来的函数，将索引传递过去
    const { itemClick } = this.props
    itemClick(index)
  }
}
