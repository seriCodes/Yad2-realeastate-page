class AppContainerStyler{
    constructor(){}

setBody(elem){
 console.log("setBody",elem)
 console.log("setBody innerHeight",window.innerHeight)

elem.style.height=window.innerHeight
// "100vh"
}

    basic(elem){
        // alert(elem)
        // elem.style.background="#90EE90"
        elem.style.height="auto"
        // "100%"
        // "95vh"

    }

}
export {AppContainerStyler}