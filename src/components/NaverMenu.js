import React from 'react';
import {
    NaverMenuContainer,
    NaverMenuItem,
} from "../styles/navermenu_styled";

const NaverMenu = () => {

    return (
        <NaverMenuContainer>
            <NaverMenuItem>
                <div>메일</div>
                <div>카페</div>
                <div>블로그</div>
                <div>쇼핑</div>
                <div>뉴스</div>
                <div>증권</div>
                <div>부동산</div>
                <div>지도</div>
                <div>웹툰</div>
                <div>치지직</div>
            </NaverMenuItem>
        </NaverMenuContainer>
    )
}

export default NaverMenu;