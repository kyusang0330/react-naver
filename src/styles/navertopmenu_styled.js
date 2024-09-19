import styled from "styled-components";
import MainImg from "../assets/images/sp_main.3e7d337e.png";

const NaverTopMenuContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;
const NaverLeftMenu = styled.div`
    display: flex;
`;
const NaverRightMenu = styled.div`
    display: flex;
`;
const First = styled.div`
    display: block;
    background-image: url(${MainImg});
    background-size: 443px 424px;
    background-position: -285px -214px;
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;
`;

const NaverPay = styled.div`
    display: block;
    background-image: url(${MainImg});
    background-size: 443px 424px;
    background-position: -33px -287px;
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;`;

const NaverTalk = styled.div`
    display: block;
    background-image: url(${MainImg});
    background-size: 443px 424px;
    background-position: -165px -287px;
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;`;

const NaverAlarm = styled.div`
    display: block;
    background-image: url(${MainImg});
    background-size: 443px 424px;
    background-position: -246px -229px;
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;`;

const NaverBasket = styled.div`
    display: block;
    background-image: url(${MainImg});
    background-size: 443px 424px;
    background-position: -99px -287px;
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;`;

export {
    NaverTopMenuContainer,
    NaverLeftMenu,
    NaverRightMenu,
    First,
    NaverPay,
    NaverTalk,
    NaverAlarm,
    NaverBasket,
}