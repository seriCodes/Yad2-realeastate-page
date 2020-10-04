import React, {useEffect, useState} from 'react'
import {Button} from "../common/Button";
import {ContainersStructure} from "../ContainersStructure";
import {CircleIconButtons} from "../common/CircleIconButtons";
import {v1 as uuidv1} from "uuid";
import  './footerCss.css';
 

export const FooterShares = () => {

    const ContainersStructureObj= new ContainersStructure()
    useEffect(()=>{ 

        let FooterShares= document.getElementById("FooterShares")
 
        FooterShares= document.getElementById("scrollUpArrow")
        ContainersStructureObj.keyValueStyleMaker( FooterShares,{
            "border-style":"solid",
            "border-color": "white",
            "border-width": "0.15px",
             background: "#606060",
             color: "white",
             cursor: "pointer",
             "border-radius": "50%",
             width: "3.5rem",
              height: "3.5rem",
            
            //  display: "flex",
            //  "justify-content": "space-around",
            //  "align-items": "center",
             'fontSize':"25px",

                })

    }) 
    //     <div class="FooterShares flexColumn-align-center" id="FooterShares"> </div>
    return (
    <> 
 
        {
            //  
                }
 <div id="Social-Media-Container" 
 class="flexRowSpaceAround"
 >
 
 <div id="scrollUpArrow" class="">
 <i class="fa fa-arrow-up" aria-hidden="true" onClick={()=>{
       window.scrollTo({top: 0, behavior: 'smooth'});

 }}></i>
 </div> 

 {
    [{icon:'<span href="#" class="fa fa-instagram"></span>',text:' ',
},
{icon:' <span href="#" class="fa fa-facebook"></span>',text:' ',
},
 
{icon:'<span href="#" class="fa fa-twitter"></span>',text:' ',
},
{icon:'<span href="#" class="fa fa-google"></a></span>',text:' ',
}, 
].map((value,index)=>{
       return <CircleIconButtons background={'#606060'} id={uuidv1()} icon={value.icon} text={value.text}></CircleIconButtons>
    })

} 
    </div>
        
    <p id="CC"><b>
         © 2020 כל הזכויות שמורות סער סרי- תלפיות הייטק
         </b></p>

         </>
    )
}


// <div class="circle-Button ">
//  <a href="#" class="fa fa-instagram"></a> 
//  </div> 

//  <div class="circle-Button">
//  <a href="#" class="fa fa-facebook"></a>
//  </div> 
//  <div class="circle-Button">
//  <a href="#" class="fa fa-twitter"></a>
//  </div> 
//  <div class="circle-Button">
//  <a href="#" class="fa fa-google"></a>
//  </div>  