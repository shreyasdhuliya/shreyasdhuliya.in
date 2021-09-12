import {Parallax} from 'react-parallax';
import {  useEffect, useState } from 'react'

//import bg images
import bgImage from './images/active/shreya2.jpg'
import portBgImage from './images/active/shreyam2.jpg';

export default function AppBg() {

    let isport = window.innerHeight > window.innerWidth
   //console.log(backgroundImg)
   const [isPortrait, setIsPortrait] = useState(isport);

   const onResize = () => {
    console.log("resize")
    if(window.innerHeight > window.innerWidth){
       setIsPortrait(true)
     }      
    
    else{
       setIsPortrait(false)    
    }
  }


  useEffect(() => {
      window.addEventListener("resize", onResize );

      return () => {
        window.removeEventListener("resize", onResize )
      }
    },[]);

    return (
        <>
    <Parallax bgImage={ isPortrait ?  portBgImage : bgImage} strength={400} blur={0}>
              <div style={{height:(isPortrait ? "500px" : "700px")}}>                     
              </div>
          </Parallax>
        </>
    );
}