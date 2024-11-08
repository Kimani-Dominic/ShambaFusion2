import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Logout() {
    const {authenticated, changeAuthState} = useAuth()
    const navigate = useNavigate();
    changeAuthState(false);
    localStorage.clear();
    navigate('/');
    return (
        <p className="text-xl">Just a moment, logging you out</p>
    );
}

export default Logout;