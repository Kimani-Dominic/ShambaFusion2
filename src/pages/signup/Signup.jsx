
import { Link } from "react-router-dom";
import { useState } from "react";
import SignupImage from '../../assets/signup.jpg';
import { empty } from "../../utils/empty";

function Signup() {

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        if(empty(fullName) || empty(phoneNumber) || empty(emailAddress) || empty(password) || empty(confirmPassword)) {
            setError('Fields cannot be empty');
            return;
        }
        setError('');

        //API call for signup
    } 


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
                        <form action="" method="" className="space-y-4">
                            <div>
                                <input 
                                    type="text" 
                                    name="fullName" 
                                    placeholder="Full Name" 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={fullName}
                                    onChange={e => setFullName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input 
                                    type="tel" 
                                    name="phoneNumber" 
                                    placeholder="PhoneNumber" 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required
                                    value={phoneNumber}
                                    onChange={e => setPhoneNumber(e.target.value)}
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    name="emailAddress" 
                                    placeholder="Email address..." 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={emailAddress}
                                    onChange={e => setEmailAddress(e.target.value)}
                                />
                            </div>
                            <div>
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password..." 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <input 
                                    type="password" 
                                    name="confirmPassword" 
                                    placeholder="Confirm Password..." 
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    required 
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-300"
                                    onClick={handleSignup}
                                >
                                    Login
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
                {error && <p className="text-red-500 text-center">{error}</p>}
            </div>   
        </>  
    ); 
}


export default Signup;