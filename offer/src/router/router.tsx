import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../View/MainPage';
import ApplyPage from "../View/ApplyPage";
import AnnouncePage from "../View/MainPage";
import CompletePage from "../View/CompletePage";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/apply" element={<ApplyPage />} />
                <Route path="/announcement" element={<AnnouncePage />} />
                <Route path="/complete" element={<CompletePage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;