import React, {useEffect} from 'react'
import {v1 as uuidv1} from "uuid";
import {ModalHander} from './ModalHander'
import screenSize from '../responsive/screenSize'
import {ContainersStructure} from "./ContainersStructure";
import {ModalStyler} from './ModalStyler'
import {Button} from './common/Button'
import {ModalExit} from './common/ModalExit'

//   default React.memo( 

    export const ModalImagesSlides  =  (props) => {
  let idImg= uuidv1()
  let idModal= uuidv1()
   
  const ModalHanderObj= new ModalHander()
 
  const ModalStylerObj= new ModalStyler()

    // useEffect(()=>{    })
  
 
    
     return (
        <div class="shadower_images displayNone " name="shadower" id={props.id} onClick={(e)=>{
            ModalStylerObj.toggleModal(props.id,e, "shadower_images_opened","shadower_images_closed")
                    // alert('shadowerClicked')
                }}>
        <ModalExit id={props.id} openClass="shadower_images_opened" closeClass="shadower_images_closed"></ModalExit>

        <div name="modalImages" id={idModal} class="imagesSlide-wrraper" onClick={(e)=>{
            // alert('imagesSlideWrraper')
            e.stopPropagation()
        }}>

        <img id={idImg} class="image-slider-img" src={`${props.images[0]}`}  title={0} alt="" width='100%' height='80%' />

        <div   class ="flexRowSpaceAround">

        <Button class1="button" class2="arrowsImages" 
    callBack={()=>ModalHanderObj.slideImages(idImg, props.images, -1)}
   >  &#10094; </Button>

    <Button class1="button" class2="arrowsImages" 
    callBack={()=>ModalHanderObj.slideImages(idImg, props.images, 1)} 
 >   &#10095; </Button>
       
        </div>

        
      
       
          </div>

      
       
      
    

          </div>
    )
}
