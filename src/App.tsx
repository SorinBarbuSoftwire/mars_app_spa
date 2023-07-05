import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './style/App.css';
import Exercises from "./Exercises";
import Root from "./Root"
import MarsPhotos from "./MarsPhotos";
import About from "./About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/about" element={<About/>} />
                <Route path="/mars" element={<MarsPhotos />} />
                <Route path="/earth" element={<div>TODO</div>} />
                <Route path="/exercises" element={<Exercises />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
