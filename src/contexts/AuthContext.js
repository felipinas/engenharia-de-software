import React, { useState, useEffect, createContext, useContext } from 'react';
import { auth } from '../firebase-config';

import { userApi } from '../api/user.api';
import Loading from '../pages/Loading';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [pending, setPending] = useState(true);

    function signUp(data) {
        return userApi.create(data);
    }

    function login(email, password) {
        return userApi.login(email, password);
    }

    function logout() {
        return userApi.logout();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setPending(false);
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signUp,
        login,
        logout
    }

    if (pending) {
        return <Loading />
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}