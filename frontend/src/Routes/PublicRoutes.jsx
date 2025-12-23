import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../Pages/Landing/Landing'; // Path matches your folder structure
import Register from '../Pages/Authentication/Register'; // Path matches your folder structure
import Register2 from '../Pages/Authentication/Register2'; // Path matches your folder structure
import Login from '../Pages/Authentication/Login'; // Path matches your folder structure

import Dashboard from '../Pages/Dashboard/Dashboard'; // Example private route
import HeritageDetails from '../Pages/HeritageDetails/HeritageDetails'; // Example private route
import BuyHeritage from '../Pages/HeritageDetails/BuyHeritage'; // Example private route
import Payment from '../Pages/HeritageDetails/Payment'; // Example private route
import PageNotFound from '../Pages/PageNotFound';

const PublicRoutes = () => {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Landing />}
                />
                <Route
                    path="/landing"
                    element={<Landing />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
                <Route
                    path="/register-2"
                    element={<Register2 />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* Private routes go here */}
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                {/* show detail of each item */}
                <Route
                    path="/heritage/:id"
                    element={<HeritageDetails />}
                />

                <Route
                    path="/heritage/:id/buy-content"
                    element={<BuyHeritage />}
                />

                <Route
                    path="/heritage/:id/buy-content/payment"
                    element={<Payment />}
                />

                <Route
                    path="*"
                    element={<PageNotFound/>}
                />
            </Routes>
        </div>
    );
};

export default PublicRoutes;