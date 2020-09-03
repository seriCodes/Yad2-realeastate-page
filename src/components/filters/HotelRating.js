import React, {useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Radio } from '@material-ui/core';

import { FiltersContext } from '../../contexts/FilterContext';

const styles = {
    root: {
        color: 'white',
        '&.Mui-checked': {
            color: 'white',
            // 'green'
            // 
        },
    }
}

const HotelRating = (props) => {
    const[isChecked1,setIsChecked1]=useState(true)
    const[isChecked2,setIsChecked2]=useState(true)
    const[isChecked3,setIsChecked3]=useState(true)
    const[isChecked4,setIsChecked4]=useState(true)
    const[isChecked5,setIsChecked5]=useState(true)
// console.log(React.useContext(FiltersContext))
const filterContext=React.useContext(FiltersContext) 
// console.log(a)
// const {FiltersState}=a//??
console.log(filterContext )
// console.log(filterContFiltersState)

    const hotelRating=(rate)=>{
        switch(rate){
            case 1:
                filterContext.FiltersDispatch({
                    type:'RATING',
                    payload:{
                        isCheck:!isChecked1,
                        rating:1
                    }
                })
                setIsChecked1(!isChecked1)
            break;
            case 2:
                filterContext.FiltersDispatch({
                    type:'RATING',
                    payload:{
                        isCheck:!isChecked2,
                        rating:2
                    }
                })

                setIsChecked2(!isChecked2)
            break;
            case 3:
                filterContext.FiltersDispatch({
                    type:'RATING',
                    payload:{
                        isCheck:!isChecked3,
                        rating:3
                    }
                })

                setIsChecked3(!isChecked3)
            break;
            case 4:
                filterContext.FiltersDispatch({
                    type:'RATING',
                    payload:{
                        isCheck:!isChecked4,
                        rating:4
                    }
                })

                setIsChecked4(!isChecked4)
            break;
            case 5:
                filterContext.FiltersDispatch({
                    type:'RATING',
                    payload:{
                        isCheck:!isChecked5,
                        rating:5
                    }
                })

                setIsChecked5(!isChecked5)
            break;
            default:
                alert('a BUG')
        }
        // setisChecked(!isChecked)
        // console.log(isChecked)

        console.log(rate)
    }
    return (
        <div>
        <div className="filter-headline">
        דירוג מלון
        </div>
        <div className="stars-container">
        <div className="stars">
        <div className="stars-text">
        819$
        </div>
        <i class="fa fa-star-o"  aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>

        <i class="fa fa-star-o" aria-hidden="true"></i>

        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <div onClick={()=>hotelRating(1)}>  <Radio className={props.classes.root}   checked={isChecked1}></Radio>
    </div>
        </div>
        <div className="stars">
        <div className="stars-text">
        819$
        </div>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>

        <i class="fa fa-star-o" aria-hidden="true"></i>

       
        <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
        <div onClick={()=>hotelRating(2)}>  <Radio className={props.classes.root}   checked={isChecked2}></Radio></div>
        </div>
        
        <div className="stars">
        <div className="stars-text">
        819$
        </div>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>

        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <div onClick={()=>hotelRating(3)}>  <Radio className={props.classes.root}   checked={isChecked3}></Radio></div>
        </div>
        <div className="stars">
        <div className="stars-text">
        819$
        </div>
        <i class="fa fa-star-o" aria-hidden="true"></i>

        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <div onClick={()=>hotelRating(4)}>  <Radio className={props.classes.root}   checked={isChecked4}></Radio></div>       </div>

        <div className="stars">
        <div className="stars-text">
        819$
        </div>
        <i class="fa fa-star" aria-hidden="true"></i>         
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
      <div onClick={()=>hotelRating(5)}>  <Radio className={props.classes.root}   checked={isChecked5}></Radio></div>
        </div>  
        </div>
        </div>
        )

}
export default withStyles(styles)(HotelRating);

//         className= `${{props.classes.root}} Sorters-Left-selector`
//         className='Sorters-Left-selector'


