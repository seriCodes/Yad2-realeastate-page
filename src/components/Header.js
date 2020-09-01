import React, {useState, useEffect} from 'react'
import {Button} from './common/Button'
import {UserButton} from './common/UserButton'
import {StyleAbstractions} from "./StyleAbstractions";
import {ContainersStructure} from "./ContainersStructure";
import {TextStyler} from "./TextStyler";
import {addEventListenerAttacher} from "./addEventListenerAttacher";
import {ModalHander} from "./ModalHander";

import screenSize from '../responsive/screenSize'
// import {BarsMenue} from './BarsMenue'
import generalAlert from './buttonsAlert/generalAlert'
import {ModalStyler} from './ModalStyler'

// import SearchBar from './SearchBar'
// import {SearchBarHomeMade} from './SearchBarHomeMade'
// import {SearchBarHomeMadeV2} from './SearchBarHomeMadeV2'
// import {BoardsModal} from './BoardsModal'

// import HomeWork from '@material-ui/icons/HomeWork';
 import { HeaderStyler } from './HeaderStyler';
 

// 
// import AddIcon from '@material-ui/icons/Add';
 

// <i class="fas fa-search"></i> 
 
 
 const Header = (props) => {
    const ModalStylerObj= new ModalStyler()

    const HeaderStylerObj= new HeaderStyler()
    const ContainersStructureObj= new ContainersStructure()
    const TextStylerObj= new TextStyler()
     const addEventListenerAttacherObj= new addEventListenerAttacher()

     const ModalHanderObj= new ModalHander()


    const abstractsStylerObj= new StyleAbstractions()
    useEffect(()=>{
      // screenRenderRight-smallScreen 
      var headerWrapper = document.getElementById("header-wrapper"); 
      ContainersStructureObj.keyValueStyleMaker(headerWrapper,{
        "border-bottom":"1px solid #eee" 
      })

      var screenRenderRightSmallScreenTag = document.getElementById("screenRenderRight-smallScreen"); 

      var MenueBarContainerTag = document.getElementById("MenueBarContainer"); 

      TextStylerObj.textStyling(MenueBarContainerTag,{fontSize:'2.5rem', fontWeight:"bold",color:"",pointerEvents:"all",userSelect:"none"})

      var heartIconTag = document.getElementById("heartIcon"); 

      var userIconTag = document.getElementById("userIcon"); 

      ContainersStructureObj.flexRow(MenueBarContainerTag, {justifyContent:"initial"})
      ContainersStructureObj.relativeSize(MenueBarContainerTag,{height:"100%",width:"30%"})
      ContainersStructureObj.innerElementsOrder(MenueBarContainerTag,{})
      ContainersStructureObj.padding(MenueBarContainerTag,{right:"1rem"})

      var barsContainerTag = document.getElementById("barsContainer"); 
      ContainersStructureObj.padding(barsContainerTag,{left:"1rem"})

        var headerUpperLeft = document.getElementById("header-Left"); 

        var headerUpperRight = document.getElementById("header-Right"); 
        ContainersStructureObj.flexRow(headerUpperLeft, {justifyContent:"initial"})
      

        ContainersStructureObj.flexRow(headerUpperLeft,{justifyContent:"initial"})

         ContainersStructureObj.relativeSize(headerUpperRight,{width:"50%"})
        ContainersStructureObj.directionContainer(headerUpperRight,{direction:"RTL"})

        

        if(isBigScreen){
          // alert("isBigScreen")
          ContainersStructureObj.flexRow(headerUpperRight,{justifyContent:"initial"})
        }else{ 
          ContainersStructureObj.flexRow(headerUpperRight,{justifyContent:"space-between"})
        }
        var newAdButton = document.getElementById("newAdId"); 
        
        var headerTag = document.getElementById("header"); 

        var headerUpperTag = document.getElementById("header-Upper"); 
        ContainersStructureObj.flexRow(headerUpperTag,{justifyContent:"space-between"})
        var headerBottomTag = document.getElementById("header-Bottom"); 
        var headLineTag = document.getElementById("logoButton"); 
        HeaderStylerObj.headLineStyler(headLineTag)
  // ContainersStructureObj.relativeSize(headLineTag,{height:"100%",width:"100%"})
        var headerHr = document.getElementById("hrHeader");
/////Modals




//////////icons buttons styling
let tags= [heartIconTag,userIconTag]

for (let index = 0; index < tags.length; index++) {
  const element = tags[index];
  if(!element){
continue
  }
       
  addEventListenerAttacherObj.mouseover(element,{red:20, green:20, blue:20,opacity:0.1})

  addEventListenerAttacherObj.mouseout(element,{red:0, green:0, blue:0,opacity:0}) 
  
  TextStylerObj.textStyling(element,{fontSize:'3.5rem', fontWeight:"bold",color:"",pointerEvents:"all",userSelect:"none"})


}



     
addEventListenerAttacherObj.mouseover(newAdButton,{red:15, green:202, blue:128,opacity:0.66})

addEventListenerAttacherObj.mouseout(newAdButton,{red:15, green:202, blue:128,opacity:1}) 
ContainersStructureObj.keyValueStyleMaker(newAdButton,   {
  'marginBottom':"1rem",
  'borderRadius':"16px",

} ) 

        /////////////////////
   
        ////dev////
        // ContainersStructureObj.makeDevelopmentBorder1(newAdButton)

        // ContainersStructureObj.makeDevelopmentBorder1(headerUpperLeft)
        // ContainersStructureObj.makeDevelopmentBorder2(headerUpperRight)
        // ContainersStructureObj.makeDevelopmentBorder2(headerBottomTag)
        // ContainersStructureObj.makeDevelopmentBorder2(heartIconTag)
        // ContainersStructureObj.makeDevelopmentBorder2(MenueBarContainerTag)

        
        ///////////////////////////////


/////////// 
         HeaderStylerObj.headerStyler(headerUpperTag,{})

        ContainersStructureObj.keyValueStyleMaker(headerTag,{...abstractsStylerObj.headerButtonsContainer(),
          
        
        })

        
     
      console.log("abstractsStylerObj.headerHrStyler()",abstractsStylerObj.headerHrStyler()) 
      HeaderStylerObj.hrStyler(headerHr,abstractsStylerObj.headerHrStyler())

     })
    
    const screenSizeObj= new screenSize()
    const generalAlertObj= new generalAlert()

    const[isBigScreen,setisBigScreen]= useState(screenSizeObj.getWindowWidth(window.innerWidth))

    // const callBackButton = (linkText)=>{   
    //     screenSize.linkClicked(linkText)
    // }
    // let isBigScreen=screenSize.getWindowWidth(window.innerWidth);
    let reportWindowSize= ()=>{
        // console.log(window.innerWidth) 
        if(screenSizeObj.getWindowWidth(window.innerWidth)!=isBigScreen){
            // console.log('change', isBigScreen)
            setisBigScreen(screenSizeObj.getWindowWidth(window.innerWidth))
           
        }
    // console.log(isBigScreen)
    } 
    window.addEventListener('resize', reportWindowSize); 

    //  <span id= "headline">sdsssssssssssssssssspan</span>
  let screenRenderRight;
  let screenRenderLeft;

  let Yad2Logo =  
  (
    <React.Fragment> 

    <Button class1="button" class2=" " 
    callBack={()=>generalAlertObj.buttonClicked("דף הבית")}
    id="logoButton"
    style={{  }}>     
    </Button> 
 
</React.Fragment>
)

  if (isBigScreen) {
    screenRenderRight=(
        <React.Fragment> 


 {Yad2Logo}
 
 <Button class1="button" id="MenueBarContainer" callBack={(e)=>{
  ModalStylerObj.makeWindowShadedClickBlocker("userModal")
  ModalStylerObj.toggleModal('userModal')}}>

<div id="barsContainer">
 <div class="bar1"></div>
 <div class="bar2"></div>
 <div class="bar3"></div>
 </div>
 <span >תפריט</span>
</Button>
        </React.Fragment>
        )
        screenRenderLeft=(
          <React.Fragment> 

          <div id="userIcon"><span > &#128959;</span>
          </div>


                  </React.Fragment>
         
        )
    //         <div class="screenRenderRight-smallScreen"> </div>


   } else {

    screenRenderRight=(
        <React.Fragment> 
    <Button class1="button" id="MenueBarContainer" callBack={()=>{
  ModalStylerObj.makeWindowShadedClickBlocker("userModal")
  ModalStylerObj.toggleModal('userModal')}}>
        <div id="barsContainer">
         <div class="bar1"></div>
         <div class="bar2"></div>
         <div class="bar3"></div>
         
       </div>
       </Button>

       {Yad2Logo}
        </React.Fragment>
    )
        screenRenderLeft=(
          <React.Fragment> 


                  </React.Fragment>

    )
  }

  //        <div id="header-Upper">   </div>

    return (
 
        <div id="header-wrapper" class="header-wrapper">
        
        <hr id="hrHeader"/>
        <div id="header">
        <div id="header-Upper">

        <div id="header-Left">
        <Button class1="button" class2="Ad-hover" class3="greenButton"
        callBack={()=>generalAlertObj.buttonClicked("עמוד מודעה חדשה")}
        id="newAdId">  
        פרסום מודעה חדשה
        <span> &#43;</span>
           </Button> 
 
           {screenRenderLeft}
  
<div id="heartIcon"><span >  &#x2661;</span>
</div>
           

          

         </div>
        

         <div id="header-Right">
         {screenRenderRight}

 
 
         

         </div>
      

        </div>
 
        <div id="header-Bottom">
         
        </div>
        </div>

      
            </div>
            
  

 
    )
}
export default (Header);




// TextStylerObj.textStyling(MenueBarContainer,{fontSize:'3.5rem', fontWeight:"bold",color:"",pointerEvents:"all",userSelect:"none"})