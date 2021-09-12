
import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import Skeleton from '@material-ui/lab/Skeleton';

export default function TopLeftImg(props) {

    const imgLi = props.imgs
    let imagesArr = [];
    let imagesArrLi = [];

    if (imgLi !== undefined) {
        console.log(imgLi)
        let imagesLi = { ...imgLi };

        for (let i = 0; i < Object.keys(imagesLi).length; i++) {
            let objli = {}
            objli[imagesLi[Object.keys(imagesLi)[i]]["display-order"]] = imagesLi[Object.keys(imagesLi)[i]]["src"]
            imagesArr.push(objli)
        }

        for (let i = 0; i < imagesArr.length; i++) {
            imagesArrLi.push(imagesArr[i][i + 1])
        }
    }

    return (
        <>
            {imagesArrLi.length === 0 ?
                <Skeleton variant="rect" style={{ width: "100%" }} height={455} /> :
                <div className="about-me-images">
                <Carousel style={{ width: "100%" }}>
                    {
                        imagesArrLi.map((imgsrc, index) => (
                            <Carousel.Item key={"desc" + index}>
                                <img
                                   alt="img"
                                    src={imgsrc}
                                    style={{ width: "100%" }}
                                />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
                </div>
                }
        </>
    );


}