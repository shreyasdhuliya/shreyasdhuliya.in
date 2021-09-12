
import Skeleton from '@material-ui/lab/Skeleton';



import LeftRightBtn from './leftrightbtn'

import  Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';




export default function SlideShowImg(props) {

    const imgList = props.pictures;
    console.log(props.pictures);

    return(
        
        <div style={{width:"100%", display:"flex", justifyContent:"center", marginTop:"30px", position:"relative"}}>   

                  
        {/*image -------------------------------------------------- */}
                {imgList == false ?
                <Skeleton variant="rect" width={450} height={400} />:        
                
                <Carousel style={{width:"100%"}}>
                         {
                                 Object.keys(imgList).map((imgKey, index) => (
                                        <Carousel.Item key={index}>
                                                <img
                                                        className="d-block"
                                                        style={{width:"auto",maxHeight:"450px",minHeight:"300px",marginLeft:"auto", marginRight:"auto"}} 
                                                        src={imgList[imgKey]}
                                                        alt="First slide"
                                                />
                                        </Carousel.Item>
                                 ))
                         }
                </Carousel>
        }
        </div>
        )
}