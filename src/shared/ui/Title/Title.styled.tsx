import styled, { css } from "styled-components";
import {
  TitleProps,
  TitleDimension,
  TitleWeight,
  TitleColor,
} from "./title.types";
import { theme } from "@app/styles/theme";

const getDimensionStyles = (dimension: TitleDimension) => {
  switch (dimension) {
    case "s":
      return css`
        font-size: 16px;
        line-height: 24px;
      `;
    case "m":
      return css`
        font-size: 20px;
        line-height: 28px;
      `;
    case "l":
      return css`
        font-size: 24px;
        line-height: 32px;
      `;
    case "xl":
      return css`
        font-size: 32px;
        line-height: 40px;
      `;
    case "xxl":
      return css`
        font-size: 40px;
        line-height: 48px;
      `;
    default:
      return css`
        font-size: 24px;
        line-height: 32px;
      `;
  }
};

const getWeightStyles = (weight: TitleWeight) => {
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
        font-weight: 500;
      `;
  }
};

const getColorStyles = (color: TitleColor) => {
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
    default:
      return css`
        color: #f;
      `;
  }
};

export const StyledTitle = styled.h2<TitleProps>`
  ${({ dimension = "l" }) => getDimensionStyles(dimension)};
  ${({ weight = "medium" }) => getWeightStyles(weight)};
  ${({ color = "primary" }) => getColorStyles(color)};
  margin-bottom: 16px;
`;
