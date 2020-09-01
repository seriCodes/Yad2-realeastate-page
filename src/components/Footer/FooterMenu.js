import React, {useEffect, useState} from 'react'
import {Button} from "../common/Button";
import {ContainersStructure} from "../ContainersStructure";

export const FooterMenu = () => {
    const ContainersStructureObj= new ContainersStructure()
    useEffect(()=>{
        let LinksFooter= document.getElementById("Links-Container")
        ContainersStructureObj.flexRow( LinksFooter,{"justifyContent":"space-around"})
    })
 
    return (
        <div class= "FooterMenu-Container">
        <div class="FooterMenu">
        <div class="Menu-headLine">
         
                </div>  
        <div id ="Links-Container">
        <div class="Links-footer-column">
        <h1 class="Links-column-headLine">
        כללי</h1>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
  
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button> 
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button> 
        <Button class1="hidden">לינק</Button> 

        </div>
        <div class="Links-column">
       
        <h1 class="Links-column-headLine">
       כותרת  לינק </h1>
         <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        </div>

        <div class="Links-column">
       
        <h1 class="Links-column-headLine">
        כותרת  לינק </h1>
         <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        </div>
        <div class="Links-column">
       
        <h1 class="Links-column-headLine">
        כותרת  לינק </h1>
         <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        <Button callBack={()=>{
            alert("link")
        }} >לינק</Button>
        </div>

        </div>
        </div>
        </div>
     
    )
}
