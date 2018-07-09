import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SecondHeader extends Component {
  render() {
    return (<div>

      <div id="parallax-world-of-ugg">
        <section>
          <div class="title">
            <br/>
            {/* <div className='second-header-links'>
              <Link to="chart" target="_blank" to="https://www.facebook.com/WarriorOutreach2008" >Facebook!</Link>
            </div> */}
              <div className='second-header-links'>
            <Link to='chart' target='_blank' to='https://www.paypal.com/donate/?token=HV29Tk7p_zw7a9ju9BHzAScG-xab55vU2hoPMoI2aPO0SN7XwBdsDsDuLKbbPOV3NErj4m&country.x=US&locale.x=US'>Donate</Link>
          </div>
          <br/>
                <div className='second-header-links'>
            <Link to='chart' target='_blank' to='https://www.gofundme.com/WarriorOutreach'>Volunteer</Link>
          </div>
          </div>
        </section>
      </div>
    </div>);
  }
}

export default SecondHeader;
