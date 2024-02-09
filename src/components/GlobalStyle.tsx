'use client';

import { createGlobalStyle } from 'styled-components';
import * as COLORS from '~/lib/colors';

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

export default GlobalStyle;