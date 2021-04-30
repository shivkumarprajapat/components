import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header/Header'
import Home from './components/pages/Home'
import { About } from './components/pages/About'
import Blog from './components/pages/Blog'
import Service from './components/pages/Service'
import Error from './components/Error/Error'
import JsonData from './data/data.json'

const App = () => {
  const [pageData, setPageData] = useState({})
  useEffect(() => {
    setPageData(JsonData)
  }, [])
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home data={pageData.Home} />
          </Route>
          <Route path='/about'>
            <About data={pageData.About} />
          </Route>
          <Route path='/blog'>
            <Blog data={pageData.Blog} />
          </Route>
          <Route path='/service'>
            <Service data={pageData.Service} />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
