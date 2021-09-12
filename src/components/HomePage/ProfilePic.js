import {useEffect} from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import {getDp} from '../../store/actions/homepage'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import CircularProgress from '@material-ui/core/CircularProgress';

const ProfilePic = ({getDp, profilePic}) => {

    useEffect(()=> {
       if(profilePic.length === 0) {
        getDp();
       }
    }, [profilePic.length,getDp])

    return(
        
        <div className="profile-image transition-dp" 
        style= {{display:"flex", justifyContent:"center", alignItems:"center"}} >
            {
                profilePic.length === 0 ?
                <Skeleton animation="wave" style={{opacity:".3"}} variant="circle" width={200} height={200} />
                :
                <img alt="img" className="social-btn-1" style={{width:"100%",height:"100%", borderRadius:"50%"}} 
                src={profilePic} />
            
            }
        </div> 
        );
}

ProfilePic.propTypes = {
    profilePic: PropTypes.string.isRequired,
    getDp: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    profilePic: state.homepage.profilePic
})


export default  connect(mapStateToProps, {getDp})(ProfilePic)