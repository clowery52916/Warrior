import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom'

class SecondHeader extends Component {
  render() {
    return (<div>

      <div id="parallax-world-of-ugg">
        <section>
          <div class="title">
            <br/>
            <div className='connectToFacebook'>
              <Link to="chart" target="_blank" to="https://www.facebook.com/WarriorOutreach2008" >Connect with Us!</Link>
            {/* <a href="">Connect with Us!</a> */}
            </div>
            <h1>Donate</h1>
            <h1>Volunteer</h1>
          </div>
        </section>
      </div>
    </div>);
  }
}

export default SecondHeader;
