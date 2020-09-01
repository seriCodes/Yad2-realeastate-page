import React, {useState, useEffect} from 'react'
import {ModalStyler} from './ModalStyler'
import screenSize from '../responsive/screenSize'
import {UserButton} from './common/UserButton'
import {CircleIconButtons} from './common/CircleIconButtons'
import {ContainersStructure} from "./ContainersStructure";
import {Button} from './common/Button'
import {ModalExitWithSeperateShadedDiv} from './common/ModalExitWithSeperateShadedDiv'

import generalAlert from './buttonsAlert/generalAlert'
import {addEventListenerAttacher} from "./addEventListenerAttacher";
import {v1 as uuidv1} from "uuid";

export const ModalUser = (props) => {
    const screenSizeObj= new screenSize()
    const ContainersStructureObj= new ContainersStructure()
    const[windowWidthState,setwindowWidthState]= useState(screenSizeObj.getWindowWidthbreakpoints(window.innerWidth))

    // const[displayState,setDisplayState]= useState("none")

    const ModalStylerObj= new ModalStyler()
    const generalAlertObj= new generalAlert()
    const addEventListenerAttacherObj= new addEventListenerAttacher()



    React.useEffect(() => {
 
        var modalUserFooterTag = document.getElementById('modalUserFooter');
        var userWelcome = document.getElementById('user-welcome');
        var userModalAddAd = document.getElementById('newAdId-UserModal');
        var userSurfDataTag = document.getElementById('userSurfData');
        var modalUserSearchTopicsDiv = document.getElementById('modalUserSearchTopics');

        var modalUserMainSearchDiv = document.getElementById('modalUserMainSearch');
        ContainersStructureObj.flexColumn(modalUserMainSearchDiv,{alignItems:"end", })
        var modalUserExtraSearchDiv = document.getElementById('modalUserExtraSearch');
        ContainersStructureObj.flexColumn(modalUserExtraSearchDiv,{alignItems:"end", })
        ContainersStructureObj.flexColumn(modalUserSearchTopicsDiv,{alignItems:"center"} )
        
        ContainersStructureObj.keyValueStyleMaker(modalUserSearchTopicsDiv,{
            // 'margin-top':"1rem",
            // 'marginBottom':"1rem",
            // "paddingTop":"1.5rem",
               paddingBottom:"0.5rem",
               paddingLeft:"1rem",
               paddingRight: "2rem",
            "backgroundColor":"#f9f9f9", 
            // 'borderRadius':"16px",
            // "fontSize":"1.5rem",
            // "fontWeight":"bold",
            // "color":"white", 
            // 'width':"45%",
            // "height":"",
            }  )

            let SearchTopics= modalUserSearchTopicsDiv.childNodes;
            console.log("SearchTopics",SearchTopics)

            SearchTopics.forEach((node)=>{
                console.log("node",node)
                ContainersStructureObj.keyValueStyleMaker(node, { 
                    // "align-items":"end",           
                    'width':"100%", 
                    'margin-top':"1rem",
    })
    let innerTopicSearches=node.childNodes

    if(innerTopicSearches){
        innerTopicSearches.forEach((node)=>{
            ContainersStructureObj.keyValueStyleMaker(node, { 
                // "align-items":"end",           
                // 'width':"100%", 
                'margin-top':"1rem",
                fontSize:'1.5rem', fontWeight:"bold",
        })

        })   
     }
            })

// for (const searches in SearchTopics) { 
//     console.log("searches",searches)

//     // ContainersStructureObj.keyValueStyleMaker(searches, {            'width':"100%", 
//     // }) 
// }
        ContainersStructureObj.flexRow(userSurfDataTag,{justifyContent:"space-around"})
        ContainersStructureObj.flexRow(modalUserFooterTag,{
            justifyContent:"space-around",

})

ContainersStructureObj.keyValueStyleMaker(modalUserFooterTag,{
marginBottom:"1.6rem",
marginTop:"1.6rem"
})



         
        
        
        ContainersStructureObj.keyValueStyleMaker(userModalAddAd, {
            'margin-top':"1rem",
            'marginBottom':"1rem",
            "paddingTop":"0.5rem",
               paddingBottom:"0.5rem",
               paddingLeft:"1rem",
               paddingRight: "1rem",
            "backgroundColor":"rgba(15, 202, 128,1)", 
            'borderRadius':"16px",
            "fontSize":"1.5rem",
            "fontWeight":"bold",
            "color":"white", 
            'width':"45%",
            "height":"",
            } ) 
        ContainersStructureObj.keyValueStyleMaker(userWelcome,{marginTop:"20px"})
        ContainersStructureObj.flexColumn(userWelcome,{alignItems:"center"} )
        var modalContainer = document.getElementById(props.id);

 let display= modalContainer.style.display
 if(display!=="block"){
    ModalStylerObj.displayModalState(modalContainer,{ })
}

        ModalStylerObj.BasicStyle(modalContainer,{top:0,right:0,position:"fixed",
        backgroundColor:"#fff",
        // display:displayState,
    })  

        ContainersStructureObj.keyValueStyleMaker(modalContainer,{"direction":"rtl",
    // overflow: 'hidden',
    "overflow-y":"scroll",
    // 'scrollbar-width': 'none',

 })

 
        let modalSize; 
        switch(windowWidthState){
case 'Small':
    modalSize='90%'
    break
    case 'Medium':
        modalSize='50%'

    break;

    case 'Large':
        modalSize="33%"

    break;
    default: 
        }
        console.log('modalSize',modalSize)

        ModalStylerObj.modalSize(modalContainer,"100%",modalSize ) ;

        addEventListenerAttacherObj.mouseover(userModalAddAd,{red:15, green:202, blue:128,opacity:0.66})

        addEventListenerAttacherObj.mouseout(userModalAddAd,{red:15, green:202, blue:128,opacity:1}) 
     })
    
    //  HeaderStylerObj.newAdButtonStyler(newAdButton,{})
     let reportWindowSize= ()=>{
        // console.log(window.innerWidth) 
        if(screenSizeObj.getWindowWidthbreakpoints(window.innerWidth)!=windowWidthState){
             setwindowWidthState(screenSizeObj.getWindowWidthbreakpoints(window.innerWidth))
            
             console.log("getWindowWidthbreakpoints",screenSizeObj.getWindowWidthbreakpoints(window.innerWidth))
        }
     } 
     window.addEventListener('resize',
     reportWindowSize )
   

    return (
        <div id={props.id} class="user-modal">

        <ModalExitWithSeperateShadedDiv id={props.id}></ModalExitWithSeperateShadedDiv>
        

        <div id="Modal-user-top">
    <div id='user-welcome'>
<UserButton name="Saar"></UserButton>
<Button class1="button" class2="Ad-hover" 
callBack={()=>generalAlertObj.buttonClicked("עמוד מודעה חדשה")}
id="newAdId-UserModal">  
פרסום מודעה
    </Button> 

</div>
<div id='userSurfData'>

<Button class1="button" class2="Ad-hover" 
callBack={()=>generalAlertObj.buttonClicked("עמוד השוואת רכבים")}
id="">  
<div>&#8596;</div>
<div>השוואת רכבים</div>

     </Button> 
    <Button class1="button" class2="Ad-hover" 
callBack={()=>generalAlertObj.buttonClicked("עמוד חיפושים אחרונים")}
id="">  
<div>&#8596;</div>
<div>עמוד חיפושים אחרונים  </div>
  </Button>
    <Button class1="button" class2="Ad-hover" 
callBack={()=>generalAlertObj.buttonClicked("עמוד מודעות שמורות")}
id="">  
<div>&#8596;</div>
<div>מודעות שמורות  </div>
    </Button>
    <Button class1="button" class2="Ad-hover" 
callBack={()=>generalAlertObj.buttonClicked("עמוד התראות שלי")}
id="">  
<div>&#8596;</div>
<div>התראות שלי  </div>
    </Button>
</div>
</div>

<div id='modalUserSearchTopics'>
<div id="modalUserMainSearch">
<div class="modalUserSearchHeadline">
מה תרצו לחפש?
    </div>

    <Button class1="button" class2="Ad-hover" 
callBack={()=>generalAlertObj.buttonClicked('עמוד נדל"ן')}
id=" ">  
נדל"ן
 </Button> 

 <Button class1="button" class2="Ad-hover" 
 callBack={()=>generalAlertObj.buttonClicked('עמוד רכב')}
 id=" ">  
 רכב
  </Button> 
  
  </div>
  <div id="modalUserExtraSearch">
 
  <div class="modalUserSearchHeadline">
קטגוריות נוספות      </div>
<Button class1="button" class2="Ad-hover" 
callBack={()=>generalAlertObj.buttonClicked('עמוד מחירון רכב')}
id=" ">  
מחירון רכב
 </Button> 
 <Button class1="button" class2="Ad-hover" 
 callBack={()=>generalAlertObj.buttonClicked('עמוד כונס רכב')}
 id=" ">  
 כונס רכב
  </Button>
  <Button class1="button" class2="Ad-hover" 
  callBack={()=>generalAlertObj.buttonClicked('עמוד תיירות ונופש')}
  id=" ">  
  תיירות ונופש
   </Button>
   <Button class1="button" class2="Ad-hover" 
  callBack={()=>generalAlertObj.buttonClicked('עמוד בעלי מקצוע')}
  id=" ">  
  בעלי מקצוע
   </Button> 
   <Button class1="button" class2="Ad-hover" 
  callBack={()=>generalAlertObj.buttonClicked('עמוד לימודים')}
  id=" ">  
  לימודים
   </Button>   
   <Button class1="button" class2="Ad-hover" 
  callBack={()=>generalAlertObj.buttonClicked('עמוד מדד הנדל"ן')}
  id=" ">  
  מדד הנדל"ן
   </Button> 
   <Button class1="button" class2="Ad-hover" 
   callBack={()=>generalAlertObj.buttonClicked('עמוד מגזין תלפיות הייטק')}
   id=" ">  
מגזין תלפיות הייטק    </Button>
</div>
 
</div>
<div id='modalUserFooter'>
{
    [{icon:"&#9998;",text:'תקנון',
},
{icon:"&#63;",text:'מענה לשאלות',
},
 
{icon:"&#x260E;",text:'צור קשר',
}].map((value,index)=>{
       return <CircleIconButtons background={"rgb(245, 241, 191)"} id={uuidv1()} icon={value.icon} text={value.text}></CircleIconButtons>
    })

}
    </div>


        </div>
    )
}
