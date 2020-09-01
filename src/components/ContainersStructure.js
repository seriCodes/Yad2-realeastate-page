class ContainersStructure{
    constructor(){}

        flexRow(elem,{justifyContent="space-between"}){
            elem.style.display="flex";
            elem.style.flexDirection="row";
            elem.style.justifyContent=justifyContent;
            // elem.style.alignItems="center";  
     }
     flexColumn(elem,{alignItems, display="flex"}){
      elem.style.display=display;
      elem.style.flexDirection="column";
       elem.style.alignItems=alignItems;  
}
     innerElementsOrder(elem,{alignItems}){
      elem.style.alignItems="center"; 
     }
  makeDevelopmentBorder1(elem){
   // elem.style.borderStyle="dashed";
   elem.style.borderColor="blue";
   elem.style.borderWidth=" 5px"; 

}
makeDevelopmentBorder2(elem){
   // elem.style.borderStyle="dashed";
   elem.style.borderColor="orange";
   elem.style.borderWidth=" 5px"; 

}


 padding(elem, {top,right,bottom,left}){
    console.log('paddingbottom ',bottom)
    elem.style.paddingTop=top
    elem.style.paddingBottom=bottom

    elem.style.paddingLeft=left
    elem.style.paddingRight= right
 }
 keyValueStyleMaker(elem, styleObj){
   if(styleObj.hasOwnProperty("fontFamily"))
{
   console.log('styleObj keyValueStyleMaker',styleObj)
   console.log('elem keyValueStyleMaker',elem)
}
    for (const property in styleObj) {
       elem.style[property]=styleObj[property ]
    } 
}

directionContainer(elem,{direction} ){

   elem.style.direction=direction;
}

 relativeSize(elem, {height,width}){
    elem.style.height=height
    elem.style.width=width

 }
// containerSize() {

// }

}
export {ContainersStructure}
