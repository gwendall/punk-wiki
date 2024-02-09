'use client';

import StyledComponentsRegistry from '~/lib/registry'
import { Montserrat } from 'next/font/google'
import styled, { createGlobalStyle } from 'styled-components';
import Header from '~/components/header';
import Footer from '~/components/footer';
import * as COLORS from '~/lib/colors';

const montserrat = Montserrat({ subsets: ['latin'] });

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    line-height: 1.8em;
    color: #272727;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: ${COLORS.punks};
    text-decoration: none;
    @media(hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    
    }
  }
`;

const PageContainer = styled.main`
  padding: 15px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
`;

const PageBody = styled.div`
  flex: 1;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={montserrat.className}>
        <GlobalStyle />
        <StyledComponentsRegistry>
          <PageContainer>
            <Header />
            <PageBody>
              {children}
            </PageBody>
            <Footer />
          </PageContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}