type authContextType = {
    useSession: object
    user: boolean | null
    login: () => void
    logout: () => void
}

type user = {
    apiKey: string
    appName: string
    createdAt: string
    displayName: string
    email: string
    emailVerified: boolean
    isAnonymous: boolean
    lastLoginAt: string
    photoURL: string
    stsTokenManager: { 
        refreshToken: string
        accessToken: string 
        expirationTime: number 
    }
    uid: string
}

