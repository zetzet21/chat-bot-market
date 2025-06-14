import React from "react";
import { TextFieldProps } from "./textField.types";
import {
  InputContainer,
  StyledInput,
  StyledLabel,
  ErrorText,
} from "./TextField.styled";

export const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  autoFocus = false,
  ...rest
}) => (
  <InputContainer>
    {label && <StyledLabel>{label}</StyledLabel>}
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      autoFocus={autoFocus}
      $hasError={!!error}
      {...rest}
    />
    {error && <ErrorText>{error}</ErrorText>}
  </InputContainer>
);
