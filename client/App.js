import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer/';
import './styles/styles.scss';
export default class App extends component {
  render() {
    return (<Router>
      <Header/>
      <Switch>
        <Route exact="exact" path="/" component={Home}/>
      </Switch>
      <Footer/>
    </Router>)
  }
}
