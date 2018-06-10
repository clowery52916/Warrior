import React, {Component} from 'react'
import {Article, Heading, Text} from 'react-super-styled'
import Header from './Header/Header'
import SecondHeader from './Header/SecondHeader'
import Footer from './Footer/Footer'

export default class SecondaryHomePage extends Component {
  render() {
    return (<div id="parallax-world-of-ugg">
      <SecondHeader/>
      <Header/>

      <section>
        <div class="parallax-one">
          <h2>AMERICA</h2>
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
            <h3>location_on</h3>
            <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Malesuada ultricies.</p>
            <br/>
            <h3>location_on</h3>
            <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Malesuada ultricies.</p>
          </div>
          <div class="item icon-box">
            <h3>location_on</h3>
            <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Malesuada ultricies.</p>
            <br/>
            <h3>location_on</h3>
            <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Malesuada ultricies.</p>
          </div>

          <section>
            <div class="block">
              <p>
                <span class="first-character atw">B</span>ulk data collection Kentucky bourbon roll that beautiful bean footage Buddy Christ Uncle Sam. Who shot JR? ain't my first rodeo don’t mess with Texas if you dont like it you can git out. Mama grizzly landed on the moon Tippecanoe and Tyler too this is what we call the Muppet Show. The south will rise again if the glove don’t fit you must acquit Jerry Springer NASA Japanese internment. Trix are for kids Fox Mulder didn’t inhale tombstone piledriver freedom fries day that will live in infamy.</p>
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
