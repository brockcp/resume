import React from 'react';

function Works(){
  return(
    <div className="container-fluid bg-color-2" id="works">
      <h1 className="text-center font-300 pt-5 color-2d">Recent Works</h1>
      <div className="row pt-3 pb-350">
        <div className="col-md-6 offset-md-3">
          <ul className="p-l-xs25p-sm33p list-style-none">
            <li><a href="http://eigopost.com" target="_blank" rel="noreferrer" className="font-size26 fancy-underline linkcolor-2b">Eigopost</a></li>
            <li><a href="http://www.ocwebworks.com" target="_blank" rel="noreferrer" className="font-size26 fancy-underline linkcolor-2b">OCwebworks</a></li>
            <li><a href="http://ocwebworks.com//works/wordpress/" target="_blank" rel="noreferrer" className="font-size26 fancy-underline linkcolor-2b">Wordpress Theme</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Works;
