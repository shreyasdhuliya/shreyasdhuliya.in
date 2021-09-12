import TextCard from '../../../utils/TextCard'

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import Grid from '@material-ui/core/Grid';

import craft1 from './images/artcraft/CRAFT1.jpg'
import craft2 from './images/artcraft/CRAFT2.jpg'

import tel1 from './images/telescope/TEL1.png';
import tel2 from './images/telescope/TEL2.png';
import tel3 from './images/telescope/TEL3.png';

import bee1 from './images/frizbee/BEE2.png'; 
import bee2 from './images/frizbee/BEE3.png'; 




const craftimages = [craft1, craft2]; 
const telimages = [tel1,tel2,tel3];
const beeimages = [bee1, bee2];


export default function Hobbies()  {

    return (

        <>
             <Grid   item xs={12} sm={6}  md={6}  style={{padding:"10px"}}>  
             <TextCard varient="heading" height="65px" btmLabel="Arts & Crafts" />    
                <Carousel style={{ width: "100%" , marginTop:"20px"}}>
                    {
                        craftimages.map((imgsrc, index) => (
                            <Carousel.Item key={"craftimages" + index}>
                                <img
                                alt="img"
                                    src={imgsrc}
                                    style={{ width: "100%" }}
                                />
                            </Carousel.Item>
                        ))
                    }
                 </Carousel>
                </Grid>
                <Grid   item xs={12} sm={6}  md={6}  style={{padding:"10px"}}>      
                <TextCard varient="heading" height="65px" btmLabel="Sky Gazing" />  
                <Carousel style={{ width: "100%" , marginTop:"20px"}}>
                
                    {
                        telimages.map((imgsrc, index) => (
                            <Carousel.Item key={"telescope" + index}>
                                <img
                                alt="img"
                                    src={imgsrc}
                                    style={{ width: "100%" }}
                                />
                            </Carousel.Item>
                        ))
                    }
                 </Carousel>
                </Grid>
                <Grid   item xs={12} sm={6}  md={6} style={{padding:"10px"}}>      
                <TextCard varient="heading" height="65px" btmLabel="Outdoor Sports" />
                <Carousel style={{ width: "100%" , marginTop:"20px"}}>
                    {
                        beeimages.map((imgsrc, index) => (
                            <Carousel.Item key={"frizbee" + index}>
                                <img
                                alt="img"
                                    src={imgsrc}
                                    style={{ width: "100%" }}
                                />
                            </Carousel.Item>
                        ))
                    }
                 </Carousel>
                </Grid>
            </>
    );
}