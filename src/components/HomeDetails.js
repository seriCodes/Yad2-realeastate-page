import React, {useEffect} from 'react'
import  {useLocation,useHistory , useParams,useRouteMatch }  from "react-router";
import  {Redirect}  from "react-router-dom";
import {ModalImagesSlides} from './ModalImagesSlides'
import {ModalStyler} from './ModalStyler'
import {Button} from './common/Button'
import {ContainersStructure} from "./ContainersStructure";
import {v1 as uuidv1} from "uuid";
import MainContentCSS from "./MainContentCSS.css";


export const HomeDetails = ( props ) => {
    let resultImagesId= uuidv1()

    const ModalStylerObj= new ModalStyler()
    let homeDetails=useLocation().state

    // let imageDiv= document.getElementById(homeDetails.resultImagesId)

    const ContainersStructureObj= new ContainersStructure()
    useEffect(()=>{
        let imageDiv= document.getElementById( resultImagesId)
        ContainersStructureObj.keyValueStyleMaker(imageDiv,{
            "background-image":`url(${homeDetails.images[0]})`, 
            'background-repeat': 'no-repeat', 
            "background-size": "cover",  
            "height":'5rem',
            "width":'100%', 
 })

    })


    console.log('useLocation() HomeDetails') 

    console.log(useLocation()) 
console.log("HomeDetails useLocation().state",homeDetails) 

 console.log('props HomeDetails')

console.log(props)



//     <ModalImagesSlides id={props.ImagesModalId} images={props.images}></ModalImagesSlides>


// 
    return ( 
        <div id="" class="container-smallScreen-HomeDetails" 
        style={{}}
        > 
        
 <Button class1="buttonSmallImages" callBack={
    (
       //  e    
   )=> ModalStylerObj.toggleModal(homeDetails.ImagesModalId,"","shadower_images_opened","shadower_images_closed")
 }> 
<div id= {resultImagesId}  class ="result-right-right-Images">  
 </div>

</Button>
 
        <ModalImagesSlides id={homeDetails.ImagesModalId} images={homeDetails.images}></ModalImagesSlides>

        <div class="propertyDescription">
        <h3> תיאור הנכס</h3>
        
        <div>{homeDetails.description} </div> 
        
        </div> 
        <div clase="parking"><h3>חניה</h3>{homeDetails.isParking?"":"לא"} קיימת</div> 

        <div clase="entry-date"><h3>{homeDetails.entryDate.toLocaleDateString('he-IS' )} תאריך כניסה</h3> {
// 
        }</div> 
 
      
        </div>
      
    )
}
 