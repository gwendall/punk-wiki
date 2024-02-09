'use client';

import styled from "styled-components"

const FooterContainer = styled.footer`
    text-align: right;
    margin-top: 15px;
`;

export default function Footer() { 
    return (
        <FooterContainer>
            For Punks, by Punks.
        </FooterContainer>
    )
}