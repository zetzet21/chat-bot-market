import styled from "styled-components";

export const AuthPageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const LeftPanel = styled.div`
  width: 35vw;
  min-width: 340px;
  max-width: 480px;
  background: ${({ theme }) => theme.colors.GrayLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px 24px 24px;
  position: relative;
`;

export const RightPanel = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const Logo = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 48px;
    height: 48px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  width: 100%;
  text-align: center;
`;
