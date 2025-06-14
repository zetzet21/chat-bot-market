import { Dimension } from "@shared/types/dimensions";
import { MouseEventHandler, ReactNode } from "react";

export interface IButton {
  label?: string;
  onClick: (event: any) => void;
  dimension?: Dimension;
  appearence?: ButtonAppearence;
  disabled?: boolean;
  frontIcon?: ReactNode;
  backIcon?: ReactNode;
}

export enum ButtonAppearence {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  GHOST = "ghost",
  ROUND = "round",
}
