import React from 'react';
import NaverTopMenu from "../components/NaverTopMenu";
import NaverSearch from "../components/NaverSearch";
import NaverMenu from "../components/NaverMenu";
import {NaverTopContainer} from "../styles/navertop_styled";

const NaverTop = () => {
    return (
        <NaverTopContainer>
            <NaverTopMenu/>
            <NaverSearch/>
            <NaverMenu/>
        </NaverTopContainer>
    );
};

export default NaverTop;