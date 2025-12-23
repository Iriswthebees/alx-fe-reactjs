import { Navigate } from "react-router-dom";

function useAuth() {
  const isAuthenticated = false; // mock auth state
  return { isAuthenticated };
}

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // simulate auth state

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
