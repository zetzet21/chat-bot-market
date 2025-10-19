import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { Layout } from "@widgets/Layout";
import { PageLoader } from "@shared/ui/PageLoader";
import { ProtectedRoute } from "@shared/ui/ProtectedRoute";

const AboutPage = lazy(() => import("@pages/AboutPage/AboutPage"));
const BotDetailsPage = lazy(() => import("@pages/BotDetailsPage"));
const AuthPage = lazy(() => import("@pages/AuthorizationPage/AuthPage"));
const CatalogPage = lazy(() => import("@pages/CatalogPage"));
const CartPage = lazy(() => import("@pages/CartPage"));
const ImplementationPage = lazy(
  () => import("@pages/ImplementationPage/ImplementationPage")
);
const BotAnalyticsPage = lazy(
  () => import("@pages/BotAnalyticsPage/BotAnalyticsPage")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/about" replace />,
      },
      {
        path: "catalog",
        element: (
          <Suspense fallback={<PageLoader />}>
            <CatalogPage />
          </Suspense>
        ),
        handle: {
          crumb: () => "Каталог",
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
        path: "about",
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
        handle: {
          crumb: () => "О нас",
        },
      },
      {
        path: "implementation",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<PageLoader />}>
              <ImplementationPage />
            </Suspense>
          </ProtectedRoute>
        ),
        handle: {
          crumb: () => "Внедрение",
        },
      },
      {
        path: "implementation/:botId",
        element: (
          <Suspense fallback={<PageLoader />}>
            <BotAnalyticsPage />
          </Suspense>
        ),
        handle: {
          crumb: () => "Аналитика бота",
          requiresAuth: true,
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
