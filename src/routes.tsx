import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./features/header/Header";
import HomePage from "./pages/HomePage";
import BotDetailsPage from "./pages/BotDetailsPage";
import CartPage from "./pages/CartPage";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bot/:id" element={<BotDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
