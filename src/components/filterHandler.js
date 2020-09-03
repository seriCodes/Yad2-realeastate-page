class filterHandler{
    constructor(){
    } 
 makeFilterObject(e,id){
e.preventDefault()
e.stopPropagation()
console.log('makeFilterObject')
let formElements=document.getElementById(id).elements
// console.log(elem)
let filterObject={}
console.log(formElements)
for (const key in formElements) {
    let collectionItem=formElements[key]
    if (collectionItem.hasOwnProperty('value') && collectionItem.getAttribute("type")!="submit") {
        // console.log(collectionItem.value)
        filterObject[collectionItem.getAttribute("name")]=collectionItem.value
    }
} 
return filterObject
 }

 filterData(filterState, data){
    console.log('data filterData log')
    console.log(data)
    console.log('data filterState log')
    console.log(filterState)
    const isEmptyString = (currentValue) => currentValue =="";

     if(Object.keys(filterState).length === 0 || Object.values(filterState).every(isEmptyString) ){
         return data
     }
     let filteredData=[]
     console.log('filterState.minPrice',filterState.priceMin  ) 

if(filterState.citySearch ){
    console.log('filterState.citySearch inside')
    for(const item of data) {
        if(item.address.includes(filterState.citySearch)){
            filteredData.push(item)
            // console.log('in if')
        }  

        
     }
}else{
    filteredData=[...data]
}
console.log('filteredData log',filteredData)
let priceMin=parseInt(filterState.priceMin)
// Math.min(parseInt(filterState.priceMin) ,parseInt(filterState.priceMax))
if(isNaN(priceMin)){priceMin=0}

let priceMax=filterState.priceMax
// Math.max(filterState.priceMin,filterState.priceMax)
if(priceMax==0){priceMax=Infinity}
console.log('  priceMin',priceMin  )
console.log('  priceMax',priceMax  )

const priceFilter=(item, index)=>{
    if(item.price>=priceMin && item.price<=priceMax){
        console.log('item minPrice', )
        return item
        // console.log('in if')
    }}

  
    filteredData= filteredData.filter(priceFilter)

    filteredData= filteredData.filter(priceFilter)
 
    let roomsMin=parseInt(filterState.roomsSearchMin)
// Math.min(parseInt(filterState.priceMin) ,parseInt(filterState.priceMax))
if(isNaN(roomsMin)){roomsMin=0}

let roomsMax=parseInt(filterState.roomsSearchMax)
// Math.max(filterState.priceMin,filterState.priceMax)
if(isNaN(roomsMax)){roomsMax=Infinity}
console.log("roomsMax",roomsMax)
console.log("roomsMax",roomsMax)

console.log("roomsMin",roomsMin)

    const roomFilter=(item, index)=>{
        if(item.rooms>=roomsMin && item.rooms<=roomsMax){
            console.log('item minPrice', )
            return item
            // console.log('in if')
        }} 
     filteredData= filteredData.filter(roomFilter)

     return filteredData
   
    


 }
        devAlert(text){
          alert(text)
        }
}
export {filterHandler}
