import React from 'react'
import header from '../../JScode/header'
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import {Button} from '../common/Button'
var validator = require('validator');


const styles = {
    root: {
        paddinTop:' 0.5rem' ,
        paddingBottom: '0.5rem',

        // color: 'white',
        background:'white',
        borderRadius:'0.3rem',
         paddingRight:'0.7rem', 
         direction:'RTL',
         width: '100%',
         '&.Mui-focused': {
            // background:'red', 
            borderStyle:'groove',
            borderColor:'black',
            borderWidth: '2.3px', 
        },
        ['@media (min-width:895px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',
            // width: '33%',
            // background:'red', 
          }
    },
      //  cursor: 'text',
      focused:{
        background:'red', 
        borderStyle:'solid',
        borderColor: 'deeppink',
        borderWidth: '6px', 
    },
    rootSearchIcon:{
        color: 'gray',
    }, 
}



 const JoinUs = (props) => {
    const headerObj= new header()
    const[isBigScreen,setisBigScreen]=React.useState(headerObj.getWindowWidth(window.innerWidth))

    let reportWindowSize= ()=>{
 
        if(headerObj.getWindowWidth(window.innerWidth)!=isBigScreen){
             setisBigScreen(headerObj.getWindowWidth(window.innerWidth)) 
        } 
    }
    window.addEventListener('resize', reportWindowSize);  
    let inputComponents;
const registration = ()=>{


 let name= document.getElementById("registrtName")
console.log(name)
let email= document.getElementById("email")
console.log(email)
// console.log("validator.isEmail('foo@bar.com')") 

console.log(validator.isEmail(email.value)) 

console.log(email.value) 
let result
let validDiv= document.getElementById("valid-registration") 


if(validator.isEmail(email.value) && name.value!=""){
    headerObj.linkClicked("שמראה על רישום "+name.value+" וקליטה של המייל:"+ email.value)
    result="צורפת למועדון הלקוחות"
    validDiv.style.color="green"

}else{
console.log('validDiv')
console.log(validDiv)
result='  חסר '

if(!validator.isEmail(email.value) ){
    result += "מייל תקין "
}
if(name.value==""){
    result +=" שם תקין"
}
validDiv.style.color="red"
} 
validDiv.innerText=   result   ;

}

if(isBigScreen){
    inputComponents=(
        <React.Fragment> 
        <div className="submitInput">
 <Button callBack={ ()=>{ registration()}} 
        class1={"moreDetails"}
        >הרשם
        </Button>
        </div>  
        <div className="Join-Input">
        
        <InputBase 
        id="email"

        className={props.classes.root}
        inputProps={{
        type:"email"

    }}
    
        placeholder="&#9993; אימייל "
        > </InputBase>  
                     </div>
                     <div className="Join-Input">
        
                     <InputBase 
                     className={props.classes.root}
                     focused={props.classes.focused}
                     inputProps={{
                     type:"Text"
                 }}
                 id="registrtName"

                     placeholder=" &#9998; שם מלא"
                     id="registrtName"
                     > </InputBase>  
                                  </div>
        </React.Fragment>
    )
}
//         onChange={ searchHndler } className={props.classes.root}

else{
    inputComponents=(
        <React.Fragment>
        <div className="Join-Input">
        
        <InputBase 
        className={props.classes.root}
        focused={props.classes.focused}
        inputProps={{
        type:"Text"
    }}
    id="registrtName"

        placeholder=" &#9998; שם מלא"
        id="registrtName"
        > </InputBase>  
                     </div>

  <div className="Join-Input">
        
  <InputBase 
  id="email"

  className={props.classes.root}
  inputProps={{
  type:"email"

}}

  placeholder="&#9993; אימייל "
  > </InputBase>  
               </div>
  <div className="submitInput">
        <Button callBack={ ()=>{ registration()}} 
        class1={"moreDetails"}
        >הרשם
        </Button> 
        </div>  
        </React.Fragment>

    )
}

    return (

        <div className="Footer-Join-Container">

        <div className="Footer-Join">
        <div className="join-headLine">
        הצטרפו למועדון הלקוחות שלנו
        </div>
        
        <div className="join-inputs">
{inputComponents}
</div>
<div id="valid-registration" className="valid-registration">
<span className="valid-registration-none"> f</span> 
</div>
        </div>
        </div>

    )
}
export default withStyles(styles)(JoinUs)