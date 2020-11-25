import React, { PureComponent } from 'react'

import styled from 'styled-components'

const YMInput = styled.input.attrs({
  placeholder: "输入姓名",
  borderColor: "red"
})`
  background-color: lightblue;
  border-color: ${props => props.borderColor};
  color: ${props => props.color};
`

export default class Profile extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      color: "purple"
    }
  }

  render() {
    return (
      <div>
        <input type="password"/>
        <YMInput type="password" color={this.state.color}/>
        <h2>我是设置页面的标题</h2>
        <ul>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    )
  }
}
