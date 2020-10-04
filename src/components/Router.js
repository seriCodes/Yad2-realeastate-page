import React from 'react'
import{BrowserRouter,Route, Switch} from 'react-router-dom'
import "./appContainer.css";
import {appContainer } from "./appContainer.css";
import {generalStyle} from './generalStyle.css';  

//component
// import Main from './components/Main'
// import Signin from './components/Signin'
// import Login from './components/Login'
import Header from './Header'
import {MainContent} from "./MainContent";
import {StickyPicture} from './common/StickyPicture'
import {FooterContainer} from './Footer/FooterContainer'
import {HomeDetails} from './HomeDetails'

import {ChatQuestion} from './ChatQuestion';

// import {AdminPage} from './components/AdminPage'
// import Container from 'react-bootstrap/Container'

//     <Route exact path='/' component= {Main}></Route>
// <Route exact path='/login' component= {Login}></Route>
//     <Route exact path='/signin' component= {Signin}></Route>
//     <Route exact path='/Cart' component= {Cart}></Route>
//     <Route exact path='/displayBook/:bookID' component= {SingleBook} ></Route>
//     <Route exact path='/AdminPage' component= {AdminPage}></Route>
//     <Route exact path='/BuyerPage' component= {BuyerPage}></Route>

const Router = (props)=>{

    return (  
      <BrowserRouter> 
      <div class ="app-container">

      <div class ='header'> <Route path='/' component={Header} ></Route> </div>

      <Switch>
  <div  class ='main-area-container'> 
  <StickyPicture id="left-sticky-ad"></StickyPicture>

  <Route exact path='/' component={MainContent} ></Route> 
  <Route exact path='/homeDetails/:homeID' //SmallScreen
  component={HomeDetails} ></Route>
  
  {props.children} 

  </div> 
     </Switch>
 </div>

 <footer class='footer-area-container'
 style={{ 
     borderStyle:"groove",
    borderColor: "purple",
    borderWidth: "17px", }}> <FooterContainer></FooterContainer>
 </footer> 
<ChatQuestion></ChatQuestion>
    </BrowserRouter>
        )
}
export default Router

