import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Volunteer from './components/Volunteer'
import './App.css';
import './styles/styles.scss';
import './styles/vendor/normalize.css';

class App extends Component {
  render() {
    return (<div className="App">
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
              <Route exact path='/volunteer' component={Volunteer}/>
          </Switch>
        </Router>

      </div>
    </div>);
  }
}

export default App;
