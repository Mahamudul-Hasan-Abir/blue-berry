import React from "react";
import { useLocation, Navigate } from "react-router-dom";
const getToken = () => {
  const persistedAuth = localStorage.getItem("persist:auth");

  if (persistedAuth) {
    const parsedAuth = JSON.parse(persistedAuth);
    return JSON.parse(parsedAuth.token); // Assuming token is stored as a JSON string
  }
  console.error("No auth data found in local storage");
  return null; // Return null if no token is found
};
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
