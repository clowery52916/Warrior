import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import {MobileStepper} from 'material-ui';
import {Paper} from 'material-ui';
import {Typography} from 'material-ui';
import {Button, Icon } from 'material-ui'
import SwipeableViews from 'react-swipeable-views';
import styled from 'styled-components'
const listItems = [
  {title: 'step 1', content: 'Break The UI Into A Component Hierarchy'},
  {title: 'step 2', content: 'Build A Static Version in React'},
  {title: 'step 3', content: 'Identify The Minimal (but complete) Representation Of UI State'},
  {title: 'step 4', content: 'Identify Where Your State Should Live'},
  {title: 'step 5', content: 'Add Inverse Data Flow'}
];

function SlideItem(props) {
  return (
    <div className="item-slide">
      <h1>{props.title}</h1>
      <h2>{props.content}</h2>
    </div>
  );
}

const Indicators = (props) => {
  const listIndicators = listItems.map((item, index) =>
    <li
      key={index}
      className={props.currentSlide === index ? 'active' : ''}
      onClick={() => props.changeSlide(index)}
    >{index + 1}</li>
  );
  return (
    <ul className="indicators">
      {listIndicators}
    </ul>
  );
};

export default class Slides extends Component {
  constructor(props) {
     super(props);
    this.state = {
         slideshow: props.slide,
         slideIndex: 0
    };
    this.currentIndex = 0;
    this.pause = false;
  }

  componentDidMount() {
    var that = this;
    this.timeout = setTimeout(function () {
        that.goTo('auto')
      }, 3000);
  }

  componentDidUpdate() {
    var that = this;
    if(this.pause === true) {
      clearInterval(this.timeout);
      this.timePause = setTimeout(function(){
        clearInterval(this.timePause);
      }, 8000);
      this.pause = false;
    }
    this.timeout = setTimeout(function () {
      that.goTo('auto')
    }, 3000);

  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  goTo = (direction) => {
      let index = 0;
      switch(direction) {
        case 'auto':
          index = this.currentIndex + 1;
          this.currentIndex = index >= listItems.length ? 0 : index;
        break;
        case 'prev':
          index = this.currentIndex - 1;
          this.currentIndex = index < 0 ? listItems.length - 1 : index;
          this.pause = true;
        break;
        case 'next':
          index = this.currentIndex + 1;
          this.currentIndex = index >= listItems.length ? 0 : index;
          this.pause = true;
        break;
        default:
          this.currentIndex = direction;
          this.pause = true;
        break;
      }
      console.log('pause:', this.pause);
       this.setState({
         slideIndex: this.currentIndex,
         slideshow: listItems[this.currentIndex]
       });

  };

  render() {
    return (
      <div className="slideshow-simple">
        <SlideItem
          title={this.state.slideshow.title}
          content={this.state.slideshow.content}
        />
        <Indicators
          changeSlide={this.goTo} // function
          currentSlide={this.state.slideIndex}
          />
        <div className="wrap-control">
          <button className="btn btn-prev" value="Prev" onClick={() => this.goTo('prev')}>Prev</button>
          <button className="btn btn-next" value="Next" onClick={() => this.goTo('next')}>Next</button>
        </div>
      </div>
    );
  }
}

const element = <Slides slide={listItems[0]}/>;

// const tutorialSteps = [
//   {
//     label: 'How to be happy :)',
//     imgPath: 'https://images.unsplash.com/photo-1519941970202-b1883164af02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c793cdd74995ec35bcd03fe19e2db8c5&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     label: '1. Work with something that you like, like…',
//     imgPath: 'https://images.unsplash.com/photo-1519941970202-b1883164af02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c793cdd74995ec35bcd03fe19e2db8c5&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     label: '2. Keep your friends close to you and hangout with them',
//     imgPath: 'https://images.unsplash.com/photo-1519941970202-b1883164af02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c793cdd74995ec35bcd03fe19e2db8c5&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     label: '3. Travel everytime that you have a chance',
//     imgPath: 'https://images.unsplash.com/photo-1519941970202-b1883164af02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c793cdd74995ec35bcd03fe19e2db8c5&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     label: '4. And contribute to Material-UI :D',
//     imgPath: 'https://images.unsplash.com/photo-1519941970202-b1883164af02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c793cdd74995ec35bcd03fe19e2db8c5&auto=format&fit=crop&w=800&q=60',
//   },
// ];
//
// const wordsAbove = styled.div`
//   text-align: center;
// `
//
//
// export default class SwipeableTextMobileStepper extends Component {
//   state = {
//     activeStep: 0,
//   };
//
//   handleNext = () => {
//     this.setState(prevState => ({
//       activeStep: prevState.activeStep + 1,
//     }));
//   };
//
//   handleBack = () => {
//     this.setState(prevState => ({
//       activeStep: prevState.activeStep - 1,
//     }));
//   };
//
//   handleStepChange = activeStep => {
//     this.setState({ activeStep });
//   };
// render(){
//     const { activeStep } = this.state;
//
//     const maxSteps = tutorialSteps.length;
//   return(
//     <div className='name'>
//             <Paper square elevation={0}>
//               <Typography>{tutorialSteps[activeStep].label}</Typography>
//             </Paper>
//             <SwipeableViews
//               axis={this.props.direction === 'rtl' ? 'x-reverse' : 'x'}
//               index={this.state.activeStep}
//               onChangeIndex={this.handleStepChange}
//               enableMouseEvents
//
//             >
//               {tutorialSteps.map(step => (
//                 <img key={step.label} src={step.imgPath} alt={step.label} className='wordsAbove' />
//               ))}
//             </SwipeableViews>
//             <MobileStepper
//               variant="text"
//               steps={maxSteps}
//               position="static"
//               activeStep={activeStep}
//               nextButton={
//                 <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
//                   Next
//                   {this.props.direction === 'rtl' ? <Icon /> : <Icon />}
//                 </Button>
//               }
//               backButton={
//                 <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
//                   {this.props.direction === 'rtl' ? <Icon /> : <Icon />}
//                   Back
//                 </Button>
//               }
//             />
//           </div>
//   )
// }
// }
