import styled from 'styled-components';

const NaverSearchContainer = styled.div`
    display: flex;
    justify-content: center;    
    padding: 10px;
`;

const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 706px;
    height: 58px;
    border: 1px solid #03c75a;
    border-radius: 33px;
`;

const NaverSearchKey = styled.input`
    width: 480px;
    height: 24px;
    padding: 17px;
    position: relative;
    z-index: 10;
    border: none;
`;

const NaverLogo = styled.svg`
    width: 24px;
    height: 24px;
    fill: #03c75a;
`;

const NaverSearchButton = styled.button`
    border: none;
    background-color: white;
`;
const NaverSearchButtonSvg = styled.svg`
    width: 25px;
    height: 25px;
    fill: #03c75a;
`;

export {
    NaverSearchContainer,
    Main,
    NaverSearchKey,
    NaverLogo,
    NaverSearchButton,
    NaverSearchButtonSvg,
};