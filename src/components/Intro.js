import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../style.scss';

function Intro(){

  const springFromLeft = useSpring({
    from: {transform: `translate(-400px)`, color:'red', fontSize:"40px"},
    to: {transform: `translate(0px)`, color:"goldenrod"},
    delay:300,
    config: {mass: 1, tension:170, friction:100 },
  });
  const springFromRight = useSpring({
    from: {transform: `translate(200vw)`, color:'red', fontSize:"40px"},
    to: {transform: `translate(0px)`, color:"goldenrod"},
    delay:300,
    config: {mass: 6, tension:150, friction:30 },
  });

  return(
    <div className="foo" id="intro">
      <div className="container-fluid bg-color-1 p-20">
          <div className="row">
            <div className="col center">
                <div className="intro-pack">
                  <h4>Greeting:</h4>
                  <h4 className="eight eight-bounceInLeft">Hello</h4>
                </div>
                <div className="intro-pack">
                  <h4>Name:</h4>
                  <animated.div style={{...springFromLeft}}>My name is Brock</animated.div>
                </div>
                <div className="intro-pack">
                  <h4>Occupation:</h4>
                  <animated.div style={{...springFromRight}}>I am a <span className="font-300 color-1b">Front End </span> <span className="font-300 color-1a">Web Developer</span>...</animated.div>
                </div>
                <div className="intro-pack">
                  <h4>Location:</h4>
                  <h2 className="font-size26">in South Orange County, California</h2>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Intro;
