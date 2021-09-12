
//social  media font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faGithub, faBehance, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Skeleton from '@material-ui/lab/Skeleton';

//material UI
import  IconButton  from  '@material-ui/core/IconButton'

//react
import { useEffect } from 'react';
import {getHpLinks} from '../../store/actions/homepage';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

//import css
import './css/socialMediaBtns.css'


const SocialLinks = ({getHpLinks, socialLinks}) => {

    const redirectOnClick = (href) => {
        window.location.href = href
    }

    useEffect(() => {
        if(Object.keys(socialLinks).length === 0){
            getHpLinks()
        }
     }, [getHpLinks, socialLinks])

     const returnSocialBtn = (sname) => {
        if(sname === "facebook")
            return <FontAwesomeIcon icon={faFacebook} style={{color:"#4267B2", width:"24px", height:"24px"}} />
        else if(sname === "instagram")
            return  <FontAwesomeIcon icon={faInstagram} style={{color:"#E1306C", width:"24px", height:"24px"}} />
        else if(sname === "github")
            return <FontAwesomeIcon icon={faGithub} style={{color:"#211f1f", width:"24px", height:"24px"}} />
        else if(sname === "behance")
            return <FontAwesomeIcon icon={faBehance} style={{color:"#053eff", width:"24px", height:"24px"}} />
        else 
            return  <FontAwesomeIcon icon={faLinkedin} style={{color:"#0e76a8", width:"24px", height:"24px"}} />
        
    }

    return(
        <>
        { Object.keys(socialLinks).length === 0 ? <Skeleton style={{ marginBottom:"30px", opacity:"0"}} animation="wave" variant="rect" width={200} height={20} /> :
        <div style={{marginTop:'10px',marginBottom:"10px",marginLeft:"7px", width:"100%", display:"flex", flexDirection:"row" ,justifyContent:"center"}}>
            {   socialLinks.length === 0 ? "" :
                   (socialLinks.map((social, i) => ( 
                <IconButton className={`nocolor--focus social-btn-${i+1}`} key={social.name+"321"} style={{marginRight:"7px"}}  onClick={() => redirectOnClick(social.link)}>
                      {returnSocialBtn(social.name)}
                 </IconButton>
                 )))
            }
             
        </div>}
        </>
        );
}

SocialLinks.propTypes = {
    socialLinks: PropTypes.array.isRequired,
    getHpLinks: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    socialLinks: state.homepage.socialLinks
})

export default  connect(mapStateToProps, {getHpLinks})(SocialLinks)