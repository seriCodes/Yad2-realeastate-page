import React, {useState} from 'react'
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
import  {Redirect}  from "react-router-dom";
import  {useLocation,useHistory , useParams,useRouteMatch }  from "react-router";

let resultDiv
export const Results = (props) => {
    const [RedirectComponent,setRedirectComponent]=useState("")

    let resultId= uuidv1()
    let moreDetailsId= uuidv1()
    let resultImagesId= uuidv1()
    let ImagesModalId= uuidv1()
    let  resultDetailsAccordionId= uuidv1()
    let contactId= uuidv1()

    const ModalStylerObj= new ModalStyler()
    const AccordionHandlerObj= new AccordionHandler()

     const ContainersStructureObj= new ContainersStructure()

    
     
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
        ////////////////below code isn't in css b/c it's cross elemnts and specific styling  
        let result=document.getElementById(resultId);
        let moreDetailsElement=document.getElementById(moreDetailsId);
let accordionResult=document.getElementById(resultDetailsAccordionId); 
        result.addEventListener("mouseover",
        function( event ) { 
            if(accordionResult.style.display=="none"){
                // moreDetailsElement.style.visibility="visible"
                // moreDetailsElement.style.opacity=1
                moreDetailsElement.classList.add("more-details-mouse-hover")

            }



          }, false)

       
    
          result.addEventListener("mouseout",
        function( event ) { 
            moreDetailsElement.classList.remove("more-details-mouse-hover")

            // moreDetailsElement.style.visibility="hidden"

          }, false)
 
     
    
    },[ ]) 
 
  
let resultsCenterComponents;
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
    
    console.log(useLocation()) 
    let location=useLocation()
    let redirectToHomeDetailsSmallScreen;

    console.log('Display props.item')
    console.log(props.item)


    const singleComponentDisplay=()=>{
        console.log('singleComponentDisplay')
        console.log(props.item)
    
    // let item
 
        redirectToHomeDetailsSmallScreen=( 
                          <Redirect to={{ 
                pathname: `/homeDetails/${resultId}`,
                state: { 
                    ...props.item, 
                    ImagesModalId:ImagesModalId,
                    resultImagesId:resultImagesId,


                
                } , 

             }}/>
    
              
              )
               props.history.push(location.pathname)
              setRedirectComponent(redirectToHomeDetailsSmallScreen)

    
      
    
    
     
    }


    return (
        <div class="container-result-accordion" style={{  }}>

 
        {RedirectComponent}

        <div id={resultId} class ="result" onClick={(e)=>{
            console.log("result clicked")
            // e.stopPropagation()
            console.log('window.innerWidth Results ')
            console.log(window.innerWidth<895)


            if(window.innerWidth<895){

                singleComponentDisplay()
            }else{

                ModalStylerObj.toggleModal(contactId,e,"container_seller-details_visible","container_seller-details_Not_visible")

                let element= document.getElementById(resultDetailsAccordionId)
             //    console.log("element.style.display acc",element.style.display)
             //    console.log("element.style.display grid?",element.style.display==="grid")
             //    console.log("element.style.display none?",element.style.display==="none")
             //    console.log("element.style.display empty?",element.style.display==="")
     if(element.style.display=="grid" ){
         console.log("inside element.style.display==grid ",element.style.display)
     
     
         function handlerTransitionEnd () {
             console.log("transitionend")
     
             // element.classList.toggle("resultDetailsAccordion_displayNone")
             element.classList.add("resultDetailsAccordion_displayNone")
             element.style.display="none"
     
             
             element.removeEventListener("transitionend",  handlerTransitionEnd);     
           }
     
         element.addEventListener('transitionend',handlerTransitionEnd );  
         element.classList.add("closed-accordionHeightZero")
     
         //  element.style.height =0
     
     }else{
         console.log("element.style.display acc",element.style.display)
     
         // element.style.visibility= "hidden"
     
         element.style.display= "grid"
         // "grid"
         // "block"
         //
         element.classList.remove("resultDetailsAccordion_displayNone")
     
      setTimeout(function() {
         // element.style.visibility= "visible"
                 element.classList.remove("closed-accordionHeightZero");
                 // element.style.height = element.scrollHeight + "px";
     
                 // ModalStylerObj.toggleModal(contactId,e)
                 // clearTimeout(time);
     
               }, 10)
     
             }
            
            
            }
          

        //    element.style.display= element.style.display=="grid"? "none": "grid";
        //    setTimeout(function() {
        //     element.classList.toggle("resultDetailsAccordion");
        //   }, 10)

        //    element.classList.toggle("resultDetailsAccordion")
//  AccordionHandlerObj.toggleAcorddion( resultDetailsAccordionId,6,4,"grid")
            
// alert("result")
        }}>
        <div class ="result-left" >
        <div class ="price">
         ${props.price}
        <ResultPopAccordionButton id={contactId}
        phoneNumber={props["phone-number"]}
    owner={props["owner"]} ></ResultPopAccordionButton>
        </div>

        <div id={moreDetailsId} class="more-details-setting">עוד פרטים</div>

  
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
    )=> ModalStylerObj.toggleModal(ImagesModalId,"","shadower_images_opened","shadower_images_closed")
    // ModalStylerObj.displayModalState(document.getElementById(ImagesModalId),{display:"block"}
//  ,e)
//  
}> 
 <div id={resultImagesId} class ="result-right-right-Images"> 
  </div>
 </Button>
       <ModalImagesSlides id={ImagesModalId} images={props.images}></ModalImagesSlides>
        </div>
        </div>

        <ResultAccordion id={ resultDetailsAccordionId} description={props.description} entryDate={props.entryDate} isParking={props.isParking}></ResultAccordion>
      
        </div>
    )
}
