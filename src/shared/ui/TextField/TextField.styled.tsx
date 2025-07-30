import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  height: 56px;
  transition: border-color 0.2s;

  &:focus-within {
    border-color: #fff;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: rgba(255, 255, 255, 0.7);

    &.front-icon {
      margin-left: 16px;
      margin-right: 12px;
    }

    &.back-icon {
      margin-right: 16px;
      margin-left: 12px;
    }
  }
`;

export const StyledInput = styled.input<{
  $hasError: boolean;
  hasFrontIcon: boolean;
  hasBackIcon: boolean;
}>`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  padding: 0;
  padding-left: ${(props) => (props.hasFrontIcon ? "0" : "16px")};
  padding-right: ${(props) => (props.hasBackIcon ? "0" : "16px")};

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.div`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
`;
