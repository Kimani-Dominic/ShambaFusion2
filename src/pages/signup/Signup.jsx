import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignupImage from '../../assets/signup.jpg';
import { API_BASE_URL } from '../../apiConfig';
import { empty } from "../../utils/empty"; // Ensure this is used or remove it if not needed

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        first_name: "",           // Changed to match backend field
        last_name: "",        // Changed to match backend field
        email: "",               // Changed to match backend field
        password: "",
        confirm_password: ""     // Changed to match backend field
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');

        if (formData.password !== formData.confirm_password) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/usermanagement/register/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("User created successfully");
                navigate('/login');
            } else {
                const errorData = await response.json(); // Capture error response
                setErrorMessage(errorData.detail || "An error occurred. Please try again."); // Update error message based on response
            }
        } catch (error) {
            console.log("An error occurred while submitting data:", error);
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
                            src={SignupImage} 
                            alt="ShambaFusion illustration" 
                            className="w-full h-full object-cover rounded-l-lg" 
                        />
                    </div>
                    {/* Form Section */}
                    <div className="flex-1 p-8">
                        <h2 className="text-3xl font-bold text-center mb-6">Welcome,</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                                <input 
                                    type="text" 
                                    name="username"  // Updated to match backend field
                                    placeholder="User Name" 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={formData.username}  // Updated to match state
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    name="first_name"  // Updated to match backend field
                                    placeholder="First Name" 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={formData.first_name}  // Updated to match state
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    name="last_name"  // Updated to match backend field
                                    placeholder="Last Name" 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={formData.last_name}  // Updated to match state
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    name="email"  // Updated to match backend field
                                    placeholder="Email address..." 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={formData.email}  // Updated to match state
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
                                    value={formData.password}  // Updated to match state
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input 
                                    type="password" 
                                    name="confirm_password"  // Updated to match backend field
                                    placeholder="Confirm Password..." 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={formData.confirm_password}  // Updated to match state
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
                                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                                </button>
                            </div>
                            <div className="text-center">
                                <span>Already have an account? </span>
                                <Link to="/login" className="text-indigo-600 hover:underline">
                                    Login
                                </Link>
                            </div>
                        </form>
                    </div>    
                </div>
            </div>   
        </>
    ); 
};

export default Signup;
