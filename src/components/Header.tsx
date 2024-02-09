'use client';

import Link from "next/link";
import styled from "styled-components";
import * as COLORS from '~/lib/colors';
import PunkButton from "./punkbutton";

const Title = styled.h1`
  color: ${COLORS.punks};
  font-weight: bold;
  font-size: 26px;
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export default function Header() {
    return (
      <HeaderContainer>
        <Title as={Link} href="/">Punk.wiki</Title>
        <PunkButton as={Link} href="/add">Add something</PunkButton>
      </HeaderContainer>
    )
}