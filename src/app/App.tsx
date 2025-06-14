import { Router } from "./router";
import { AuthProvider } from "@app/providers/AuthProvider/AuthProvider";
//import { StoreProvider } from './providers/StoreProvider';
import { ThemeProvider } from "@app/providers/ThemeProvider";

export const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
};
