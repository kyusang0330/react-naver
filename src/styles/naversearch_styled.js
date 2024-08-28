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
    border: 1px solid forestgreen;
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

export {
    NaverSearchContainer,
    Main,
    NaverSearchKey,
};