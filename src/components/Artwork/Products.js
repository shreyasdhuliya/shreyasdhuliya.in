import React,{useEffect}  from 'react';

import Grid from '@material-ui/core/Grid';

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

//Bambi
import Bambi1 from './images/product/bambi1.jpg';
import Bambi2 from './images/product/bambi2.jpg';

//Wire
import Wire1 from './images/product/wire1.jpg';
import Wire2 from './images/product/wire2.jpg';

//Elephant
import Elephant1 from './images/product/elephant1.jpg';
import Elephant2 from './images/product/elephant2.png';
import Elephant3 from './images/product/elephant3.png';

//Infuser
import Infuser1 from './images/product/infuser1.jpg'
import Infuser2 from './images/product/infuser2.jpg'


const Products = ({changeHeading}) => {
    useEffect(() => {
   window.scrollTo(0, 0)
    changeHeading("Product Designs");
    },[]);

    return(
        <Grid container  
        spacing={5}
        style={{maxWidth:"1100px", paddingTop:"10px"}} >
            {/*Bambi */}
            <Grid  item xs={12} sm={12} md={6}  >
            <Carousel style={{ width: "100%" }}>
                    <Carousel.Item >
                        <img
                            src={Bambi1}
                            style={{ width: "100%" }}
                            alt="bambi"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Bambi2}
                            style={{ width: "100%" }}
                            alt="bambi"
                        />
                    </Carousel.Item>
                  </Carousel>
            </Grid>

             {/*Wire */}
             <Grid  item xs={12} sm={12} md={6}   >
             <Carousel style={{ width: "100%" }}>
                    <Carousel.Item >
                        <img
                            src={Wire1}
                            style={{ width: "100%" }}
                            alt="wire1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Wire2}
                            style={{ width: "100%" }}
                            alt="wire2"
                        />
                    </Carousel.Item>
                  </Carousel>
            </Grid>

            {/*Elephant */}
            <Grid  item xs={12} sm={12} md={6}  >
            <Carousel style={{ width: "100%" }}>
                    <Carousel.Item >
                        <img
                            src={Elephant1}
                            style={{ width: "100%" }}
                            alt="Elephant"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Elephant2}
                            style={{ width: "100%" }}
                            alt="Elephant"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Elephant3}
                            style={{ width: "100%" }}
                            alt="Elephant"
                        />
                    </Carousel.Item>
                  </Carousel>
            </Grid>

             {/*Infuser */}
             <Grid  item xs={12} sm={12} md={6}  >
            <Carousel style={{ width: "100%" }}>
                    <Carousel.Item >
                        <img
                            src={Infuser1}
                            style={{ width: "100%" }}
                            alt="Infuser"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Infuser2}
                            style={{ width: "100%" }}
                            alt="Infuser"
                        />
                    </Carousel.Item>
                  </Carousel>
            </Grid>

        </Grid>
    )
}

export default Products;