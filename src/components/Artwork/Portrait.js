import React,{useEffect} from 'react';

import Grid from '@material-ui/core/Grid';

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

//Anaaya
import Anaaya1 from './images/portrait/anaayacomplete.jpg';
import Anaaya2 from './images/portrait/anaayaincomplete.jpg';

//prabhupada
import Prabhu from './images/portrait/prabhupada.jpg';

//shreya
//import Shreya1 from './images/portrait/shreya1.jpg';
import Shreya2 from './images/portrait/shreya2.jpg';
import Shreya3 from './images/portrait/shreya3.jpg';

//Simran
import Simran1 from './images/portrait/simrancomplete.jpg'
import Simran2 from './images/portrait/simran1.jpg'
import Simran3 from './images/portrait/simran2.jpg'


const Portrait = ({changeHeading}) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
        changeHeading("Portrait Works");
    },[]);

    return(
        <Grid container  
        spacing={5}
        style={{maxWidth:"1100px", paddingTop:"10px"}} >
            {/*Anaaya */}
            <Grid  item xs={12} sm={12} md={6}  >
            <Carousel style={{ width: "100%" }}>
                    <Carousel.Item >
                        <img
                            src={Anaaya1}
                            style={{ width: "100%" }}
                            alt="anaaya"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Anaaya2}
                            style={{ width: "100%" }}
                            alt="anaaya"
                        />
                    </Carousel.Item>
                  </Carousel>
            </Grid>

             {/*Prbhu */}
             <Grid  item xs={12} sm={12} md={6}   >
                     <img
                            src={Prabhu}
                            style={{ width: "100%" }}
                            alt="Prabhupada"
                        />
            </Grid>

            {/*Simran */}
            <Grid  item xs={12} sm={12} md={6}  >
            <Carousel style={{ width: "100%" }}>
                    <Carousel.Item >
                        <img
                            src={Simran1}
                            style={{ width: "100%" }}
                            alt="Simran"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Simran3}
                            style={{ width: "100%" }}
                            alt="Simran"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Simran2}
                            style={{ width: "100%" }}
                            alt="Simran"
                        />
                    </Carousel.Item>
                  </Carousel>
            </Grid>

             {/*Shreya */}
             <Grid  item xs={12} sm={12} md={6}  >
         
                        <img
                            src={Shreya2}
                            style={{ width: "100%" }}
                            alt="Shreya"
                        />
                        
            </Grid>

            <Grid  item xs={12} sm={12} md={6}  >
                        <img
                            src={Shreya3}
                            style={{ width: "100%" }}
                            alt="Shreya"
                        />
            </Grid>

        </Grid>
    )
}

export default Portrait;