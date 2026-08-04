import React from "react";
import { StyledTitle } from "./Title.styled";
import { TitleProps } from "./title.types";

export const Title: React.FC<TitleProps> = ({
  children,
  as = "h2",
  ...props
}) => {
  return (
    <StyledTitle as={as} {...props}>
      {children}
    </StyledTitle>
  );
};
