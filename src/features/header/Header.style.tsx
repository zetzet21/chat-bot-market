import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.colors.WhiteSolid}, ${theme.colors.background})`};
  color: #2d1c1c;
`;

export const Logo = styled.div`
  font-family: "Arial Black", Arial, sans-serif;
  font-size: 56px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #2d1c1c;
  display: flex;
  align-items: flex-start;
  sup {
    font-size: 18px;
    margin-left: 2px;
    vertical-align: super;
  }
`;

export const Menu = styled.nav`
  display: flex;
  gap: 48px;
  align-items: center;
`;

export const MenuItem = styled.div`
  font-size: 24px;
  color: #2d1c1c;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: inherit;
`;

export const RightBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  max-width: 280px;
  flex-shrink: 0;
`;

export const SupportText = styled.div`
  font-size: 11px;
  line-height: 1.4;
  text-align: right;
  color: #2d1c1c;
`;

export const FundLogoLink = styled(Link)`
  display: block;
  width: 100%;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const FundLogo = styled.img`
  width: 100%;
  display: block;
`;
