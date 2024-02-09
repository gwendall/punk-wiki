import StyledComponentsRegistry from '~/lib/registry'
import { Montserrat } from 'next/font/google'
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import GlobalStyle from '~/components/GlobalStyle';
import PageContainer from '~/components/PageContainer';
import PageBody from '~/components/PageBody';
import React from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <StyledComponentsRegistry>
      <html>
        <body className={montserrat.className}>
          <GlobalStyle />
          <PageContainer>
            <Header />
            <PageBody>
              {children}
            </PageBody>
            <Footer />
          </PageContainer>
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
