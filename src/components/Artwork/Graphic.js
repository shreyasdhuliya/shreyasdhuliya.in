import React,{useEffect}  from 'react';

import Grid from '@material-ui/core/Grid';

//import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

//Figma
import Figma from './images/uiux/figma.jpg';

//UIUX
import Logo1 from './images/uiux/logo0.png';
import Logo2 from './images/uiux/logo1.png';
import Logo3 from './images/uiux/logo2.jpg';
import Logo4 from './images/uiux/logo3.jpg';
import Logo5 from './images/uiux/logo4.jpg';


const Graphic = ({changeHeading}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    changeHeading("Graphic Designs");
    },[]);

    return(
        <Grid container  
        spacing={5}
        style={{maxWidth:"1100px", paddingTop:"10px"}} >

            <Grid  item xs={12}   >
                        
                        <img
                        src={Logo1}
                        style={{ width: "100%" }}
                        alt="Figma"
                    />
            </Grid>
            <Grid  item xs={12}   >
                        
                        <img
                        src={Logo3}
                        style={{ width: "100%" }}
                        alt="Figma"
                    />
            </Grid>
            <Grid  item xs={12}   >
                        
                        <img
                        src={Logo2}
                        style={{ width: "100%" }}
                        alt="Figma"
                    />
            </Grid>
            <Grid  item xs={12}   >
                        
                        <img
                        src={Logo4}
                        style={{ width: "100%" }}
                        alt="Figma"
                    />
            </Grid>
            <Grid  item xs={12}   >
                        
                        <img
                        src={Logo5}
                        style={{ width: "100%" }}
                        alt="Figma"
                    />
            </Grid>
            <Grid  item xs={12}   >
            
                         <img
                            src={Figma}
                            style={{ width: "100%" }}
                            alt="Figma"
                        />
            </Grid>

            {/*Logo */}
            

        </Grid>
    )
}

export default Graphic;