import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Header from './Header/Header'
import SecondHeader from './Header/SecondHeader'
import Footer from './Footer/Footer'

export default class Ranch extends Component {
  render() {

    return (<div id="parallax-world-of-ugg">
      <SecondHeader/>
      <Header/>
      <section>
        <div class="parallax-four">
          <h2>The Ranch</h2>
        </div>
      </section>
      <div id="about">
        <div class="container">
          <div class="row featurette">
            <div class="col-md-7">
              <section>
                <div class="block">
                  <p>
                    <span class="first-character sc">T</span>he Warrior Outreach Ranch facility offers veterans and active military men and woman a place where they can access Instructional and theraputic opportunities, interacting with horses. The ranch is also a safe enviorment to help our military heros build confidence, create memories and bond with loved ones. Our Horsemanship Program is designed to provide support, similar to equine therapy, to Veterans and their Families in the tri-community area. We are staffed entirely by caring Volunteers and are privately funded by your donations.</p>
                  <p class="line-break margin-top-10"></p>
                  <p class="margin-top-10"><span class="first-character sc">L</span>ast year, Warrior outreach engaged over 12,000 Veterans and their Families with
equine activities, Veterans Home Assistance, Tickets for events, and so much
More. We invite you to come out to ride the Horses, spend time learning the basic
fundamentals of Horsemanship, and spend some time outdoors with your loved ones.  Please take time to view our Sponsor. These sponsors and volunteers have contributed significantly to the Warrior Outreach Mission in helping
support Veterans, service members and their Families.</p>
  <p class="line-break margin-top-10"></p>
  <p><span class="first-character sc">T</span>hanks in part to these sponsors and our volunteers, Warrior Outreach has been able to provide
structured opportunities for service members to interact with Horses in a group enviormnent,  as well as
individual learning opporunities at the Warrior Outreach ranch. Some of the activites our sponors and donations have supplied, include,  feeding the needy,
providing opportunities to attend sporting events, Veterans Home repair assistance and scholorship opportunities to help our heros continue on their educational journey. Our main focus is to identify those in need of assistance in transitioning and
adjusting to life after traumatic occurrences,  such as war and being seperated from loved ones. </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div id="photoContainer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="ranch-image thumbnail">
                <a id='thumbnail' href="https://thimbleprojects.org/ch3ll0h/385389" target="_blank" title="Startup Landing Page">
                  <img src="https://i.imgur.com/Zq6tuTG.png?1"/>
                  <p>Veterans Helping Veterans</p>
                </a>

              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="ranch-image thumbnail">
                <a id='thumbnail' href="https://thimbleprojects.org/ch3ll0h/385804" target="_blank" title="Photo Blog">
                  <img src="https://i.imgur.com/HJn1s2w.png?1"/>
                  <p>Volunteers</p>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="ranch-image thumbnail">
                <a id='thumbnail' href="https://codepen.io/Chell0/full/XVyoqa/" target="_blank" title="Website Template">
                  <img src="https://i.imgur.com/jm79RbQ.jpg?1"/>
                  <p>Volunteers</p>
                </a>

              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="ranch-image thumbnail">
                <a id='thumbnail' href="https://codepen.io/Chell0/full/WXPoBN/" target="_blank" title="Blog">
                  <img src="https://i.imgur.com/8Mhvevb.jpg?1&auto=format&fit=crop&w=200&q=80"/>
                  <p>The Ranch</p>
                </a>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="ranch-image thumbnail">
                <a id='thumbnail' href="http://warrioroutreach.org/wp-content/uploads/2018/05/WOEventRequestForm2018Fillable.pdf" target="_blank" title="Ranch Event Form">
                  <img src="https://i.imgur.com/eISAPJL.png?1"/>
                  <p>Host an Event!</p>
                </a>

              </div>
            </div>
            <div class="col-sm-6">
              <div class="ranch-image thumbnail">
                <a id='thumbnail' href="http://warrioroutreach.org/wp-content/uploads/2018/05/Veterans-Helping-Veterans-Application-for-Assistance.pdf" target="_blank" title="Application for Assistance">
                  <img src="https://i.imgur.com/A5pL37d.jpg?1"/>
                  <p>Apply for Home Repairs</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="event-request">
        <div class="event-request-image">
          .</div>
        <Link class="event-request-cta gsc-track" to="http://warrioroutreach.org/wp-content/uploads/2018/05/WOEventRequestForm2018Fillable.pdf" target='_blank'>DOWNLOAD
        </Link>
      </div> */
      }
      <Footer/>
    </div>);
  }
}
