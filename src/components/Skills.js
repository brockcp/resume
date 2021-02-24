import bootstrap from '../icons/bootstrap.svg';
import nodejs from '../icons/nodejs.svg';
//import reacticon from "../icons/reactjs.svg";
import rubyonrails from "../icons/ruby-on-rails.svg";
import mongodb from "../icons/mongodb.svg";
import wp from "../icons/wordpress.svg";
import svg from "../icons/svg.svg";
import graph from "../icons/line-graph.svg";
import npm from "../icons/npm.svg";
import git from "../icons/git.svg";

function Skills(){
  return(
    <div className="container-fluid bg-color-1 p-b-50" id="skills">
      <h1 className="text-center font-300 p-20 color-1a"> Skills</h1>
       <div className="row">

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={bootstrap} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">INFO</h3>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={nodejs} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">INFO</h3>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={wp} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">INFO</h3>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={mongodb} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">INFO</h3>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={git} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">INFO</h3>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={npm} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">INFO</h3>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={graph} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">INFO</h3>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={svg} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">INFO</h3>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={rubyonrails} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">INFO</h3>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
                <h4 className="color-1d">Blah, blah, blah, blah</h4>
              </div>
            </div>
         </div>

       </div>
    </div>
  )
}



export default Skills;
