import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

const AppTwo = () => {
  const [show, doShow] = useState({itemOne: false,
                                   itemTwo: false,
                                   itemThree: false});
  const refOne = useRef(null), //initialize refs
        refTwo = useRef(null),
        refThree = useRef(null);

  useLayoutEffect(() => {  //calc vert. position of elements
    const topPos = element => element.getBoundingClientRect().top;
    const div1Pos = topPos(refOne.current),
          div2Pos = topPos(refTwo.current),
          div3Pos = topPos(refThree.current);
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;

      if (div3Pos < scrollPos) {  //runs scroll event
        doShow(state => ({ ...state, itemThree: true }));
      } else if (div2Pos < scrollPos) {
        doShow(state => ({ ...state, itemTwo: true }));
      } else if (div1Pos < scrollPos) {
        doShow(state => ({ ...state, itemOne: true }));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
    <div className="five">
    <p>scroll down</p>
    </div>
      <Wrapper>
        <Div animate={show.itemOne} ref={refOne}>
          <h1>Div1 here!</h1>
        </Div>
        <DivTwo animate={show.itemTwo} ref={refTwo}>
          <h1>Div2 here!</h1>
        </DivTwo>
        <DivThree animate={show.itemThree} ref={refThree}>
          <a href="https://dev.to/chriseickemeyergh/building-custom-scroll-animations-using-react-hooks-4h6f">tut link</a>
        </DivThree>
      </Wrapper>
    </div>
  );
};

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
const DivThree = styled.div`
  height: 300px;
  width: 400px;
  background-color: coral;
  transform: translateX(${({ animate }) => (animate ? "0" : "100vw")});
  transition: transform .5s;
`;
const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export default AppTwo;
