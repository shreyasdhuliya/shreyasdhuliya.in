import React from 'react'
import {useHistory} from 'react-router-dom';
import { Redirect } from "react-router-dom";

import './artwork.css';

//background
import WhiteBg from '../../utils/WhiteBg';

import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import {  Switch, Route  } from "react-router-dom";

import Portrait from './Portrait'
import Products from './Products'
import Graphic from './Graphic'
import DigitalArt from './DigitalArt'

import './artwork.scss'

import av1 from './images/avatar/av1.png'
import av2 from './images/avatar/av2.png'
import av3 from './images/avatar/av3.png'
import av4 from './images/avatar/av4.png'

const Artwork = () => {

  

  let history = useHistory();

  //if( window.location.pathname.toLowerCase() === "/artwork" || window.location.pathname.toLowerCase() === "/artwork/"){
  //  history.push("/artwork/portrait")
  //}


    const actions = [
        { icon: <Avatar src={av2} style={{background:"orange"}}/>, name: 'Portrait works', link: "portrait" },
        { icon:  <Avatar  src={av1} style={{background:"orange"}}/>, name: 'Graphic designs', link: "uiux" },
        { icon:  <Avatar  src={av3} style={{background:"orange"}}/>, name: 'Product designs', link: "product" },
        { icon:  <Avatar  src={av4} style={{background:"orange"}}/>, name: 'Digital art', link: "digitalart" },
      ];

    const [open, setOpen] = React.useState(false);
    const [heading, setHeading] =  React.useState("");

    const handleOpen = () => {
        setOpen(true);
      };
   
    
      const handleClose = (link) => {
        setOpen(false);
        //<Redirect to={`/artwork/${link}`}/>
        let path = `/artwork/${link}`;
        if(typeof link !== 'object') {
          history.push(path);
        }
      }; 

      const changeHeading = (h) => {
        setHeading(h);
      }

     

    return(
        <>
        {/*Desktop */}
        <div className="artwork-nav" >
         {actions.map((action) => (
                            <Tooltip key={`desk-${action.name}`} title={action.name} placement="left">
                               <div className="heello" onClick={() => handleClose(action.link)}>
                                <IconButton >
                                   {action.icon}
                                </IconButton>
                                </div>
                            </Tooltip>                            
                ))
            }
           
         
        </div>
        
        {/* < 992px*/}
        <div className="artwor-mobile-nav">
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className=""
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
           
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleClose(action.link)}
          />
          
        ))}
      </SpeedDial>
    </div>

    <Typography variant="h3" style={{fontWeight:"medium"}} className="profile-info" >{heading} </Typography>  

        <WhiteBg  >
          <div style={{paddingLeft:"8px", paddingRight:"8px"}}>
          <Route exact  path="/Artwork">
              <Redirect to="/Artwork/portrait" />
            </Route>
            <Switch>
            
              <Route path="/Artwork/portrait">
              <Portrait changeHeading={changeHeading} />
            </Route>
            <Route path="/Artwork/uiux">
              <Graphic changeHeading={changeHeading}/>
            </Route>
            <Route path="/Artwork/product">
              <Products changeHeading={changeHeading}/>
            </Route>
            <Route path="/Artwork/digitalart">
              <DigitalArt changeHeading={changeHeading}/>
            </Route>

          </Switch>
          </div>
        </WhiteBg>
        </>
    );
}

export default Artwork