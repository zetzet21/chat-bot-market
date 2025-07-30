import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "@app/providers/CartProvider";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </Router>
  );
}

export default App;
