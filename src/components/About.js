import React from 'react';

function About(){
  return(
    <div className="container-fluid bg-color-2 pt-5 pb-5" id="about">
      <div className="row">
       <div className="col-sm-12 col-md-8 offset-md-2">
          <p className="font-size26 font-200 line-height-13 color-1b">I have been building websites and apps since 2009.
          I got into web development after wanting to build a website for
          Japanese students studying English. At the time, I was living in Tokyo.<br />
          In the process I truly became fascinated by the technologies involved
          and the power modern web presences can yield. My goal is simple: serve
          my clients as best I can by building rich highly performant web services
          while learning as much as I can along the way.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About;
