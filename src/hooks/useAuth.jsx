import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [authenticated, changeAuthenticated] = useState(false);

    const changeAuthState = (state) => {
        changeAuthenticated(state)
        console.log("Auth State Changed");
        localStorage.setItem('authenticated', 'true')
    };

    return (
        <AuthContext.Provider value={{authenticated, changeAuthState}}>
            {children}
        </AuthContext.Provider>
    )
}