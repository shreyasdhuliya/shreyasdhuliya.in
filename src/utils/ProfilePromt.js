//import bg images
import bgImage from './images/shreya.jpg'

import Typography from '@material-ui/core/Typography'
import {Parallax} from 'react-parallax'

export default function ProfilePromt(props){


return (
    <Parallax bgImage={ bgImage} strength={400} blur={10} style={{marginTop:"30px", width:"100%"}}>
    <div className="text-card-shadow" 
       style={{height:props.height,
        justifyContent:"center",
         alignItems: "center", 
         display:"flex",
          flexDirection: "column",
           color:"white", 
           width:"100%",
           fontFamily:"Old Standard TT"
           }} >
                    <Typography variant="body1">{props.topLabel}</Typography>
                    <Typography variant="h4" className="theme-serif theme-text-shadow">{props.btmLabel}</Typography>
               
    </div>
    </Parallax>
);

}