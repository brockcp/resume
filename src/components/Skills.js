import React from 'react';
import html5 from '../icons/html5-alt.svg';
import nodejs from '../icons/nodejs.svg';
import react from "../icons/reactjs.svg";
import rubyonrails from "../icons/ruby-on-rails-alt.svg";
import mongodb from "../icons/mongodb.svg";
import wp from "../icons/wordpress.svg";
import svg from "../icons/svg.svg";
import graph from "../icons/line-graph.svg";
import npm from "../icons/npm.svg";
import git from "../icons/git.svg";

function Skills(){
  return(
    <div className="container-fluid bg-color-1 p-b-50" id="skills">
       <div className="row">

         <div className="col-md-6 col-lg-4 text-center" data-aos='fade-up' data-aos-delay="200">
            <span className="icons-container">
              <img src={html5} className="icon" />
            </span>
            <h3 className="color-1d">HTML & CSS</h3>
            <ul className="ul-icon text-left w-80-m-0-a">
              <li><i className="icon-google-developers spin-container"></i>10 years writing HTML and CSS. Several projects built with <span className="font-500">HTML5</span>, <span className="font-500">CSS3 </span>and <span className="font-500">Bootstrap4</span>.</li>
            </ul>
         </div>

         <div className="col-md-6 col-lg-4 text-center" data-aos='fade-up' data-aos-delay="300">
           <span className="icons-container">
             <img src={nodejs} className="icon" />
           </span>
           <h3 className="color-1d">REACT, NODEJS & JQUERY</h3>
           <ul className="ul-icon text-left w-80-m-0-a">
             <li><i className="icon-google-developers spin-container"></i>7 Years working with vanilla JS and <span className="font-500">jQuery</span>. 2 years working with <span className="font-500">AngularJS</span> and <span className="font-500">Angular</span>. One year working with <span className="font-500">React</span>.</li>
           </ul>
         </div>

         <div className="col-md-6 col-lg-4 text-center" data-aos='fade-up' data-aos-delay="400">
           <span className="icons-container">
             <img src={wp} className="icon" />
           </span>
           <h3 className="color-1d">WORDPRESS</h3>
           <ul className="ul-icon text-left w-80-m-0-a">
             <li><i className="icon-google-developers spin-container"></i>One year working with <span className="font-500">Wordpress</span> and <span className="font-500">PHP</span>.</li>
           </ul>
         </div>

         <div className="col-md-6 col-lg-4 text-center" data-aos='fade-up' data-aos-delay="200">
           <span className="icons-container">
               <img src={mongodb} className="icon" />
          </span>
           <h3 className="color-1d">DATABASE</h3>
           <ul className="ul-icon text-left w-80-m-0-a">
             <li><i className="icon-google-developers spin-container"></i>5 years working with <span className="font-500">Mysql</span> and <span className="font-500">Postgresql</span>. 2 years working with Rails' <span className="font-500">Active Record</span>. One year with <span className="font-500">Firebase</span>.</li>
          </ul>
         </div>

         <div className="col-md-6 col-lg-4 text-center" data-aos='fade-up' data-aos-delay="300">
           <span className="icons-container">
             <img src={git} className="icon" />
           </span>
           <h3 className="color-1d">GIT</h3>
           <ul className="ul-icon text-left w-80-m-0-a">
             <li><i className="icon-google-developers spin-container"></i>2 years working with <span className="font-500">Git</span> from the command line. I use <span className="font-500">Github</span>, <span className="font-500">Bitbucket</span> and <span className="font-500">Gitlab</span> and can commit, push, pull, merge, rebase, checkout...</li>
           </ul>
         </div>

         <div className="col-md-6 col-lg-4 text-center" data-aos='fade-up' data-aos-delay="400">
           <span className="icons-container">
             <img src={npm} className="icon" />
           </span>
           <h3 className="color-1d">BUILD TOOLS</h3>
           <ul className="ul-icon text-left w-80-m-0-a">
             <li><i className="icon-google-developers spin-container"></i>Four years working with the build tools  <span className="font-500">Compass</span>, <span className="font-500">WebPack</span>, <span className="font-500">NPM</span>, etc...</li>
           </ul>
         </div>

         <div className="col-md-6 col-lg-4 text-center" data-aos='fade-up' data-aos-delay="200">
           <span className="icons-container">
             <img src={graph} className="icon" />
           </span>
           <h3 className="color-1d">ANALYTICS</h3>
           <ul className="ul-icon text-left w-80-m-0-a">
             <li><i className="icon-google-developers spin-container"></i>6 years working with <span className="font-500">Google Analytics</span>.</li>
           </ul>
         </div>

         <div className="col-md-6 col-lg-4 text-center" data-aos='fade-up' data-aos-delay="300">
           <span className="icons-container">
             <img src={svg} className="icon" />
           </span>
           <h3 className="color-1d">DESIGN</h3>
           <ul className="ul-icon text-left w-80-m-0-a">
             <li><i className="icon-google-developers spin-container"></i>Several years making my own graphics via <span className="font-500">GIMP</span> and <span className="font-500">Inkscape </span>.</li>
           </ul>
         </div>

         <div className="col-md-6 col-lg-4 text-center" data-aos='fade-up' data-aos-delay="400">
           <span className="icons-container">
               <img src={rubyonrails} className="icon" />
          </span>
           <h3 className="color-1d">RUBY & RAILS</h3>
           <ul className="ul-icon text-left w-80-m-0-a">
             <li><i className="icon-google-developers spin-container"></i>2 years working with <span className="font-500">Ruby</span> and <span className="font-500">Ruby On Rails</span>.</li>
          </ul>
         </div>

       </div>
    </div>
  )
}



export default Skills;
