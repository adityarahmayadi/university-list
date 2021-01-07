import React, { lazy } from 'react'
import { Box } from 'goods-core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { menus } from '@xendit/data'

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@xendit/pages'))
const News = lazy(() => import(/* webpackChunkName: "news" */ '@xendit/pages/news'))
const Settings = lazy(() => import(/* webpackChunkName: "setting" */ '@xendit/pages/settings'))
const Navbar = lazy(() => import(/* webpackChunkName: "navbar" */ '@xendit/components/navbar'))

const Routes = () => {
  return (
    <Box w>
      <Router>
        <Navbar title='University List App' menus={menus} />
        <Switch>
          <Route path='/newsletter' component={News} />
          <Route path='/settings' component={Settings} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </Box>
  )
}

export default Routes
