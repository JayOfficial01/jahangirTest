import styled from "styled-components";
import { FlexboxStyle, Positioning } from "../../styles/constant";

export const DashboardStyle = styled.main`
  ${Positioning};

  margin-top: 6rem;
`;
export const DashboardContentStyle = styled.article`
  padding: 1rem 32rem 3rem 32rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.largeDevices}) {
    padding-right: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablets}) {
    padding-left: 3rem;
  }

  .title {
    margin-bottom: 2rem;
  }
`;
export const LeftSideBarStyle = styled.aside`
  ${Positioning({ position: "fixed", top: "10rem", left: "0" })};
  ${FlexboxStyle({
    direction: "column",
    justify: "space-between",
    align: "flex-start",
  })}

  background: ${({ theme }) => theme.colors.SECONDARY_COLOR};
  color: ${({ theme }) => theme.colors.DULL_WHITE_COLOR};
  height: calc(100vh - 10rem);
  width: 30rem;
  padding: 3rem;
  transition: 0.3s all linear;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablets}) {
    left: ${({ active }) => (active ? "0" : "-100rem")};
  }

  .top-section {
    width: 100%;

    .section-header {
      ${FlexboxStyle({ justify: "space-between", align: "flex-end" })};

      .greeting-text {
        font-weight: 300;
        text-transform: uppercase;
      }

      h3 {
        font-weight: 300;
      }
    }

    .user-detial {
      ${FlexboxStyle({ justify: "space-between", align: "flex-start" })};

      margin-top: 0.5rem;

      h2 {
        font-size: 2.3rem;
        font-weight: 800;
      }
    }

    .address-wrapper {
      margin-top: 2rem;

      .title {
        font-weight: 500;
      }

      button {
        ${FlexboxStyle}
        background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
        padding: 1rem 2rem;
        margin-top: 1rem;
        border-radius: 5rem;
        color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
        border: none;
        font-weight: 600;
        cursor: pointer;

        span {
          ${FlexboxStyle}

          font-weight: 800;
        }
      }

      .add-more-address-button {
        margin-top: 1.2rem;
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
        cursor: pointer;
      }
    }
  }

  .bottom-foot-section {
    list-style: none;

    margin-top: 3rem;

    li {
      a {
        display: block;
        padding: 1rem;
        font-size: 1.5rem;
        transition: 0.3s all linear;

        &:hover {
          color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
        }
      }
    }
  }
`;
export const RightSideBarStyle = styled.aside`
  ${Positioning({ position: "fixed", top: "10.5rem", right: "0" })};

  height: calc(100vh - 10rem);
  width: 30rem;
  padding: 3rem;
  transition: 0.3s all linear;
  z-index: 10;
  border-left: 0.3rem solid ${({ theme }) => theme.colors.GRAY_COLOR};
  background: ${({ theme }) => theme.colors.WHITE_COLOR};

  @media (max-width: ${({ theme }) => theme.breakPoints.largeDevices}) {
    right: ${({ active }) => (active ? "0" : "-100rem")};
  }

  .title {
    color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
    margin-bottom: 2rem;
  }

  .order {
    ${FlexboxStyle({ justify: "space-between" })};

    margin-bottom: 2rem;

    .order-left {
      ${FlexboxStyle({ justify: "flex-start" })};

      h3 {
        font-weight: 300;
        font-size: 1.4rem;
        text-transform: uppercase;
      }
    }

    .cross-icon {
      font-size: 1.2rem;

      cursor: pointer;
    }
  }

  .note {
    font-weight: 500;
    font-size: 1.3rem;
  }
`;
