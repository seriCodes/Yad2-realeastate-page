class screenSize {
    constructor(){

    }

    // linkClicked(text){
    //     alert('יעביר לעמוד: '+text)
    // }
    getWindowWidth(innerWidth){ 
        return innerWidth>895;
        }
        getWindowWidthbreakpoints(innerWidth){ 
            if(innerWidth<=666){
                return 'Small';
            }
            if(innerWidth>666 && innerWidth<=1007){
                return 'Medium';
            }
            if(innerWidth>1008){
                return 'Large';
            }
            }
}
export default screenSize;