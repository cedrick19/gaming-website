import { AuthContext } from "@/hooks/useAuth";
import { useState } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [activeTabId, setActiveTabId] = useState<string>("view-home");

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn, 
        login, 
        logout, 
        activeTabId, 
        setActiveTabId 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


