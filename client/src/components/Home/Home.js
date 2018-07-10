import React, {Component} from 'react';
import Header from '../Header/Header'
import SecondHeader from '../Header/SecondHeader'
import Footer from '../Footer/Footer'
import SecondaryHomePage from '../SecondaryHomePage'
import {render} from 'react-dom';
import {Parallax} from 'react-parallax';
import Carousel from 'nuka-carousel';
import {Link} from 'react-router-dom'
import {ViewPager, Frame, Track, View} from 'react-view-pager'
import styled from 'styled-components'
import {Slider} from 'react-slick'
import Slides from '../Slides'
import {Typography, Paper} from 'material-ui';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};
const image1 = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/32683125_2146991755529808_6223058851969630208_o.jpg?_nc_cat=0&oh=aeb1a6e69ccc67edb0396387427e4c46&oe=5B822986&auto=format&fit=crop&w=800&q=60";
const image2 = "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/18623401_1971234419772210_5888313411426508302_o.jpg?_nc_cat=0&oh=8551ec1f6b0eade6eace9a1fcba17b4b&oe=5B8F0850&auto=format&fit=crop&w=800&q=60";
const image3 = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10247413_1481550415407282_654150860472308275_n.jpg?_nc_cat=0&oh=8232141cedeb0fdf05d7d1335bbb1c52&oe=5B9809BF&auto=format&fit=crop&w=800&q=60";

export default class Home extends Component {

  render() {
    return (<div>
      <SecondHeader/>
      <Header/>
      <div id="parallax-world-of-ugg">

        <section>
          <div class="parallax-one">
            <h2>OUR MISSION</h2>
          </div>
        </section>

        <section>
          <div class="block">
            <p>
              <span class="first-character sc">W</span>arrior Outreach, Inc. supports Veterans, Service Members, and their Families by offering a wide variety of equine related activities. Warrior Outreach Ranch offers confidence building, instructional and relaxing opportunities to interact with horses and enjoy family bonding.</p>
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10"></p>
          </div>
        </section>

        <section>
          <div class="parallax-two">
            <h2>SUPPORT OUR TROOPS</h2>
          </div>
        </section>
        <section>
          <div class="block">
            <p>
              <span class="first-character ny">O</span>Our main focus  is to assist Soldiers and Families in transitioning and adjusting to life after traumatic occurrences and family separation due to deployments such as war.  Our Horsemanship Program is designed to provide support, similar to equine therapy, to Veteran and their Families in the tri-community area.  We are staffed entirely by caring Volunteers and are privately funded by your donations.</p>
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10"></p>
          </div>
        </section>

        <section>
          <div class="parallax-three">
            <h2>THANK OUR VETS</h2>
          </div>
        </section>

        <section>
          <div class="block">
            <p>
              <span class="first-character atw">W</span>arrior Outreach partners with businesses and Volunteers in the local area to provide a free Veterans Helping Veterans home repair service for disabled and deserving Veterans and their surviving family members.  100% of your contributions go to providing support to those who need it the most.  Warrior Outreach, Inc. partners with Heartland Therapeutic Programs.</p>
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10"></p>

          </div>
        </section>
        <section>
          <div class="block">
            <p class='head'>
              See what we do!
              </p>
            <p class="line-break margin-top-10"></p>
            <br/>
            <section>
              <Carousel>
                <div class="container">
                  <img src={image1} alt="Avatar" class="image"/>
                  <div class="overlay">
                    <div class="subtext">
                    <a href='/horses' class="text">HORSES</a><span class="first-character atw">O</span>ur Horsemanship Program is designed to provide support, similar to equine therapy, to Veteran and their Families in the tri-community area.  We are staffed entirely by caring Volunteers and are privately funded by your donations.

      100% of the donations for this campaign will go directly to feeding the 17 horses located at the ranch and utilized for therapeutic activities.</div>
                  </div>
                </div>
                <div class="container">
                  <img src={image2} alt="Avatar" class="image"/>
                  <div class="overlay">
                    <div class="text">WHAD UP</div>
                  </div>
                </div>
                <div class="container">
                  <img src={image3} alt="Avatar" class="image"/>
                  <div class="overlay">
                    <div class='subtext'>
                      <a href='/volunteer' class="text">YO</a>
                      Safe for democracy bleed red white and blue 187 on an undercover cop. Y’all can you hear me now? crippling obesity epidemic blonde haired, blue eyed Jesus. Ask not what your country can do for you, ask what you can do for your country. Security council veto 40 acres and a mule Buddy Christ coalition of the willing. CNN’s ratings are down deep-dish apple pie sit on it mama grizzly. I wanna be like Mike tombstone piledriver Oprah these colors don’t run. Live free or die hard Tom Cruise Forrest Gump KFC Double Down. Philly cheese steak murrica George Bush does not care about black people. Bulk data collection trail of tears day that will live in infamy.
                    </div>
                  </div>
                  {/* <div class="container">
      <img src={image4} alt="Avatar" class="image"/>
      <div class="overlay">
        <div class="text">Hey Homie</div>
      </div>
    </div> */
                  }
                </div>
              </Carousel>

            </section>

            {/*

           <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/15304150_1882746025287717_2896792020856309222_o.jpg?_nc_cat=0&oh=08f537b59ad3f524ab5778658e94dda2&oe=5B826BA9&text=Our Ranch" onClick='/home' />
           <img src="https://images.unsplash.com/photo-1519941970202-b1883164af02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c793cdd74995ec35bcd03fe19e2db8c5&auto=format&fit=crop&w=800&q=60" />
           <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
           <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
           <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
           <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
         </Carousel>
         <Paper square elevation={0}>
           <Typography>{tutorialSteps.label}</Typography>
         </Paper>  */
            }
            <br/>


          </div>
        </section>
      </div>
      <p class="line-break margin-top-10"></p>
      <Footer/>
    </div>)
  }
}
