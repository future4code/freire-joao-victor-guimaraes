import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage} from "../Pages/HomePage";
import {ListTripPage} from "../Pages/ListTripPage";
import {FormPage} from "../Pages/ApplicationFormPage";
import {LoginPage} from "../Pages/LoginPage";
import {AdminHomePage} from "../Pages/AdminHomePage";
import {TripDetailsPage} from "../Pages/TripDetailsPage";
import {CreateTripPage} from "../Pages/CreateTripPage";


export default function Router() {
    return  (     
        <div> 
            <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="ListTrip" element={<ListTripPage/>}/>
                <Route path="Form" element={<FormPage/>}/>
                <Route path="Login" element={<LoginPage/>}/>
                <Route path="AdminHome" element={<AdminHomePage/>}/>
                <Route path="TripDetails" element={<TripDetailsPage/>}/>
                <Route path="CrateTrip" element={<CreateTripPage/>}/>
            </Routes>
            </BrowserRouter>
        

        </div>
)
    
}