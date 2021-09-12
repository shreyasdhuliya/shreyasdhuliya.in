
//react iports
import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

//Drawer 
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//tooltip
import Tooltip from  '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'

//icons for drawer
import AccountCircle from '@material-ui/icons/AccountCircle'
import Dashboard from '@material-ui/icons/Dashboard'
import Mail from '@material-ui/icons/Mail'
import PhotoLibrary from '@material-ui/icons/PhotoLibrary'
import Image from '@material-ui/icons/Image'
import Person from '@material-ui/icons/Person'
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import Chat from '@material-ui/icons/Chat'
import { BottomNavigation } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const DrawerList = [
      {name: "Dashboard", icon: <Dashboard />, lineafter:false, href:"dashboard"},
      {name: "Chat", icon: <Chat />, lineafter:false, href:"chats"},
      {name: "Mail", icon: <Mail /> , lineafter:false, href:"messages"},
      {name: "Private", icon: <PhotoLibrary /> , lineafter:true, href:"private"},
      {name: "Grand Parents", icon: <Image /> , lineafter:false, href:"grandparents"},
      {name: "Family", icon: <Image /> , lineafter:false, href:"family"},
      {name: "Friends", icon: <Image /> , lineafter:true, href:"friends"}
  ]

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{height:"100%"}}
      className={classes.list}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{height:"97%"}}>
          
        {DrawerList.map((btn, index) => (
            
            btn.lineafter ? <div key={btn.name}>
          <Link to={"/" + btn.href}> <ListItem button >
            <ListItemIcon>{btn.icon}</ListItemIcon>
            <ListItemText primary={btn.name} />
          </ListItem></Link>
          <Divider />
          </div>
          :
          <Link to={"/" + btn.href} key={btn.name}><ListItem button >
            <ListItemIcon>{btn.icon}</ListItemIcon>
            <ListItemText primary={btn.name} />
          </ListItem></Link>
          
        ))}

        <div style={{position: "absolute", bottom:"10px", width:"100%"}}>
            <Divider/>
            <Link to={"/login"} key={"login"}><ListItem button >
                <ListItemIcon><Person /></ListItemIcon>
                <ListItemText primary="Login" />
            </ListItem></Link>
            <Link to={"/login"} key={"logout"}><ListItem button>
                <ListItemIcon><PowerSettingsNew /></ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItem>    </Link>
        </div>  
       
      </List>
      
    </div>
  );

  return (
    <div>
           <Tooltip title="Profile">
                <IconButton style={{color:'white'}} aria-label="Profile" className="nav-btn">
                   <AccountCircle onClick={toggleDrawer('right', true)}/>
                </IconButton>
            </Tooltip>
          <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
    </div>
  );
}
