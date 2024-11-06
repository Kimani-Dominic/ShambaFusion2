import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const RoleContext = createContext();

export function useRole() {
    return useContext(RoleContext);
}

export function RoleProvider({ children }) {
    const [role, setRole] = useState(null);
    const navigate = useNavigate();

    const changeRole = (newRole) => {
        setRole(newRole);
        if (newRole === 'seller') {
            navigate('/seller-dashboard');
        } else if (newRole === 'buyer') {
            navigate('/buyer-dashboard');
        } else if (newRole === 'vendor') {
            navigate('/vendor-dashboard');
        }
    };

    return (
        <RoleContext.Provider value={{ role, changeRole }}>
            {children}
        </RoleContext.Provider>
    );
}
