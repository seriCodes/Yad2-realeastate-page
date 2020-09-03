import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Radio } from '@material-ui/core';
import { FiltersContext } from '../../contexts/FilterContext';

const styles = {
    root: {
        width: '80%',
        color: 'white',
        '&.Mui-checked': {
            color: 'white',
            // 'green'
            // 
        },
             },
             
            valueLabel:{
                color: 'blue',
                fontWeight: '550'
            }
    }
let selector=[]
const HospitalitySelctor = (props) => {
    const[isBreakfast,setIsBreakfast]= React.useState(true)
    const[isSleep,setIsSleep]= React.useState(true)
    const filterContext=React.useContext(FiltersContext) 


    const selectorHandler=(selector)=>{
        switch(selector){
            case'breakfast':
            filterContext.FiltersDispatch({
                type:'HOSPITALITY',
                payload:{
                    selected:!isBreakfast,
               subType:'Breakfast'
             },
            })
            setIsBreakfast(!isBreakfast)

            break;
            case'sleep':
            filterContext.FiltersDispatch({
                type:'HOSPITALITY',
                payload:{
                    selected:!isSleep,
               subType:'sleep'
             },
            })

            setIsSleep(!isSleep)

            break;
           

            default:
                console.log("bug")
        } 

    }


    return (
        <div>
        <div className="filter-headline">
בסיס אירוח                </div>

<div className="  pricesAndHospitality-container pointer" 
onClick={()=>selectorHandler('sleep')}>
<span>
819$
</span>

<div className="flex-center-row">
<span>לינה</span>
<span >  <Radio className={props.classes.root}   checked={isSleep}></Radio>
</span>
</div>
</div>
<div className="  pricesAndHospitality-container pointer" 
onClick={()=>selectorHandler('breakfast')}>
<span>
819$
</span>

<div className="flex-center-row">
<span>ארוחת בוקר</span>
<span >  <Radio className={props.classes.root}   checked={isBreakfast}></Radio>
</span>
</div>
</div>



        </div>
        
    )
}
export default withStyles(styles)(HospitalitySelctor);
