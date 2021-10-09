import React,{useEffect} from 'react'

//background
import WhiteBg from '../../utils/WhiteBg'
import ShortcutBtns from './ShorcutBtns'

//import home css
import './css/index.css'

import HomeTabs from './HomeTabs';
import ProfilePic from './ProfilePic'
import SocialMediaBtns from './SocialMediaBtns'


function Home() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

 // console.log("hello home")

    return (
      <>
            <ProfilePic />
        <WhiteBg  top={ "200px"}>
          {/*Name ----------------------------------------------------------------------------------*/}
          <h4 className="name--h3 social-btn-2">
                Shreyas Dhuliya
          </h4>
          {/* DEsignation -------------------------------------------------------------------------- */}
        <h6 className="social-btn-3" style={{marginTop:'10px', width:"100%", display:"flex", justifyContent:"center", color:"#616161"}}>
                Front End Developer
        </h6>
        {/* Social media links---------------------------------------------------------------------- */}
        <SocialMediaBtns/>

        {/* Studio, bookmark, fav tabs and tab panel------------------------------------------------ */}
          <HomeTabs  />


          {/* shortcut buttons */}
          <ShortcutBtns/>
          </WhiteBg>
      </>
    
     );
  }

  export default Home