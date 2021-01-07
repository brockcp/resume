import React,{useLayoutEffect, useRef, useState} from 'react';
import { useSpring, animated, config } from 'react-spring';
import '../style.scss';
import logo from '../logo.svg';
import styled from 'styled-components';

function Intro(){
  const [show, doShow] = useState({itemOne:false, itemTwo:false});
  const refOne = useRef(null);
  const refTwo = useRef(null);
  useLayoutEffect(()=>{
    const topPos = element => element.getBoundingClientRect().top;
    const div1Pos = topPos(refOne.current),
          div2Pos = topPos(refTwo.current);
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if(div2Pos<scrollPos){
        doShow(state=>({...state, itemTwo:true}));
      }else if(div1Pos<scrollPos){
        doShow(state=>({...state, itemOne:true}));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const aaa = useSpring({
    from: {transform: `translate(0vw)`,boxShadow: '0px 5px 15px rgba(55,255,255,0.5)'},
    to: {transform: `translate(44vw)`, boxShadow: '0px 2px 0px rgba(5,55,255,0.5)'},
    delay:300,
    config: {mass: 6, tension:170, friction:10 },
  });

  return(
    <div className="foo" id="intro">
      <div className="container-fluid bg-color-1 p-20">
          <div className="row">
            <div className="col text-center">
            <Div animate={show.itemOne} ref={refOne}>
              <animated.h1 style={{...aaa, width:'300px'}} className="font-size40 font-300 color-1a">Hello!</animated.h1>
            </Div>
            <DivTwo animate={show.itemTwo} ref={refTwo}>
              <h2 className="stretchRight animated font-size36">My name is <span className="font-500 color-1b">Brock</span>.</h2>
              </DivTwo>
              <h2 className="stretchLeft animated font-size36">I am a <span className="font-300 color-1b">Front End </span> <span className="font-300 color-1a">Web Developer</span>...</h2>
              <h2 className="stretchRight animated font-size26">in South Orange County, California</h2>
              <h2 className="text-center introSub-container golden">blah</h2>
              <i className="fa fa-chevron-down"></i>
            </div>
          </div>
      </div>
      <animated.img src={logo} alt="shutit" style={{...aaa, width:'300px'}}></animated.img>

    </div>
  )
}

const Div = styled.div`
  height: 300px;
  width: 400px;
  background-color: red;
  text-align: center;
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 1s;
`;
const DivTwo = styled.div`
  height: 300px;
  width: 400px;
  background-color: gray;
  transform: translateY(${({ animate }) => (animate ? "0" : "10vw")});
  transition: transform .5s;
`;

export default Intro;
