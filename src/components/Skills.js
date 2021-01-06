import React from 'react';

function Skills(){
  return(
    <div classNameName="foo" id="skills">

      <div className="skills-image"></div>

      <div className="container-fluid bg-color-1 p-b-50">
        <div className="col-xs-12 col-md-8 offset-md-2 p-t-30">
          <p className="color-1a font-size26 font-200">During these years I have learned quite a lot:
          </p>
        </div>
        <hr className="hr-skills" />
        <h1 className="text-center font-300 p-20"> Skillset</h1>
               <div className="row">


                    <div className="col-md-6 col-lg-4 text-center">
                      <span className="icons-container">
                          <i className="icon-html5 font-size100 color-2c"></i>
                          <i className="icon-css3 font-size100 color-2c"></i>
                      </span>
                      <h3 className="color-1d">HTML & CSS</h3>
                      <ul className="ul-icon text-left w-80-m-0-a">
                        <li><i className="icon-google-developers spin-container"></i>10 years writing HTML and CSS. Several projects built with <span className="font-500">HTML5</span>, <span className="font-500">CSS3 </span>and <span className="font-500">Bootstrap4</span>.</li>
                        <li className="text-center m-t-10">Examples</li>
                        <li><a href="https://github.com/brockcp/ocwebworks/blob/d17a52b5e8410efc6747307dab19dffc46bb3f98/src/index.html#L47" target="_blank" rel="noreferrer" className="linkcolor-1a">Custom code and Boostrap working together</a></li>
                        <li><a href="https://github.com/brockcp/ocwebworks/tree/master/src/scss" target="_blank" rel="noreferrer" className="linkcolor-1a">SCSS Breakdown</a></li>
                        <li><a href="https://github.com/brockcp/ocwebworks/blob/d17a52b5e8410efc6747307dab19dffc46bb3f98/src/index.html#L23" target="_blank" rel="noreferrer" className="linkcolor-1a">Adding Animation to Bootstrap Nav</a></li>
                      </ul>
                    </div>

                    <div className="col-md-6 col-lg-4 text-center">
                      <span className="icons-container">
                          <i className="icon-angular-alt font-size100 color-2c"></i>
                          <i className="icon-jquery font-size100 color-2c"></i>
                      </span>
                      <h3 className="color-1d">ANGULAR & JQUERY</h3>
                      <ul className="ul-icon text-left w-80-m-0-a">
                        <li><i className="icon-google-developers spin-container"></i>7 Years working with vanilla JS and <span className="font-500">jQuery</span>. 2 years working with <span className="font-500">AngularJS</span> and <span className="font-500">Angular</span>.</li>
                        <li className="text-center m-t-10">Examples</li>
                        <li><a href="https://github.com/brockcp/resume/blob/c40c9dad5910acf1c20a6c1be63126bc09f00cf5/src/index.html#L173" target="_blank" rel="noreferrer" className="linkcolor-1a">FadeIn BG Image with jQuery</a></li>
                        <li><a href="https://github.com/brockcp/brockjams-angular" target="_blank" rel="noreferrer" className="linkcolor-1a">Music Player Built With AngularJS</a></li>
                        <li><a href="https://bitbucket.org/brockcp/resume-a/src/master/" target="_blank" rel="noreferrer" className="linkcolor-1a">This Site Was Built With Angular7</a></li>
                      </ul>
                    </div>

                    <div className="col-md-6 col-lg-4 text-center">
                      <span className="icons-container">
                          <i className="icon-ruby font-size100 color-2c"></i>
                          <i className="icon-ruby-on-rails font-size100 color-2c"></i>
                      </span>
                      <h3 className="color-1d">RUBY & RAILS</h3>
                      <ul className="ul-icon text-left w-80-m-0-a">
                        <li><i className="icon-google-developers spin-container"></i>2 years working with <span className="font-500">Ruby</span> and <span className="font-500">Ruby On Rails</span>.</li>
                        <li className="text-center m-t-10">Examples</li>
                        <li><a href="https://github.com/brockcp/eigopost" target="_blank" rel="noreferrer" className="linkcolor-1a">An App for Japanese Students Learning English</a></li>
                        <li><a href="https://github.com/brockcp/brockpedia" target="_blank" rel="noreferrer" className="linkcolor-1a">Another App for Collaborating Privately Or Publicly Online</a></li>
                        <li><a href="https://github.com/brockcp/eigopost/blob/ea45ae294e24e48d7a0d0ca5f5498a239bed311f/Gemfile#L46" target="_blank" rel="noreferrer" className="linkcolor-1a">List of Ruby Gems I Have Worked With</a></li>
                      </ul>
                    </div>

                    <div className="col-md-6 col-lg-4 text-center">
                      <span className="icons-container">
                          <i className="icon-mysql font-size100 color-2c"></i>
                          <i className="icon-postgres-alt font-size100 color-2c"></i>
                      </span>
                      <h3 className="color-1d">DATABASE</h3>
                      <ul className="ul-icon text-left w-80-m-0-a">
                        <li><i className="icon-google-developers spin-container"></i>5 years working with <span className="font-500">Mysql</span> and <span className="font-500">Postgresql</span>. 2 years working with Rails' <span className="font-500">Active Record</span>. One year with <span className="font-500">Firebase</span>.</li>
                        <li className="text-center m-t-10">Examples</li>
                        <li><a href="https://github.com/brockcp/eigopost/tree/master/db" target="_blank" rel="noreferrer" className="linkcolor-1a">Postgresql Scheme for Rails App</a></li>
                        <li><a href="https://github.com/brockcp/eigopost/blob/master/db/schema.rb" target="_blank" rel="noreferrer" className="linkcolor-1a">Active Record DB Scheme</a></li>
                        <li><a href="https://github.com/brockcp/brockchat/blob/89d88c17517e61c561b2444ef2b28ec01e7a8b77/app/scripts/services/Message.js#L1" target="_blank" rel="noreferrer" className="linkcolor-1a">AngularJS App Using Firebase</a></li>
                      </ul>
                    </div>

                    <div className="col-md-6 col-lg-4 text-center">
                      <span className="icons-container">
                          <i className="icon-git font-size100 color-2c"></i>
                      </span>
                      <h3 className="color-1d">GIT</h3>
                      <ul className="ul-icon text-left w-80-m-0-a">
                        <li><i className="icon-google-developers spin-container"></i>2 years working with <span className="font-500">Git</span> via bash. I use both <span className="font-500">Github</span> and <span className="font-500">Bitbucket</span> and can commit, push, pull, merge, rebase, checkout, etc... on command.</li>
                        <li className="text-center m-t-10">Example</li>
                        <li><a href="https://github.com/brockcp" target="_blank" rel="noreferrer" className="linkcolor-1a">Github account</a></li>
                        <li><a href="https://bitbucket.org/dashboard/overview" target="_blank" rel="noreferrer" className="linkcolor-1a">Bitbucket account(private)</a></li>
                      </ul>
                    </div>

                    <div className="col-md-6 col-lg-4 text-center">
                      <span className="icons-container">
                          <i className="icon-npm font-size100 color-2c"></i>
                          <i className="icon-gulp-alt font-size100 color-2c"></i>
                      </span>
                      <h3 className="color-1d">BUILD TOOLS</h3>
                      <ul className="ul-icon text-left w-80-m-0-a">
                        <li><i className="icon-google-developers spin-container"></i>Four years working with the build tools  <span className="font-500">SCSS</span>, <span className="font-500">WebPack</span>, <span className="font-500">NPM</span>, etc...</li>
                        <li className="text-center m-t-10">Examples</li>
                        <li><a href="https://github.com/brockcp/ocwebworks/tree/master/src/scss" target="_blank" rel="noreferrer" className="linkcolor-1a">SCSS Structure</a></li>
                        <li><a href="https://github.com/brockcp/wordpress-theme/blob/master/webpack.config.js" target="_blank" rel="noreferrer" className="linkcolor-1a">Webpack code(didn't author)</a></li>
                        <li><a href="https://github.com/brockcp/ocwebworks/blob/master/package.json" target="_blank" rel="noreferrer" className="linkcolor-1a">Npm script/Package.json</a></li>
                      </ul>
                    </div>

                    <div className="col-md-6 col-lg-4 text-center">
                      <span className="icons-container">
                          <i className="icon-line-graph font-size100 color-2c"></i>
                      </span>
                      <h3 className="color-1d">ANALYTICS</h3>
                      <ul className="ul-icon text-left w-80-m-0-a">
                        <li><i className="icon-google-developers spin-container"></i>6 years working with <span className="font-500">Google Analytics</span>.</li>
                        <li className="text-center m-t-10">Examples</li>
                        <li><a href="https://github.com/brockcp/wojtekkfineart/blob/5fb6fc0edef45cd6e2b6528c73749edcaf1a1e6e/index.html#L28" target="_blank" rel="noreferrer" className="linkcolor-1a">Standard Analytics Code</a></li>
                        <li><a href="https://github.com/brockcp/eigopost/blob/ea45ae294e24e48d7a0d0ca5f5498a239bed311f/app/views/layouts/application.html.erb#L12" target="_blank" rel="noreferrer" className="linkcolor-1a">Rails Analytics Code</a></li>
                      </ul>
                    </div>

                    <div className="col-md-6 col-lg-4 text-center">
                      <span className="icons-container">
                          <i className="icon-svg font-size100 color-2c"></i>
                      </span>
                      <h3 className="color-1d">DESIGN</h3>
                      <ul className="ul-icon text-left w-80-m-0-a">
                        <li><i className="icon-google-developers spin-container"></i>10 years making my own graphics via <span className="font-500">GIMP</span> and <span className="font-500">Inkscape </span>.</li>
                        <li className="text-center m-t-10">Examples</li>
                        <li><a href="https://github.com/brockcp/ocwebworks/blob/master/src/img/ocbg.png" target="_blank" rel="noreferrer" className="linkcolor-1a">Background Image</a></li>
                        <li><a href="https://github.com/brockcp/ocwebworks/blob/master/1.0/img/main.png" target="_blank" rel="noreferrer" className="linkcolor-1a">Graphic Sample</a></li>
                        <li><a href="https://github.com/brockcp/ocwebworks/blob/master/1.0/img/orangebest1.png" target="_blank" rel="noreferrer" className="linkcolor-1a">Graphic sample</a></li>
                      </ul>
                    </div>

                    <div className="col-md-6 col-lg-4 text-center">
                      <span className="icons-container">
                          <i className="icon-wordpress font-size100 color-2c"></i>
                      </span>
                      <h3 className="color-1d">WORDPRESS</h3>
                      <ul className="ul-icon text-left w-80-m-0-a">
                        <li><i className="icon-google-developers spin-container"></i>I have built a <span className="font-500">Wordpress</span> site/theme.</li>
                        <li className="text-center m-t-10">Example</li>
                        <li><a href="http://ocwebworks.com/works/wordpress/" target="_blank" rel="noreferrer" className="linkcolor-1a">Responsive Wordpress Theme</a></li>
                      </ul>
                    </div>

             </div>
      </div>

    </div>
  )
}
export default Skills;
