import { createContext, useContext, useState } from "react";

interface AuthType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthType | undefined>(undefined)

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error ("useAuth must be used within an AuthProvider.");
    return context;
}