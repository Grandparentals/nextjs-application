type authContextType = {
    user: boolean | null;
    login: () => void;
    logout: () => void;
};