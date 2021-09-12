
import './index.css'
import {useEffect} from 'react';
//import Tooltip from '@material-ui/core/Tooltip';

export default function RightStepper(props){

    let sectionOffsetList = [];
    const topBuffer = 200

    function scrollToTop(e) {

        window.scrollTo({
            top: topBuffer + e.currentTarget.offsetTopVal,
            behavior: 'smooth',
          });

        //remove all selected steppers
        let dotList = document.getElementsByClassName("stepper-dot--divcon")
        for (let i =0 ;i<dotList.length; i++){
            dotList[i].classList.remove("stepper-dot--selected")
        }
        e.currentTarget.classList.add("stepper-dot--selected")
    }

    function resetSectionTopList() {
                // get offset of all sections
      try {
        //desc, basic info, favourite, hobbies, connections 
        let offsetTopList = []
        let detailArr = props.detail;

        detailArr.map((item) => {
            offsetTopList.push(document.getElementById(item.id).offsetTop)
        })
        let testArr = [] 
        sectionOffsetList = [];

        offsetTopList.map((item, index) => {           
            sectionOffsetList.push(
                {
                    id: detailArr[index].id + "-dot", offsetTop: item, 
                    offsetBottom: index < (offsetTopList.length -1) ? offsetTopList[index + 1]: 50000, 
                    datanumber: index + 1, 
                    tooltip: detailArr[index].tooltip })
        })

        //console.log("resiize", sectionOffsetList)

                //clear existing stepper
                document.getElementById("right-stepper").innerHTML = "";
                console.log("yes")

                //add new right stepper
                let rightStepperHTML = ''

                sectionOffsetList.map((item) => {
                    rightStepperHTML = rightStepperHTML +  
                    `<div id="${item.id}" 
                             onmouseover='document.getElementById("${item.id}-tip").style.display = "block"' 
                             onmouseout='document.getElementById("${item.id}-tip").style.display = "none"' 
                             style="position:relative; " datanumber="${item.datanumber}" class= "stepper-dot--divcon">
                       <span id="${item.id}-tip" 
                       style="right:26px;position:absolute;display:none;
                       color:white; background:#616161; padding:4px 10px; 
                       border-radius:25px; font-size:8px; white-space:nowrap;
                       letter-spacing: 1px;"> ${item.tooltip}</span>
                       <div  class="stepper-dot--div"></div>
                    </div>`
                })

                //console.log(rightStepperHTML)
             document.getElementById("right-stepper").innerHTML = rightStepperHTML;

             rightStepperHTML = ''

             let  dotList =  document.getElementsByClassName("stepper-dot--divcon")
             for (let i = 0; i< dotList.length ; i++){
                dotList[i].addEventListener('click', scrollToTop)
                dotList[i].offsetTopVal = sectionOffsetList[i].offsetTop;
             }
            }
            catch(err) {
                console.error("right stepper:: reset stepper")
            }

    }

    function checkActiveSection() {
        //console.log("cehck window scroll", sectionOffsetList)
        
        for(let i=0 ; i < sectionOffsetList.length; i++){
            if(window.pageYOffset > (topBuffer - 20 + sectionOffsetList[i].offsetTop) &&  window.pageYOffset < (topBuffer  + 20 + sectionOffsetList[i].offsetBottom)){
                //remove all selected steppers
                let dotList = document.getElementsByClassName("stepper-dot--divcon")
                for (let i =0 ;i<dotList.length; i++){
                    dotList[i].classList.remove("stepper-dot--selected")
                }
                document.getElementById(dotList[i].id).classList.add("stepper-dot--selected")
            }
        }
      
    }

    useEffect(() => {

        //console.log("bind about" );
        setTimeout(function(){ resetSectionTopList(); }, 3000);
        resetSectionTopList();

        window.addEventListener("scroll" , checkActiveSection);
        window.addEventListener("resize" , resetSectionTopList)
    
        return () => {
          //console.log("unbind about")
          window.removeEventListener("scroll", checkActiveSection);
          window.removeEventListener("resize", resetSectionTopList);
        } 
    
      }, []);

    return(
        <div id="right-stepper" className="right-stepper">    
    
        </div> 
        )
}