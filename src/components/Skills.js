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
    <div className="container-fluid bg-color-1" id="skills">
       <div className="row pt-5 pb-5">
         <h2 className="text-center pb-4 color-2d">Relevant Tech</h2>
         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={bootstrap} className="icon" alt="bootstrap icon" />
              <div className="icon-info">
                <h3 className="color-1a">FRONTEND FOUNDATIONS & FRAMEWORKS</h3>
                <h5 className="color-2d">Up to date on the latest HTML and CSS best practices, including:</h5>
                 <ul className="skills-items">
                   <li>HTML5</li>
                   <li>CSS3 </li>
                   <li>BootStrap</li>
                   <li>Responsive Design</li>
                 </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={nodejs} className="icon" alt="nodejs icon" />
              <div className="icon-info">
                <h3 className="color-1a">JAVASCRIPT</h3>
                <h5 className="color-2d">Experience working in the MERN stack</h5>
                <ul className="skills-items">
                  <li>React</li>
                  <li>NodeJS </li>
                  <li>ExpressJS</li>
                  <li>Mongoose</li>
                  <li><a href="http://eigopost.com"
                         target="_blank"
                         className="skills-link">
                    Here
                      </a> is a full-stack app I recently built
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
                <ul className="skills-items">
                  <li>Fully Customizable Wp Theme <a href="http://ocwebworks.com/works/wordpress/"
                         target="_blank"
                         className="skills-link">
                    See it here
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
                <h5 className="color-2d">Experience with the following DB techs.</h5>
                <ul className="skills-items">
                  <li>MongoDB (including Atlas)</li>
                  <li>Mysql</li>
                  <li>Postgres</li>
                  <li></li>
                </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={git} className="icon" alt="git icon" />
              <div className="icon-info">
                <h3 className="color-1a">GIT</h3>
                <h5 className="color-2d">I use Github, Gitlab and Bitbucket. I like Gitlab best.</h5>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={npm} className="icon" alt="npm icon" />
              <div className="icon-info">
                <h3 className="color-1a">BUILD TOOLS & MODULES</h3>
                <h5 className="color-2d">Experience with the following techs.</h5>
                <ul className="skills-items">
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
                <h5 className="color-2d">Not my expertise, but I can do the job when necessary.</h5>
                  <ul className="skills-items">
                    <li><a href="https://dribbble.com/brockcp"
                           target="_blank"
                           className="skills-link">
                           Dribbble account
                       </a>
                   </li>
                  </ul>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={rubyonrails} className="icon" alt="ror icon" />
              <div className="icon-info">
                <h3 className="color-1a">ADDITIONAL SKILLS</h3>
                  <ul className="skills-items">
                    <li>Ruby On Rails</li>
                    <li>Amazon Web Services</li>
                    <li>Angular</li>
                    <li></li>
                  </ul>
              </div>
            </div>
         </div>

       </div>
    </div>
  )
}



export default Skills;
