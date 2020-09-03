import React from 'react'
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import { FiltersContext } from '../../contexts/FilterContext';


const styles = {
    root: {
        width: '80%',
        color: 'white',
             },
            valueLabel:{
                color: 'blue',
                fontWeight: '550'
            }
    }
    let maxPrice;

    let minPrice
const PriceFilter = (props) => {
    
    const filterContext=React.useContext(FiltersContext) 

    const [value, setValue] = React.useState([819, 6000]);
    if(value[0]<value[1]){
        minPrice=value[0];
        maxPrice=value[1];
    }else{
        minPrice=value[1];
        maxPrice=value[0];

    }
    
    const handleChange = (event, newValue) => {
        filterContext.FiltersDispatch({
            type:'PRICE_RANGE',
            payload: [newValue[0],newValue[1]],
        })

        setValue(newValue);
        console.log(event)
      };
    // className={props.classes.root}

    return (
        <div>
        <div className="filter-headline">
        טווח מחיר לאדם
                </div>
                <div className="  pricesAndHospitality-container">
                        <span>${minPrice}</span> 
                        <span>${maxPrice}</span>
            </div>
        
<Slider
value={value}
onChange={handleChange}
valueLabelDisplay="auto"
min={819}
step={ 1}
max={6000}
className={props.classes.root}
classes={{valueLabel:props.classes.valueLabel}}></Slider>
</div>

    )
}
export default withStyles(styles)(PriceFilter);

