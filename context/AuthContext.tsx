import { createContext, useContext, ReactNode, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import router from "next/router";
import { session } from "../lib/session";

const authContextDefaultValues: authContextType = {
    useSession: {},
    user: null,
    login: () => { },
    logout: () => { },
};

const AuthContext = createContext<authContextType|any>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [ useSession, setSession ] = useState<user>();
    const [ user, setUser ] = useState<boolean|null>(null);

    const provider = new GoogleAuthProvider();

    const login = () => {
        signInWithPopup(auth, provider)
            .then((result: any) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user as user;
                setSession(user)
                setUser(true);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                setSession(undefined)
                setUser(false);
            });
    };

    const logout = () => {
        auth.signOut();
    };

    const value = {
        useSession,
        user,
        login,
        logout,
    };
    

    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            if (user) {
                session.set('user', user)
                user = user as user
                setSession(user)
                if (router.pathname === '/')
                    router.push('/user');
            } else {
                session.delete('user')
                setSession(undefined)
                router.push('/')
            }
        });
    }, []);

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}