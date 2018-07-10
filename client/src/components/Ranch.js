import React, {Component} from 'react';
import Header from './Header/Header'
import SecondHeader from './Header/SecondHeader'
import Footer from './Footer/Footer'
import SecondaryHomePage from './SecondaryHomePage'
import {render} from 'react-dom';
import {Parallax} from 'react-parallax';
import Carousel from 'nuka-carousel';
import {Link} from 'react-router-dom'
import {ViewPager, Frame, Track, View} from 'react-view-pager'
import styled from 'styled-components'
import {Slider} from 'react-slick'
import Slides from './Slides'
import {Typography, Paper} from 'material-ui';
import GoogleMapsContainer from './GoogleMapsContainer'

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
const image0 ='https://photos-1.dropbox.com/t/2/AAAWBM8qs6tuYnf-yea1pFwCkyptMxoJdYWRMO38bPjpVg/12/709978334/jpeg/32x32/1/_/1/2/Horses%20of%20Warrior%20Outreach.jpg/EJC06sAMGBwgAigC/Hjf1fhMrgAtp_B5Kh1EzjMRdgyUKRXzcxr0iTYlNKAM?size=2048x1536&size_mode=3'
const image1 = "https://photos-3.dropbox.com/t/2/AACFebUgNRPb-6mC9_KIKBEk_o-VEAOeyhYxUnIT1VnYJQ/12/709978334/jpeg/32x32/1/_/1/2/DSC_0002.JPG/EJC06sAMGBYgAigC/pZGJpZbRiihKl1CHpWlWZAagkvD8UvNqV-De8v4QB5Y?size=2048x1536&size_mode=3";
const image2 = "https://photos-4.dropbox.com/t/2/AAAU447UUUIUil9GR_rjiDuBWqkxsIhcuXiZTVivaLdcnQ/12/709978334/jpeg/32x32/1/_/1/2/DSC_0008%20(1).jpg/EJC06sAMGBYgAigC/B-_GV3v_b71C8ri6qzyUK6BNrkdQFahL7FGe9FGqupw?size=2048x1536&size_mode=3";
const image3 = "https://photos-6.dropbox.com/t/2/AACMIHUAx-071P4vANtwUOi3Rfc5Zok8yoN7f1VPWzoQ0w/12/709978334/jpeg/32x32/1/_/1/2/DSC_0021%20(1).jpg/EJC06sAMGBYgAigC/k3R9KNo4_MB8H7gAMw9mUBNG25mQu7byDuhE8qgL00k?size=2048x1536&size_mode=3";
const image4 = 'https://photos-1.dropbox.com/t/2/AADGI6DEbAjCB9Cim5Tj2Nh8NPjSOgcg4tELMGvovwN00A/12/709978334/jpeg/32x32/1/_/1/2/DSC_0023.JPG/EJC06sAMGBYgAigC/Dpb-sVqnqqwt8mDitGAEUmYl0OcPSKcMWU18b8LU1WM?size=2048x1536&size_mode=3';

export default class Ranch extends Component {

