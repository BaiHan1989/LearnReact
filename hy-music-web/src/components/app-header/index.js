import React, { memo } from 'react'

import { headerLinks } from "@/common/local-data";

import { NavLink } from 'react-router-dom'
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from "./style";

export default memo(function YMAppHeader() {

  const showHeaderLinks = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01"></a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showHeaderLinks(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
            <Input className="search" placeholder="音乐/视频/用户/电台" prefix={<SearchOutlined />} />
            <div className="center">创作者中心</div>
            <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
