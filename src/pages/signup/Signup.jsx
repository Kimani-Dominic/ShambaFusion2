import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react'
import SignupImage from '../../assets/signup.jpg';
import { API_BASE_URL } from '../../apiConfig';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        // fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirm_password: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
                navigate('/choose-role');
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-4xl">
                <div className="flex flex-col lg:flex-row">
                    <div className="hidden lg:block lg:w-1/2">
                        <img 
                            src={SignupImage} 
                            alt="ShambaFusion illustration" 
                            className="w-full h-full object-cover rounded-l-lg" 
                        />
                    </div>
                    <div className="lg:w-1/2 p-8">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-center">Karibu ShambaFusion</CardTitle>
                            <CardDescription className="text-center">Create your account to get started</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="Enter your Full name"
                                            className="pl-10"
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                {/* <div className="space-y-2">
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            placeholder="Enter your Full Name"
                                            className="pl-10"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div> */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your Email address"
                                            className="pl-10"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phoneNumber">Phone Number</Label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="pl-10"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            className="pl-10 pr-10"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                        >
                                            {showPassword ? <EyeOff className="text-gray-400" /> : <Eye className="text-gray-400" />}
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirm_password">Confirm Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="confirm_password"
                                            name="confirm_password"
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm Password"
                                            className="pl-10 pr-10"
                                            value={formData.confirm_password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                        >
                                            {showConfirmPassword ? <EyeOff className="text-gray-400" /> : <Eye className="text-gray-400" />}
                                        </button>
                                    </div>
                                </div>
                                {errorMessage && (
                                    <Alert variant="destructive">
                                        <AlertDescription>{errorMessage}</AlertDescription>
                                    </Alert>
                                )}
                                {successMessage && (
                                    <Alert>
                                        <AlertDescription>{successMessage}</AlertDescription>
                                    </Alert>
                                )}
                                <Button type="submit" className="w-full bg-red-600" disabled={isSubmitting}>
                                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                                </Button>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Login
                                </Link>
                            </p>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Signup;