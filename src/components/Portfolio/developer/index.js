

//import material ui components
import Typography from '@material-ui/core/Typography'
import  IconButton  from  '@material-ui/core/IconButton'

import Phone from '@material-ui/icons/Phone'
import Email  from '@material-ui/icons/Email'

//social  media font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub, faBehance, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Developer() {

    return(
    <>
     <div style={{maxWidth:"700px", width:"100%"}}>

         <Typography variant="h4" style={{marginTop:"20px"}}>Shreyas Dhuliya</Typography>

        <Typography variant="h5"> Front End Developer</Typography>
        <Typography variant="h6">Experience: 3+ yrs</Typography>

        <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"20px" }}>
                <Phone style={{marginRight:"20px"}}/><Typography varient="body1"> +91 70 4542 4591 </Typography>
        </div>

        <div style={{display:"flex", flexDirection:"row", alignItems:"center" }}>
            <Email style={{marginRight:"20px"}}/> <Typography varient="body1">shreyasdhuliya123@gmail.com </Typography>
        </div>

        <Typography variant="body1" style={{marginTop:"20px"}}>
            Experienced Front End Developer adept in all stages  of advanced web developement. proficient in assortment of technologies, including HTML5, CSS, Bootstrap,
            JJavascript, Jquery. Aims to establish a carrer  as a Full Stack Developer with modern technologies REactJs, Firebase, MAterial-UI, NodeJs, Express.
        </Typography>


        <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"20px" }}>
            <IconButton>
             <FontAwesomeIcon icon={faGithub} style={{color:"gray", width:"24px", height:"24px"}} />
            </IconButton>
            <IconButton>
             <FontAwesomeIcon icon={faBehance} style={{color:"gray", width:"24px", height:"24px"}} />
            </IconButton>
            <IconButton>
             <FontAwesomeIcon icon={faLinkedin} style={{color:"gray", width:"24px", height:"24px"}} />
            </IconButton>
        </div>




     </div>  

        

    </>
    );

}