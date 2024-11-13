import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import LoginImage from '../../assets/login.jpg';
import { API_BASE_URL } from '../../apiConfig';
import { useRole } from "@/hooks/useRole";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
    const { changeRole } = useRole();
    const { changeAuthState } = useAuth();
    const [formData, setFormData] = useState({
        // username: "",
        username: "",
        password: ""
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
                const data = await response.json();
                localStorage.setItem("access_token", data.token);
                localStorage.setItem("user_role", data.user_role);
                localStorage.setItem('username', data.username);
                localStorage.setItem('userId', data.user_id);

                changeRole(data.user_role);
                changeAuthState(true);
                navigate('/admin-panel');
            } else {
                setErrorMessage("Invalid username or password. Please try again.");
                changeAuthState(false);
            }
        } catch (error) {
            console.error("An error occurred while submitting data:", error);
            setErrorMessage("An error occurred. Please try again.");
            changeAuthState(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-4xl">
                <div className="flex flex-col lg:flex-row">
                    <div className="hidden lg:block lg:w-1/2">
                        <img 
                            src={LoginImage} 
                            alt="ShambaFusion illustration" 
                            className="w-full h-full object-cover rounded-l-lg" 
                        />
                    </div>
                    <div className="lg:w-1/2 p-8">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-center">Welcome back!</CardTitle>
                            <CardDescription className="text-center">Login to your account</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="username">Username</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="username"
                                            name="username"
                                            type="username"
                                            placeholder="Enter your username"
                                            className="pl-10"
                                            value={formData.username}
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
                                            placeholder="Enter your password"
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
                                {errorMessage && (
                                    <Alert variant="destructive">
                                        <AlertDescription>{errorMessage}</AlertDescription>
                                    </Alert>
                                )}
                                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                                    {isSubmitting ? 'Logging in...' : 'Login'}
                                </Button>
                            </form>
                        </CardContent>
                        <CardFooter className="flex flex-col items-center space-y-2">
                            <Link to="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                                Forgot password?
                            </Link>
                            <p className="text-sm text-gray-600">
                                Don't have an account?{" "}
                                <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Register
                                </Link>
                            </p>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Login;