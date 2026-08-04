import styled, { css } from "styled-components";
import { TextProps, TextDimension, TextWeight, TextColor } from "./text.types";

const getDimensionStyles = (dimension: TextDimension) => {
  switch (dimension) {
    case "s":
      return css`
        font-size: 12px;
        line-height: 16px;
      `;
    case "m":
      return css`
        font-size: 14px;
        line-height: 20px;
      `;
    case "l":
      return css`
        font-size: 16px;
        line-height: 24px;
      `;
    case "xl":
      return css`
        font-size: 18px;
        line-height: 28px;
      `;
    case "xxl":
      return css`
        font-size: 20px;
        line-height: 32px;
      `;
    default:
      return css`
        font-size: 16px;
        line-height: 24px;
      `;
  }
};

const getWeightStyles = (weight: TextWeight) => {
  switch (weight) {
    case "normal":
      return css`
        font-weight: 400;
      `;
    case "medium":
      return css`
        font-weight: 500;
      `;
    case "semibold":
      return css`
        font-weight: 600;
      `;
    case "bold":
      return css`
        font-weight: 700;
      `;
    default:
      return css`
        font-weight: 400;
      `;
  }
};

const getColorStyles = (color: TextColor) => {
  switch (color) {
    case "primary":
      return css`
        color: ${({ theme }) => theme.colors.Black};
      `;
    case "secondary":
      return css`
        color: rgba(255, 255, 255, 0.7);
      `;
    case "dark":
      return css`
        color: ${({ theme }) => theme.colors.Black};
      `;
    case "white":
      return css`
        color: ${({ theme }) => theme.colors.WhiteSolid};
      `;
    case "danger":
      return css`
        color: #ff4d4f;
      `;
    case "success":
      return css`
        color: #52c41a;
      `;
    default:
      return css`
        color: #fff;
      `;
  }
};

export const StyledText = styled.span<TextProps>`
  ${({ dimension = "l" }) => getDimensionStyles(dimension)};
  ${({ weight = "normal" }) => getWeightStyles(weight)};
  ${({ color = "primary" }) => getColorStyles(color)};
`;
