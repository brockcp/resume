import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../style.scss';

function Intro(){
  const springA = useSpring({
    from: {opacity:"0", color:'gray', fontSize:"40px"},
    to: {opacity:"1"},
    delay:0,
    config: {mass: 6, tension:170, friction:30 },
  });
  const springB = useSpring({
    from: {transform: "scale(0.3)", opacity:"0", color:'red', fontSize:"40px"},
    to: {transform: "scale(1)", opacity:"1", color:"goldenrod"},
    delay:1000,
    config: {mass: 6, tension:170, friction:30 },
  });
  const springC = useSpring({
    from: {transform: "scale(0.3)", opacity:"0", color:'red', fontSize:"40px"},
    to: {transform: "scale(1)", opacity:"1", color:"goldenrod"},
    delay:2500,
    config: {mass: 6, tension:150, friction:30 },
  });
  const springD = useSpring({
    from: {opacity:"0", color:'gray', fontSize:"40px"},
    to: {opacity:"1"},
    delay:4500,
    config: {mass: 6, tension:150, friction:30 },
  });
  const springE = useSpring({
    from: {opacity:"0", color:'gray', fontSize:"40px"},
    to: {opacity:"1"},
    delay:4500,
    config: {mass: 6, tension:150, friction:30 },
  });
  return(
    <div className="" id="intro">
      <div className="container-fluid bg-color-1 p-100">
          <div className="row">
            <div className="col-12 text-center">
              <animated.div style={{...springA}}>Hello</animated.div>
              <animated.div style={{...springB}}>My name is Brock</animated.div>
              <animated.div style={{...springC}}>I am a Front End Web Developer</animated.div>
              <animated.div style={{...springD}}>in Orange County, California</animated.div>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Intro;
