import React from 'react';
import {
    NaverSearchContainer,
    Main,
    NaverSearchKey,

} from "../styles/naversearch_styled";

const NaverSearch = () => {
    return (
        <NaverSearchContainer>
            <Main>
                <a href='/'></a>
            <NaverSearchKey type="text" placeholder="검색어를 입력하세요."/>
            <button>검색</button>
            </Main>
        </NaverSearchContainer>

    )
}

export default NaverSearch;