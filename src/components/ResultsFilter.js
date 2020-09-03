import React, {useState,useEffect} from 'react'
//  import HotelRating from './filters/HotelRating';
// import PriceFilter from './filters/PriceFilter';
// import HospitalitySelctor from './filters/HospitalitySelctor';
// import NameFilter from './filters/NameFilter';
import {ContainersStructure} from "./ContainersStructure";
import {filterHandler} from "./filterHandler";
import {v1 as uuidv1} from "uuid";


export const ResultsFilter = (props) => {
    const formId=  uuidv1();

    const ContainersStructureObj= new ContainersStructure()
    const filterHandlerObj= new filterHandler()

    
    useEffect(()=>{
    
    
 let filterForm=document.getElementById(formId)

 ContainersStructureObj.flexRow(filterForm,{"justifyContent":"space-around"})

 ContainersStructureObj.keyValueStyleMaker(filterForm,{
    'background-color':"#808080	",
// 'text-align':"left",
"border-left":"4px solid rgba(0,0,0,.1)",
"margin":"10px 10px 10px 10px",
"box-shadow":'0 1px 6px 1px rgba(0,0,0,1.16)',
'padding':"10px 10px 10px 10px",
"font-size":"16px",
"fontWeight":"bold",


})

})
    return (
        <div id="ResultsFilter" class="ResultsFilter" >


        <form id={formId }
        onSubmit={(e)=>{
         let filterInit= filterHandlerObj.makeFilterObject(e,formId )
      props.setFilter(filterInit)
        }
    }
    >
    <div>
    <input class="greenButton" type="submit" id="submitFilter" value="חפש"  dir="rtl"/>
    </div>
 
  <div>
  <label for="rooms">מקסימום חדרים</label><br/>
  <input type="number" id="roomsSearchMax" name="roomsSearchMax" min="1" max="10" dir="rtl"/>
  </div>
  <div>
  <label for="rooms">מינימום חדרים</label><br/>
  <input type="number" id="roomsSearchMin" name="roomsSearchMin" min="1" max="10" dir="rtl"/>
  </div>

  <div>

  <label for="rooms">מחיר </label><br/>
  <input type="number" id="priceMax" name="priceMax" placeholder="עד מחיר" min="1" max="10000" dir="rtl"/>
  <input type="number" id="priceMin"  name="priceMin" placeholder=" ממחיר " min="1" max="10000" dir="rtl"/>

  
   </div>

   <div>
   <label for="adrress">חפש עיר</label><br/>
   <input type="text" id="citySearch" name="citySearch" dir="rtl"/>
   </div>

</form>
 
         </div>

    )
}



