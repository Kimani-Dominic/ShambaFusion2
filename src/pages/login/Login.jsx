import { Link, useNavigate } from "react-router-dom";
import LoginImage from '../../assets/login.jpg';
import { useState } from "react";
import { API_BASE_URL } from '../../apiConfig';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');

        setIsSubmitting(true);
        
        try {
            const response = await fetch(`${API_BASE_URL}api/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("User logged in successfully");
                const data = await response.json();
                console.log(data);

                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("user_role", data.user_role);
                localStorage.setItem('username', data.username);
                localStorage.setItem('userId', data.user_id);

                const userRole = data.user_role;
                if (userRole === "admin" || userRole === "farmer" || userRole === 'buyer') {
                    navigate('/');
                } else {
                    navigate('/admin-panel/dashboard');
                }
            } else {
                console.log("Server error");
                setErrorMessage("An error occurred. Please try again.");
            }
        } catch (error) {
            console.log("An error occurred while submitting data");
            setErrorMessage("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

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
                    <div className="flex-1 p-8">
                        <h2 className="text-3xl font-bold text-center mb-6">Welcome back</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <input 
                                    type="text" 
                                    name="username"  
                                    placeholder="User Name.." 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required
                                    value={formData.username}
                                    onChange={handleChange} 
                                />
                            </div>
                            <div>
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password..." 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                            <div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-300"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Logging in...' : 'Login'}
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
            </div>   
        </>
    ); 
};

export default Login;
