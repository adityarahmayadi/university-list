import React, { Suspense } from 'react'
import { GoodsProvider } from 'goods-core'
import { xenditTheme } from '@xendit/assets/styles'
import { AppProvider } from '@xendit/contexts/app.context'
import Routes from './routes'

const App = () => (
  <Suspense fallback=''>
    <GoodsProvider theme={xenditTheme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </GoodsProvider>
  </Suspense>
)

export default App
