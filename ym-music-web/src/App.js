import React, { memo, Suspense } from 'react'

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routers from './router'

import store from './store'

import { Provider } from 'react-redux'
import YMAppHeader from '@/components/app-header'
import YMAppFooter from '@/components/app-footer'
import YMAppPlayerBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YMAppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routers)}
        </Suspense>
        <YMAppFooter />
        <YMAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})
