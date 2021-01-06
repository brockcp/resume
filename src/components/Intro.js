import React from 'react';


function Intro(){
  return(
    <div className="foo" id="intro">
      <div className="container-fluid bg-color-1 p-20">
          <div className="row">
            <div className="col text-center">
              <h1 className="font-size40 font-300 color-1a">Hello!</h1>
              <h2 className="stretchRight animated font-size36">My name is <span className="font-500 color-1b">Brock</span>.</h2>
              <h2 className="stretchLeft animated font-size36">I am a <span className="font-300 color-1b">Front End </span> <span className="font-300 color-1a">Web Developer</span>...</h2>
              <h2 className="stretchRight animated font-size26">in South Orange County, California</h2>
              <h2 className="text-center introSub-container golden">blah</h2>
              <i className="fa fa-chevron-down"></i>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Intro;
