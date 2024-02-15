import styled from "styled-components";
import * as COLORS from '~/lib/colors';

const StyledLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  transition: all 200ms ease;
  color: rgba(0, 0, 0, 0.4);
  @media(hover: hover) {
    &:hover {
      color: ${COLORS.punks};
      text-decoration: underline;
    }
  }
`;

export default StyledLink;