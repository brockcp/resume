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
                <h3 className="color-1c">FRONTEND FOUNDATIONS & FRAMEWORKS</h3>
                <h4 className="color-1d">I stay up to date on the latest HTML and CSS best practices</h4>
                <h4 className="color-1d">This site is running the latest version of Bootstrap, which is 5 </h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={nodejs} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">JAVASCRIPT</h3>
                <h4 className="color-1d">I have recently built a Full-stack site on the MERN stack</h4>
                <h4 className="color-1d">I primarily use React now for frontend development.</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={wp} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">WORDPRESS</h3>
                <h4 className="color-1d">Here is a wordpress theme I built which is fully customizeable via custmizr</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={mongodb} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">DATABASE</h3>
                <h4 className="color-1d">Experience building with Mongodb(local and Atlas) as well as Mysql and Postgre</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={git} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">GIT</h3>
                <h4 className="color-1d">Ive been using Git for several years now. I use Github, Gitlab and Bitbucket. I like Gitlab best.</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={npm} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">BUILD TOOLS & MODULES</h3>
                <h4 className="color-1d">Several years experience working with NPM, SASS, and now Webpack</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={graph} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">GOOGLE ANALYTICS</h3>
                <h4 className="color-1d">Several years experience working with Google Analytics</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={svg} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">GRAPHIC DESIGN</h3>
                <h4 className="color-1d">Ok, this area is not my expertise, but I can do the job when necessary.</h4>
              </div>
            </div>
         </div>

         <div className="col-md-6 col-lg-4 text-center">
            <div className="icons-container">
              <img src={rubyonrails} className="icon" alt="blah" />
              <div className="icon-info">
                <h3 className="color-1c">RUBY ON RAILS</h3>
                <h4 className="color-1d">I used to work with Ruby and Rails. However, its been a while.</h4>
              </div>
            </div>
         </div>

       </div>
    </div>
  )
}



export default Skills;
