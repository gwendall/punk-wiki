'use client';

import Link from "next/link";
import styled from "styled-components";
import * as COLORS from '~/lib/colors';
import PunkButton from "./PunkButton";
import StyledLink from "./StyledLink";

const Title = styled.h1`
  color: ${COLORS.punks};
  font-weight: bold;
  font-size: 22px;
  text-decoration: none;
  margin: 0;
  @media(hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function Header() {
    return (
      <HeaderContainer>
        <Title as={Link} href="/">punk.wiki</Title>
        <FlexRow style={{ marginLeft: 'auto' }}>
          <StyledLink href="/telegram" style={{ marginRight: 15, fontWeight: 'normal', color: 'inherit' }}>
            Telegram
          </StyledLink>
          <PunkButton as={Link} href="/add">Add something</PunkButton>
        </FlexRow>
      </HeaderContainer>
    )
}