import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    const { authenticated, changeAuthState } = useAuth(); // Use the hook directly here

    useEffect(() => {
        changeAuthState(false);
        localStorage.clear();
        navigate('/');
    }, [navigate, changeAuthState]);

    return (
        <p className="text-xl">Just a moment, logging you out</p>
    );
}

export default Logout;
