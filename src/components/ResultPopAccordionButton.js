import React from 'react'
import {Button} from './common/Button'
import {ContainersStructure} from "./ContainersStructure";
import {v1 as uuidv1} from "uuid";
import {ModalStyler} from './ModalStyler'
import {AccordionHandler} from './AccordionHandler'


export const ResultPopAccordionButton = (props) => {
    const AccordionHandlerObj= new AccordionHandler()

let detailsId=uuidv1()
    const ContainersStructureObj= new ContainersStructure()
    const ModalStylerObj= new ModalStyler()
let componentWidth="9rem"
    
    React.useEffect(()=>{
        let ResultAccordionContact= document.getElementById(props.id)
        ContainersStructureObj.flexColumn(ResultAccordionContact,{display:"none",alignItems:"center",
        // userSelect:"none",
    })
    ContainersStructureObj.keyValueStyleMaker(ResultAccordionContact,{
        width:componentWidth,
    })

    //     


        let contactDetails= document.getElementById(detailsId)
        ContainersStructureObj.flexColumn(contactDetails,{display:"none",alignItems:"center",
       
    })

        ContainersStructureObj.keyValueStyleMaker(contactDetails,{
            // position:"fixed",
            // display: 'inline-block',
            // display: 'block',
            position: "absolute",
  "z-index": 1,
    "up":" 0px",

    width:componentWidth,

            // "Absolute",
            // 'fixed',
// "z-index":1,
backgroundColor:"#FFFFFF",
userSelect:"none",
"font-size":"18px",
"font-weight":"normal",
// "outline-style": "solid",
// "outline-width":'0.5px',
// "100%"

        })
    })
    
    

    return (
        <div id={props.id}>
        <Button class1="button" class2="greenButton" 
        callBack={()=>{
            AccordionHandlerObj.toggleAcorddion(detailsId,4,4)
            // ModalStylerObj.toggleModal(detailsId)
        }}
        id=""
        style={{  }}>  
            איש קשר
        </Button>
        <div id={detailsId}  >
        <div style={{outlineStyle : "solid",outlineWidth:'0.5px', width:"100%", height:"100%"}}>
    {props.owner}
        </div>
        <div style={{outlineStyle : "solid",outlineWidth:'0.5px', width:"100%", height:"100%"}}>
        {props.phoneNumber}
 
        </div>  
        </div>
        </div>
    )
}
