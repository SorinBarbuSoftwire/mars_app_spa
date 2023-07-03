import React from 'react';
import logo from './logo.svg';
import './App.css';
import NASA_info from "./NASA_info";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {NASA_info(
                    "NASA",
                    "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
                    "The National Aeronautics and Space Administration is America's civil space program and the global leader in space exploration.",
                    "The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S."
                )}
            </header>
        </div>
    );
}

export default App;
