class ModalHander{
    constructor(){
    }

//       toggleModal(modalType){
//         // alert("ModalHander")
// let element;
//         switch(modalType){
            
//             case 'userModal':
//                  //alert("userModal")
//                  console.log(document.getElementById("userModal").className)
//                  element=document.getElementById("userModal")
//                  if(element.className.includes(" active-userModal")){
//                   element.classList.remove("active-userModal");
//                   break;

//                  }
//                  element.className+=" active-userModal"
//                 break;

//                 default:
//                     console.log('bug f/m sortrs component')
        

//         }
        
//         }
slideImages(imgId, urlArray, direction, ){
  let currentItem= parseInt(document.getElementById(imgId).title)

  // alert(document.getElementById(imgId).title) =99
if(currentItem+direction==urlArray.length){
  document.getElementById(imgId).title=0
  document.getElementById(imgId).src=urlArray[0]
  return 
}else if(currentItem+direction<=0){
  document.getElementById(imgId).title=urlArray.length-1;
  document.getElementById(imgId).src=urlArray[urlArray.length-1]
  return
}

// data-title
  document.getElementById(imgId).src=urlArray[currentItem+direction]
  document.getElementById(imgId).title=currentItem+direction
}
        devAlert(text){
          alert(text)
        }
}
export {ModalHander}
