import styled from "styled-components";

export const PaginationContainer = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.GrayLight || "#ccc"};
  background: ${({ theme }) => theme.colors.white || "#fff"};
  color: ${({ theme }) => theme.colors.text || "#222"};
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
