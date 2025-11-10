import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("hotel_user");
    return raw ? JSON.parse(raw) : null;
  });

  const login = (data) => {
    setUser(data);
    localStorage.setItem("hotel_user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("hotel_user");
  };

  useEffect(() => {
    // could verify token with /api/protected/ping
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
