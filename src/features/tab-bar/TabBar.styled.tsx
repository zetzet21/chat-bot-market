import styled, { css } from "styled-components";
import { TabBarProps } from "./types";
import { Dimension } from "@shared/types";

const calcFont = (size?: Dimension) => {
  if (size) {
    return css`
      ${({ theme }) =>
        `font-size: ${theme.typography.fontSize[size]};
           font-weight${theme.typography.fontWeight[size]};
            line-height${theme.typography.lineHeight[size]};
        `}
    `;
  }
};

const calcTabBarContainerStyles = ({ fullWidth }: Partial<TabBarProps>) => {
  if (fullWidth) {
    return css`
      justify-content: space-around;
    `;
  }
};

export const TabBarContainer = styled.div<Partial<TabBarProps>>`
  display: flex;
  justify-content: center;
  padding: 16px;
  gap: 16px;
  ${({ size }) => calcFont(size)}
  ${(props) => calcTabBarContainerStyles(props)}
`;

const calcTabBarItemStyles = (active?: boolean) => {
  if (active) {
    return css`
      color: ${({ theme }) => theme.colors.GrayLight};
      border-bottom: 2px solid ${({ theme }) => theme.colors.GrayLight};
    `;
  }
  return css`
    color: ${({ theme }) => theme.colors.GrayDark};
    border-bottom: 2px solid ${({ theme }) => theme.colors.GrayDark};
  `;
};

export const TabBarItem = styled.div<{ active: boolean }>`
  display: flex;
  background: transparent;
  padding: 8px 16px;
  cursor: pointer;
  flex: 1;
  justify-content: center;
  ${({ active }) => calcTabBarItemStyles(active)}
`;
