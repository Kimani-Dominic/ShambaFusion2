import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import { Register } from './components/Auth/Register';
import { Login } from './components/Auth/Login';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
            </Routes>
        </Router>
    );
};

export default App;

