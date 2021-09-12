import React from 'react';

import {connect} from 'react-redux';
import {setContactMeDisplay} from '../../store/actions/contactme';
import PropTypes from 'prop-types'

//tooltip
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'

//Icons navbar
import { Palette, Telegram, Home } from '@material-ui/icons'

import {  Link, NavLink  } from "react-router-dom";

const MobileNav = ({ setContactMeDisplay,displayContactForm })  => {

    return(

        <>
    <Container maxWidth="lg" className="nav--tabmobile">
        <div className={"navbar-container nav-whitebg nav-top-radius"}>
          <div className="navbar-items">
            <Tooltip title="Home">
              <Link to="/" className=" nav-color--gray mobile-top-h" ><h4 className="nav-name h2-margin"> Shreyas Dhuliya </h4></Link>
            </Tooltip>

            <nav className="navbar-right">
             
              <Tooltip title="Contact Me">
                <IconButton aria-label="Contact Me" className="nav-btn-hover--gray " onClick= {() => setContactMeDisplay(!displayContactForm)}>
                  <Link to="#" className="nav-color--gray"><Telegram /></Link>
                </IconButton>
              </Tooltip>
              {/*<TemporaryDrawer />*/}
            </nav>
          </div>
        </div>
        <div className={"navbar-container--btm nav-whitebg nav-bottom-radius"}>
            <div style={{display:"flex", flexDirection:"row", height:"100%"}}>
                <NavLink 
                activeClassName="active-link"
                to="/home" 
                className="nav-color--gray"
                style={{ display:"flex", alignItems:"center", justifyContent:"center",  flex:"1 1 auto"}}
                >
                  <Home />
                </NavLink>
                {/*<NavLink 
                activeClassName="active-link"
                to="/portfolio/developer" 
                className="nav-color--gray"
                style={{ display:"flex", alignItems:"center", justifyContent:"center",  flex:"1 1 auto"}}
                >
                  <BusinessCenterOutlined />
                </NavLink>*/}
                <NavLink 
                activeClassName="active-link"
                to="/Artwork" 
                className="nav-color--gray"
                style={{ display:"flex", alignItems:"center", justifyContent:"center",  flex:"1 1 auto"}}
                >
                  <Palette />
                </NavLink>
                <NavLink 
                activeClassName="active-link"
                to="/about" 
                className="nav-color--gray"
                style={{ marginTop:"0",display:"flex", alignItems:"center", justifyContent:"center",  flex:"1 1 auto"}}
                >Me</NavLink>              
                
                  
            </div>

        </div>
    </Container>
      </>
    );
}

MobileNav.propTypes = {
  setContactMeDisplay:PropTypes.func.isRequired,
  displayContactForm: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  displayContactForm: state.contactme.displayContactForm
})

export default  connect(mapStateToProps,{setContactMeDisplay})(MobileNav)