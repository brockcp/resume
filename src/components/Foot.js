import React from 'react';

function Foot(){
  return(
    <div className="container-fluid footer bg-color-2 p-5 text-center">
      <a href="brockpatterson-resume.pdf.zip"
        target="-blank" className='m-lr-10 color-1b'>
        resume
      </a>
      <a href="https://www.linkedin.com/in/brockcp/"
        target="-blank" className='m-lr-10 color-1b'>
        linkedIn
      </a>
      <a href="https://github.com/brockcp"
        target="-blank" className='m-lr-10 color-1b'>
        github
      </a>
      <a href="mailto:brockpatterson@gmail.com"
        className="m-lr-10 color-1b">
        email
      </a>
    </div>
  )
}
export default Foot;
