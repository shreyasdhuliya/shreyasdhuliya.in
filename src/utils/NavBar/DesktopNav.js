import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {setContactMeDisplay} from '../../store/actions/contactme';
import PropTypes from 'prop-types'


//tooltip
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'

//drawer imports
//import TemporaryDrawer from '../drawer'
/* import Chats from './DrawerComp/chats'
import Dashboard from './DrawerComp/dashboard';
import Family from './DrawerComp/family';
import Friends from './DrawerComp/friends';
import GrandParents from './DrawerComp/grandparents';
import Login from './DrawerComp/login';
import Private from './DrawerComp/private' */

//Icons navbar
import {   Telegram, Home,Palette } from '@material-ui/icons'

import {  NavLink, Link  } from "react-router-dom";

//drawer route list for map
/* const DrawerList = [
    { name: "Dashboard", comp: <Dashboard />, href: "/dashboard" },
    { name: "Chat", comp: <Chats />, href: "/chats" },
    { name: "Mail", comp: <Dashboard />, href: "/messages" },
    { name: "Private", comp: <Private />, href: "/private" },
    { name: "Grand Parents", comp: <GrandParents />, href: "/grandparents" },
    { name: "Family", comp: <Family />, href: "/family" },
    { name: "Friends", comp: <Friends />, href: "/friends" },
    { name: "Friends", comp: <Login />, href: "/login" },
  ] */




const DesktopNav = ({ setContactMeDisplay,displayContactForm }) => {

  const [menuWhite, setMenuWhite] = useState(false)

    function displayDate(e) {

        if (window.pageYOffset > 250) {
    
          setMenuWhite(true)
        }
        else {
          setMenuWhite(false)          
        }    
      }
    
      useEffect(() => {
    
        window.removeEventListener("scroll", displayDate);
        // Update the document title using the browser API
        window.addEventListener("scroll", displayDate);
        //console.log("bind nav window")
    
        return () => {
          window.removeEventListener("scroll", displayDate);
          //console.log("unbind nav window")
        }
    
    
      }, []);
    
      
    return(
        <Container maxWidth="lg" className="nav--desktop">
        <div className={menuWhite ? "navbar-container nav-whitebg" :"navbar-container nav-black-op"}>
          <div className="navbar-items">
            <Tooltip title="Enter Page">
              <Link to="/" className={menuWhite ? "nav-color--gray" :"nav-color--white"} ><h2 style={{paddingLeft:"0"}} className={`h2--margin nav-name ${menuWhite ? "h2-margin" :""}`}> Shreyas Dhuliya </h2></Link>
            </Tooltip>

            <nav className="navbar-right">

              <Tooltip title="Home">
                  <NavLink 
                  activeClassName="active-link"
                  to="/home" className={menuWhite ? "nav-color--gray" :"nav-color--white"}>
                    <IconButton aria-label="Home" className={menuWhite ? "nav-btn-hover--gray" :"nav-btn-hover--white"} >
                    <Home />
                    </IconButton>
                  </NavLink>               
              </Tooltip>
              {/*<Tooltip title="Portfolio">
                  <NavLink 
                  activeClassName="active-link"
                  to="/portfolio/developer" className={menuWhite ? "nav-color--gray" :"nav-color--white"}>
                 <IconButton aria-label="Portfolio" className={menuWhite ? "nav-btn-hover--gray" :"nav-btn-hover--white"} >
                    <BusinessCenter />
                  </IconButton>
                 </NavLink>    
    </Tooltip>*/}
              <Tooltip title="About Me">
                  <NavLink 
                  activeClassName="active-link"
                  to="/about" className={menuWhite ? "nav-color--gray" :"nav-color--white"}>
                <IconButton aria-label="About Me" className={menuWhite ? "nav-btn-hover--gray" :"nav-btn-hover--white"} >
                    Me
                    </IconButton>
                  </NavLink>
              </Tooltip>
              <Tooltip title="Artworks">
                  <NavLink 
                  activeClassName="active-link"
                  to="/Artwork" className={menuWhite ? "nav-color--gray" :"nav-color--white"}>
                <IconButton aria-label="About Me" className={menuWhite ? "nav-btn-hover--gray" :"nav-btn-hover--white"} >
                <Palette />
                    </IconButton>
                  </NavLink>
              </Tooltip>
              <Tooltip title="Contact Me">
                  <NavLink 
                  to="#" className={menuWhite ? "nav-color--gray" :"nav-color--white"}>
                   <IconButton aria-label="Contact Me" onClick= {() => setContactMeDisplay(!displayContactForm)} className={menuWhite ? "nav-btn-hover--gray" :"nav-btn-hover--white"} >

                    <Telegram />
                    
                </IconButton>
                  </NavLink>
              </Tooltip>
              {/*<TemporaryDrawer />*/}
            </nav>
          </div>
        </div>
      </Container>

    );
}

DesktopNav.propTypes = {
  setContactMeDisplay:PropTypes.func.isRequired,
  displayContactForm: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  displayContactForm: state.contactme.displayContactForm
})

export default  connect(mapStateToProps,{setContactMeDisplay})(DesktopNav)