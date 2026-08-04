import { Dimension } from "@shared/types/dimensions";

export interface TabBarProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  variant: "underline" | "pills";
  size: Dimension;
  fullWidth?: boolean;
}

export interface TabItem {
  id: string;
  label: string;
}
