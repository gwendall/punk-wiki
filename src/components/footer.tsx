'use client';

import styled from "styled-components"

const FooterContainer = styled.footer`
    text-align: right;
    font-weight: bold;
    font-size: 14px;
    margin-top: 15px;
    color: rgba(0, 0, 0, 0.5);
`;

export default function Footer() { 
    return (
        <FooterContainer>
            Made by <a href="
            https://twitter.com/gwendall" target="_blank" rel="noopener noreferrer">gwendall</a>

        </FooterContainer>
    )
}