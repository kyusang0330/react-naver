import React from 'react';
import {
    NaverSearchContainer
} from "./styles/naversearch_styled";

const NaverSearch = () => {
    return (
        <NaverSearchContainer>
            <div>
            <input type="text" placeholder="검색어를 입력하세요."/>
            <button>검색</button>
            </div>
        </NaverSearchContainer>

    )
}

export default NaverSearch;