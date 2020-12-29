import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from "./style";

export default memo(function YMAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01"></a>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
