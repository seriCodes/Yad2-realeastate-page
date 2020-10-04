import React from 'react'
// import {v1 as uuidv1} from "uuid";
import {ModalStyler} from './ModalStyler'
import {ContainersStructure} from "./ContainersStructure";
import elephants from "./images/elephants.png";
import chicken_soccer from "./images/chicken_soccer.jpg";
import cow_smiles from "./images/cow_smiles.jpg";

 
export const ResultAccordion = (props) => {
    const ContainersStructureObj= new ContainersStructure()

    React.useEffect(()=>{
        let ResultAccordionTag= document.getElementById(props.id)
        ContainersStructureObj.keyValueStyleMaker(ResultAccordionTag,{
}) 
 ContainersStructureObj.makeDevelopmentBorder1(ResultAccordionTag)       

    })
     return (
        <div id={props.id} class="resultDetailsAccordion_visible resultDetailsAccordion closed-accordionHeightZero resultDetailsAccordion_displayNone
        " 
        style={{display:"none"}}
        >
       
        <div class="propertyDescription">
        <h3> תיאור הנכס</h3>
        
        <div>{props.description} </div> 
        
        </div> 
        <div clase="parking">  <h3> חניה</h3>{props.isParking?"":"לא"} קיימת</div> 

        <div clase="entry-date"><h3> תאריך כניסה</h3> {props.entryDate.toLocaleDateString('he-IS' )}</div> 
 
         <div class="result-accordion-ad-1">
         <img class="accordion-ad" src={elephants}/>
     </div>

        <div class="result-accordion-ad-2">
        <img class="accordion-ad" src={chicken_soccer}/>
        </div>

        <div class="result-accordion-ad-3">
        <img class="accordion-ad" src={cow_smiles}/>
 
        </div>
        </div>
    )
}
