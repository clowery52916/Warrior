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
        <li>
          <a href='/'>  <img class="active" src='http://warrioroutreach.org/wp-content/uploads/2016/09/cropped-warrior-logo-PNG.png' onClick='/home'></img></a>
        </li>


        <ul>
          <li class="dropdown">
            <a id="reflink" class="blockline" href='/volunteer'>Volunteer</a>
            <div class="dropdown">
              <br/>
            <br/>
              <div class="dropdown-content" id='top-container'>
                <a href="/sponsors">Sponsors
                </a>
                <a href="/volunteers">
                  Volunteer Recognition
                </a>
                <a href="/events">
                Volunteer Opportunites
                </a>
                <a href="/donate">
              Donate Today
                </a>
                <br/>
                <br/>
                <br/>
              </div>
            </div>
          </li>
          <li class="dropdown">
            <a id="reflink" class="blockline" href='/about'>Our Mission</a>
            <div class="dropdown">
              <br/>
            <br/>
              <div class="dropdown-content">
                <Link to="/mission">About Warrior Outreach</Link>
                <a href="/story">
                  Our Story
                </a>
                <a href="/ranch">
                  Our Ranch
                </a>
                <a href="/sam">
                  Board of Directors

                </a>
                <br/>
                <br/>
                <br/>
              </div>
            </div>
          </li>
          <li class="dropdown">
            <a id="reflink" class="blockline" href='/resources'>Resources</a>
            <div class="dropdown">
              <br/>
            <br/>
              <div class="dropdown-content">
                <a href="/suicide-awareness">
                  Suicide Awarenss and Prevention
                </a>
                <Link to="/ptsd">
                  Learn about PTSD
                </Link>
                <a href="/resilience">
                  Resilience
                </a>
                <br/>
              <br/>
                <br/>
              <br/>
              </div>
            </div>
          </li>
          <li class="dropdown">
            <a id="reflink" class="blockline" href='/contact'>Contact Us</a>
            <div class="dropdown">
              <br/>
            <br/>
              <div class="dropdown-content">


                <a href="#">
                  Link 1
                </a>
                <a href="#">
                  Link 2
                </a>
                <a href="#">
                  Link 3
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
