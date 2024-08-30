import React from 'react';
import NaverTop from "./NaverTop";
import NaverLogin from "../components/NaverLogin";
import {LayoutContainer,
    LayoutMiddle,} from "../styles/layout_styled";

const Layout = () => {

    return (
        <LayoutContainer>
            <NaverTop />
            <LayoutMiddle>
                <div>news</div>
                <div><NaverLogin /></div>
            </LayoutMiddle>
        </LayoutContainer>
    );
}

export default Layout;