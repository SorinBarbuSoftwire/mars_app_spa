import React from "react";
import InfoTemplate from "./InfoTemplate";
import {useNavigate} from 'react-router-dom';
import './style/Root.css';


function Root() {
    const navigate = useNavigate();

    return (
        <body>
            <div id="rootMainDiv">
                <InfoTemplate
                    title="NASA"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
                    p1="The National Aeronautics and Space Administration is America's civil space program and the global leader in space exploration."
                    p2="The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S."
                />
                <div id="rootButtonsDiv">
                    <button className="routeButtons" onClick={()=>{navigate('/about');}}>
                        About
                    </button>
                    <button className="routeButtons" onClick={()=>{navigate('/mars');}}>
                        Mars Photos
                    </button>
                    <button className="routeButtons" onClick={()=>{navigate('/earth');}}>
                        Earth Photos - TODO
                    </button>
                    <button className="routeButtons" onClick={()=>{navigate('/exercises');}}>
                        Exercises
                    </button>
                </div>
            </div>
        </body>
    );
}

export default Root;