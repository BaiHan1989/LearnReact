import React, { PureComponent } from 'react'

import style from './style.module.css'

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className={style.title}>我是Home的标题</h2>
        <div className={style.banner}>banner</div>
      </div>
    )
  }
}
