
import { createContext, useContext, useState } from "react";

const RoleContext = createContext();

function useRole () {
    return useContext(RoleContext);

}

function RoleProvider({children}) {
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

export {useRole, RoleProvider};