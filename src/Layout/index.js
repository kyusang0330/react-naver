import React from 'react';
import NaverSearch from "../components/NaverSearch";
import NaverMenu from "../components/NaverMenu";
import NaverLogin from "../components/NaverLogin";
import {LayoutContainer,
    LayoutMiddle,} from "../styles/layout_styled";

const Layout = () => {

    return (
        <LayoutContainer>
            <NaverSearch/>
            <NaverMenu/>
            <LayoutMiddle>
                <div>news</div>
                <div><NaverLogin /></div>
            </LayoutMiddle>
        </LayoutContainer>
    );
}

export default Layout;