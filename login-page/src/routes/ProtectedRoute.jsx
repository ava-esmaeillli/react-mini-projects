import { getToken } from '../services/auth'
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const token = getToken();
  if (token) {
    return children;
  }
  return <Navigate to="/login" replace />;
}

export function PublicRoute({ children }) {
  const token = getToken();
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}

