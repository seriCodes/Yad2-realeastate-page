import React from 'react'
import {ModalStyler} from '../ModalStyler'

export const ModalExitWithSeperateShadedDiv = (props) => {
    const ModalStylerObj= new ModalStyler()

    return (
        <div class="Modal-X-button">
        <span class="small-close-Modal" onClick={(e)=>
            {
                // e.stopPropagation()
                 ModalStylerObj.toggleModal(props.id,e)
                ModalStylerObj.shadedDivClickAftermodalToggled(e)
 
    }}>&times;</span>
    </div>
    )
}
