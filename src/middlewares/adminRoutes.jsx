import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";

const ProtectedRoute = () => {
  const { user } = useAuth();

  console.log(user);

  if (user.role != "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
