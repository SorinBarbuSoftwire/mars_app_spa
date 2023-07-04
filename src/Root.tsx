import React from "react";
import Form from "./Form";
import InfoTemplate from "./InfoTemplate";

import './style/Root.css';

function Root() {
    return (
        <body>
            <InfoTemplate
                title="NASA"
                img_url="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
                p1="The National Aeronautics and Space Administration is America's civil space program and the global leader in space exploration."
                p2="The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S."
            />
            <Form />
        </body>
    );
}

export default Root;