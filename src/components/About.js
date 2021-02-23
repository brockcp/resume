import React from 'react';

function About(){
  return(
    <div className="foo" id="about">
        <div className="container-fluid bg-color-1 p-20">
          <h1 className="text-center font-size40 font-300 color-1a">About starts here</h1>
          <hr className="hr-skills" />
          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <p className="font-size26 font-200 line-height-13">
                <span className="color-2d font-size30 font-200">One day in 2009 I found myself staring into the browser on my computer screen and wondering just what in the world was going on in there. </span>
                <span className="color-1a font-size30 font-200">It seemed a good way to find out might be a try and build a website. And so I did...</span><br />
                <span className="color-2d font-size30 font-200">Well, ten years have passed and I still feel like that fascinated boy every time I learn/build something new in web development.</span>
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}
export default About;
