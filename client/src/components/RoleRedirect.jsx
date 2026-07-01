import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RoleRedirect() {
  const { user } = useAuth();

  // safety check (if no user)
  if (!user) {
    return <Navigate to="/login" />;
  }

  // redirect based on role (case-insensitive)
  const normalizedRole = user.role?.toLowerCase();

  if (normalizedRole === "investor") {
    return <Navigate to="/investor/dashboard" />;
  }

  if (normalizedRole === "entrepreneur") {
    return <Navigate to="/entrepreneur/dashboard" />;
  }

  // fallback (just in case)
  return <Navigate to="/" />;
}