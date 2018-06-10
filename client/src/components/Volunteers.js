import React, {Component, PropTypes} from 'react';
import Slides from './Slides'
import Header from './Header/Header'
import SecondHeader from './Header/SecondHeader'
import Footer from './Footer/Footer'

class Volunteers extends Component {
  render() {
    return (<div>
      <SecondHeader/>
      <Header/>

<br/>
<br/>
<br/>
<br/>
<br/>
<h1>A Very Special Thanks to Our Volunteers of the Month!</h1>
      <Slides/>
      <Footer/>
    </div>);
  }
}

export default Volunteers;
