import React from 'react';
import Typography from '@material-ui/core/Typography'

//material lab
import Skeleton from '@material-ui/lab/Skeleton';


export default function Desctiption(props) {

    const description = props.desc

    return(      
<div>
        {description === undefined ? 
        <div style={{width:"100%", display:"flex", alignItems:"center", flexDirection:"column"}}>
        <Skeleton animation="wave" height={19} style={{width:"70%", marginBottom:"6px"}} />
        <Skeleton animation="wave" height={19} style={{width:"50%", marginBottom:"6px"}} />
        <Skeleton animation="wave" height={19} style={{width:"70%", marginBottom:"6px"}} />
        <Skeleton animation="wave" height={19} style={{width:"50%", marginBottom:"6px"}} />
        </div>
        
        :

        <Typography>            
                {description}
        </Typography>
     
}
</div>
        );
}

