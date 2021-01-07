import React, { lazy } from 'react'
import { Box } from 'goods-core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { menus } from '@xendit/data'

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@xendit/pages'))
const News = lazy(() => import(/* webpackChunkName: "news" */ '@xendit/pages/news'))
const About = lazy(() => import(/* webpackChunkName: "setting" */ '@xendit/pages/about'))
const Navbar = lazy(() => import(/* webpackChunkName: "navbar" */ '@xendit/components/navbar'))

const Routes = () => {
  return (
    <Box w>
      <Router>
        <Navbar title='University List App' menus={menus} />
        <Box w mt={{ xs: '112px', lg: '76px' }}>
          <Switch>
            <Route path='/newsletter' component={News} />
            <Route path='/about' component={About} />
            <Route path='/' component={Home} />
          </Switch>
        </Box>
      </Router>
    </Box>
  )
}

export default Routes
