'use client';

import styled from "styled-components"
import StyledLink from "./StyledLink";

const FooterContainer = styled.footer`
    text-align: right;
    padding: 15px 0;
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
                Codebase
            </StyledLink>
            {' - For Punks, by Punks.'}
        </FooterContainer>
    )
}