import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import CardDetails from './components/card-details/card-details.component';

const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/users/:id" element={<CardDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesPath;