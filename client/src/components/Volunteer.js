import React, { Component, PropTypes } from 'react';
import HomepageLayout from './HomepageLayout'
import Swiper from 'react-slider-swiper';
import styled from 'styled-components'

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    parallax: true,
    speed: 600,
});

const Swiper1 = styled.div`
  .title:-100;
  .subtitle:-200;
  .text: data;

`
const Swiper2 = styled.div`
  background-color:#fff;
`
const Swiper3 = styled.div`

`
const Swiper4 = styled.div`

`
const Swiper5 = styled.div`

`
class Class extends Component {
  render() {
    return (
      <div>
        <HomepageLayout/>
</div>

    );
  }
}



export default Class;
