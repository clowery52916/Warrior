import React, { Component, PropTypes } from 'react';
import Header from './Header/Header'
import SecondHeader from './Header/SecondHeader'
import Footer from './Footer/Footer'

class FlexGrid extends Component {
  render() {
    return (
      <div>
    <SecondHeader/>
        <Header/>

      <header class="header">
        <div class="text-box">
            <h1 class="heading-primary">
              <span class="heading-primary-main">Squid</span>
              <span class="heading-primary-sub">quorum ~ summis</span>
            </h1>
        </div>
    </header>
    <div id="about">
        <div class="container">
            <div class="row featurette">
                <div class="col-md-7">
                  <h2 class="featurette-heading">Ea iis amet quamquam nam mentitum aliqua ut iudicem consectetur. <span class="text-muted">Do ipsum ex multos e offendit nulla quorum ita noster.</span></h2>
                  <p class="lead"> Ipsum cupidatat in expetendis a amet consequat sed deserunt.Cernantur aute a ingeniis consectetur e a incididunt fidelissimae.Duis laboris qui elit multos de singulis do tamen mandaremus.
                    </p>
                    <blockquote>
                      <p>Admodum cillum appellat iis multos offendit ab ingeniis.<strong>Eram aut ab irure excepteur</strong>. <br/>Aliqua singulis ad singulis, duis ne mentitum <strong>te esse</strong>. <br/>Irure laborum si esse culpa, quo labore cillum <strong>in occaecat </strong>.<br/><em>Cupidatat</em>
                        </p>
                    </blockquote>

                </div>
                <div class="col-md-5">
                    <img class="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiij7ytwubaAhWBvBQKHXwxBtQQjRx6BAgBEAU&url=https%3A%2F%2Fgithub.com%2FChell0&psig=AOvVaw2GUUY9mxUw0YZqB52ike7W&ust=1525332959428917"
                        alt="machel's smiling photo"/>
                </div>
            </div>
        </div>
    </div>

    <div id="photoContainer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="project thumbnail">
                        <a href="https://codepen.io/Chell0/full/rGaXzO/" target="_blank" title="Tribute page">
                            <img src="https://images.unsplash.com/photo-1457518919282-b199744eefd6?auto=format&fit=crop&w=600&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project thumbnail ">
                        <a href="https://thimbleprojects.org/ch3ll0h/385389" target="_blank" title="Startup Landing Page">
                            <img src="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=600&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project thumbnail ">
                        <a href="https://thimbleprojects.org/ch3ll0h/385804" target="_blank" title="Photo Blog">
                            <img src="https://images.unsplash.com/photo-1489900464632-5f5907edda24?auto=format&fit=crop&w=600&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project thumbnail">
                        <a href="https://codepen.io/Chell0/full/XVyoqa/" target="_blank" title="Website Template">
                            <img src="https://images.unsplash.com/photo-1507031774658-589130daf90c?auto=format&fit=crop&w=600&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project thumbnail">
                        <a href="https://codepen.io/Chell0/full/WXPoBN/" target="_blank" title="Blog">
                            <img src="https://images.unsplash.com/photo-1502477639450-ccb7a6e7c391?auto=format&fit=crop&w=600&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="project thumbnail ">
                        <a href="https://codepen.io/Chell0/full/vpqWMq/" target="_blank" title="TicTacToe Board">
                            <img src="https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?auto=format&fit=crop&w=600&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <Footer/>
  </div>

    );
  }
}



export default FlexGrid;
