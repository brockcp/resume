import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import '../style.scss';
import logo from '../sam.jpg';

function Sam(){
  const aaa = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    delay:300,
    config: {mass: 6, tension:170, friction:10 },
  });
  return(
      <animated.img src={logo} alt="shutit" style={{...aaa, width:'100%', height:'auto'}}/>

    )

}
export default Sam;
