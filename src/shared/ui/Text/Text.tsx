import React from "react";
import { StyledText } from "./Text.styled";
import { TextProps } from "./text.types";

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};
