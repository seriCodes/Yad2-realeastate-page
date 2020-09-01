import React from 'react'
// import JoinUs from './JoinUs'
import {FooterMenu} from './FooterMenu'
import {FooterShares} from './FooterShares'

export const FooterContainer = () => {
    return (
        <div className="FooterContainer">
            <FooterMenu></FooterMenu>
            <FooterShares></FooterShares>
        </div>
    )
}