  render() {
    return (<div>
      <SecondHeader/>
      <Header/>
      <div id="parallax-world-of-ugg">

        <section>
          <div class="parallax-six">
            <h2>The Ranch</h2>
          </div>
        </section>

        <section>
          <div class="block">
            <p>
              <span class="first-character sc">W</span>arrior Outreach Ranch Facilities offer confidence building, Instructional and relaxing opportunities to interact with horses and enjoy family bonding. Our main focus is to assist Soldiers and Families in transitioning and adjusting to life after traumatic occurrences and family separation due to deployments such as war. Our Horsemanship Program is designed to provide support, similar to equine therapy, to Veterans and their Families in the tri-community area. We are staffed entirely by caring Volunteers and are privately funded by your donations.</p>
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10">Florida Man roll that beautiful bean footage deep-dish John Wayne yes we can. Fox News I did not have sexual relations with that woman Tippecanoe and Tyler too. That dog’ll hunt NASCAR George Bush does not care about black people crippling obesity epidemic. Day that will live in infamy this is what we call the Muppet Show in god we trust. American justice American football Thomas Jefferson liberty blame Canada. 40 acres and a mule if the glove don’t fit you must acquit trix are for kids. Oprah can you hear me now? mission accomplished Dwayne “The Rock” Johnson. Tom Cruise moonshine war of northern aggression series of tubes murrica.</p>
          </div>
        </section>

        <section>
          <div class="parallax-seven">
            <h2>Events</h2>

          </div>
        </section>
        <section>
          <div class="block">
            <p>
              <span class="first-character ny">W</span>arrior outreach last year engaged over 12,000 Veterans and their Families with
equine activities, Veterans Home Assistance, Tickets for events, and so much
More… We invite you to come out to ride Horses and spend time learning the basic
fundamentals of Horsemanship, etc.. Click   <a id='thumbnail' href="http://warrioroutreach.org/wp-content/uploads/2018/05/WOEventRequestForm2018Fillable.pdf" target="_blank" title="Ranch Event Form">here</a> to download the event request form.</p>
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10"><em>Reocurring Events</em></p>
            <p> <em>Riding</em>
              <br/>
              Riding is on Sat from 1-4 PM  there will be no riding on Wednesdays.

Riding is conducted by RSVP only. Email Sam Rhodes at warrioroutreach@gmail.com

Individuals are welcome to coordinate to come out on other days by direct Coordination with the Warrior Outreach. Riding hours will be extended when the Daily Light saving time is adjusted
<br/>
<br/>
<em>Feeding The Needy and Bagging Groceries at Columbus Dream Center</em>
<br/>
Support Columbus Dream center feeding the needy occurs the third Friday (Noon to 1 PM) and Sat (11-2 PM) of every month. If you are available please contact Charlie White @ charliewhite@knology.net

Columbus Dream Center- Map
<br/>
<br/>
<em>Warrior Outreach Ranch</em>
<br/>
Any organization that is associated with Veterans, their Families or Active Duty military members may use the Warrior Outreach Facilities. To coordinate dates and times, please email Cathy Rhodes at cathy.rhodes56@gmail.com
<br/>
<br/>
<em>Riding Lessons</em>
<br/>
Warrior Outreach Ranch will now schedule Riding Lessons. To be linked up with a local Riding Lesson Instructor email us at warrioroutreach@gmail.com.
<br/>
<br/>
<em>Volunteer!</em>
<br/>

Volunteers are needed! Please donate your time and energy to this wonderful cause. For more information on volunteer opportunities, contact Sam Rhodes at 706-505-0708.
            </p>
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10"></p>

          </div>
        </section>
        <section>
          <div class="parallax-eight">
            <h2>Horses</h2>
          </div>
        </section>


        <section>
          <div class="block">

            <section>
              <div class="block">
                <p>
                  <span class="first-character atw">H</span>orses play a big part in what we do here at Warrior Outreach.
          You can help us support our horses, by donating bails of hay.</p>
                <p class="line-break margin-top-10"></p>
                <p class="margin-top-10">Please take time to look at our Sponsor page, so many have contributed significantly to the Warrior Outreach Mission to
                support Veterans, service members and their Families. The activities include
                structured opportunities for them to interact with Horses in a group as well as
                individual basis at the Warrior Outreach ranch, feeding the needy as well as
                providing opportunities to attend sports events as well as Veterans Home assistance
                repairs. Our main focus is to identify those in need of assistance in transitioning and
                adjusting to life after traumatic occurrences such as war.
                Thank you for your consideration, we continue to honor Veterans and their
                Family and Value Veterans and Soldiers, our heroes that keep this country
                safe and strong.We salute all of our Volunteers! Thanks to all of you for your continued support! You are the reason we can continue to support all of the brave men and women who have risked thier lives, for ours.</p>
                <p class="line-break margin-top-10"></p>
                <p class="margin-top-10"></p>

              </div>
            </section>
            <br/>
            <section>
              <Carousel>
                <div class="container">

                  <img src={image0} alt="allhorses" class="image"/>
                </div>
                <div class="container">

                  <img src={image1} alt="horse" class="image"/>
                </div>
                <div class="container">
                  <img src={image2} alt="horse" class="image"/>
                </div>
                <div class="container">
                  <img src={image3} alt="horse" class="image"/>
    </div>
                   <div class="container">
      <img src={image4} alt="Avatar" class="image"/>
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
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10">
              <span class="first-character ny">I</span>McDonalds coalition of the willing It's only half time NASCAR tea party propane and propane accessories. Day that will live in infamy series of tubes I am not a crook nothing to fear but fear itself Harriet Tubman. Santorum smallpox blanket mama grizzly Philly cheese steak deep-dish trail of tears liberty American justice. Yes we can Supreme Commander Allied Forces Europe Eisenhower bleed red white and blue Richard “Tricky Dick” Nixon. Wardrobe malfunction KFC Double Down slavery hot dog who shot JR? safe for democracy apple pie 40 acres and a mule. Can you hear me now? tombstone piledriver Fox News Fox Mulder Dwayne “The Rock” Johnson unilateral military action. Marlboro vast right-wing conspiracy Japanese internment roll that beautiful bean footage don’t mess with Texas. Live free or die hard Uncle Sam truck nutz Harriet Tubman Kentucky bourbon Brett Favre John Wayne. Freedom fries yes we can mama grizzly I wanna be like Mike little bighorn if you dont like it you can git out. Walker, Texas Ranger y’all moonshine Dwayne “The Rock” Johnson Philly cheese steak tea party git ‘er done. Freedom isn’t free Fox Mulder that dog’ll hunt 187 on an undercover cop security council veto. Crippling obesity epidemic unconstitutional I did not have sexual relations with that woman Mr. Gorbachev, tear down this wall. Marlboro the south will rise again NASA 40 acres and a mule Westboro Baptist Church these colors don’t run. Who shot JR? United we stand Jerry Springer don’t mess with Texas this is what we call the Muppet Show.</p>
          </div>
        </section>
      </div>
      <p class="line-break margin-top-10"></p>
      <Footer/>
    </div>)
  }
}
