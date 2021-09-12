
import ProfilePromt from '../../../../utils/ProfilePromt';


export default function ArtOption(props) {


    return (
        <div id={props.id} style={{width:"100%"}}>
            <ProfilePromt height="115px" btmLabel={props.label} />

            <div style={{width:"100%", height:"200px"}}></div>

            {/*Charcoal-------------------------------------------------------------------------------------------------- 
            <GridList cellHeight={120} cols={3} style={{ marginTop: "3px" }}>
                {cList.length == 0 ?

                    <GridListTile cols={3}>   <Skeleton variant="rect" width={500} height={120} />     </GridListTile>
                    :
                    cList.map((imgsrc, index) => (
                        <GridListTile key={index} cols={1}>
                            <Link to="/portfolio/artwork/viewpost/charcoal/chinnu" style={{ position: "absolute", height: "100%", width: "100%", zIndex: "1" }}></Link>
                            <img src={imgsrc} style={{ cursor: "pointer" }} />
                        </GridListTile>
                    ))}
            </GridList>*/}

        </div>

    )

}