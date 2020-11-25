import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'

import styled, { ThemeProvider } from 'styled-components'

const YMButton = styled.button`
  padding: 10px 20px;
  border-color: red;
  color: orange;
`
// 继承特性
const YMPrimaryButton = styled(YMButton)`
  background-color: green;
  color: white;
`

export default class App extends PureComponent {
  render() {
    return (
      // 主题特性
      <ThemeProvider theme={{themeColor: "orange", fontSize: "50px"}}>
        App
        <h2>我是App的标题</h2>
        <Home />
        <hr />
        <Profile />
        <YMButton>我是按钮</YMButton>
        <YMPrimaryButton>我是主要的按钮</YMPrimaryButton>
      </ThemeProvider>
    )
  }
}
