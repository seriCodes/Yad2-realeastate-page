import React from 'react'
import {Button} from './common/Button'
// import header from '../JScode/header'
import {ContainersStructure} from "./ContainersStructure";
import {CircleIconButtons} from './common/CircleIconButtons'
import {addEventListenerAttacher} from "./addEventListenerAttacher";
import screenSize from '../responsive/screenSize'
import generalAlert from './buttonsAlert/generalAlert'
import {v1 as uuidv1} from "uuid";
import {ModalHander} from './ModalHander'
import {ModalImagesSlides} from './ModalImagesSlides'
import {ModalStyler} from './ModalStyler'
import {ResultAccordion} from './ResultAccordion'
import {AccordionHandler} from './AccordionHandler'
import {ResultPopAccordionButton} from './ResultPopAccordionButton'

let resultDiv
export const Results = (props) => {
    let resultId= uuidv1()
    let resultImagesId= uuidv1()
    let ImagesModalId= uuidv1()
    let resultDetailsAccordion= uuidv1()
    let contactId= uuidv1()

    const ModalStylerObj= new ModalStyler()
    const AccordionHandlerObj= new AccordionHandler()

    const screenSizeObj= new screenSize()
    const ModalHanderObj= new ModalHander()
    const ContainersStructureObj= new ContainersStructure()

    

    const[isBigScreen,setisBigScreen]=React.useState(screenSizeObj.getWindowWidth(window.innerWidth))
   React.useEffect(()=>{
        let imageDiv= document.getElementById(resultImagesId)
        // ContainersStructureObj.makeDevelopmentBorder1(imageDiv)
        ContainersStructureObj.keyValueStyleMaker(imageDiv,{
            "background-image":`url(${props.images[0]})`,
           
            'background-repeat': 'no-repeat', 
            "background-size": "cover", 
            "height":'100%',
            "width":'100%',

        })
        
    },[ ])


    // const callBackButton = (linkText)=>{   
    //     headerObj.linkClicked(linkText)
    // }
    // let isBigScreen=headerObj.getWindowWidth(window.innerWidth);
    let reportWindowSize= ()=>{
 
        if(screenSizeObj.getWindowWidth(window.innerWidth)!=isBigScreen){
             setisBigScreen(screenSizeObj.getWindowWidth(window.innerWidth)) 
        } 
    }
    window.addEventListener('resize', reportWindowSize);  
 
let resultsCenterComponents;
// if(isBigScreen){   
    resultsCenterComponents=(
        <React.Fragment>
        <div class="result-Center-wrapper">
        <div class="result-Center-Left-bottom">
        <div>{props.size}</div>
    <div class="opacity-text">מ"ר</div>  
                       </div>
       <div class="result-Center-Center-up">
       <div>{props.floor}</div>

       <div class="opacity-text">קומה</div>  

       </div>
       <div class="result-Center-right-up">
       <div>{props.rooms}</div>

       <div class="opacity-text">חדרים</div>  
       </div> 
  </div> 
   </React.Fragment>
    )
// }else{
//     resultsCenterComponents=(
//         <React.Fragment>
//         <div class="result-Center-Right-up">
//         <div class="result-headline">  
//         <h3> {props.headline}</h3>      
       
//         {props.headline} </div> 
//         <div class="result-rating">
//         { starsArray  } 
//      </div>
//      <section class="logistics">
//         <div class="result-departue">
//         <span class="hour"> {props.departueHour} | </span>
//         <span class="date"> {props.departureDate}</span>
//         <span class="sub-headline"> :יציאה</span>
//   </div>
  
//         <div class="result-arrival">
//         <span class="hour"> {props.arrivalHour} | </span>
//         <span class="date">{props.arrivalDate}</span>

//         <span class="sub-headline"> :חזרה </span>
//          </div>
//          </section>
//          <div class="result-nights-rooms-breakfast">
//          {props.nights}  |{props.isBreakfast} 
//          </div>
 

            
//           </div> 
//            <div class="result-Center-Left-bottom">
//            <Button callBack={()=>generalAlertObj.linkClicked("הצג חבילות נוספות למלון זה")}
//            class1={"more-hotel-packeges"}
//            >הצג חבילות נוספות למלון זה</Button>
//         </div> 
//           </React.Fragment>
//     )
// }    

    return (
        <div>
        <div id={resultId} class ="result" onClick={(e)=>{
            AccordionHandlerObj.toggleAcorddion(resultDetailsAccordion,6,4)
            ModalStylerObj.toggleModal(contactId,e)
// alert("result")
        }}>
        <div class ="result-left">
        <div class ="price">
     
         ${props.price}
  
        <ResultPopAccordionButton id={contactId}
        phoneNumber={props["phone-number"]}
    owner={props["owner"]} ></ResultPopAccordionButton>
        </div>
       
  
        </div>
        <div class ="result-center">
{resultsCenterComponents}  
        </div>
        <div class ="result-right">
        <div class ="result-right-left" style={{
            // 'direction':"rtl",
        // borderStyle:"groove",
        // borderColor: "purple",
        // borderWidth: "6px", 
    }
    }>
        <div class ="adress" style={{
        //     'direction':"rtl",
        // borderStyle:"groove",
        // borderColor: "oink",
        // borderWidth: "6px", 
    // textAlign:"right"
}
    }>
{ props.address}        </div>
<div class ="sub-address opacity-text" style={{
//     'direction':"rtl",
// borderStyle:"groove",
// borderColor: "oink",
// borderWidth: "6px", 
}}>
{ props["sub-address"]}        </div>       
 </div>


 <Button class1="buttonSmallImages" callBack={
     (
        //  e    
    )=> ModalStylerObj.displayModalState(document.getElementById(ImagesModalId),{display:"block"}
//  ,e
 )}> 
 <div id={resultImagesId} class ="result-right-right-Images"> 
  </div>
 </Button>
       <ModalImagesSlides id={ImagesModalId} images={props.images}></ModalImagesSlides>
        </div>

        </div>

        <ResultAccordion id={resultDetailsAccordion} description={props.description} entryDate={props.entryDate} isParking={props.isParking}></ResultAccordion>
        </div>
    )
}
