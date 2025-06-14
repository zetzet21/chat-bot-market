import { Header } from "@features/header";
import { LayoutContainer, MainContent } from "./Layout.styled";
import { Footer } from "@features/footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};
