import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import {MobileStepper} from 'material-ui';
import {Paper} from 'material-ui';
import {Typography} from 'material-ui';
import {Button, Icon } from 'material-ui'
import SwipeableViews from 'react-swipeable-views';
import styled from 'styled-components'


class Slides extends Component {
  render() {

    return (
      <div>
        <main id="photo-grid">
        <div class="photo-block">
            <div class="photo-item">
                <a href="#"><img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-0/c0.0.200.200/p200x200/26169857_2080890105473307_5218574973408692036_n.jpg?_nc_cat=0&oh=11b83b013acb7d035f1df298089ad38c&oe=5B9676A2&auto=format&fit=crop&w=800&q=30" alt="The Title of the Photo" width="500" height="500"/></a>
                <div class="photo-content">
                    <div class="photo-category">Name of Volunteer</div>
                    <h2 class="photo-title">Company/Organization</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-0/c0.5.200.200/p200x200/26167198_2081057302123254_5825752052787029563_n.jpg?_nc_cat=0&oh=68270f8e8e8ea0fe180be64ec5b0f604&oe=5B907687&auto=format&fit=crop&w=800&q=30" alt="The Title of the Photo" width="500" height="500"/></a>
                <div class="photo-content">
                  <div class="photo-category">Name of Volunteer</div>
                  <h2 class="photo-title">Company/Organization</h2> </div>
            </div>
            <div class="photo-item sponsored">
                <a href="#"><img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-0/c0.7.200.200/p200x200/26804705_2086727211556263_5108066219582381652_n.jpg?_nc_cat=0&oh=c8659d0d9a7ada355e0332d31de29aa8&oe=5B849073&auto=format&fit=crop&w=800&q=30" alt="The Title of the Photo" width="500" height="500"/></a>
                <div class="photo-content">
                  <div class="photo-category">Name of Volunteer</div>
                  <h2 class="photo-title">Company/Organization</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-0/c20.0.200.200/p200x200/26168021_2080890188806632_865643199865762930_n.jpg?_nc_cat=0&oh=2e2bf26280845b8fef03d9270f7c0f55&oe=5B9414C6&auto=format&fit=crop&w=800&q=30" alt="The Title of the Photo" width="500" height="500"/></a>
                <div class="photo-content">
                  <div class="photo-category">Name of Volunteer</div>
                  <h2 class="photo-title">Company/Organization</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-0/c0.0.200.200/p200x200/26239257_2086727091556275_2355933117876164393_n.jpg?_nc_cat=0&oh=de20453cf7d1c684305692d71fe3a993&oe=5B9C429A" alt="The Title of the Photo" width="500" height="500"/></a>
                <div class="photo-content">
                  <div class="photo-category">Name of Volunteer</div>
                  <h2 class="photo-title">Company/Organization</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-0/c0.0.200.200/p200x200/26167527_2080890178806633_7570694156217981566_n.jpg?_nc_cat=0&oh=744f35cc4943abf1d99fc2eaa3bb04d1&oe=5B796146" alt="The Title of the Photo" width="500" height="500"/></a>
                <div class="photo-content"><span>{" "}</span>
                  <div class="photo-category">Name of Volunteer</div>
                  <h2 class="photo-title">Company/Organization</h2> </div>
            </div>
            {/* <div class="photo-item">
                <a href="#"><img src="https://gratisography.com/pictures/441_1.jpg" alt="The Title of the Photo" width="500" height="600"/></a>
                <div class="photo-content">
                    <div class="photo-category">Whimsical</div>
                    <h2 class="photo-title">The Title of the Photo</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://gratisography.com/pictures/440_1.jpg" alt="The Title of the Photo" width="900" height="600"/></a>
                <div class="photo-content">
                    <div class="photo-category">Business</div>
                    <h2 class="photo-title">The Title of the Photo</h2> </div>
            </div> */}
            {/* <div class="photo-item">
                <a href="#"><img src="https://gratisography.com/pictures/439_1.jpg" alt="The Title of the Photo" width="900" height="600"/></a>
                <div class="photo-content">
                    <div class="photo-category">Nature</div>
                    <h2 class="photo-title">The Title of the Photo</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://gratisography.com/pictures/438_1.jpg" alt="The Title of the Photo" width="900" height="600"/></a>
                <div class="photo-content">
                    <div class="photo-category">Food</div>
                    <h2 class="photo-title">The Title of the Photo</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://gratisography.com/pictures/437_1.jpg" alt="The Title of the Photo" width="900" height="600"/></a>
                <div class="photo-content">
                    <div class="photo-category">Technology</div>
                    <h2 class="photo-title">The Title of the Photo</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://gratisography.com/pictures/436_1.jpg" alt="The Title of the Photo" width="900" height="600"/></a>
                <div class="photo-content">
                    <div class="photo-category">Urban</div>
                    <h2 class="photo-title">The Title of the Photo</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://gratisography.com/pictures/446_1.jpg" alt="The Title of the Photo" width="900" height="600"/></a>
                <div class="photo-content">
                    <div class="photo-category">Nature</div>
                    <h2 class="photo-title">The Title of the Photo</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://gratisography.com/pictures/444_1.jpg" alt="The Title of the Photo" width="900" height="600"/></a>
                <div class="photo-content">
                    <div class="photo-category">Business</div>
                    <h2 class="photo-title">The Title of the Photo</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://gratisography.com/pictures/447_1.jpg" alt="The Title of the Photo" width="900" height="600"/></a>
                <div class="photo-content">
                    <div class="photo-category">Business</div>
                    <h2 class="photo-title">The Title of the Photo</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://gratisography.com/pictures/445_1.jpg" alt="The Title of the Photo" width="900" height="600"/></a>
                <div class="photo-content">
                    <div class="photo-category">Nature</div>
                    <h2 class="photo-title">The Title of the Photo</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://gratisography.com/pictures/443_1.jpg" alt="The Title of the Photo" width="900" height="600"/></a>
                <div class="photo-content">
                    <div class="photo-category">Whimsical</div>
                    <h2 class="photo-title">The Title of the Photo</h2> </div>
            </div>
            <div class="photo-item">
                <a href="#"><img src="https://gratisography.com/pictures/442_1.jpg" alt="The Title of the Photo" width="900" height="600"/></a>
                <div class="photo-content">
                    <div class="photo-category">Food</div>
                    <h2 class="photo-title">The Title of the Photo</h2> </div>
            </div> */}
        </div>
    </main>
    <div class="pagination-block">
        <div class="pagination-item right"><a href="#" title="Previous Page"><i class="fa fa-arrow-left"></i> Previous</a></div>
        <div class="pagination-item center page-numbers"><span class="pagination-number">1/12</span></div>
        <div class="pagination-item left"><a href="#" title="Next Page">Next <i class="fa fa-arrow-right"></i></a></div>
    </div>
	<div id="shutterstock-search">
        <div class="shutterstock-block">
            <div class="shutterstock-item">
              <h4>Quo tempor quo aliqua ad admodum si fabulas.</h4>
                <p>Et ingeniis est voluptate, cillum quo admodum.</p>
                <p>Multos ubi cernantur, non quorum relinqueret. Do ipsum laborum, sunt non do culpa senserit.</p>

            </div>
            <div class="search-item">
<form target="_blank" method="get" action="https://www.facebook.com/pg/WarriorOutreach2008/photos/?tab=albums&auto=format&fit=crop&w=800&q=30" class="supersearch">
							<input type="hidden" name="anyorall" value="all"/>
							<input type="hidden" name="u" value="https://www.facebook.com/pg/WarriorOutreach2008/photos/?tab=albums"/>
							<input type="text" name="p.searchterm" id="search" required="" placeholder="e.g. tutu wearing dog" class="supersearch-text"/>
							<div class="submit-wrap"><input class="submit" type="submit" value="Search Photos on Facebook"/></div>
						</form>
          </div>1
        </div>
    </div>
  </div>


    );
  }
}

export default Slides;
