import reactjs from '../icons/reactjs.svg';
import nodejs from '../icons/nodejs.svg';
import mongodb from "../icons/mongodb.svg";
import npm from "../icons/npm.svg";
import svg from "../icons/svg.svg";
import rubyonrails from "../icons/aws.svg";
import Tooltip from '../Tooltip.js';

function Skills(){
  return(
    <div className="container-fluid bg-color-1" id="skills">
       <div className="row pt-5 pb-5">
         <h2 className="text-center pb-4 color-2d">Relevant Tech</h2>
         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={reactjs} className="icon" alt="bootstrap icon"/>
              <div className="icon-info">
                <h3 className="color-1a">FRONTEND</h3>
                 <ul className="skills-items">
                   <li>React</li>
                   <li>Wordpress</li>
                   <li>BootStrap</li>
                   <li>Jquery</li>
                   <li>RWD</li>
                   <li>SEO</li>
                 </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={nodejs} className="icon" alt="nodejs icon" />
              <div className="icon-info">
                <h3 className="color-1a">BACKEND</h3>
                <ul className="skills-items">
                  <li>MERN Stack</li>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>MongooseJS</li>
                  <li><a href="http://eigopost.com"
                         target="_blank"
                         rel="noreferrer"
                         className="linkcolor-1a fancy-underline">
                       *MERN Stack example
                      </a>
                  </li>
                </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={mongodb} className="icon" alt="mongodb icon" />
              <div className="icon-info">
                <h3 className="color-1a">DATABASE</h3>
                <ul className="skills-items">
                  <li>MongoDB/Atlas</li>
                  <li>Mysql</li>
                  <li>Postgres</li>
                  <li>Firebase</li>
                  <li>Active Record</li>
                </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={npm} className="icon" alt="npm icon"/>
              <div className="icon-info">
                <h3 className="color-1a">BUILD</h3>
                <ul className="skills-items">
                  <li>NPM CLI</li>
                  <li>SASS</li>
                  <li>Webpack</li>
                  <li>Babel</li>
                  <li>Command Line</li>
                </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={svg} className="icon" alt="svg icon" />
              <div className="icon-info">
                <h3 className="color-1a">DESIGN</h3>
                  <ul className="skills-items">
                    <li>Logo Creation</li>
                    <li>SVG & Icon Creation</li>
                    <li>Inkscape</li>
                    <li>GIMP</li>
                  </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={rubyonrails} className="icon" alt="ror icon" />
              <div className="icon-info">
                <h3 className="color-1a">EXTRAS</h3>
                  <ul className="skills-items">
                    <li>Google Analytics</li>
                    <li>AWS</li>
                    <li>GIT</li>
                    <li>Ruby On Rails</li>
                    <li>Heroku & Netlify</li>
                  </ul>
              </div>
            </div>
         </div>

       </div>
    </div>
  )
}
export default Skills;
