import bootstrap from '../icons/bootstrap.svg';
import nodejs from '../icons/nodejs.svg';
import wp from "../icons/wordpress.svg";
import mongodb from "../icons/mongodb.svg";
import git from "../icons/git2.svg";
import npm from "../icons/npm.svg";
import graph from "../icons/line-graph.svg";
import svg from "../icons/svg.svg";
import rubyonrails from "../icons/ruby-on-rails.svg";
import Tooltip from '../Tooltip.js';

function Skills(){
  return(
    <div className="container-fluid bg-color-1" id="skills">
       <div className="row pt-5 pb-5">
         <h2 className="text-center pb-4 color-2d">Relevant Tech</h2>
         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={bootstrap} className="icon" alt="bootstrap icon"/>
              <div className="icon-info">
                <h3 className="color-1a">FRONTEND FOUNDATIONS & FRAMEWORKS</h3>
                 <ul className="skills-items text-start pl-40p">
                   <li>HTML5</li>
                   <li>CSS3</li>
                   <li>BootStrap</li>
                   <li>Responsive Web Design</li>
                   <li>Media Queries</li>
                   <li>SEO</li>
                 </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={nodejs} className="icon" alt="nodejs icon" />
              <div className="icon-info">
                <h3 className="color-1a">JAVASCRIPT</h3>
                <ul className="skills-items text-start pl-40p">
                  <li>ReactJS</li>
                  <li>NodeJS </li>
                  <li>ExpressJS</li>
                  <li>MongooseJS</li>
                  <li>Jquery</li>
                  <li><a href="http://eigopost.com"
                         target="_blank"
                         rel="noreferrer"
                         className="linkcolor-2b fancy-underline">
                       MERN Stack example
                      </a>
                  </li>
                </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={wp} className="icon" alt="wordpress icon" />
              <div className="icon-info">
                <h3 className="color-1a">WORDPRESS</h3>
                <ul className="skills-items text-start pl-40p">
                  <li><a href="http://ocwebworks.com/works/wordpress/"
                         target="_blank"
                         rel="noreferrer"
                         className="linkcolor-2b fancy-underline">
                        Custom Theme
                      </a>
                  </li>
                  <li>Plugin integration</li>
                  <li>Bootstrap integration</li>
                </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={mongodb} className="icon" alt="mongodb icon" />
              <div className="icon-info">
                <h3 className="color-1a">DATABASE</h3>
                <ul className="skills-items text-start pl-40p">
                  <li>MongoDB/Atlas</li>
                  <li>Mysql</li>
                  <li>Postgres</li>
                  <li>Active Record</li>
                </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={git} className="icon" alt="git icon" />
              <div className="icon-info">
                <h3 className="color-1a">GIT</h3>
                <ul className="skills-items text-start pl-40p">
                  <li>Github</li>
                  <li>Gitlab</li>
                  <li>Bitbucket</li>
                  <li>*I like Gitlab</li>
                </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={npm} className="icon" alt="npm icon"/>
              <div className="icon-info">
                <h3 className="color-1a">BUILD TOOLS</h3>
                <ul className="skills-items text-start pl-40p">
                  <li>NPM</li>
                  <li>SASS</li>
                  <li>Webpack</li>
                  <li>Babel</li>
                </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={graph} className="icon" alt="graph icon" />
              <div className="icon-info">
                <h3 className="color-1a">GOOGLE ANALYTICS</h3>
                <h5 className="color-2d">Several years experience working with Google Analytics</h5>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={svg} className="icon" alt="svg icon" />
              <div className="icon-info">
                <h3 className="color-1a">GRAPHIC DESIGN</h3>
                  <ul className="skills-items text-start pl-40p">
                    <li>GIMP</li>
                    <li>Inkscape</li>
                    <Tooltip content="click to see my My Dribbble account" direction="right">
                     <li>
                       <a href="https://dribbble.com/brockcp"
                          target="_blank"
                          rel="noreferrer"
                          className="skills-link linkcolor-2c fancy-underline">
                        Dribbble
                       </a>
                    </li>
                   </Tooltip>
                  </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={rubyonrails} className="icon" alt="ror icon" />
              <div className="icon-info">
                <h3 className="color-1a">ADDITIONAL SKILLS</h3>
                  <ul className="skills-items text-start pl-40p">
                    <li>Amazon Web Services</li>
                    <li>Ruby On Rails</li>
                    <li>Angular</li>
                    <li>Heroku, Netlify, Digital Ocean</li>
                  </ul>
              </div>
            </div>
         </div>

       </div>
    </div>
  )
}
export default Skills;
