import React , {useState} from 'react';
import Header from './Header';  
import {AppContainerStyler} from './AppContainerStyler';  
 import {generalStyle} from './generalStyle.css';  
 import {EmptyLayoutContainer} from "../components/common/EmptyLayoutContainer";
 import {ContainersStructure} from "./ContainersStructure";
 import {MainContent} from "./MainContent";

 import screenSize from '../responsive/screenSize'
 import {FooterContainer} from './Footer/FooterContainer'
 import {StickyPicture} from './common/StickyPicture'
 import {v1 as uuidv1} from "uuid";



function AppContainer(props) {
    const screenSizeObj= new screenSize()

    const[isBigScreen,setisBigScreen]= useState(screenSizeObj.getWindowWidth(window.innerWidth))
   
    // const[newRender,setNewRender]= useState(true)
  
    


    const ContainersStructureObj= new ContainersStructure()

    const AppContainerStylerObj= new AppContainerStyler()
    React.useEffect(() => {
let mainArea= document.getElementById("main-area-container")
let contentWrapperTag = document.getElementById("content-wrapper")

// content-wrapper let body= document.getRootNode("body")
AppContainerStylerObj.setBody(document.body)
AppContainerStylerObj.basic(mainArea)
ContainersStructureObj.keyValueStyleMaker(mainArea,{
"background-color":"#ededed",
    "min-height":"30rem",
})
ContainersStructureObj.flexRow(mainArea,{})
let footerArea= document.getElementById("footer-area-container")

AppContainerStylerObj.basic(footerArea)

ContainersStructureObj.flexRow(footerArea,{})
ContainersStructureObj.keyValueStyleMaker(footerArea,{
    "background-color":'#363636',
    color:'white',
   

})
let greenButtonArray= Array.from(document.getElementsByClassName("greenButton"))  
        for (const key of greenButtonArray) {
            ContainersStructureObj.keyValueStyleMaker(key,{
                'margin-top':"1rem",
                "paddingTop":"0.5rem",
                   paddingBottom:"0.5rem",
                   paddingLeft:"1rem",
                   paddingRight: "1rem",
                "backgroundColor":"rgba(15, 202, 128,1)", 
                "fontSize":"1.5rem",
                "fontWeight":"bold",
                "color":"white", 
                } ) 

        // ContainersStructureObj.makeDevelopmentBorder1(key)

        
        }

// 
    }
    // , []
    )
  
 

    let reportWindowSize= ()=>{
        // console.log(window.innerWidth) 
        if(screenSizeObj.getWindowWidth(window.innerWidth)!=isBigScreen){
            // console.log('change', isBigScreen)
            setisBigScreen(screenSizeObj.getWindowWidth(window.innerWidth))
           
        }
    // console.log(isBigScreen)
    } 

    window.addEventListener('resize', reportWindowSize); 
    
    return (
        <div className="app-container">

        <div className='header'><Header></Header></div>
        <div id="main-area-container" className='main-area-container'
            style={{ }}>
            
            <EmptyLayoutContainer
            //  backgroundcolor="green"
             >
            <StickyPicture text="sticky Banner commercial" id={uuidv1()}></StickyPicture>
            </EmptyLayoutContainer>
 
                 <div id="content-wrapper" class ='content-wrapper'
                style={{ 
                    width: 100+"%",
                    // borderStyle:"groove",
                    borderColor: "purple",
                    borderWidth: "6px", }}
                >
                <MainContent></MainContent>
                     {props.children}



                </div>



                
<EmptyLayoutContainer 
// backgroundcolor="purple"
></EmptyLayoutContainer>
             </div>

 
             <div id="footer-area-container" className='main-area-container'
             style={{ }}>


             <EmptyLayoutContainer 
            //  backgroundcolor="yellow"
             ></EmptyLayoutContainer>
  
                
 
             <div class='footer-wrapper'
             style={{ 
                width: 100+"%",
                // borderStyle:"groove",
                borderColor: "purple",
                borderWidth: "13px", }}> <FooterContainer></FooterContainer>
             </div>
             <EmptyLayoutContainer
            //   backgroundcolor="blue"
             ></EmptyLayoutContainer>

             </div>
              
        </div>
    );
}

export default AppContainer;

//           <div id="bottomWrapper">              </div>

