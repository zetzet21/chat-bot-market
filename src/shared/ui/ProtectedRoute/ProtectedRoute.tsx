import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@app/providers/AuthProvider/AuthProvider";
import { PageLoader } from "@shared/ui/PageLoader";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <PageLoader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};
