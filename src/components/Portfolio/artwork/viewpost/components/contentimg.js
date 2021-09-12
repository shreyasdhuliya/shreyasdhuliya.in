

import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';


import Skeleton from '@material-ui/lab/Skeleton';


export default function ContentImg(props) {


       const desc = props.desc;

    return(
      
        <>

{desc == false ? 
    <div style={{padding:"16px"}}>
        <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6 }} />
         <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6 }} />
         <Skeleton animation="wave" height={10} width="50%" style={{ marginBottom: 6 }} />
         </div>
         
        :
        <div>

        <CardContent style={{paddingTop:"0"}}>
        <Typography variant="body2" color="textSecondary" component="p">
         {desc}
        </Typography>
      </CardContent>
      </div>
      }
        </>
        )
}