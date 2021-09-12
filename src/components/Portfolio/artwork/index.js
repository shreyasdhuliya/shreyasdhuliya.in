//react
import { useLocation} from "react-router-dom";
import {useEffect} from 'react'
 

//utils
import ArtOption from './artoption'

//css
import './index.css'



function Artwork(props) {

 // const [cList, setCList] = useState([])
  //const [scrollToID, setScrollToID] = useState("")

  let location = useLocation();

  useEffect(() => {
    
    const params = new URLSearchParams(location.search)
    if(params.has('scroll')){
      let scrollid = params.get('scroll')
      const element = document.getElementById(scrollid);
      element.scrollIntoView({behavior: 'smooth' });
    }

  }, [location.search]);

 
 
      
    return (     

      <>
   
        <div class="view-post--container">

         

          {/*1.commision-------------------------------------------------------------------------------------------------- */}
          <ArtOption id="commision" label="Commision" />

          {/*2.pastel-------------------------------------------------------------------------------------------------- */}
          <ArtOption id="portrait" label="Portraits" />

          {/*3.charcoal-------------------------------------------------------------------------------------------------- */}
          <ArtOption id="workshop" label="Workshops" />

          {/*4.clay-------------------------------------------------------------------------------------------------- */}
          <ArtOption id="clay" label="Clay Sculptures" />

          {/*5.products-------------------------------------------------------------------------------------------------- */}
          <ArtOption id="product" label="Product" />

          {/*6.crafts-------------------------------------------------------------------------------------------------- */}
          <ArtOption id="artcraft" label="Art and Craft" />

          {/*7.others-------------------------------------------------------------------------------------------------- */}
          <ArtOption id="others" label="Ealier works" />
        

         

    </div>

             </>             
        
        )
  
}

export default Artwork;