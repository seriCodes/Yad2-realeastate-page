import React, {useState,useEffect} from 'react'
//  import HotelRating from './filters/HotelRating';
// import PriceFilter from './filters/PriceFilter';
// import HospitalitySelctor from './filters/HospitalitySelctor';
// import NameFilter from './filters/NameFilter';
import {ContainersStructure} from "./ContainersStructure";
import {filterHandler} from "./filterHandler";
import {v1 as uuidv1} from "uuid";
import "./resultsFilter.css";


export const ResultsFilter = (props) => {
    // const formId=  uuidv1();

    const ContainersStructureObj= new ContainersStructure()
    const filterHandlerObj= new filterHandler()

    
    useEffect(()=>{ })
    return (
        <div class="ResultsFilter-container">
        <h3  >איזה נכס תרצה לחפש?</h3> 

        <form id="form-filter-Id"
        class="ResultsFilter-from"
        onSubmit={(e)=>{
         let filterInit= filterHandlerObj.makeFilterObject(e,"form-filter-Id" )
      props.setFilter(filterInit)
        }
    }
    >
    <div class="submit-container">
    <label for="rooms">  hidden</label> 
    <input class="greenButton" type="submit" id="submitFilter" value="חפש"  dir="rtl"/>
    </div>
 
  <div>
  <label for="rooms">מקסימום חדרים</label><br/>
  <input type="number" id="roomsSearchMax" name="roomsSearchMax" min="1" max="10" dir="rtl"  step="1"/>
  </div>
  <div>
  <label for="rooms">מינימום חדרים</label><br/>
  <input type="number" id="roomsSearchMin" name="roomsSearchMin" min="1" max="10" dir="rtl"  step="1"/>
  </div>

  <div>

  <label for="rooms">מחיר </label><br/>
  <input class="price" type="number" id="priceMax" name="priceMax" placeholder="עד מחיר" min="1" max="10000" dir="rtl" step="100"/>
  </div>
  <div>
  <label for="rooms">מחיר</label><br/>
  <input class="price" type="number" id="priceMin"  name="priceMin" placeholder="ממחיר" min="1" max="10000" dir="rtl"  step="100"/>

  
   </div>

   <div>
   <label for="adrress">חפש עיר</label><br/>
   <input type="text" id="citySearch" name="citySearch" dir="rtl"/>
   </div>

</form>
 
         </div>

    )
}



