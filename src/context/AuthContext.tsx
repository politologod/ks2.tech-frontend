// AuthContext.tsx
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
    isAuthenticated: boolean;
    userData: { [key: string]: unknown } | null;
    login: () => void; // El backend maneja la cookie
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [userData, setUserData] = useState<{ [key: string]: unknown } | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const checkAuth = async () => {
        try {
            const response = await fetch( `${import.meta.env.VITE_API}/auth/verify`, {
                credentials: 'include' 
            });
                console.log("this is the response on brute: ", response);
            if (response.ok) {
                const data = await response.json();
                setIsAuthenticated(true);
                setUserData(data.user);
            } else {
                setIsAuthenticated(false);
                setUserData(null);
            }
        } catch (error: unknown) {
            setIsAuthenticated(false);
            setUserData(null);
            console.error('Error checking authentication:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = () => {
        checkAuth(); 
    };

    const logout = async () => {
        try {
            await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'include'
            });
        } finally {
            setIsAuthenticated(false);
            setUserData(null);
            Cookies.remove('authToken');
        }
    };

    if (loading) {
        return <div>Loading authentication state...</div>;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};