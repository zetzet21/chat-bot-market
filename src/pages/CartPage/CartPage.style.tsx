import styled from "styled-components";

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.Black};
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 20px;
  gap: 80px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const CartHeaderStep = styled.div<{ active: boolean }>`
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 2px;
    background-color: ${({ active, theme }) =>
      active ? theme.colors.Black : "transparent"};
    transition: background-color 0.3s ease;
  }
`;

export const CartContent = styled.div`
  flex: 1;
  padding: 40px;
`;
