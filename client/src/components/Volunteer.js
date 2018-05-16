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
        <div className="swiper-container">
        <img className="parallax-bg parallax-bg-1" src="background-image:url(http://lorempixel.com/900/600/nightlife/2/)" data-swiper-parallax="-20%"></img>
        <img className="parallax-bg parallax-bg-2" src="background-image:url(http://lorempixel.com/900/600/nightlife/5/)" data-swiper-parallax="-200%"></img>
        <div className="swiper-wrapper">
            <Swiper1 className="swiper-slide">
                <div className="title" >Slide 1</div>
                <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                <div className="text" data-swiper-parallax="-300">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
                </div>
            </Swiper1>
                <Swiper2 className="swiper-slide">
                <div className="title" data-swiper-parallax="-100">Slide 1</div>
                <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                <div className="text" data-swiper-parallax="-300">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
                </div>
            </Swiper2>
            <Swiper3 className="swiper-slide">
                <div className="title" data-swiper-parallax="-100">Slide 2</div>
                <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                <div className="text" data-swiper-parallax="-300">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
                </div>
            </Swiper3>
            <Swiper4 className="swiper-slide">
                <div className="title" data-swiper-parallax="-100">Slide 3</div>
                <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                <div className="text" data-swiper-parallax="-300">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
                </div>
            </Swiper4>
                        <Swiper5 className="swiper-slide">
                <div className="title" data-swiper-parallax="-100">Slide 4</div>
                <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                <div className="text" data-swiper-parallax="-300">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
                </div>
            </Swiper5>
        </div>



        {/* <!-- Add Pagination --> */}
        <div className="swiper-pagination swiper-pagination-white"></div>
        {/* <!-- Add Navigation --> */}
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
    </div>
</div>


    );
  }
}



export default Class;
