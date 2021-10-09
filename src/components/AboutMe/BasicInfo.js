
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

//material ui icons
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton';

//font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPrayingHands, faMale, faWineGlassAlt, faSearch , faUserGraduate, faBriefcase, faHome, faLaptopHouse, faSign, faDog} from "@fortawesome/free-solid-svg-icons"

export default function  BasicInfo(props) {

    const basicinfo = props.info;

    const iconLabelList =[   

        { icon:   <FontAwesomeIcon 
            icon={faMale} 
            className={basicinfo === undefined ? "": basicinfo["breadcrumb"]["height"] === "" ? "dis-none-imp":""} 
            style={{color:"#505050", marginLeft:"10px"}} /> , 
            label: basicinfo === undefined ? "": basicinfo["breadcrumb"]["height"] },
        { icon:   <FontAwesomeIcon 
            icon={faWineGlassAlt} 
            className={basicinfo === undefined ? "":basicinfo["breadcrumb"]["drinking"] === "" ? "dis-none-imp":""} 
            style={{color:"#505050", marginLeft:"10px"}} /> , 
          label: basicinfo === undefined ? "": basicinfo["breadcrumb"]["drinking"] },
        { icon:   <FontAwesomeIcon 
            icon={faSearch} 
            className={basicinfo === undefined ? "":basicinfo["breadcrumb"]["lookingfor"] === "" ? "dis-none-imp":""} 
            style={{color:"#505050", marginLeft:"10px"}} /> ,
            label: basicinfo === undefined ? "": basicinfo["breadcrumb"]["lookingfor"] },
        { icon:   <FontAwesomeIcon 
            icon={faUserGraduate} 
            className={basicinfo === undefined ? "":basicinfo["breadcrumb"]["degree1"] === "" ? "dis-none-imp":""} 
             style={{color:"#505050", marginLeft:"10px"}} /> , 
             label: basicinfo === undefined ? "": basicinfo["breadcrumb"]["degree1"] },      
        { icon:   <FontAwesomeIcon
                  icon={faBriefcase} 
                  className={basicinfo === undefined ? "":basicinfo["breadcrumb"]["role"] === "" ? "dis-none-imp":""} 
                   style={{color:"#505050", marginLeft:"10px"}}  /> , 
                   label: basicinfo === undefined ? "": basicinfo["breadcrumb"]["role"] },
        { icon:   <FontAwesomeIcon 
                   icon={faUserGraduate}  
                   className={basicinfo === undefined ? "":basicinfo["breadcrumb"]["degree2"] === "" ? "dis-none-imp":""} 
                   style={{color:"#505050", marginLeft:"10px"}} /> , 
                   label: basicinfo === undefined ? "": basicinfo["breadcrumb"]["degree2"] },
        { icon:   <FontAwesomeIcon 
                    icon={faPrayingHands} 
                    className={basicinfo === undefined ? "":basicinfo["breadcrumb"]["religion"] === "" ? "dis-none-imp":""} 
                    style={{color:"#505050", marginLeft:"10px"}} /> , 
                    label: basicinfo === undefined ? "": basicinfo["breadcrumb"]["religion"] },
         { icon:   <FontAwesomeIcon 
                        icon={faDog} 
                        className={basicinfo === undefined ? "":basicinfo["breadcrumb"]["pets"] === "" ? "dis-none-imp":""} 
                        style={{color:"#505050", marginLeft:"10px"}} /> , 
                        label: basicinfo === undefined ? "": basicinfo["breadcrumb"]["pets"] },
        { icon:   <FontAwesomeIcon 
                    icon={faHome}  
                    className={basicinfo === undefined ? "":basicinfo["breadcrumb"]["from"] === "" ? "dis-none-imp":""} 
                    style={{color:"#505050", marginLeft:"10px"}} /> , 
                    label: basicinfo === undefined ? "": basicinfo["breadcrumb"]["from"] },
        { icon:   <FontAwesomeIcon icon={faLaptopHouse}  
                    className={basicinfo === undefined ? "":basicinfo["breadcrumb"]["lives"] === "" ? "dis-none-imp":""} 
                    style={{color:"#505050", marginLeft:"10px"}} /> , 
                    label: basicinfo === undefined ? "": basicinfo["breadcrumb"]["lives"] },
        { icon:   <FontAwesomeIcon icon={faSign}  
                    className={basicinfo === undefined ? "":basicinfo["breadcrumb"]["zodiac"] === "" ? "dis-none-imp":""} 
                    style={{color:"#505050", marginLeft:"10px"}} /> , 
                    label: basicinfo === undefined ? "": basicinfo["breadcrumb"]["zodiac"] },
      
    ]

    return(

        <>
        {
         basicinfo === undefined ?        
        <Skeleton variant="rect" style={{width:"90%", marginBottom:"4px"}} height={30} />:
         <Typography variant="h5" style={{margin:"0", marginTop:"0px"}}>{basicinfo["name"] + ", " + basicinfo["age"] }</Typography>
        }
         {
         basicinfo === undefined ?  
         <Skeleton variant="rect" style={{width:"70%", marginBottom:"4px"}} height={16} />:
          <Typography variant="body1" style={{fontSize: "14px", color: "rgba(0,0,0,0.67)" }}>{basicinfo["designation"]} @ {basicinfo["company"]}</Typography>
         }

         <Typography variant="h6" style={{marginTop:"10px", marginBottom:"10px"}}>Basic Info</Typography>
         <div>
        { basicinfo === undefined ?
        <div style={{width:"100%", minHeight:"150px", display:"flex", justifyContent:"center"}}>
            <CircularProgress color="secondary" style={{marginTop:"20px"}} />
        </div>
        :
        iconLabelList.map((item, index) => (
            <Chip
            key = {index}
        icon={item.icon}
        label={item.label}
        className="chip-shadow-3d"
        style={{background: "white", color:"#505050", marginTop:"8px", marginRight:"5px"}}/>

        ))}
        </div>

         {/* |prompt|
         <TextCard 
         mt="30px"
         height="120px" 
         topLabel={basicinfo === undefined ? "": basicinfo["profilepromt"]["texttop"] } 
         btmLabel={basicinfo === undefined ? "": basicinfo["profilepromt"]["textbtm"] }
         bgColor="#Fa8072"
         />*/}
        
        </>


    );
}