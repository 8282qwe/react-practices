import React from 'react';
import styled from "styled-components";

const StyleH1 = styled.h1`
    width: 420px;
    font-size: 14px;
    text-align: center;
    margin: 100px auto;
    padding: 20px 20px 20px 20px;
    border: 2px solid #999;
    color: #1144fe;
    background-color: #cdc1ce;
`;

function Header(props) {
    return (
        <StyleH1>
            {"SASS & SCSS"}
        </StyleH1>
    );
}

export default Header;