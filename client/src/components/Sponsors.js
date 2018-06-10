import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import {MobileStepper} from 'material-ui';
import {Paper} from 'material-ui';
import {Typography} from 'material-ui';
import {Button, Icon } from 'material-ui'
import SwipeableViews from 'react-swipeable-views';
import styled from 'styled-components'
import Header from './Header/Header'
import SecondHeader from './Header/SecondHeader'
import Footer from './Footer/Footer'
import { Link } from 'react-router-dom'


export default class Sponsors extends Component {
  render() {

    return (
      <div id="parallax-world-of-ugg">
        <SecondHeader/>
        <Header/>
        <section>
          <div class="parallax-four">
            <h2>Thank You to our Sponsors</h2>
          </div>
        </section>
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
          </div>
        </section>

      <div>
        <h5>Diamond Sponsors</h5>
        <main id="photo-grid">
        <div class="photo-block">
            <div class="photo-item">
                <Link to='chart' target='_blank' to="https://www.headquarternissan.com/">
                <img src="https://s3.amazonaws.com/fzautomotive/dealers/5a945b7f77d92.png" alt="Headquater Nissan of Columbus logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item sponsored">
                <Link to='chart' target='_blank' to="http://wutc.org/programs/operation-song"><img src="http://mediad.publicbroadcasting.net/p/wutc/files/styles/medium/public/201606/operation_song_logo_2.jpg" alt="Operation Song Logo" width="150" height="150"/></Link>
            </div>
            <div class="photo-item">
            <Link id='rivertown' to='chart' target='_blank' to="https://www.rivertownford.com/">
                  <img src="https://pictures.dealer.com/r/rivertownfordfd/1643/ed6bd08fd0178c21552419217b08ee4ex.jpg?impolicy=downsize&h=120" alt="Rivertown Ford Logo" width="300" height="300"/></Link>
            </div>

          </div>
        </main>
      </div>
            <div>
              <h5>Platinum Sponsors</h5>
              <main id="photo-grid">
              <div class="photo-block">

            <div class="photo-item">
                  <Link to='chart' target='_blank' to="https://www.flintenergies.com/">
                  <img src="https://www.flintenergies.com/da/skins/flintenergy/images/logo.png" alt="Flint Eneries logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item">
          <Link to='chart' target='_blank' to="https://www.geico.com/information/military/">
          <img src="https://www.asymca.org/hs-fs/hubfs/Logos-Donors/GEICO_military_logo-1.jpg?t=1526422840582&width=198&height=180&name=GEICO_military_logo-1.jpg" alt="Geico military logo" width="200" height="200"/></Link>

            </div>
            <div class="photo-item">
              <Link to='chart' target='_blank' to="https://www.buffalorock.com/"><img src="http://warrioroutreach.org/wp-content/uploads/2018/01/Buff_Rock_Logo-copy-600x403.jpg"  alt="Buffalo Rock logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item">
              <Link to='chart' target='_blank' to="https://www.zaxbys.com/?gclid=Cj0KCQjwmPPYBRCgARIsALOziAMybD_Zk1czY2cvUJxaBBDfT_I1cYNdjT1FSFHGu_0l264BNJZQQEQaAo3bEALw_wcB"><img src="https://www.seeklogo.net/wp-content/uploads/2013/06/zaxbys-vector-logo-400x400.png"  alt="Zaxbys Logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item">
              <Link to='chart' target='_blank' to="http://www.jarrods.net.php56-4.dfw3-2.websitetestlink.com/wp-content/uploads/2017/04/jarrods_trans_lg_250.png"><img src="http://www.jarrods.net/wp-content/uploads/2017/05/Jarrods-Pest-and-Termite-logo-400-e1494357977340.png"  alt="Jarrods Logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item">
              <Link to='chart' target='_blank' to="http://commandosupply.com/"><img src="https://lh3.googleusercontent.com/pL6D4a4TI-iLfdBVthV1giCob8dxLtclKHKlK8JDqLeMdqwjigcWvZidHmqqcNA-8LgS_A=s170"  alt="Commando Military Supply Logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item">
              <Link to='chart' target='_blank' to="http://valleyhospitality.com/"><img src="http://173.192.127.78/~valleyho/wp-content/uploads/2013/05/Valley-Hosp-Logo.png"  alt="Valley Hospitality Logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item">
              <Link to='chart' target='_blank' to="https://www.lockheedmartin.com/en-us/index.html"><img src="https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/photo/frigate/LM-logo.png"  alt="Lockheed Martin Logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item">
              <Link to='chart' target='_blank' to="https://www.sunbeltrentals.com/"><img src="https://www.sunbeltrentals.com/redesign/static/img/sunbelt-logo.svg"  alt="Sunblet Logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item">
              <Link to='chart' target='_blank' to="https://www.raytheon.com/"><img src="https://www.raytheon.com/themes/custom/rtn/images/logos/rtn_logo_2x.png"  alt="Raytheon Logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item">
              <Link to='chart' target='_blank' to="http://jdkinders.com/"><img src="https://s3-media3.fl.yelpcdn.com/bphoto/hZL-seKDN9FU3yy1udK1FA/l.jpg"  alt="JD Kinders Logo" width="300" height="300"/></Link>
            </div>
        </div>
        </main>
      </div>
      <div>
        <h5>Gold Sponsors</h5>
        <main id="photo-grid">
        <div class="photo-block">
            <div class="photo-item">
                <Link to='chart' target='_blank' to="https://www.headquarternissan.com/">
                <img src="https://s3.amazonaws.com/fzautomotive/dealers/5a945b7f77d92.png" alt="Headquater Nissan of Columbus logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item">
            <Link id='rivertown' to='chart' target='_blank' to="https://www.rivertownford.com/">
                  <img src="https://pictures.dealer.com/r/rivertownfordfd/1643/ed6bd08fd0178c21552419217b08ee4ex.jpg?impolicy=downsize&h=120" alt="Rivertown Ford Logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item sponsored">
                <Link to='chart' target='_blank' to="http://wutc.org/programs/operation-song"><img src="http://mediad.publicbroadcasting.net/p/wutc/files/styles/medium/public/201606/operation_song_logo_2.jpg" alt="Operation Song Logo" width="100" height="100"/></Link>
            </div>
          </div>
        </main>
      </div>
      <div>
        <h5>Silver Sponsors</h5>
        <main id="photo-grid">
        <div class="photo-block">
            <div class="photo-item">
                <Link to='chart' target='_blank' to="https://www.headquarternissan.com/">
                <img src="https://s3.amazonaws.com/fzautomotive/dealers/5a945b7f77d92.png" alt="Headquater Nissan of Columbus logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item">
            <Link id='rivertown' to='chart' target='_blank' to="https://www.rivertownford.com/">
                  <img src="https://pictures.dealer.com/r/rivertownfordfd/1643/ed6bd08fd0178c21552419217b08ee4ex.jpg?impolicy=downsize&h=120" alt="Rivertown Ford Logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item sponsored">
                <Link to='chart' target='_blank' to="http://wutc.org/programs/operation-song"><img src="http://mediad.publicbroadcasting.net/p/wutc/files/styles/medium/public/201606/operation_song_logo_2.jpg" alt="Operation Song Logo" width="100" height="100"/></Link>
            </div>
          </div>
        </main>
      </div>
      <div>
        <h5>Bronze Sponsors</h5>
        <main id="photo-grid">
        <div class="photo-block">
            <div class="photo-item">
                <Link to='chart' target='_blank' to="https://www.headquarternissan.com/">
                <img src="https://s3.amazonaws.com/fzautomotive/dealers/5a945b7f77d92.png" alt="Headquater Nissan of Columbus logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item">
            <Link id='rivertown' to='chart' target='_blank' to="https://www.rivertownford.com/">
                  <img src="https://pictures.dealer.com/r/rivertownfordfd/1643/ed6bd08fd0178c21552419217b08ee4ex.jpg?impolicy=downsize&h=120" alt="Rivertown Ford Logo" width="300" height="300"/></Link>
            </div>
            <div class="photo-item sponsored">
                <Link to='chart' target='_blank' to="http://wutc.org/programs/operation-song"><img src="http://mediad.publicbroadcasting.net/p/wutc/files/styles/medium/public/201606/operation_song_logo_2.jpg" alt="Operation Song Logo" width="100" height="100"/></Link>
            </div>
          </div>
        </main>
      </div>
    <Footer/>
  </div>
)
}
}
