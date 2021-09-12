import React,{useState} from 'react';
import { useParams} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

//card
import Card from '@material-ui/core/Card';


//firebase
//import  { FirebaseContext } from '../../../../firebase';

//components
import SlideShowImg from './components/slideshowimg';
import BreadCrumbImg from './components/breadcrumbimg';
import HeaderImg from './components/headerimg'
import ContentImg from './components/contentimg'

//css
import './index.css'



const useStyles = makeStyles((theme) => ({
    root: {
      width:"100%",
      maxWidth: 450,
      marginTop:50,
      paddingBottom:20,
      marginBottom:100
      
    },
    media: {
        width:"100%",
        marginLeft:"auto",
        marginRight:"auto"
    },
  }));
  
export default function Viewpost() {

  let { category, post } = useParams();  

  console.log(useParams())
  
    const classes = useStyles();

    const [viewPost, setViewPost] = useState({})

return(
    <div style={{width:"100%", height:"auto", minHeight:"100vh",backgroundColor:"rgba(0, 0, 0, 0.95)", position:"absolute", zIndex:"5", top:"0", left:"0"
    , display:"flex", justifyContent:"center" }}>

  
<Card className={classes.root} >
     
      <SlideShowImg pictures= {viewPost.pictures == undefined ? false: viewPost.pictures }/>
      
      {/*bread crumb --------------------------------------------------*/}
     <BreadCrumbImg path={ viewPost.pictures == undefined ? false : [category,post]}/>

      {/*Card header -------------------------------------------------- */}
      <HeaderImg header={ viewPost.title == undefined ? false : [viewPost.title,viewPost.date, viewPost.share]} />

      {/*Card Content -------------------------------------------------- */}
      <ContentImg desc = {viewPost.description == undefined ? false : viewPost.description }/>
    </Card>


 {/*firebase ----------------------------------------------------------------------------- 
    <FirebaseContext.Consumer>
    {firebase => {
       
       firebase.db.ref('artwork/details/charcoal/chinnu').once('value', snap => {   
         if(!Object.keys(viewPost).length)   {
          setViewPost(snap.val());
         }
       })  
    }}   

    </FirebaseContext.Consumer>*/}
    </div>
    )

}