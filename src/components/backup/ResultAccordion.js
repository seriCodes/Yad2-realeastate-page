import React from 'react'
// import {v1 as uuidv1} from "uuid";
import {ModalStyler} from './ModalStyler'
import {ContainersStructure} from "./ContainersStructure";

export const ResultAccordion = (props) => {
    const ContainersStructureObj= new ContainersStructure()

    React.useEffect(()=>{
        let ResultAccordionTag= document.getElementById(props.id)
        ContainersStructureObj.keyValueStyleMaker(ResultAccordionTag,{
// "height":"0rem",


        })
        // ContainersStructureObj.flexColumn(ResultAccordionTag,{
        //     // display:"none",
        //     // alignItems:"flex-end"
        // })
        
        ContainersStructureObj.makeDevelopmentBorder1(ResultAccordionTag)       

    })
    // props.entryDate
    return (
        <div id={props.id} class="resultDetailsAccordion" >
       
        <div class="propertyDescription">
        <h3> תיאור הנכס</h3>
        
        <div>{props.description} </div> 
        
        </div> 
        

        <div clase="entry-date">תאריך כניסה: {props.entryDate.toLocaleDateString('he-IS' )}</div> 

        <div clase="parking">חניה:{props.isParking?"":"לא"} קיימת</div> 

 
         <div class="result-accordion-ad-1">
      1  </div>

        <div class="result-accordion-ad-2">
     2   </div>

        <div class="result-accordion-ad-3">
 3
        </div>
        </div>
    )
}
