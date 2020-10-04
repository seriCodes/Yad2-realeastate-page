import React from 'react'
 import {ModalUser} from "./ModalUser";

export const NonRenderOnResizeAppContainer = () => {
    return (
        <>
             <div class="fixedPosiotinModals">
            <ModalUser> </ModalUser>
            </div>
        </>
    )
}
