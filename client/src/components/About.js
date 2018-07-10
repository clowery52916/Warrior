import React, { Component } from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import SecondHeader from './Header/SecondHeader'

class About extends Component {
  render() {
    return (<div id="parallax-world-of-ugg">
      <SecondHeader/>
      <Header/>

      <section>
        <div class="parallax-one">
          <h2>VETERANS HELPING VETERANS</h2>
        </div>
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div class="container">
        <div class="grid-container">
          <div class="item icon-box">
            <h3><a href='http://warrioroutreach.org/wp-content/uploads/2018/05/Veterans-Helping-Veterans-Application-for-Assistance.pdf' target='blank'>How to Help</a></h3>
            <p>Download this to start helping today!</p>
            <br/>
            <h3><a href="http://www.wtvy.com/content/news/Volunteers-are-giving-back-to-Slocomb-hero--398941991.html?ce" target="blank">Vets helping vets</a></h3>
            <p>“Around 40 volunteers from local Home Depots in Alabama, Florida, and Georgia have teamed up with the group ‘Warrior Outreach’ to fix up a home for a Slocomb veteran.</p>
          </div>

          <section>
            <div class="block">
              <p>
                <span class="first-character atw">H</span>ome Repairs for Veterans <br/>
Warrior Outreach and our network of volunteers provide assistance and home repairs for Veterans and Widows and Widowers of Veterans. If you are in need of assistance please print out this application and mail it to us.</p>
              <p class="line-break margin-top-10"></p>
              <br/>
            </div>

          </section>

        </div>
      </div>
      <Footer/>
    </div>)
  }
}

export default About;
