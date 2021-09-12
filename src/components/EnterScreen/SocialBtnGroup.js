//react
import { Link } from "react-router-dom";
import {  useEffect } from 'react'
import {connect} from 'react-redux'
import {getEsLinks} from '../../store/actions/enterscreen'
import PropTypes from 'prop-types'

//import material ui components
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';

//social  media font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faGithub, faBehance, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"


const SocialBtnGroup = ({getEsLinks,socialLinks }) => {

    const redirectOnClick = (href) => {
        window.location.href = href
    }
    useEffect(() => {
        if(socialLinks.length === 0){
            getEsLinks()
        }
    },[socialLinks.length, getEsLinks]);

    const returnSocialBtn = (sname) => {
        if(sname === "facebook")
            return <FontAwesomeIcon icon={faFacebook} className="shrey-fc--black" style={{  width: "20px", height: "20px" }} />
        else if(sname === "instagram")
            return  <FontAwesomeIcon icon={faInstagram} className="shrey-fc--black" style={{  width: "20px", height: "20px" }} /> 
        else if(sname === "github")
            return <FontAwesomeIcon icon={faGithub} className="shrey-fc--black" style={{  width: "20px", height: "20px" }} />
        else if(sname === "behance")
            return <FontAwesomeIcon icon={faBehance} className="shrey-fc--black" style={{  width: "18px", height: "18px" }} />
        else 
            return  <FontAwesomeIcon icon={faLinkedinIn} className="shrey-fc--black" style={{  width: "18px", height: "18px" }} />
        
    }

    return (
        <div style={{ width: "100%", height: "100%", position: "fixed", top: "0", left: "0", zIndex: "31" }}>
           { socialLinks.length === 0 ? "" :           
           <Link to="/home" variant="h2" style={{ textDecoration: 'none' }}>
                <Button variant="contained" 
                    className="enterbtn">
                    <Typography className="shrey-fc--white" variant="body1" style={{ letterSpacing: "4px", textTransform: "lowercase", fontSize: "20px" }}>Enter</Typography>
                </Button>
            </Link>
            }
            <div style={{
                 width: "100%", display: "flex", flexDirection: "row", justifyContent: "center",
                position: "absolute", bottom: "50px"
            }}>
                { 
                socialLinks.length === 0 ? "" :
                   (socialLinks.map((social, i) => ( <IconButton key={social.name+"123"} className={`sociallinks social-btn-${i+1}`} onClick={() => redirectOnClick(social.link)}>
                        {returnSocialBtn(social.name)}
                    </IconButton>)))
                }  
            </div>
        </div>

    );
}

SocialBtnGroup.propTypes = {
    getEsLinks: PropTypes.func.isRequired,
    socialLinks: PropTypes.array.isRequired,
  }

const mapStateToProps = state => ({
    socialLinks: state.enterscreen.socialLinks
})

export default connect(mapStateToProps, {getEsLinks})(SocialBtnGroup)