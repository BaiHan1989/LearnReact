import React, { memo } from 'react'

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routers from './router'

import store from './store'

import { Provider } from 'react-redux'
import YMAppHeader from '@/components/app-header'
import YMAppFooter from '@/components/app-footer'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YMAppHeader />
        {renderRoutes(routers)}
        <YMAppFooter />
      </HashRouter>
    </Provider>

  )
})
