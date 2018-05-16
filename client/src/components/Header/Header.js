import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const FirstHead = styled.div `
  width:100vw;
  height: 15vh;
  background-color: black;
`

const Header = () => (<div>

  <center>
    <header class="header">
      <nav>

      <div id="nav_bar" class="navbar">
        <img class="active" src='http://warrioroutreach.org/wp-content/uploads/2016/09/cropped-warrior-logo-PNG.png'></img>

        <ul>
          <li class="dropdown">
            <a id="reflink" class="blockline" href='/volunteer'>Volunteer</a>
            <div class="dropdown">
              <br/>
            <br/>
              <div class="dropdown-content">
                <br/>
              <br/>
              <br/>
            <br/>

                <a href="/sponsors">
                Sponsors
                </a>
                <a href="/recognition">
                  Volunteer Recognition
                </a>
                <a href="/events">
                Volunteer Opportunites
                </a>
                <a href="/donate">
              Donate Today
                </a>

              </div>
            </div>
          </li>
          <li class="dropdown">
            <a id="reflink" class="blockline" href='/about'>Our Mission</a>
            <div class="dropdown">
              <br/>
            <br/>
              <div class="dropdown-content">
                <br/>
              <br/>
              <br/>
            <br/>
                <a href="/mission">About Warrior Outreach</a>
                <a href="/story">
                  <strong>Our Story</strong>
                </a>
                <a href="/ranch">
                  <strong>Our Ranch</strong>
                </a>
                <a href="/sam">
                  <strong>Board of Directors
                  </strong>
                </a>
              </div>
            </div>
          </li>
          <li class="dropdown">
            <a id="reflink" class="blockline">Resources</a>
            <div class="dropdown">
              <br/>
            <br/>
              <div class="dropdown-content">
                <br/>
              <br/>
              <br/>
            <br/>
                <a href="/suicide-awareness">
                  <strong>Suicide Awarenss and Prevention</strong>
                </a>
                <a href="/ptsd">
                  <strong>Learn about PTSD</strong>
                </a>
                <a href="/resilience">
                  <strong>Resilience</strong>
                </a>
                <br/>
              <br/>
              <br/>
            <br/>
              </div>
            </div>
          </li>
          <li class="dropdown">
            <a id="reflink" class="blockline">Contact Us</a>
            <div class="dropdown">
              <br/>
            <br/>
              <div class="dropdown-content">
                <br/>
              <br/>
              <br/>
            <br/>
                <a href="#">
                  <strong>Link 1</strong>
                </a>
                <a href="#">
                  <strong>Link 2</strong>
                </a>
                <br/>
                <a href="#">
                  <strong>Link 3</strong>
                </a>
                <br/>
              <br/>
              <br/>
            <br/>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </nav>
    </header>
  </center>
</div>);

export default Header;
