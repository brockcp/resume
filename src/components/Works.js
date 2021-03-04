function Works(){
  return(
    <div className="container-fluid bg-color-2" id="works">
      <h2 className="text-center pt-5 color-2d">Recent Works</h2>
      <div className="row pt-3 pb-350">
        <div className="col mw-350 m-lr-a">
          <ul className="ms-5 list-style-none">
            <li><a href="http://eigopost.com"
                   target="_blank"
                   rel="noreferrer"
                   className="font-size26 fancy-underline linkcolor-2b">
                  Eigopost
                </a>
            </li>
            <li><a href="http://www.ocwebworks.com"
                   target="_blank"
                   rel="noreferrer"
                   className="font-size26 fancy-underline linkcolor-2b">
                  OCwebworks
                </a>
            </li>
            <li><a href="http://ocwebworks.com//works/wordpress/"
                   target="_blank"
                   rel="noreferrer"
                   className="font-size26 fancy-underline linkcolor-2b">
                  Wordpress Theme
                </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Works;
