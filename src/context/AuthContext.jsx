import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize synchronously from localStorage to avoid setState inside an effect
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem('isAuthenticated') === 'true';
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      return false;
    }
  });

  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : null;
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      return null;
    }
  });

  const loading = false; // no async init needed since state is read synchronously

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    try {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (err) {
      console.error('AuthContext: error storing auth state', err);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    try {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    } catch (err) {
      console.error('AuthContext: error clearing auth state', err);
    }
  };

  const register = (userData) => {
    // For now, register behaves like login: persist user and mark authenticated
    login(userData);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
