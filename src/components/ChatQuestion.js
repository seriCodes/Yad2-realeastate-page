import React,{useEffect, useState} from 'react'
import ChatQuestions from './ChatQuestions.css'
// import {v1 as uuidv1} from "uuid";


export const ChatQuestion = () => {
    const [isContainerOpen,setContainerisContainerOpen]=useState(false)
    useEffect(()=>{
        let chatContainer= document.getElementsByClassName('float-chat-container')[0]
 
        let spanQuestion=document.getElementById("gotQuestion") 

if(isContainerOpen==true){
    chatContainer.classList.add("float-chat-container-expanded")
}

/////////

function handlerTransitionstart(){
    console.log(" transitionstart")

    spanQuestion.classList.remove("gotQuestion") 
}
        
chatContainer.addEventListener('transitionstart',handlerTransitionstart ); 
        ////////
        function handlerTransitionEnd(){
            console.log("  handlerTransitionEnd  ")

            spanQuestion.classList.add("gotQuestion") 
        }
                
chatContainer.addEventListener('transitionend',handlerTransitionEnd ); 
        ///////////
 let QAinput= document.getElementsByClassName("QAinput")[0]
 
 let commonQA= document.getElementById("commonQA") 
 
//  QAinput.onclick=()=>{
//  }

 function QAinputClicked(){
    console.log("QAinput.onclick")
    setContainerisContainerOpen(true)

    chatContainer.classList.add("makeChatHigher")

    commonQA.classList.add("common-QA-container")

 }
 QAinput.addEventListener('click',QAinputClicked ); 
    }) 

    const sizeHandler=(size,id)=>{
        let ele= document.getElementById(id) 

switch(size){
    case "expand": console.log("expand")

        break;

        case "minimize":
             console.log("minimize")
        ele.classList.remove("common-QA-container")

        break;
        case "close": 
        console.log("close")
        setContainerisContainerOpen(false)

        break;
        default: console.log("object")
}
    }

    
    return (
        <div  class="float-chat-container">
        <div class="float-chat-container-header">
        
        <span id="gotQuestion">יש לך שאלה?</span> 
       
        <span onClick={()=>{            sizeHandler("expand","commonQA" ) }}>big </span>
        <span onClick={()=>{            sizeHandler("minimize","commonQA" ) }}>small </span>
        <span onClick={()=>{            sizeHandler("close", "commonQA" ) }}>X </span>
    </div>
    <div class="float-chat-container-input"> 
    <input   class="QAinput" type="search" aria-label="הקלד את שאלתך כאן. לחץ על Enter כדי לחפש." placeholder="הקלד את שאלתך כאן" maxlength="250"/>
     </div>
 
     <div id="commonQA" class="displayNone  " >
     <h2>שאלות נפוצות</h2>
     <h1>TODO- PLEASE REFRESH TO CLOSE</h1>
     </div>

        </div>
    )
}
