import React, { PureComponent } from 'react'

import { HomeWrapper, TitleWrapper } from "./style";

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TitleWrapper>我是Home的标题</TitleWrapper>
        <div className="banner">
          <span>轮播1</span>
          <span className="active">轮播2</span>
          <span>轮播3</span>
          <span>轮播4</span>
        </div>
      </HomeWrapper>
    )
  }
}
