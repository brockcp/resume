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

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={bootstrap} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1a">FRONTEND FOUNDATIONS & FRAMEWORKS</h3>
                <h4 className="color-1b">I stay up to date on the latest HTML and CSS best practices, including RWD</h4>
                <h4 className="color-1b">Bootstrap 5 is running on this site</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={nodejs} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1a">JAVASCRIPT</h3>
                <h4 className="color-1b">Here is a Full(MERN)-stack I recently built.</h4>
                <h4 className="color-1b">I primarily use React now for frontend development.</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={wp} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1a">WORDPRESS</h3>
                <h4 className="color-1b">Here is a wordpress theme I built. It is fully customizeable via wp's customizr</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={mongodb} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1a">DATABASE</h3>
                <h4 className="color-1b">Experience building with Mongodb(local and Atlas) as well as Mysql and Postgres</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={git} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1a">GIT</h3>
                <h4 className="color-1b">Ive been using Git for several years now. I use Github, Gitlab and Bitbucket. I vote for Gitlab.</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={npm} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1a">BUILD TOOLS & MODULES</h3>
                <h4 className="color-1b">Several years experience working with NPM, SASS, Webpack, etc.</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={graph} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1a">GOOGLE ANALYTICS</h3>
                <h4 className="color-1b">Several years experience working with Google Analytics</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={svg} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1a">GRAPHIC DESIGN</h3>
                <h4 className="color-1b">Ok, this area is not my expertise, but I can do the job when necessary.</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={rubyonrails} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1a">RUBY ON RAILS</h3>
                <h4 className="color-1b">I used to work with Ruby and Rails. However, its been a while.</h4>
              </div>
            </div>
         </div>

       </div>
    </div>
  )
}



export default Skills;
