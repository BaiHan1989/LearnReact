import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'

import style from './style.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        App
        <h2 className={style.title}>我是App的标题</h2>
        <Home />
        <Profile />
      </div>
    )
  }
}
