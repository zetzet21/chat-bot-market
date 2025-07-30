import React, { HTMLAttributes } from "react";

export type TextDimension = "s" | "m" | "l" | "xl" | "xxl";
export type TextWeight = "normal" | "medium" | "semibold" | "bold";
export type TextColor =
  | "primary"
  | "secondary"
  | "dark"
  | "danger"
  | "success"
  | "white";

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  dimension?: TextDimension;
  weight?: TextWeight;
  color?: TextColor;
  children: React.ReactNode;
}
