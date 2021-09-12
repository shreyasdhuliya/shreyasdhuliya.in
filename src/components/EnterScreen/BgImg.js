
//react
import {  useEffect, useState } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

//actions
import {getEsBg} from '../../store/actions/enterscreen'

//material lab
import Skeleton from '@material-ui/lab/Skeleton';


const EnterBgImg = ({backgroundImg, getEsBg}) => {
    
   let isport = window.innerHeight > window.innerWidth
   //console.log(backgroundImg)
   const [isPortrait, setIsPortrait] = useState(isport);
  
   const onResize = () => {
     //console.log("resize")
     if(window.innerHeight > window.innerWidth){
        setIsPortrait(true)
      }      
     
     else{
        setIsPortrait(false)    
     }
   }

    useEffect(() => {
      //only get bg from firebase if not in redux state
        if(Object.keys(backgroundImg).length === 0){
          getEsBg()
        }
        console.log("run effect")
        window.addEventListener("resize", onResize );

        return () => {
          window.removeEventListener("resize", onResize )
        }
      },[backgroundImg, getEsBg]);
    

    return(

        <>
        { Object.keys(backgroundImg).length === 0 ?
         
         <Skeleton animation="wave" style={{width:"100%", position:"fixed", height:"100%", zIndex:"31"}} />
         :
        <div className="enter-transition shrey-bg--milk-white" style={{width:"100%", position:"fixed", height:"100%", zIndex:"30", top:"0", left:"0" ,
        backgroundImage: `url(${isPortrait ?   backgroundImg.mobile : backgroundImg.desktop})`, backgroundPosition:"center", backgroundSize:"cover"}}>               
    

       </div>
        
       }
      </>
        
        );
}

EnterBgImg.propTypes = {
  getEsBg: PropTypes.func.isRequired,
  backgroundImg: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  backgroundImg:state.enterscreen.backgroundImg
})

export default connect(mapStateToProps, {getEsBg})(EnterBgImg)