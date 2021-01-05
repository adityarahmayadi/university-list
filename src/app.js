import React, { lazy, Suspense } from 'react'
import { GoodsProvider } from 'goods-core'
import { xenditTheme } from '@xendit/assets/styles'
import { AppProvider } from '@xendit/contexts/app.context'

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@xendit/pages'))

const App = () => (
  <Suspense fallback=''>
    <GoodsProvider theme={xenditTheme}>
      <AppProvider>
        <Home />
      </AppProvider>
    </GoodsProvider>
  </Suspense>
)

export default App