import React from 'react'
import AppContainer from './AppContainer'
import {ModalUser} from "./ModalUser";

export const NonRenderOnResizeAppContainer = () => {
    return (
        <>
            <AppContainer></AppContainer>
            <div class="fixedPosiotinModals">
            <ModalUser id="userModal"></ModalUser>
            </div>
        </>
    )
}
