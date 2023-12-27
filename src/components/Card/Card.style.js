import styled from "styled-components";
import { FlexboxStyle, Positioning } from "../../styles/constant";

export const CardStyle = styled.figure`
  ${Positioning};

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.DULL_WHITE_COLOR};
  border-radius: 2rem;
  margin-bottom: 2rem;
  overflow: hidden;

  .card-container {
    padding: 2rem;
    width: 100%;
    height: 100%;
    background: rgba(32, 38, 44, 0.9);

    .heading {
      text-transform: uppercase;
    }

    p {
      margin: 2rem 0;
      font-size: 1.5rem;
    }

    .action-items {
      ${FlexboxStyle({
        justify: "flex-start",
        align: "flex-start",
        gap: "3rem",
      })};

      margin-bottom: 2rem;

      @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
        flex-direction: column;
      }

      button {
        ${FlexboxStyle};

        background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
        color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
        font-weight: 500;
        padding: 1rem;
        border-radius: 5rem;
        border: none;

        cursor: pointer;

        .icon {
          ${FlexboxStyle};
        }
      }

      .range-wrapper {
        display: grid;

        @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
          width: 100%;
        }

        .range-value {
          border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};
          padding: 0.7rem;
          font-size: 1.5rem;
          width: fit-content;
          margin-top: 1rem;

          @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
            width: 100%;
            text-align: center;
          }
        }
      }
    }

    .card-footer {
      ${FlexboxStyle({ justify: "space-between" })};

      @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
        flex-direction: column;
        align-items: flex-start;
      }

      .footer-left {
        .section-heading {
          padding: 1rem 0;
        }

        button {
          margin-right: 1rem;
          background: none;
          border: none;

          cursor: pointer;

          &:first-child {
            text-decoration: underline;
          }
        }
      }

      .shop-now-button {
        padding: 1rem;
        background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
        color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
        font-weight: 700;
        border: none;
        padding: 1rem 2rem;
        border-radius: 5rem;
        text-transform: uppercase;
        cursor: pointer;

        @media (max-width: ${({ theme }) => theme.breakPoints.smallDevices}) {
          width: 100%;
        }

        &:disabled {
          background: ${({ theme }) => theme.colors.DIM_PRIMARY_COLOR};
          cursor: not-allowed;
        }
      }
    }
  }
`;
