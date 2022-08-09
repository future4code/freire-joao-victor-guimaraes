import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { ListTripPage } from "../Pages/ListTripPage/ListTripPage";
import { ApplicationFormPage } from "../Pages/ApplicationFormPage/ApplicationFormPage";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import { AdminHomePage } from "../Pages/AdminHomePage/AdminHomePage";
import { TripDetailsPage } from "../Pages/TripDetailsPage/TripDetailsPage";
import { CreateTripPage } from "../Pages/CreateTripPage/CreateTripPage";
import { TripDetailsIdPage } from "../Pages/TripDetailsIdPage/TripDetailsIdPage";


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="ListTrip" element={<ListTripPage />} />
                    <Route path="ListTrip/ApplicationForm" element={<ApplicationFormPage />} />
                    <Route path="Login" element={<LoginPage />} />
                    <Route path="Admin" element={<AdminHomePage />} />
                    <Route path="Admin/TripDetails" element={<TripDetailsPage />} />
                    <Route path="Admin/TripDetails/CreateTrip" element={<CreateTripPage />} />
                    <Route path="Admin/TripDetails/:id" element={<TripDetailsIdPage />} />
                </Routes>
            </BrowserRouter>


        </div>
    )

}