import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

export const StyledInput = styled.input<{ $hasError?: boolean }>`
  padding: 10px 14px;
  border: 1.5px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.Gray20};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.Gray38};
    color: ${({ theme }) => theme.colors.Gray38};
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.92rem;
  margin-top: 2px;
`;
