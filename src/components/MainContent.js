import React, {useEffect, useState} from 'react'
import {v1 as uuidv1} from "uuid";
import {filterHandler} from "./filterHandler";
import MainContentCSS from "./MainContentCSS.css"
import Accordion from "./Accordion.css"
import Modals from "./Modals.css"

////continue
 
// import Sorters from './Sorters'
// import Filter from '../JScode/filtersSorts/filterCode'
// import Sort from '../JScode/filtersSorts/sortCode'
 
import {Results} from './Results'
import {ContainersStructure} from "./ContainersStructure";
import {Pagination} from "./Pagination";

import {ResultsFilter} from './ResultsFilter'

import data from './database'

// import { FiltersContext} from '../contexts/FilterContext'
// import { SorterContext} from '../contexts/SorterContext'
let renderCounter=1
export const 


MainContent = (props) => {
    console.log('props.history MainContent') 
    console.log(props.history) 

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
 
    useEffect(()=>{  })
     let filtersComponentRight;
let filtersComponentLeft;
   
    //   
    return (
        <div class ="MainContent-Container">
       
        <div class ="MainContent"> 
        <ResultsFilter filter={filterState} setFilter={setFilter}></ResultsFilter>

        <div class ="Results-sorter-container">
     {
// <Sorters></Sorters>
//         <div className="Results-declarer">תוצאות הסינון הן {
            // resultsFiltered.length
        // } המלונות הבאים:</div>



     } 
        </div>
        <div class="Results-container">
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
item={item} 
history={props.history}></Results>
 
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
