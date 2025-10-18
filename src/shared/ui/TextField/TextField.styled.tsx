import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledLabel = styled.label<{
  mode: "light" | "dark";
}>`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.s};
  color: ${({ mode, theme }) =>
    mode === "light" ? theme.colors.text : theme.colors.WhiteSolid};
`;

export const InputWrapper = styled.div<{
  mode: "light" | "dark";
}>`
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ mode, theme }) =>
      mode === "light" ? theme.colors.GrayLight : theme.colors.WhiteSolid};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  height: 56px;
  transition: border-color 0.2s;
  background-color: ${({ mode, theme }) =>
    mode === "light" ? theme.colors.WhiteSolid : theme.colors.Black};
  &:focus-within {
    border-color: ${({ mode, theme }) =>
      mode === "light" ? theme.colors.primary : theme.colors.WhiteSolid};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: ${({ mode, theme }) =>
      mode === "light" ? theme.colors.GrayDark : theme.colors.WhiteSolid};

    &.front-icon {
      margin-left: ${({ theme }) => theme.spacing.md};
      margin-right: 12px;
    }

    &.back-icon {
      margin-right: ${({ theme }) => theme.spacing.md};
      margin-left: 12px;
    }
  }
`;

export const StyledInput = styled.input<{
  mode: "light" | "dark";
  $hasError: boolean;
  hasFrontIcon: boolean;
  hasBackIcon: boolean;
}>`
  flex: 1;
  background: ${({ mode, theme }) =>
    mode === "light" ? "transparent" : theme.colors.Black};
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.typography.fontSize.s};
  color: ${({ mode, theme }) =>
    mode === "light" ? theme.colors.text : theme.colors.WhiteSolid};
  padding: 0;
  padding-left: ${(props) =>
    props.hasFrontIcon ? "0" : props.theme.spacing.md};
  padding-right: ${(props) =>
    props.hasBackIcon ? "0" : props.theme.spacing.md};

  &::placeholder {
    color: ${({ mode, theme }) =>
      mode === "light" ? theme.colors.GrayDark : theme.colors.GrayDark};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;
