import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignupImage from '../../assets/signup.jpg';
import { API_BASE_URL } from '../../apiConfig';
// import { empty } from "../../utils/empty"; // Ensure this is used or remove it if not needed

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        first_name: "",           
        last_name: "",        
        email: "",               
        password: "",
        confirm_password: "",
        is_farmer: false,
        is_buyer: false,   
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
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
            const response = await fetch(`${API_BASE_URL}api/register/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSuccessMessage("User created successfully! Please log in.");
                setTimeout(() => setSuccessMessage(''), 5000);
                // console.log("User created successfully");
                navigate('/login');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.detail || "An error occurred. Please try again.");
            }
        } catch (error) {
            console.log("An error occurred while submitting data:", error);
            setErrorMessage("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
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
                                    name="username"  
                                    placeholder="User Name" 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={formData.username}  
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    name="first_name"  
                                    placeholder="First Name" 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={formData.first_name}  
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    name="last_name"  
                                    placeholder="Last Name" 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={formData.last_name}  
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    name="email"  
                                    placeholder="Email address..." 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={formData.email}  
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
                            <div>
                                <input 
                                    type="password" 
                                    name="confirm_password"  
                                    placeholder="Confirm Password..." 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={formData.confirm_password}  
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                 <label>
                                    Farmer:
                                    <input
                                        type="checkbox"
                                        name="is_farmer"
                                        checked={formData.is_farmer}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label>
                                    Buyer:
                                    <input
                                        type="checkbox"
                                        name="is_buyer"
                                        checked={formData.is_buyer}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
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
