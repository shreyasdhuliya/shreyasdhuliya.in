import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getAboutMe} from '../../store/actions/aboutme'
import PropTypes from 'prop-types' 

//background
import WhiteBackground from '../../utils/WhiteBg'
import BasicInfo from './BasicInfo.js';

import Favorite from './Favourite';
//import Description from './Description';
import TopLeftImg from './TopLeftImg'
import ProfilePromt from '../../utils/ProfilePromt';
import Hobbies from './Hobbies';

import './aboutMe.css';

//import material ui components
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

//utils
import RightStepper from '../../utils/RightStepper'

const  AboutMe = ({getAboutMe, aboutMe}) => {
     //console.log("####################", aboutMe)
    let rightStepperInfo=[
       // {id:"aboutme-description", tooltip:"Description" },
        {id:"aboutme-basicinfo", tooltip:"Basic Info" },
        {id:"aboutme-favourite", tooltip:"Favourite" },
        {id:"aboutme-hobbies", tooltip:"Hobbies" }
       // {id:"aboutme-connections", tooltip:"Connections" },
                          ]

    useEffect(() => {
        window.scrollTo(0, 0);
        if(Object.keys(aboutMe).length === 0){
            getAboutMe()  
        } 
      },[aboutMe,getAboutMe]);
    
    return (
        <>

        {
            Object.keys(aboutMe).length === 0 ? "" :
            <RightStepper detail={rightStepperInfo} /> }        
          
        <Typography variant="h3" style={{fontWeight:"medium"}} className="profile-info" >About Me</Typography>   

        <WhiteBackground>
        
      
       <Grid container  style={{maxWidth:"700px"}}  >
          
                {/*About  me desc 
                <Grid id="aboutme-description" item xs={12} style={{textAlign:"center", padding:"10px"}}>
                    <Description desc={aboutMe["description"]}/>
                </Grid>*/}

                {/* Left image*/}
                <Grid   item xs={12} sm={6}  md={6} style={{padding:"10px"}}>
                      <TopLeftImg imgs={aboutMe["topleftimg"]} />
                  </Grid>
                  
                {/* |imge | Basic info|*/}
                <Grid  id="aboutme-basicinfo" item  xs={12}  sm={6} md={6}  style={{padding:"10px", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                         <BasicInfo  info={aboutMe["basic-info"]} />   
                  </Grid>

                  {/*Favourite */}
                  <Grid id="aboutme-favourite" item xs={12} style={{display:"flex", justifyContent:"center", padding:"10px"}}>
                      <ProfilePromt  height="95px" btmLabel="Favourite"/>

                      
                  </Grid>
                  <Grid container item xs={12}>
                      <Favorite info={aboutMe["favourite"]} imgs={aboutMe["family"]} />
                  </Grid>

                  {/*Hobbies */}
                  <Grid id="aboutme-hobbies" item xs={12} style={{display:"flex", justifyContent:"center",padding:"10px"}}>
                  <ProfilePromt  height="95px" btmLabel="Hobbies"/>
                  </Grid>

                  <Grid container item xs={12}>
                      <Hobbies />
                  </Grid>
              


        </Grid>


        </WhiteBackground>

        </>
    );
  }

  AboutMe.propTypes = {
    aboutMe:PropTypes.object.isRequired,
    getAboutMe: PropTypes.func.isRequired, 
  }

  const mapStateToProps = state => ({
      aboutMe: state.aboutme.aboutMe
  })

  export default connect(mapStateToProps, {getAboutMe})(AboutMe)