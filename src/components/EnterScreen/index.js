
//css
import './index.scss' 

//components
import SocialBtnGroup from './SocialBtnGroup'
import BgImg from './BgImg'

import '../../scss/theme.scss';

export default function EnterScreen(){ 

      
    

    return(
       <>
        {/*black background----------------------------------------- */}
        <div className="shrey-bg--milk-white" style={{width:"100%", height:"100%", position:"fixed", zIndex:"29",  top:"0", left:"0"}} ></div>

        {/* background cover----------------------------------------- */}
        <BgImg />

        {/* button group----------------------------------------- */}
        <SocialBtnGroup />           
       </>
    );

}