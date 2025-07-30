import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Layout } from "@widgets/Layout";
import { PageLoader } from "@shared/ui/PageLoader";

const BotDetailsPage = lazy(() => import("@pages/BotDetailsPage"));
const AuthPage = lazy(() => import("@pages/AuthorizationPage/AuthPage"));
const HomePage = lazy(() => import("@pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("@pages/CatalogPage"));
const CartPage = lazy(() => import("@pages/CartPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<PageLoader />}>{<HomePage />}</Suspense>,
      },
      {
        path: "catalog",
        element: (
          <Suspense fallback={<PageLoader />}>{<CatalogPage />}</Suspense>
        ),
        handle: {
          crumb: () => "Каталог", // Для хлебных крошек
        },
      },
      {
        path: "catalog/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            <BotDetailsPage />
          </Suspense>
        ),
        handle: {
          crumb: (data: { bot: { name: string } }) => data.bot.name,
        },
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<PageLoader />}>
            <CartPage />
          </Suspense>
        ),
        handle: {
          crumb: () => "Корзина",
        },
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<PageLoader />}>
            {/* <DashboardPage /> */}
          </Suspense>
        ),
        handle: {
          crumb: () => "Личный кабинет",
          requiresAuth: true, // Защищенный маршрут
        },
      },
      {
        path: "auth",
        element: (
          <Suspense fallback={<PageLoader />}>
            <AuthPage />
          </Suspense>
        ),
        handle: {
          crumb: () => "Авторизация",
          hideWhenAuth: true, // Скрывать для авторизованных
        },
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<PageLoader />}>
            {/* <NotFoundPage /> */}
          </Suspense>
        ),
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
