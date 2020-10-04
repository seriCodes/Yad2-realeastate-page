class AccordionHandler{
    constructor(){}
    toggleAcorddion(id,height,duration,display="flex"){
        var elem = document.getElementById(id);   
        // var width = 0;
        elem.style.display=display
        // "block"
        var  IntervalId;
        let compareResult=elem.style.height;
        console.log(elem.style.height)

        
        if(compareResult && compareResult.includes("rem")){ 
            compareResult=Number(compareResult.slice(0,-3))
            console.log(compareResult)

        }
        if(compareResult<height){
            id= setInterval(frame, duration);
            function frame() {
                compareResult=Number(compareResult)
              if (compareResult == height) {
                clearInterval( IntervalId);
              } else {
                compareResult=compareResult+0.5; 
                elem.style.height = compareResult + 'rem'; 
                console.log('bars else')
                console.log(compareResult)
                console.log(elem.style.height)

              }
            }
        }else{
             IntervalId= setInterval(frame, duration);
            function frame() {
              if (compareResult == 0) {
                elem.style.display="none"

                clearInterval( IntervalId);
              } else {
                compareResult=compareResult-0.5; 
                elem.style.height = compareResult + 'rem'; 
                console.log('bars else')
    
              }
        }
    }
    }

}
export {AccordionHandler}
