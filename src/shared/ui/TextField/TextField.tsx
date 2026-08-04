import React from "react";
import { TextFieldProps } from "./textField.types";
import {
  InputContainer,
  StyledInput,
  StyledLabel,
  ErrorText,
  InputWrapper,
} from "./TextField.styled";

export const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  type = "text",
  value,
  onChange,
  placeholder = "Введите текст",
  disabled = false,
  autoFocus = false,
  frontIcon,
  backIcon,
  mode = "light",
  ...rest
}) => (
  <InputContainer>
    {label && <StyledLabel mode={mode}>{label}</StyledLabel>}
    <InputWrapper mode={mode}>
      {frontIcon && <div className="icon front-icon">{frontIcon}</div>}
      <StyledInput
        mode={mode}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        $hasError={!!error}
        hasFrontIcon={!!frontIcon}
        hasBackIcon={!!backIcon}
        {...rest}
      />
      {backIcon && <div className="icon back-icon">{backIcon}</div>}
    </InputWrapper>
    {error && <ErrorText>{error}</ErrorText>}
  </InputContainer>
);
