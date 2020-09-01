class HeaderStyler{
    constructor(){
    }

  async  headLineStyler(elem){


    const img = await new Image();
    img.src = "url('https://assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png')";

    console.log("object img", img.width)
          elem.style.backgroundImage= "url('https://assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png')";

         
        let widthHeadline="100px"
        let heightHeadline="100%"
        // "40px" "60px"
        elem.style.backgroundSize= 'contain';

        elem.style.width=widthHeadline
        elem.style.height=heightHeadline 
        elem.style.backgroundSize=`${widthHeadline} ${heightHeadline}`
 
        elem.style.backgroundRepeat='no-repeat';

        // elem.style.borderStyle="dashed";
        // elem.style.borderColor="brown";
        // elem.style.borderWidth="6px"; 
    }
    hrStyler(elem,{width,style,color}){
        elem.style.border=`${width} ${style} ${color}`
        // "solid "
        elem.style.margin=0
        // elem.style.height=heightHeadline 

    }
    headerStyler(elem,{width,style,color}){

        // elem.style.borderStyle="dashed";
        elem.style.borderColor="green";
        elem.style.borderWidth="9px"; 
    }
    newAdButtonStyler(elem,{width,style,color}){

        // elem.style.borderStyle="dashed";
        // elem.style.borderColor="green";
        // elem.style.borderWidth="9px"; 
        elem.style.borderRadius="16px";
        elem.style.backgroundColor="rgba(15, 202, 128,1)";
        elem.style.fontSize="1.5rem"
        elem.style.fontWeight="bold"

        elem.style.color="white"

    } 

}
export {HeaderStyler}
