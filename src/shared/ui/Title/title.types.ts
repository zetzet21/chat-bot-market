export type TitleDimension = "s" | "m" | "l" | "xl" | "xxl";
export type TitleWeight = "normal" | "medium" | "semibold" | "bold";
export type TitleColor = "primary" | "secondary" | "dark" | "white";

export interface TitleProps {
  dimension?: TitleDimension;
  weight?: TitleWeight;
  color?: TitleColor;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
