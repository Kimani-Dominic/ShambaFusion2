import React, { useState } from 'react';
import axiosInstance from '../../APIs/axiosInstance';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate(); 
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);  

        try {
            // Send login request to the backend
            const response = await axiosInstance.post('/login/', { username, password });
            console.log(response.data);
            localStorage.setItem('token', response.data.token); 
            navigate('/');
        } catch (error: any) {
            if (error.response) {
                // Display specific error message from the response
                setError(error.response.data.message || 'Login failed');
            } else {
                // Handle unexpected errors
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h2>Login</h2>
               {error && <p style={{ color: 'red' }}>{error}</p>}
               <form onSubmit={handleLogin}>
                   <input
                       type="username"
                       placeholder="username"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       required
                   />
                    {/* <input
                       type="email"
                       placeholder="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                   /> */}
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
   
