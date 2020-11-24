import React, { PureComponent } from 'react'

export default class App extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      color: "purple"
    }
  }

  render() {

    const pStyle = {
      color: this.state.color,
      textDecoration: "underline"
    }

    return (
      <div>
        <h2 style={{fontSize: "40px", color: "red"}}>我是标题</h2>
        <p style={pStyle}>这是一段描述</p>
      </div>
    )
  }
}