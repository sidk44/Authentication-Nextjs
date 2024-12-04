"use client";
//importing essential components
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../lib/auth';

interface AuthContextType {
    user: User | null;
    }
    // Creating a context to provide authentication state throughout the app.
    const AuthContext = createContext<AuthContextType | undefined>(undefined);

    //AuthProvider Component: Ensures the authentication state (`user`) is accessible globally.
    export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser || null);
    });
    return () => unsubscribe();
    }, []);

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
    };
    //Custom Hook: useAuth
    //Throws an error if used outside of an `AuthProvider`.
    export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
