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
                <a href='#'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"></path>
                    </svg>
                </a>
                <NaverSearchKey type="text" placeholder="검색어를 입력하세요."/>
                <button>검색</button>
            </Main>
        </NaverSearchContainer>

    )
}

export default NaverSearch;