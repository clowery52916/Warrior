import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const FirstHead =styled.div`
  width:100vw;
  height: 15vh;
  background-color: black;
`

const Header = () => (
  <div>

  <center>
    <header class="header">

      <div class="sitelogo">

        <img src="http://www.lakecountychambers.com/wp-content/uploads/2014/11/vetsnet-645x234.png" />
      </div>
<div>

</div>

      <div id="nav_bar" class="navbar">

        <ul>
          <li><img class="active" src='http://warrioroutreach.org/wp-content/uploads/2016/09/cropped-warrior-logo-PNG.png'></img></li>
          <li class="dropdown">
            <a id="reflink" class="blockline"  href='/volunteer'><strong>Volunteer</strong></a>
            <div class="dropdown">
    <div class="dropdown-content">
      <a href="/sponsors"><strong>Sponsors</strong></a>
      <a href="/recognition"><strong>Volunteer Recognition</strong></a>
      <a href="/events"><strong>Volunteer Opportunites</strong></a>
      <a href="/donate"><strong>Donate Today</strong></a>

    </div>
  </div>
          </li>
          <li class="dropdown">
            <a id="reflink" class="blockline" href='/about'><strong>About Warrior Outreach</strong></a>
            <div class="dropdown">
    <div class="dropdown-content">
      <a href="/mission"><strong>Our Mission</strong></a>
      <a href="/story"><strong>Our Story</strong></a>
      <a href="/ranch"><strong>Our Ranch</strong></a>
      <a href="/sam"><strong>Board of Directors </strong></a>
    </div>
  </div>
          </li>
          <li class="dropdown">
            <a id="reflink" class="blockline"><strong>Resources</strong></a>
            <div class="dropdown">
    <div class="dropdown-content">
      <a href="/suicide-awareness"><strong>Suicide Awarenss and Prevention</strong></a>
      <a href="/ptsd"><strong>Learn about PTSD</strong></a>
      <a href="/resilience"><strong>Resilience</strong></a>
    </div>
  </div>
          </li>
          <li class="dropdown">
            <a id="reflink" class="blockline"><strong>Contact Us</strong></a>
            <div class="dropdown">
    <div class="dropdown-content">
      <a href="#"><strong>Link 1</strong></a>
      <a href="#"><strong>Link 2</strong></a>
      <br/>
      <a href="#"><strong>Link 3</strong></a>
    </div>
  </div>
          </li>
        </ul>
      </div>
    </header>
    <div class="newsblock">

    </div>
  </center>
  </div>
);

export default Header;
