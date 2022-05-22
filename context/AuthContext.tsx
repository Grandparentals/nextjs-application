import { createContext, useContext, ReactNode, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import router from "next/router";
import { session } from "../lib/session";

const authContextDefaultValues: authContextType = {
    user: null,
    login: () => { },
    logout: () => { },
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<boolean|null>(null);

    const provider = new GoogleAuthProvider();

    const login = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
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
                setUser(false);
            });
    };

    const logout = () => {
        auth.signOut();
    };

    const value = {
        user,
        login,
        logout,
    };
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                session.set('user', user)
                router.push('/user')
            } else {
                session.delete('user')
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