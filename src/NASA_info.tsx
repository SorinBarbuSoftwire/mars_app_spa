import React from "react";

function NASA_info(title: string, img_url: string, p1: string, p2: string) {
    return (
        <div id='NASA-info'>
            <div id='NASA-header'>
                <h3>
                    {title}
                </h3>
                <img src={img_url} alt="NASA logo" id='icon'/>
            </div>
            <p>
                {p1}
            </p>
            <p>
                {p2}
            </p>
        </div>
    );
}

export default NASA_info;