import React from 'react';
import NaverSearch from "../NaverSearch";
import NaverMenu from "../NaverMenu";
import NaverLogin from "../NaverLogin";
import {LayoutContainer} from "../styles/layout_styled";

const Layout = () => {

    return (
        <LayoutContainer>
            <NaverSearch/>
            <NaverMenu/>
            <div>
                <div></div>
                <div><NaverLogin /></div>
            </div>
        </LayoutContainer>
    );
}

export default Layout;