import React,{useEffect, useState} from 'react'
import ChatQuestions from './ChatQuestions.css'
// import {v1 as uuidv1} from "uuid";


export const ChatQuestion = () => {
    const [isContainerHovered,setContainerHovered]=useState(false)
    useEffect(()=>{
        let chatContainer= document.getElementsByClassName('float-chat-container')[0]
        let spanAnswer= document.getElementById("answer-headline-hover")

        chatContainer.addEventListener("mouseenter",
        function( event ) { 
            console.log("mouseenter chatContainer")

            // chatContainer.classList.add("more-details-mouse-hover")

            chatContainer.classList.add("makeChatWider")

           function handlerTransitionEnd(){
                console.log("mouseenter handlerTransitionEnd chatContainer")

 spanAnswer.classList.add("after-hover-display")
            
 chatContainer.removeEventListener("transitionend",  handlerTransitionEnd);     
            }
            
 chatContainer.addEventListener('transitionend',handlerTransitionEnd ); 
            
 function handlerTransitioncancel (){

 

    console.log("mouseenter handlerTransitioncancel chatContainer")
    chatContainer.classList.remove("makeChatWider")
    spanAnswer.classList.remove("after-mouseenter-display")

chatContainer.removeEventListener("transitioncancel",  handlerTransitioncancel);     
}

chatContainer.addEventListener('transitioncancel',handlerTransitioncancel ); 

     
        }, false)

            chatContainer.addEventListener("mouseleave",
            function( event ) { 

                console.log("mouseleave chatContainer")
                
                chatContainer.classList.remove("makeChatWider")

                // chatContainer.classList.remove("more-details-mouse-hover")
              
                spanAnswer.classList.remove("after-hover-display")

 
 
          }, false)



    })
    return (
        <div  class="float-chat-container">
        <div class="float-chat-container-header">
        
        <span>יש לך שאלה?</span> <span id="answer-headline-hover" class="displayNone ">תיק תק והתשובה אצלך!</span> 
       
        <span>big </span>
        <span>small </span>
        <span >X </span>
    </div>
    <div class="float-chat-container-input">

 הקלד שאלתך כאן.
 
 </div>
 
        </div>
    )
}
