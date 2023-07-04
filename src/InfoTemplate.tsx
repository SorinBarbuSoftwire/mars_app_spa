import React from "react";
import './InfoTemplate.css';

function InfoTemplate(title: string, img_url: string, p1: string, p2: string) {
    return (
        <div id='infoTemplate-MainDiv'>
            <div id='infoTemplate-HeaderDiv'>
                <h3>
                    {title}
                </h3>
                <img src={img_url} alt="logo" id='infoTemplate-Icon'/>
            </div>
            <p>{p1}</p>
            <p>{p2}</p>
        </div>
    );
}

export default InfoTemplate;