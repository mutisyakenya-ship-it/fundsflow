import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // AUTH STATE (from localStorage)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem("isAuthenticated") === "true";
    } catch {
      return false;
    }
  });

  const [user, setUser] = useState(() => {
  try {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
});

  const loading = false;

  //  LOGIN
  const login = (userData) => {
    // ensure role always exists
    const safeUser = {
      ...userData,
      role: userData.role || "investor", // fallback role
    };

    setIsAuthenticated(true);
    setUser(safeUser);

    try {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(safeUser));
    } catch (err) {
      console.error("AuthContext login error:", err);
    }
  };

  // 📝 REGISTER
  const register = (userData) => {
    // ensure role always exists
    const safeUser = {
      ...userData,
      role: userData.role || "investor", // fallback role
    };

    login(safeUser);
  };

  //  LOGOUT
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);

    try {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    } catch (err) {
      console.error("AuthContext logout error:", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// CUSTOM HOOK
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};