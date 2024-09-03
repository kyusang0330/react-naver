import React from 'react';
import {
    NaverTopMenuContainer,
    NaverLeftMenu,
    NaverRightMenu,
    First,
    NaverPay,
    NaverTalk,
    NaverAlarm,
    NaverBasket,
} from "../styles/navertopmenu_styled";


const NaverTopMenu = () => {

    return (
        <NaverTopMenuContainer>
            <NaverLeftMenu>
                <div><First></First></div>
                <div><NaverPay></NaverPay></div>
            </NaverLeftMenu>
            <NaverRightMenu>
                <div><NaverTalk></NaverTalk></div>
                <div><NaverAlarm></NaverAlarm></div>
                <div><NaverBasket></NaverBasket></div>
            </NaverRightMenu>
        </NaverTopMenuContainer>

    );
};

export default NaverTopMenu;