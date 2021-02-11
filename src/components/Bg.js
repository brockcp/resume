import React,{useEffect, useState} from 'react';

function Bg() {

  const image = "http://ocwebworks.com/img/galaxy5.png"
  const placeholder = "http://ocwebworks.com/img/ocbg.png"

  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);
  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = image;
    imageToLoad.onload = () => {
      setLoading(false);
      updateSrc(image);
   }
 },[image])

  return (
    <div className="container-fluid p-0">
      <img
        src={currentSrc}
        style={{
          opacity: loading ? 0.2 : 1,
          transition: "opacity .15s linear",
          width:"100%",
          height:"auto"
        }}
        alt={'eat my shorts'}
      />
    </div>
  )
}
export default Bg;
