import React from 'react';
import './App.css';
import './InfoTemplate.css'
import Counter from "./Counter";
import Exercises from "./Exercises";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Exercises />} />
                <Route path="counter" element={<Counter />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
