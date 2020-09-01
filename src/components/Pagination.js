import React, {useEffect} from 'react'
import {Button} from './common/Button'
import {ContainersStructure} from "./ContainersStructure";

export const Pagination = (props) => {
    let pageButtons=new Array(props.pageCount);
    pageButtons.fill(0)//for map to run
    console.log("pageButtons Pagination",pageButtons )

    const ContainersStructureObj= new ContainersStructure()

    useEffect(()=>{
       let paginationElement= document.getElementById("pagination") 
       ContainersStructureObj.flexRow(paginationElement,{
        justifyContent:"space-around", 
       })
       ContainersStructureObj.keyValueStyleMaker(paginationElement,{
        'background-color':"#f5f1bf",
        // 'text-align':"left",
        "border-left":"4px solid rgba(0,0,0,.1)",
        "margin":"10px 10px 10px 10px",
    "box-shadow":'0 1px 6px 1px rgba(0,0,0,1.16)',
    'padding':"10px 10px 10px 10px",
    "font-size":"16px",
    "fontWeight":"bold",
       })
       let currentRenderedPage=document.getElementById("currentPage")
       ContainersStructureObj.keyValueStyleMaker(currentRenderedPage,{
        'background-color':"#ff7100",
'border-radius':'3px',


       }
       )
      let pageButtonrray= Array.from(document.getElementsByClassName("pageButton"))
      for (const key of pageButtonrray) {
        ContainersStructureObj.keyValueStyleMaker(key,{
            // "margin":"10px 10px 10px 10px",
width:"1rem"
        })

    }
    })
    return (
             <div id="pagination" class="pagination">
  <div class="button" onClick={()=>{
    props.setcurrentPageLink((pre)=>{
        if(pre==1){
            return 1
        }  
        return pre-1
    })
  }}
  >&laquo;</div>
{
    pageButtons.map((item,index)=>{
        console.log('pageButtons.map',index)
        let idPage
        
        if(index+1==props.currentPage){
            console.log("props.currentPage",props.currentPage)
            idPage= "currentPage"
        }
        let previousPage= document.getElementById("currentPage")
        if(previousPage){
            console.log("previousPage",previousPage)
            previousPage.id=""
            previousPage.style.backgroundColor=null
        }
return (
    <Button class1="pageButton" class2=" " 
callBack={()=>{
    props.setcurrentPageLink((index+1))
 }}
id={idPage}
style={{  }}>  
    {index+1} 
</Button>
)
    }) 
}
{
    console.log("pageButtons jsx",pageButtons)
} 
  <div class="button" onClick={()=>{
    props.setcurrentPageLink((pre)=>{
        if(pre==props.pageCount){
            return props.pageCount
        } 
        return pre+1
    })
  }}>&raquo;</div>
</div>

     )
}
