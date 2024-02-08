'use client';

import styled from "styled-components"

const FooterContainer = styled.footer`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
`;

export default function Footer() { 
    return (
        <FooterContainer>
            Made by <a href="
            https://twitter.com/gwendall" target="_blank" rel="noopener noreferrer">gwendall</a>

        </FooterContainer>
    )
}