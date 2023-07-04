import React from 'react';
import './App.css';
import Exercises from "./Exercises";
import Root from "./Root"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} />
                {/* Exercises from yesterday */}
                <Route path="exercises" element={<Exercises />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
