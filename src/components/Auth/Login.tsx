import React, { useState } from 'react';
import axiosInstance from '../../APIs/axiosInstance';
// import axiosInstance from '...';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Send login request to the backend
            const response = await axiosInstance.post('/login', { email, password });
            console.log(response.data); // Handle successful login (e.g., store tokens, redirect user)
            // Redirect user or set user state here
        } catch (error) {
            // Handle error (e.g., display error message)
            // if (axiosInstance.isAxiosError(error) && error.response) {
            //     setError(error.response.data.message || 'Login failed');
            // } else {
            //     setError('An unexpected error occurred');
            // }
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
