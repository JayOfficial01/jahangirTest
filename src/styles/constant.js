import { css } from "styled-components";

export const FlexboxStyle = ({ justify, align, gap, direction }) => css`
  display: flex;
  justify-content: ${justify || "center"};
  align-items: ${align || "center"};
  gap: ${gap || "1rem"};
  flex-direction: ${direction || "row"};
`;

export const GridBoxStyle = ({ column, align, gap }) => css`
  display: grid;
  grid-template-columns: ${column || "1fr 1fr"};
  align-items: ${align || "flex-start"};
  grid-gap: ${gap || "1rem"};
`;

export const Positioning = ({
  position,
  top,
  right,
  bottom,
  left,
  transform,
}) => css`
  position: ${position || "relative"};
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
  transform: ${transform};
`;

export const CustomSpacing = () => css`
  padding-right: 2rem;
  padding-left: 2rem;
`;
