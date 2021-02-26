import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../style.scss';

function Intro(){
  const springA = useSpring({
    from: {opacity:"0"},
    to: {opacity:"1"},
    delay:0,
    config: {mass: 6, tension:170, friction:30 },
  });
  const springB = useSpring({
    from: {transform: "scale(0.3)", opacity:"0", color:'red'},
    to: {transform: "scale(1)", opacity:"1", color: "#ffeeb6"},
    delay:1000,
    config: {mass: 6, tension:170, friction:30 },
  });
  const springC = useSpring({
    from: {transform: "scale(0.3)", opacity:"0", color:'red'},
    to: {transform: "scale(1)", opacity:"1", color:"#ffdd70"},
    delay:2500,
    config: {mass: 6, tension:150, friction:30 },
  });
  const springD = useSpring({
    from: {opacity:"0", color:'gray'},
    to: {opacity:"1"},
    delay:4500,
    config: {mass: 6, tension:150, friction:30 },
  });
  return(
    <div className="" id="intro">
      <div className="container-fluid bg-color-1 pt-100">
          <div className="row">
            <div className="col-12 text-center">
              <animated.div style={{...springA}} className="intro-a">Hello There.</animated.div>
              <animated.div style={{...springB}} className="intro-b">My name is Brock</animated.div>
              <animated.div style={{...springC}} className="intro-c">I am a Front End Web Developer</animated.div>
              <animated.div style={{...springD}} className="intro-d">in Orange County, California</animated.div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Intro;
