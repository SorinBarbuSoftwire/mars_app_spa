import React from "react";
import InfoTemplate from "./InfoTemplate";
import Counter from "./Counter";
import CustomCounter from "./CustomCounter";

function Exercises() {
    return (
        <div className="App">
            <header className="App-header">
                {InfoTemplate(
                    "NASA",
                    "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
                    "The National Aeronautics and Space Administration is America's civil space program and the global leader in space exploration.",
                    "The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S."
                )}
                {Counter()}
                <div>
                    <CustomCounter/>
                </div>
            </header>
        </div>
    );
}

export default Exercises;