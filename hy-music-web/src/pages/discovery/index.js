import React, { memo } from 'react'

import { discoverMenu } from '@/common/local-data'
import { renderRoutes } from 'react-router-config';

import { DiscoverWrapper, TopMenu } from "./style";
import { NavLink } from 'react-router-dom';

export default memo(function YMDiscovery(props) {

  const { route } = props

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            discoverMenu.map((item, index) => {
              return (
                <div className="item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
