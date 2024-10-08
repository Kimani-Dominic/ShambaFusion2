import { Link, useNavigate } from "react-router-dom";
import LoginImage from '../../assets/login.jpg';
import { useState } from "react";
import { empty } from "../../utils/empty";
import axiosInstance from "../../API";


function Login() {

    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        if(empty(username) || empty(password)) {
            setError("Fields cannot be empty!");
            return
        }
     setError(null);
     setSuccess(null);

    try {
        const response = await axiosInstance.post('/login/', {
            username,
            password
        });
        setSuccess('Login successful!');
        navigate('/account');
    } catch (err) {
    setError(err.response?.data?.detail || 'An error occured during Login check your details');
    }
}

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg">
                    
                    <div className="hidden lg:flex flex-1">
                        <img 
                            src={LoginImage} 
                            alt="ShambaFusion illustration" 
                            className="w-full h-full object-cover rounded-l-lg" 
                        />
                    </div>
                    {/* Form Section */}
                    <div className="flex-1 p-8">
                        <h2 className="text-3xl font-bold text-center mb-6">Welcome back</h2>
                        <form action="" method="" className="space-y-4">
                            <div>
                                <input 
                                    type="username" 
                                    name="Loginusername" 
                                    placeholder="username" 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required
                                    value={username}
                                    onChange={(e) => setusername(e.target.value)} 
                                />
                            </div>
                            <div>
                                <input 
                                    type="password" 
                                    name="LoginPassword" 
                                    placeholder="Password..." 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-300"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </div>
                            <div className="text-center">
                                <Link to="/forgot-password" className="text-indigo-600 hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="text-center">
                                <span>Don't have an account? </span>
                                <Link to="/signup" className="text-indigo-600 hover:underline">
                                    Register
                                </Link>
                            </div>
                        </form>
                    </div>    
                </div>
                {error && <p className="text-red-500 text-center">{error}</p>}
            </div>   
        </>
    ); 
}

export default Login;
