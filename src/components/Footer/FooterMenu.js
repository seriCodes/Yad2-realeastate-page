import React, {useEffect, useState} from 'react'
import {Button} from "../common/Button";
import {ContainersStructure} from "../ContainersStructure";

export const FooterMenu = () => {
    const ContainersStructureObj= new ContainersStructure()
    // useEffect(()=>{  })
 
    //   <div id ="Links-Container" class="flexRowSpaceAround">     </div>
    return (
          
      <>
        <div class="Links-footer-any">
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
        <div class="Links-column2">
       
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

        <div class="Links-column3">
       
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
        <div class="Links-column4">
       
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

        </>
       
    )
}
