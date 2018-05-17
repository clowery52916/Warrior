import React, { Component, PropTypes } from 'react';
import FlexGrid from './FlexGrid'
import Slides from './Slides'
import Header from './Header/Header'
import SecondHeader from './Header/SecondHeader'
import Footer from './Footer/Footer'

class Sponsors extends Component {
  render() {
    return (
      <div>
          <SecondHeader/>
      <Header/>

        <Slides/>
        <Footer/>
      </div>
    );
  }
}



export default Sponsors;
