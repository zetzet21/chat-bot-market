import { TabBarProps } from "./types";
import { TabBarContainer, TabBarItem } from "./TabBar.styled";

export const TabBar = ({
  tabs,
  activeTab,
  onTabChange,
  variant,
  size,
  fullWidth,
}: TabBarProps) => {
  return (
    <TabBarContainer variant={variant} size={size} fullWidth={fullWidth}>
      {tabs.map((tab) => (
        <TabBarItem
          active={activeTab === tab.id}
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </TabBarItem>
      ))}
    </TabBarContainer>
  );
};
