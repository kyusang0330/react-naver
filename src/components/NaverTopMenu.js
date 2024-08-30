import React from 'react';
import {NaverTopMenuContainer,
    First,
    NaverPay,
    NaverTalk,
    NaverAlarm,
    NaverBasket,
} from "../styles/NaverTopMenu_styled";


const NaverTopMenu = () => {

    return (
        <NaverTopMenuContainer>
        <First></First>
            <NaverPay></NaverPay>
            <NaverTalk></NaverTalk>
            <NaverAlarm></NaverAlarm>
            <NaverBasket></NaverBasket>
        </NaverTopMenuContainer>
            );
};

export default NaverTopMenu;