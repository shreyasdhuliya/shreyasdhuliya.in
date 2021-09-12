import React,{useEffect} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getHpTabInfo} from '../../../store/actions/homepage';
import Skeleton from '@material-ui/lab/Skeleton';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//material ui icons
import Camera from '@material-ui/icons/Camera'
import Bookmark from '@material-ui/icons/Bookmark'
import Favorite from '@material-ui/icons/Favorite'

//custom components
import Panel from './Panel';
import SetTab  from './SetTab'

//css
import './hometab.css'

const useStyles = makeStyles({
  selectedTab: {
    color:"white",
    background:'#f50057',
    boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14)'
  }
})

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const FullWidthTabs = ({getHpTabInfo, tabInfo}) => {
  const [value, setValue] = React.useState(0);
  const [tabselected, setTabselected] = React.useState([true, false, false])
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let arrBol = [false,false,false];
    arrBol[newValue] = true;
    setTabselected(arrBol);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  }; 

  const returnTabIcon = (tabname) => {
    if(tabname === "studio")
      return <Camera />
    else if (tabname === "bookmark") 
      return <Bookmark />
    else if (tabname === "favourite")
      return <Favorite />
    else 
      return "" 
  }

  useEffect(()=> {
    if(Object.keys(tabInfo).length === 0){
      getHpTabInfo()
    }
  },[tabInfo,getHpTabInfo])

  return (
   <>
      <AppBar position="static" color="default" style={{background:"transparent",width:"100%", alignItems:"center", boxShadow:"none"}}>
        
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="none"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{background:"transparent",width:"340px"}}
        >
          {/*b */}
         { Object.keys(tabInfo).length === 0 ? <Skeleton style={{marginLeft: "20px", opacity:"0"}} animation="wave" variant="rect" width={300} height={100} /> :
         
         (tabInfo["tabHeadingInfo"].map( (heading, i) =>  (<Tab 
          key={heading.tabname+"tab"}
          className={`noborder--focus home-tab--btn social-btn-${i+1} ${tabselected[i] ? classes.selectedTab : ""}` } 
          style={{width:"100px",height:"104px",maxWidth:"100px", minWidth:"100px", borderRadius:"3px", opacity:"0"}} 
          icon={ returnTabIcon(heading.tabname)}  label={heading.tabname} {...a11yProps(i)} 

        />)))
        }
        </Tabs>
      </AppBar>

      {/*tab panels------------------------------------------------------------------------------------- */}
      <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
      {Object.keys(tabInfo).length === 0 ?""
       : <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{background:"transparent",maxWidth:"700px",opacity:"0"}}  
        className= "social-btn-5">
        {
          (tabInfo["tabHeadingInfo"].map( (heading, i) => (
          <SetTab key={heading.tabname+"panel"} value={value} index={i} >
           <Panel panelName={heading.panel} imagesList={tabInfo["panelInfo"][heading.panel]} />
         </SetTab>)))
        }
      </SwipeableViews>}
      </div>
       {/*tab panels------------------------------------------------------------------------------------- */}
    </>
  );
}


FullWidthTabs.propTypes = {
  tabInfo:  PropTypes.object.isRequired,
  getHpTabInfo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  tabInfo: state.homepage.tabInfo
})

export default connect(mapStateToProps, {getHpTabInfo})(FullWidthTabs)
