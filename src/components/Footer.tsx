'use client';

import styled from "styled-components"
import StyledLink from "./StyledLink";

const FooterContainer = styled.footer`
    text-align: right;
    margin-top: 15px;
`;

export default function Footer() { 
    return (
        <FooterContainer>
            <StyledLink
                href="https://github.com/gwendall/punk-wiki/blob/main/src/data/projects.ts"
                target="_blank"
                style={{
                    fontWeight: 'normal',
                    color: 'inherit'
                }}
            >
                Data
            </StyledLink>
            {' - '}
            <StyledLink
                href="https://github.com/gwendall/punk-wiki"
                target="_blank"
                style={{
                    fontWeight: 'normal',
                    color: 'inherit'
                }}
            >
                Open Source Code
            </StyledLink>
            {' - For Punks, by Punks.'}
        </FooterContainer>
    )
}