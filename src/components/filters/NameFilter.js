import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import InputBase from '@material-ui/core/InputBase';
import { FiltersContext } from '../../contexts/FilterContext';


const styles = {
    root: {
        // color: 'white',
        // background:'white',
        // borderRadius:'0.5rem',
         direction:'RTL',
        //  cursor: 'text',
    },
    rootSearchIcon:{
        color: 'gray',
    },
}

 const NameFilter = (props) => {
    const filterContext=React.useContext(FiltersContext) 

     const searchHndler=(event)=>{
        //  console.log(event)
         console.log('searchHndler')
         console.log(event.target.value)
         filterContext.FiltersDispatch({
            type:'NAME',
            payload:event.target.value
        })

     }
    return (
        <div className="nameSearch-container">
        <div className="nameSearch-wrapper">

        <SearchIcon className={props.classes.rootSearchIcon} />
            <InputBase onChange={ searchHndler } className={props.classes.root}
            placeholder="חפש לפי שם מלון"
            id="hotelNameSearch"
            ></InputBase>
          
            </div>
        </div>
    )
}
export default withStyles(styles)(NameFilter);

