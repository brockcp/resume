import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import '../style.scss';

function Intro(){

  const aaa = useSpring({
    from: {transform: `translate(-100vw)`, color:'red', fontSize:"40px"},
    to: {transform: `translate(24vw)`, color:"goldenrod"},
    delay:300,
    config: {mass: 6, tension:170, friction:10 },
  });

  return(
    <div className="foo" id="intro">
      <div className="container-fluid bg-color-1 p-20">
          <div className="row">
            <div className="col">
              <animated.div style={{...aaa}}>My name is Brock</animated.div>
              <h2 className="stretchLeft animated font-size36">I am a <span className="font-300 color-1b">Front End </span> <span className="font-300 color-1a">Web Developer</span>...</h2>
              <h2 className="stretchRight animated font-size26">in South Orange County, California</h2>
              <h2 className="text-center introSub-container">X</h2>
              <i className="fa fa-chevron-down"></i>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Intro;
