import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const ProtectedRoute = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
