import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "@app/styles/theme";
import { GlobalStyle } from "@app/styles";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
