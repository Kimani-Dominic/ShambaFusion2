
import { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export function useRole () {
    return useContext(RoleContext);

}

export function RoleProvider({children}) {
    const [role, setRole] = useState('seller');

    const changeRole = (newRole) => {
        setRole(newRole);
    }

    return(
        <RoleContext.Provider value={{role, changeRole}} >
            {children}
        </RoleContext.Provider>
    )
}

