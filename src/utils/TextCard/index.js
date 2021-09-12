
import Typography from '@material-ui/core/Typography'

import './textCard.scss';

export default function Hints(props){

    //#Fa8072 ->  salmon
    //#30d5c8 -> tuquise

return (
    <div className={`${props.varient=== "heading" ? "text-card-3d" : "text-card-shadow"}`} 
    style={{ width:"100%", marginTop:(props.mt ? props.mt : "30px"),
     borderRadius:"5px"
    }}
     >
        {props.varient=== "heading" ? <div style={{height:props.height,
             justifyContent:"center", 
             alignItems: "center",
              display:"flex", 
              flexDirection: "column", 
               width:"100%"
               }} >
                        <Typography variant="body1" style={{color:"#f50057",}}>{props.topLabel}</Typography>
                        <Typography variant="h5" style={{color:"#f50057",}}  className="name--h3">{props.btmLabel}</Typography>
                
        </div>:

        <div 
        style={{height:props.height,
            justifyContent:"center", 
            alignItems: "center",
            display:"flex", 
            flexDirection: "column", color:"#696969",
            width:"100%",
            }} >
                    <Typography variant="body1">{props.topLabel}</Typography>
                    <Typography variant="h5" className="name--h3" style={{color:"#696969"}}>{props.btmLabel}</Typography>
            
        </div>

        
    }
    </div>
);

}