import React,{useEffect} from 'react';

import Grid from '@material-ui/core/Grid';

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

//Dot
import dot1 from './images/digitalart/DOT1.png';
import dot2 from './images/digitalart/DOT2.png';

//procreate
import pro1 from './images/digitalart/PRO1.png';
import pro2 from './images/digitalart/PRO2.png';

//style transfer
import style1 from './images/digitalart/STYLE1.jpg';
import style2 from './images/digitalart/STYLE2.jpg';
import style3 from './images/digitalart/STYLE3.png';


const DigitalArt = ({changeHeading}) => {



    useEffect(() => {
        window.scrollTo(0, 0)
        changeHeading("Digital Portraits");
    },[]);

    return(
        <Grid container  
        spacing={5}
        style={{maxWidth:"1100px", paddingTop:"10px"}} >
            {/*Anaaya */}
            <Grid  item xs={12} sm={6} md={6}  >
            <Carousel style={{ width: "100%" }}>
                    <Carousel.Item >
                        <img
                            src={dot1}
                            style={{ width: "100%" }}
                            alt="anaaya"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={dot2}
                            style={{ width: "100%" }}
                            alt="anaaya"
                        />
                    </Carousel.Item>
                  </Carousel>
            </Grid>

             {/*Prbhu */}
             <Grid  item xs={12} sm={6} md={6}   >
             <Carousel style={{ width: "100%" }}>
                    <Carousel.Item >
                        <img
                            src={pro1}
                            style={{ width: "100%" }}
                            alt="anaaya"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={pro2}
                            style={{ width: "100%" }}
                            alt="anaaya"
                        />
                    </Carousel.Item>
                  </Carousel>
            </Grid>

            {/*Shreya */}
            <Grid  item xs={12} sm={6} md={6}  >         
         <img
             src={style1}
             style={{ width: "100%" }}
             alt="Shreya"
         />         
        </Grid>
        {/*Shreya */}
        <Grid  item xs={12} sm={6} md={6}  >         
         <img
             src={style2}
             style={{ width: "100%" }}
             alt="Shreya"
         />         
        </Grid>

{/*Shreya */}
<Grid  item xs={12} sm={6} md={6}  >         
         <img
             src={style3}
             style={{ width: "100%" }}
             alt="Shreya"
         />         
        </Grid>


        </Grid>
    )
}

export default DigitalArt;