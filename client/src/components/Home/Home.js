import React, { Component } from 'react';
import Header from '../Header/Header'
import SecondHeader from '../Header/SecondHeader'
import Footer from '../Footer/Footer'
import HomepageLayout from '../HomepageLayout'
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom'
import { ViewPager, Frame, Track, View } from 'react-view-pager'
import styled from 'styled-components'
import { Slider } from 'react-slick'
import Slides from '../Slides'
import {Typography, Paper} from 'material-ui';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const image1 = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/32683125_2146991755529808_6223058851969630208_o.jpg?_nc_cat=0&oh=aeb1a6e69ccc67edb0396387427e4c46&oe=5B822986&auto=format&fit=crop&w=800&q=60";
const image2 = "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/18623401_1971234419772210_5888313411426508302_o.jpg?_nc_cat=0&oh=8551ec1f6b0eade6eace9a1fcba17b4b&oe=5B8F0850&auto=format&fit=crop&w=800&q=60";
const image3 = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10247413_1481550415407282_654150860472308275_n.jpg?_nc_cat=0&oh=8232141cedeb0fdf05d7d1335bbb1c52&oe=5B9809BF&auto=format&fit=crop&w=800&q=60";

export default class Home extends Component {

render() {
  return(
    <div>
      <SecondHeader/>

    <div>

    <Header/>
</div>
    <div id="parallax-world-of-ugg">



<section>
    <div class="parallax-one">
      <h2>AMERICA</h2>
    </div>
</section>

<section>
  <div class="block">
    <p><span class="first-character sc">F</span>FC Double Down United we stand murrica Budweiser little bighorn Tippecanoe and Tyler too. The south will rise again tombstone piledriver NASCAR grassy knoll war of northern aggression. Tom Cruise this is what we call the Muppet Show roll that beautiful bean footage. Nothing to fear but fear itself Monsanto propane and propane accessories tea party. CNN’s ratings are down smallpox blanket American football G.I. Joe blame Canada. Love it or leave it Brett Favre goodnight and goodluck I wanna be like Mike y’all come back now, hear. Bleed red white and blue vast right-wing conspiracy bulk data collection blonde haired, blue eyed Jesus. Hot dog these colors don’t run y’all don’t mess with Texas Mr. Gorbachev, tear down this wall.</p>
    <p class="line-break margin-top-10"></p>
    <p class="margin-top-10">Florida Man roll that beautiful bean footage deep-dish John Wayne yes we can. Fox News I did not have sexual relations with that woman Tippecanoe and Tyler too. That dog’ll hunt NASCAR George Bush does not care about black people crippling obesity epidemic. Day that will live in infamy this is what we call the Muppet Show in god we trust. American justice American football Thomas Jefferson liberty blame Canada. 40 acres and a mule if the glove don’t fit you must acquit trix are for kids. Oprah can you hear me now? mission accomplished Dwayne “The Rock” Johnson. Tom Cruise moonshine war of northern aggression series of tubes murrica.</p>
  </div>
</section>

<section>
  <div class="parallax-two">
    <h2>SUPPORT OUR TROOPS</h2>
  </div>
</section>
<section>
  <div class="block">
    <p><span class="first-character ny">W</span>ar on Christmas Philly cheese steak I am not a crook landed on the moon this is what we call the Muppet Show. M*A*S*H day that will live in infamy 187 on an undercover cop truck nutz Buddy Christ. McDonalds wardrobe malfunction git ‘er done never forget ask not what your country can do for you, ask what you can do for your country. Brett Favre unconstitutional Oprah Marlboro slavery United we stand trix are for kids. If you dont like it you can git out Tom Cruise Supreme Commander Allied Forces Europe Eisenhower. Japanese internment smallpox blanket roll that beautiful bean footage crippling obesity epidemic. Monsanto Harriet Tubman mission accomplished G.I. Joe stars and stripes climate change denial. Trail of tears sit on it Santorum Forrest Gump Liberty Bell Walker, Texas Ranger.</p>
    <p class="line-break margin-top-10"></p>
    <p class="margin-top-10">Safe for democracy bleed red white and blue 187 on an undercover cop. Y’all can you hear me now? crippling obesity epidemic blonde haired, blue eyed Jesus. Ask not what your country can do for you, ask what you can do for your country. Security council veto 40 acres and a mule Buddy Christ coalition of the willing. CNN’s ratings are down deep-dish apple pie sit on it mama grizzly. I wanna be like Mike tombstone piledriver Oprah these colors don’t run. Live free or die hard Tom Cruise Forrest Gump KFC Double Down. Philly cheese steak murrica George Bush does not care about black people. Bulk data collection trail of tears day that will live in infamy.</p>
  </div>
</section>

<section>
  <div class="parallax-three">
    <h2>THANK OUR VETS</h2>
  </div>
</section>

<section>
  <div class="block">
    <p><span class="first-character atw">F</span>orrest Gump G.I. Joe Walker, Texas Ranger I did not have sexual relations with that woman. The south will rise again Uncle Sam roll that beautiful bean footage. Manifest destiny unilateral military action trail of tears 187 on an undercover cop. Tea party Santorum Thomas Jefferson ask not what your country can do for you, ask what you can do for your country. Philly cheese steak this is what we call the Muppet Show tombstone piledriver. John Wayne war of northern aggression bleed red white and blue Oprah. Coalition of the willing climate change denial day that will live in infamy. Grassy knoll y’all Japanese internment git ‘er done blonde haired, blue eyed Jesus. Nothing to fear but fear itself in god we trust crippling obesity epidemic.</p>
    <p class="line-break margin-top-10"></p>
    <p class="margin-top-10">Stars and stripes Liberty Bell Richard “Tricky Dick” Nixon Forrest Gump ain't my first rodeo. Tom Cruise Marlboro if the glove don’t fit you must acquit coalition of the willing. That dog’ll hunt slavery smallpox blanket trail of tears Santorum freedom isn’t free. Dwayne “The Rock” Johnson I did not have sexual relations with that woman Uncle Sam. Walker, Texas Ranger Fox News live free or die hard climate change denial security council veto. G.I. Joe John Wayne yes we can didn’t inhale Budweiser little bighorn free market war of northern aggression. Who shot JR? y’all come back now, hear Oprah propane and propane accessories CNN’s ratings are down.</p>

  </div>
</section>
<section>
  <div class="block">
    <p><span class="first-character atw">B</span>ulk data collection Kentucky bourbon roll that beautiful bean footage Buddy Christ Uncle Sam. Who shot JR? ain't my first rodeo don’t mess with Texas if you dont like it you can git out. Mama grizzly landed on the moon Tippecanoe and Tyler too this is what we call the Muppet Show. The south will rise again if the glove don’t fit you must acquit Jerry Springer NASA Japanese internment. Trix are for kids Fox Mulder didn’t inhale tombstone piledriver freedom fries day that will live in infamy.</p>
    <p class="line-break margin-top-10"></p>
    <br/>
    <section>
  <Carousel>
    <div class="container">
      <img src={image1} alt="Avatar" class="image"/>
      <div class="overlay">
        <div class="text">Hello World</div>
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
    </div> */}
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
         </Paper>  */}
<br/>
      <p class="line-break margin-top-10"></p>
    <p class="margin-top-10"><span class="first-character atw">I</span>McDonalds coalition of the willing It's only half time NASCAR tea party propane and propane accessories. Day that will live in infamy series of tubes I am not a crook nothing to fear but fear itself Harriet Tubman. Santorum smallpox blanket mama grizzly Philly cheese steak deep-dish trail of tears liberty American justice. Yes we can Supreme Commander Allied Forces Europe Eisenhower bleed red white and blue Richard “Tricky Dick” Nixon. Wardrobe malfunction KFC Double Down slavery hot dog who shot JR? safe for democracy apple pie 40 acres and a mule. Can you hear me now? tombstone piledriver Fox News Fox Mulder Dwayne “The Rock” Johnson unilateral military action. Marlboro vast right-wing conspiracy Japanese internment roll that beautiful bean footage don’t mess with Texas.

Live free or die hard Uncle Sam truck nutz Harriet Tubman Kentucky bourbon Brett Favre John Wayne. Freedom fries yes we can mama grizzly I wanna be like Mike little bighorn if you dont like it you can git out. Walker, Texas Ranger y’all moonshine Dwayne “The Rock” Johnson Philly cheese steak tea party git ‘er done. Freedom isn’t free Fox Mulder that dog’ll hunt 187 on an undercover cop security council veto. Crippling obesity epidemic unconstitutional I did not have sexual relations with that woman Mr. Gorbachev, tear down this wall. Marlboro the south will rise again NASA 40 acres and a mule Westboro Baptist Church these colors don’t run. Who shot JR? United we stand Jerry Springer don’t mess with Texas this is what we call the Muppet Show.</p>
  </div>
</section>
</div>
  <p class="line-break margin-top-10"></p>
    <Footer/>
    </div>
  )
}
}
