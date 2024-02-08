import styled from "styled-components";
import * as COLORS from '~/lib/colors';

const PunkButton = styled.button`
  all: unset;
  box-sizing: border-box;
  background-color: ${COLORS.punks};
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  padding: 12px 15px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 200ms ease;
  @media(hover: hover) {
    &:hover {
      background-color: black;
    }
  }
`;

export default PunkButton;