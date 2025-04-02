import { createContext, useContext } from "react";

interface AuthType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  activeTabId: string;
  setActiveTabId: (tabId: string) => void;
}

export const AuthContext = createContext<AuthType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (!context) throw new Error("useAuth must be used within an AuthProvider.");
    return context;
};