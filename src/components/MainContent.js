import React, {useEffect, useState} from 'react'
import {v1 as uuidv1} from "uuid";
import {filterHandler} from "./filterHandler";

////continue
// import ResultsFilter from './ResultsFilter'

// import Sorters from './Sorters'
// import Filter from '../JScode/filtersSorts/filterCode'
// import Sort from '../JScode/filtersSorts/sortCode'
// import {StickyPicture} from './common/StickyPicture'

import {Results} from './Results'
import {ContainersStructure} from "./ContainersStructure";
import {Pagination} from "./Pagination";

import {ResultsFilter} from './ResultsFilter'

import data from './database'

// import { FiltersContext} from '../contexts/FilterContext'
// import { SorterContext} from '../contexts/SorterContext'
let renderCounter=1
export const MainContent = () => {
    const filterHandlerObj= new filterHandler()

    const [filterState,setFilter]=useState({})
    console.log('filterState fm mai', filterState)
 
// console.log('renderCounter',renderCounter++)
console.log('filterState',filterState)
    const ContainersStructureObj= new ContainersStructure()
 
    console.log('data log')
    console.log(data)

  let filteredData = filterHandlerObj.filterData(filterState,data)
    const [currentPage,setCurrentPage]=useState(1)
    console.log('currentPage',currentPage)
    let page=currentPage;
    let resultsAmountPerPage=6
    const pageCount=Math.ceil(filteredData.length/resultsAmountPerPage)
// alert(Math.ceil(pageCount))
    let dataSliceInitialPosition=(page-1)*resultsAmountPerPage;
    let dataSliceEndPosition=dataSliceInitialPosition+resultsAmountPerPage 
   let dataPage= filteredData.slice(dataSliceInitialPosition,dataSliceEndPosition)
//    const [isResized,setisResized]=useState(false)

//    useEffect(()=>{
// if(isResized){
//   setisResized(false)

// }
// },[isResized])

    useEffect(()=>{
       
        // let resultRightRightImagesArray= Array.from(document.getElementsByClassName("result-right-right-Images"))  
        // for (const key of resultRightRightImagesArray) {
        //     ContainersStructureObj.keyValueStyleMaker(key,{
        //         // "width":"16px",
        //          "color":"rgba(0,0,0,.5)"
        // })

        // }

        let resultAccordionArray= Array.from(document.getElementsByClassName("resultDetailsAccordion")) 

        for (const key of resultAccordionArray) {
            ContainersStructureObj.keyValueStyleMaker(key,{
                // "font-size":"16px", "color":"white",
            // width:"100%",
            "textAlign":"right",
            "background-color":"white",
            "border-radius":"8px",
            // "user-select":"none",
            // 'background-color':"#f5f1bf",
    //  "border-left":"4px solid rgba(0,0,0,.1)",
    "margin":"10px 10px 10px 10px",
// "box-shadow":'0 1px 6px 1px rgba(0,0,0,1.16)',
'padding':"10px 10px 10px 10px",
"font-size":"16px",
"fontWeight":"bold",

        })
        // ContainersStructureObj.makeDevelopmentBorder1(key)

        
        }
        let ModalArrowsArray= Array.from(document.getElementsByClassName("arrowsImages"))  
        for (const key of ModalArrowsArray) {
            ContainersStructureObj.keyValueStyleMaker(key,{"font-size":"16px", "color":"rgba(0,0,0,.5)",
            width:"45%",
            "textAlign":"center",
            "background-color":"#ccc",
            "border-radius":"8px",
            "user-select":"none",

        })
        // ContainersStructureObj.makeDevelopmentBorder1(key)

        
        }


        let opacityTextRefArray= Array.from(document.getElementsByClassName("opacity-text"))  
        for (const key of opacityTextRefArray) {
            ContainersStructureObj.keyValueStyleMaker(key,{"font-size":"16px", "color":"rgba(0,0,0,.5)"
        })

        }


        let resultCenterRef= document.getElementsByClassName("result-Center-wrapper")
        let resultCenterRefArray= Array.from(resultCenterRef)
        for (const key of resultCenterRefArray) {
            // ContainersStructureObj.makeDevelopmentBorder1(key)
            ContainersStructureObj.flexRow(key,{justifyContent:"space-around"})
            ContainersStructureObj.keyValueStyleMaker(key,{width:"100%"})
        }

let resultsTagsRef= document.getElementsByClassName("result")
console.log('resultsTagsRef', resultsTagsRef)
let resultsTagsRefArray= Array.from(resultsTagsRef)
console.log('resultsTagsRefArray', resultsTagsRefArray)

for (const key of resultsTagsRefArray) {
    console.log("resultsTagsRef key",key)

    // ContainersStructureObj.makeDevelopmentBorder1(key)
    ContainersStructureObj.keyValueStyleMaker(key,{'background-color':"#f5f1bf",
    // 'text-align':"left",
    "border-left":"4px solid rgba(0,0,0,.1)",
    "margin":"10px 10px 10px 10px",
"box-shadow":'0 1px 6px 1px rgba(0,0,0,1.16)',
'padding':"10px 10px 10px 10px",
"font-size":"16px",
"fontWeight":"bold",


})

    ContainersStructureObj.flexRow(key,{justifyContent:"center" })
    key.childNodes.forEach((div,index)=>{
        // ContainersStructureObj.makeDevelopmentBorder2(div)
        console.log('div makeDevelopmentBorder2',div)
        console.log('div.classList',div.classList)
let classes= div.classList
        // let width = classes.contains('result-right')? '40%':'30%'

let style={"color":'#363634'};
if(classes.contains('result-right')){
    style={...style,width:'40%',
    // 'text-align':"right",
    display:"flex",
    'align-items':"center",
     'justify-content': 'space-around', 
'padding':"0px 0px 0px 0px",
textAlign:"right"

}
}else if(classes.contains('result-center')){
    style={...style,width:'30%',
    'text-align':"center",
    'direction':"ltr",
    "font-size":"26px",
    display:"flex",
    'align-items':"center",
     'justify-content': 'center', 

}
}else if(classes.contains('result-left')){
    style={...style,width:'30%',
    'direction':"ltr",
    "font-size":"26px",
    display:"flex",
    'align-items':"center",
     'justify-content': 'center', 
} 
}else{
    style={}
}

        ContainersStructureObj.keyValueStyleMaker(div, style )
    })
    // if (resultsTagsRef.hasOwnProperty(key)) {
    //     const element = object[key];
        
    // }
}



    })
    //     console.log(data.headline)
    //     console.log(data[1])
    
    ////continue

    // const filterContext=React.useContext(FiltersContext) 
    // const sorterContext=React.useContext(SorterContext) 

    // console.log('sorterContext')
    // console.log(sorterContext)

    // console.log(filterContext)

    // const FilterObj= new Filter()
    // const SortObj= new Sort()
     
    
//   let resultsFiltered= FilterObj.filter(data,filterContext.FiltersState)
// console.log('sorterContext.sorterState main', sorterContext.sorterState)
// console.log('resultsFiltered main', resultsFiltered)

//   SortObj.sortHotels(resultsFiltered,sorterContext.sorterState)
  

    let filtersComponentRight;
let filtersComponentLeft;
    // let reportWindowSize= ()=>{
        // setisResized(true)

        //  if(headerObj.getWindowWidth(window.innerWidth)!=isBigScreen){
        //     console.log('change f/m main', isBigScreen)
        //     setisBigScreen(headerObj.getWindowWidth(window.innerWidth)) 
        // }
    //  }

    // window.addEventListener('resize', reportWindowSize);

    // if(isBigScreen){
    //     console.log('change f/m isBigScreen', isBigScreen)
    //     filtersComponentLeft=null
    //     filtersComponentRight=( 
    //             <ResultsFilter></ResultsFilter> )
    // }else{
    //     filtersComponentRight=null
    //     filtersComponentLeft=( 
    //         <ResultsFilter></ResultsFilter> )
    // } 

    
    return (
        <div className="MainContent-Container">
        <div className="MainContent"> 
      <ResultsFilter filter={filterState} setFilter={setFilter}></ResultsFilter>

        <div className="Results-sorter-container">
     {
// <Sorters></Sorters>
//         <div className="Results-declarer">תוצאות הסינון הן {
            // resultsFiltered.length
        // } המלונות הבאים:</div>



     } 
        </div>
        <div className="Results-container">
{
    dataPage.map((item,index)=>{
        return (
            <Results floor={item["floor"]} 
            size={item["size"]}
            rooms={item["rooms"]}
            address={item["address"]}
            sub-address={item["sub-address"]}

            description={item["description"]}
            entryDate={item["entryDate"]}
            phone-number={item["phone-number"]}

            owner={item["owner"]}

            propertyAttributes={item["propertyAttributes"]} 

price={item["price"]}
images={item["images"]}
 ></Results>
 
        )
    }
    
    )

    
} 
        </div>
        
 
       
       {dataPage.length>0 && <Pagination currentPage={currentPage} setcurrentPageLink={setCurrentPage} pageCount={pageCount}
         ></Pagination>
        }
        </div> 
        </div>
    )
}
