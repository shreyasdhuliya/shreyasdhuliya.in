import React from 'react'

//background
import WhiteBg from '../../../utils/WhiteBg'
import ShortcutBtns from '../ShorcutBtns'

//import home css
import './index.css'

import HomeTabs from '../HomeTabs';
import ProfilePic from '../ProfilePic'
import SocialMediaBtns from '../SocialMediaBtns'


function Home() {  

  console.log("hello home")

    return (
      <>
            <ProfilePic />
        <WhiteBg  top={"320px"}>
          {/*Name ----------------------------------------------------------------------------------*/}
          <h3 className="name--h3">
                Shreyas Dhuliya
          </h3>
          {/* DEsignation -------------------------------------------------------------------------- */}
        <h6 style={{marginTop:'10px', width:"100%", display:"flex", justifyContent:"center", color:"gray"}}>
                Developer / Designer
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