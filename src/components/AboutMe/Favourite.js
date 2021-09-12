import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';


import TextCard from '../../utils/TextCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography'

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import Skeleton from '@material-ui/lab/Skeleton';



//import { MusicList } from './favlist'

export default function FavMusic(props) {

    const favList = props.info
    //music
    let musicListArr = [];
    let musicListArrSort = [];
    //movies
    let movieListArr = [];
    let movieListArrSort = [];
    //sitcom
    let sitcomListArr = [];
    let sitcomListArrSort = [];





    if (favList !== undefined) {

        //music
        let ObjM = favList.music.library
        let keysLi = Object.keys(ObjM);
        for (let i = 0; i < keysLi.length; i++) {
            let newObj = { "displayorder": ObjM[keysLi[i]]["display-order"], "artist": ObjM[keysLi[i]]["artist"], "imgsrc": ObjM[keysLi[i]]["imgsrc"] }
            musicListArr.push(newObj)
        }
        musicListArrSort = musicListArr.sort(function (a, b) { return a.displayorder - b.displayorder });
        console.log(musicListArrSort, "music")

        //movies
        let ObjMV = favList.movies.library
        let keysLi2 = Object.keys(ObjMV);
        for (let i = 0; i < keysLi2.length; i++) {
            let newObj = { "displayorder": ObjMV[keysLi2[i]]["display-order"], "movie": ObjMV[keysLi2[i]]["movie"], "imgsrc": ObjMV[keysLi2[i]]["imgsrc"] }
            movieListArr.push(newObj)
        }
        movieListArrSort = movieListArr.sort(function (a, b) { return a.displayorder - b.displayorder });
        console.log(movieListArrSort, "movies")

        //sitcom
        let ObjS = favList.sitcoms
        let keysLi3 = Object.keys(ObjS);
        for (let i = 0; i < keysLi3.length; i++) {
            let newObj = { "displayorder": ObjS[keysLi3[i]]["display-order"], "sitcom": ObjS[keysLi3[i]]["sitcom"], "imgsrc": ObjS[keysLi3[i]]["imgsrc"] }
            sitcomListArr.push(newObj)
        }
        sitcomListArrSort = sitcomListArr.sort(function (a, b) { return a.displayorder - b.displayorder });
        console.log(sitcomListArrSort, "sitcom")
    }


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

            {/* ------------------------  Songs  */}
            <Grid item xs={12} sm={12} md={6} style={{ padding: "10px" }}  >

                <TextCard varient="heading" height="65px" btmLabel={props.info === undefined ? "" : favList.music["caption"]} />
                {props.info === undefined ?

                    <div style={{ width: "100%", minHeight: "150px", display: "flex", justifyContent: "center" }}>
                        <CircularProgress color="secondary" style={{ marginTop: "20px" }} />
                    </div>
                    :
                    <div style={{ marginTop: "20px" }}>
                        {musicListArrSort.map((item, index) => (
                            <Chip
                                key={item.displayorder + "dis"}
                                avatar={<Avatar alt="Natacha" src={item.imgsrc} style={{ marginLeft: "0", width: "35px", height: "35px" }} />}
                                label={item.artist}
                                style={{ marginTop: "10px", marginRight: "10px" }} />
                        ))
                        }
                    </div>}

                    <TextCard 
                            height="100px" 
                            topLabel="Beaches or Mountains?" 
                            btmLabel="Beaches"
                            bgColor="#Fa8072"
                            mt="25px"
                            />
            </Grid>

             {/* ------------------------  Movies  */}
            <Grid item xs={12} sm={12} md={6} style={{ padding: "10px" }}  >

                <TextCard varient="heading" height="65px" btmLabel={props.info === undefined ? "" : favList.movies["caption"]} />
                {props.info === undefined ?

                    <div style={{ width: "100%", minHeight: "150px", display: "flex", justifyContent: "center" }}>
                        <CircularProgress color="secondary" style={{ marginTop: "20px" }} />
                    </div>
                    :

                    <div style={{ width: "100%" }}>
                        <Typography style={{ marginTop: "20px" }} ><span style={{ fontWeight: "bold", fontSize: "12px" }}>Genres: </span> <span style={{ fontSize: "12px" }}>{props.info === undefined ? "" : favList.movies["genres"]}</span> </Typography>
                        <Typography ><span style={{ fontWeight: "bold", fontSize: "12px" }}>Actors: </span> <span style={{ fontSize: "12px" }}>{props.info === undefined ? "" : favList.movies["actors"]}</span></Typography>
                        <Typography ><span style={{ fontWeight: "bold", fontSize: "12px" }}>Actresses: </span><span style={{ fontSize: "12px" }}>{props.info === undefined ? "" : favList.movies["actress"]}</span> </Typography>
                        <div style={{ marginTop: "5px" }}>
                            {movieListArrSort.map((item, index) => (
                                <Chip
                                    key={index + "mov"}
                                    avatar={<Avatar alt="Natacha" src={item.imgsrc} style={{ marginLeft: "0", width: "35px", height: "35px" }} />}
                                    label={item.movie}
                                    style={{ marginTop: "10px", marginRight: "10px" }} />
                            ))
                            }
                        </div>
                    </div>}
            </Grid>

            <Grid item xs={12} sm={12} md={6} style={{ padding: "10px" }}  >

                <TextCard varient="heading" height="65px" btmLabel="Family" />
                {imagesArrLi.length === 0 ?
                <Skeleton  variant="rect" style={{ width: "100%", marginTop:"20px" }} height={300} /> :

                <Carousel style={{ width: "100%", marginTop:"20px" }}>
                    {
                        imagesArrLi.map((imgsrc, index) => (
                            <Carousel.Item key={"desc" + index}>
                                <img

                                    alt="fav"
                                    src={imgsrc}
                                    style={{ width: "100%" }}
                                />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>}
            </Grid>


            {/* ------------------------  Sitcom  */}
            <Grid item xs={12} sm={12} md={6} style={{ padding: "10px" }}  >

            <TextCard varient="heading" height="65px" btmLabel={props.info === undefined ? "" : favList.sitcom["caption"]} />          

                {props.info === undefined ?

                    <div style={{ width: "100%", minHeight: "150px", display: "flex", justifyContent: "center" }}>
                        <CircularProgress color="secondary" style={{ marginTop: "20px" }} />
                    </div>
                    :

                    <div style={{ width: "100%" }}>
                        
                        <div style={{ marginTop: "20px" }}>
                            {sitcomListArrSort.map((item, index) => (
                                <Chip
                                    key={index + "sit"}
                                    avatar={<Avatar alt="Natacha" src={item.imgsrc} style={{ marginLeft: "0", width: "35px", height: "35px" }} />}
                                    label={item.sitcom}
                                    style={{ marginTop: "10px", marginRight: "10px" }} />
                            ))
                            }
                        </div>
                    </div>}
            </Grid>

            

        </>

    );
}

