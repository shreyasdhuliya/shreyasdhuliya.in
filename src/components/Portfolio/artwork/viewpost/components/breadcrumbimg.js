
//breadcrumb
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ArrowLeft from '@material-ui/icons/ArrowLeft'
import ArrowRight from '@material-ui/icons/ArrowRight'

//material lab
import Skeleton from '@material-ui/lab/Skeleton';


export default function BreadCrumbImg(props){

  const path = props.path

    return(
   <div>
      { path == false ?
        <Skeleton animation="wave" height={25} width="80%" style={{marginTop:"16px", marginLeft:"16px"}}  />
        :

        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"16px"}}>

  <Button variant="contained" color="secondary">   <ArrowLeft  /></Button>
        <Breadcrumbs aria-label="breadcrumb" style={{ paddingLeft:"16px", paddingRight:"16px", display:"flex", justifyContent:"center"}}>       
        <Link
          color="inherit"
          href="/portfolio/artwork"
        >        
          artwork
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
        >        
            {path[0]}
        </Link>
        <Typography color="textPrimary" >
        {path[1]}
        </Typography>
      </Breadcrumbs>  
      <Button variant="contained" color="secondary">   <ArrowRight  /></Button> 
      </div>     
      }
      </div>
      );
}