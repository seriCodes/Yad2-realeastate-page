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
import header from './header.css'

// import SearchBar from './SearchBar'
// import {SearchBarHomeMade} from './SearchBarHomeMade'
// import {SearchBarHomeMadeV2} from './SearchBarHomeMadeV2'
// import {BoardsModal} from './BoardsModal'

 
 import { HeaderStyler } from './HeaderStyler';
 

// 
  

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

        var headerUpperRight = document.getElementById("header-Right"); 
        
        

        
//css malfunction-JS solves it
        if(isBigScreen){
          // alert("isBigScreen")
          ContainersStructureObj.flexRow(headerUpperRight,{justifyContent:"initial"})
        }else{ 
          ContainersStructureObj.flexRow(headerUpperRight,{justifyContent:"space-between"})
        } 
         var headLineTag = document.getElementById("logoButton"); 
        HeaderStylerObj.headLineStyler(headLineTag)
        
     })
    
    const screenSizeObj= new screenSize()
    const generalAlertObj= new generalAlert()

    const[isBigScreen,setisBigScreen]= useState(screenSizeObj.getWindowWidth(window.innerWidth))

 
    let reportWindowSize= ()=>{
       
        if(screenSizeObj.getWindowWidth(window.innerWidth)!=isBigScreen){ 
            setisBigScreen(screenSizeObj.getWindowWidth(window.innerWidth))
           
        }
     
    } 
    window.addEventListener('resize', reportWindowSize); 
 
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
 
 <Button class1="button flexRowSpaceAround" id="MenueBarContainer" callBack={(e)=>{
  ModalStylerObj.makeWindowShadedClickBlocker("userModal","user-modal","width0") 
  ModalStylerObj.toggleModal('userModal',"","user-modal")}}>

<div  >
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

          <div id="userIcon" class="header-icon"><span > &#128959;</span>
          </div>


                  </React.Fragment>
         
        )
 

   } else {

    screenRenderRight=(
        <React.Fragment> 
    <Button class1="button" id="MenueBarContainer" callBack={()=>{
  ModalStylerObj.makeWindowShadedClickBlocker("userModal","user-modal","width0") 
  ModalStylerObj.toggleModal('userModal',false,"user-modal")}}>
        <div  >
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
    return ( 
        <div   class="header-wrapper">
        
        <hr id="hrHeader"/>
    
        <div class="header">
        <div id="header-Upper" class="flexrowSpace-between">

        <div  class="flexRowSpaceAround" id="header-Upper-left">
        <Button class1="button newAdId" class2="Ad-hover" class3="greenButton"
        callBack={()=>generalAlertObj.buttonClicked("עמוד מודעה חדשה")}
           >  
        פרסום מודעה חדשה
        <span> &#43;</span>
           </Button> 
 
           {screenRenderLeft}
  
<div id="heartIcon" class="header-icon"><span >  &#x2661;</span>
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

 