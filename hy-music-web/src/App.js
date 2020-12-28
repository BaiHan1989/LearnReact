import React, { memo } from 'react'

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routers from './router'

import YMAppHeader from '@/components/app-header'
import YMAppFooter from '@/components/app-footer'

export default memo(function App() {
  return (
    <HashRouter>
      <YMAppHeader />
      {renderRoutes(routers)}
      <YMAppFooter />
    </HashRouter>
  )
})
