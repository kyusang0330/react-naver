import React from 'react';
import NaverSearch from "../components/NaverSearch";
import NaverMenu from "../components/NaverMenu";
import NaverLogin from "../components/NaverLogin";
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