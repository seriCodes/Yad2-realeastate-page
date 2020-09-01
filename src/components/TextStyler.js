class TextStyler{
    constructor(){}

    textStyling(elem,{fontSize, fontWeight,color,pointerEvents,userSelect}){

        elem.style.fontSize=fontSize
        elem.style.fontWeight=fontWeight 
        elem.style.color=color
        elem.style.pointerEvents = pointerEvents;
        elem.style.userSelect =userSelect;

    }
}
export {TextStyler}
