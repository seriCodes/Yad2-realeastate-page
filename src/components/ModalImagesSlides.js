import React, {useEffect} from 'react'
import {v1 as uuidv1} from "uuid";
import {ModalHander} from './ModalHander'
import screenSize from '../responsive/screenSize'
import {ContainersStructure} from "./ContainersStructure";
import {ModalStyler} from './ModalStyler'
import {Button} from './common/Button'
import {ModalExit} from './common/ModalExit'

export const ModalImagesSlides = (props) => {
  let idImg= uuidv1()
  let idModal= uuidv1()
  let idModalArrows= uuidv1()

  const screenSizeObj= new screenSize()
  const ModalHanderObj= new ModalHander()
  const ContainersStructureObj= new ContainersStructure()
  const ModalStylerObj= new ModalStyler()

    useEffect(()=>{
        let imagesDiv= document.getElementById(props.id)
        let imageTag= document.getElementById(idImg)
        let modalImages= document.getElementById(idModal)
        let modalArrows= document.getElementById(idModalArrows)

        ContainersStructureObj.flexRow(modalArrows,{justifyContent:"space-around"})
        
        ContainersStructureObj.keyValueStyleMaker(imageTag,{
            'userSelect':"none", 

        })
        

        // ContainersStructureObj.makeDevelopmentBorder1(imagesDiv)
        ModalStylerObj.displayModalState(imagesDiv,{})

        ContainersStructureObj.keyValueStyleMaker(imagesDiv,{position:"fixed",left: 0,
        top: 0, 
        width:"100%",
        height: "100%",
        'background-color': '#373737',
        // 
    })

         
        ContainersStructureObj.keyValueStyleMaker(modalImages,{ 
            position:"fixed",left: "20%",
        top: "10%", 
        width:"60%",
        height: "65%",
        'background-color':'#373737',
        // '#373737',
        border:' 1px solid #888',
        "border-radius":"8px",

    padding:"8px 8px 8px 8px "
        })

    })
  
 
    
     return (
        <div name="shadower" id={props.id} onClick={(e)=>{
            ModalStylerObj.toggleModal(props.id,e)
                    // alert('shadowerClicked')
                }}>
        <ModalExit id={props.id}></ModalExit>

        <div name="modalImages" id={idModal} class="imagesSlideWrraper" onClick={(e)=>{
            // alert('imagesSlideWrraper')
            e.stopPropagation()
        }}>

        <img id={idImg} src={`${props.images[0]}`}  title={0} alt="" width='100%' height='80%' style={{"pointer-events":"none"}}/>

        <div id={idModalArrows} class ="slide-arrows">
        <Button class1="button" class2="arrowsImages" 
    callBack={()=>ModalHanderObj.slideImages(idImg, props.images, -1)}
    id="logoButton"
    style={{  }}>  &#10094; </Button>
    <Button class1="button" class2="arrowsImages" 
    callBack={()=>ModalHanderObj.slideImages(idImg, props.images, 1)}
    id="logoButton"
    style={{  }}>   &#10095; </Button>
       
        </div>

        
      
       
          </div>

      
       
      
    

          </div>
    )
}
