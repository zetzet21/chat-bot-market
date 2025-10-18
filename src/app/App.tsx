import { Router } from "./router";
import { AuthProvider } from "@app/providers/AuthProvider/AuthProvider";
//import { StoreProvider } from './providers/StoreProvider';
import { ThemeProvider } from "@app/providers/ThemeProvider";
import { CartProvider } from "@app/providers/CartProvider";
import { NotificationProvider } from "@app/providers/NotificationProvider";
import { BotProvider } from "@app/providers/BotProvider";

export const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BotProvider>
          <CartProvider>
            <NotificationProvider>
              <Router />
            </NotificationProvider>
          </CartProvider>
        </BotProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
