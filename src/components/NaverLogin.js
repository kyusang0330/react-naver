import React from 'react';
import {NaverLoginContainer} from "../styles/naverlogin_styled";
const NaverLogin = () => {
    return(
        <NaverLoginContainer>
            <p>네이버를 더 안전하고 편리하게 이용하세요.</p>
            <button> NAVER 로그인</button>
            <div> 아이디 찾기</div>
            <div> 비밀번호 찾기</div>
            <div> 회원가입</div>
        </NaverLoginContainer>
    )
}

export default NaverLogin;