import React from "react";
import {
  HeaderContainer,
  Logo,
  Menu,
  RightBlock,
  SupportText,
  FundLogo,
} from "./Header.style";
import { Button } from "@shared/ui/Button/Button";
import { ButtonAppearence } from "@shared/ui/Button/button.types";
import { useAuth } from "@app/providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "@app/providers/CartProvider";

// TODO: Replace with your actual SVG icon import
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="4" width="24" height="2" fill="#2d1c1c" />
    <rect y="11" width="24" height="2" fill="#2d1c1c" />
    <rect y="18" width="24" height="2" fill="#2d1c1c" />
  </svg>
);

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Loquent<sup>®</sup>
      </Logo>
      <Menu>
        <Button
          label="Каталог"
          appearence={ButtonAppearence.GHOST}
          dimension="m"
          onClick={() => navigate("/catalog")}
        />
        <Button
          label="Внедрение"
          appearence={ButtonAppearence.GHOST}
          dimension="m"
          onClick={() => navigate("/implementation")}
        />
        <Button
          label="О нас"
          appearence={ButtonAppearence.GHOST}
          dimension="m"
          onClick={() => navigate("/about")}
        />
        <Button
          label="Личный кабинет"
          appearence={ButtonAppearence.GHOST}
          dimension="m"
          frontIcon={<MenuIcon />}
          onClick={() => navigate("/dashboard")}
        />
        <Button
          label="Корзина"
          appearence={ButtonAppearence.GHOST}
          dimension="m"
          onClick={() => navigate("/cart")}
        />
      </Menu>
      <RightBlock>
        <SupportText>проект создан при поддержке ФСИ</SupportText>
        <FundLogo src="/foundation.svg" alt="Фонд содействия инновациям" />
      </RightBlock>
    </HeaderContainer>
  );
};
