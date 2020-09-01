class addEventListenerAttacher{
    constructor(){}

    mouseover(elem,{red, green, blue,opacity, fontSize, fontWeight,color,pointerEvents,userSelect})
    {
        elem.addEventListener("mouseover",
        function( event ) {   
             event.target.style.backgroundColor=`rgba(${red}, ${green}, ${blue} ,${opacity})`; 
          }, false)
// alert("mouseover")

        // elem.style.fontSize=fontSize
        // elem.style.fontWeight=fontWeight 
        // elem.style.color=color
        // elem.style.pointerEvents = pointerEvents;
        // elem.style.userSelect =userSelect;

    }

    mouseout(elem,{red, green, blue,opacity, fontSize, fontWeight,color,pointerEvents,userSelect})
    {
        elem.addEventListener("mouseout",
        function( event ) {   
             event.target.style.backgroundColor=`rgba(${red}, ${green}, ${blue} ,${opacity})`; 
          }, false)
 
    }
}
export {addEventListenerAttacher}
