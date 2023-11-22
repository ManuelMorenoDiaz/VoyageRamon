import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <h1></h1>;
  }

  if (!loading && !isAuthenticated) {
    return <Navigate to="/ingresar" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
