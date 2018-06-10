import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Sponsors from './components/Sponsors'
import About from './components/About'
import Volunteers from './components/Volunteers'
import Volunteer from './components/Volunteer'
import Resources from './components/Resources'
import Ranch from './components/Ranch'
import Ptsd from './components/Ptsd'
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
              <Route exact path='/sponsors' component={Sponsors}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/resources' component={Resources}/>
              <Route exact path='/ranch' component={Ranch}/>
              <Route exact path='/volunteers' component={Volunteers}/>
              <Route exact path='/volunteer' component={Volunteer}/>
              <Route exact path='/ptsd' component={Ptsd}/>
          </Switch>
        </Router>

      </div>
    </div>);
  }
}

export default App;
