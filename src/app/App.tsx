import { Router } from "./router";
import { AuthProvider } from "@app/providers/AuthProvider/AuthProvider";
//import { StoreProvider } from './providers/StoreProvider';
import { ThemeProvider } from "@app/providers/ThemeProvider";
import { CartProvider } from "@app/providers/CartProvider";
import { NotificationProvider } from "@app/providers/NotificationProvider";

export const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <NotificationProvider>
            <Router />
          </NotificationProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
