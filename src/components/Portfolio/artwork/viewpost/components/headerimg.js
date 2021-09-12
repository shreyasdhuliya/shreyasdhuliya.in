

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

import Skeleton from '@material-ui/lab/Skeleton';



export default function HeaderImg(props) {

    const headerDetails = props.header;

    return(
        <CardHeader
        avatar={
            headerDetails ==  false ?  <Skeleton animation="wave" variant="circle" width={40} height={40} />: 
          <Avatar aria-label="recipe" style={{backgroundColor:"blue"}}>
            R
          </Avatar>
        }
        action={
            headerDetails ==  false ? "":
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>            
        }
        title={headerDetails ==  false ?  <Skeleton animation="wave" height={12} width="80%" style={{marginBottom:"6px"}} /> : headerDetails[0]}
        subheader={headerDetails ==  false ?  <Skeleton animation="wave" height={12} width="30%"  /> : headerDetails[1]}
      />     
        );
}