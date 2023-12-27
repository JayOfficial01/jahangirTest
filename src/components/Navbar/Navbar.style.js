import styled from "styled-components";
import { FlexboxStyle, Positioning } from "../../styles/constant";

export const NavbarStyle = styled.nav`
  ${Positioning({ position: "fixed", top: "0", left: 0 })};
  ${FlexboxStyle({ justify: "space-between", gap: "3rem" })};

  width: 100%;
  background: ${({ theme }) => theme.colors.SECONDARY_COLOR};
  padding: 3rem;
  z-index: 10;

  .navbar-left {
    ${FlexboxStyle({ gap: "3rem" })};

    .menu-icon {
      color: ${({ theme }) => theme.colors.DULL_WHITE_COLOR};
      font-size: 3.5rem;

      display: none;
      cursor: pointer;

      @media (max-width: ${({ theme }) => theme.breakPoints.tablets}) {
        ${FlexboxStyle};
      }
    }

    img {
      width: 2rem;
    }
  }

  .orders-button {
    padding: 0.5rem;
    font-size: 2.5rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.WHITE_COLOR};
    cursor: pointer;
    display: none;

    @media (max-width: ${({ theme }) => theme.breakPoints.largeDevices}) {
      ${FlexboxStyle};
    }

    .order-number {
      color: ${({ theme }) => theme.colors.WHITE_COLOR};
      font-weight: 500;
      font-size: 1rem;
    }
  }
`;
