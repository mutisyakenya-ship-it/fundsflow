import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, role }) {
  const { isAuthenticated, user } = useAuth();

  // Not logged in → redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Role-based protection (optional)
  if (role && user?.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Otherwise render the protected component
  return children;
}

export default PrivateRoute;
