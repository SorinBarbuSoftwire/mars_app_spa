import React from "react";
import './style/InfoTemplate.css';

interface InfoInput {
    title: string,
    img_url: string,
    p1: string,
    p2: string
}

function InfoTemplate(props: InfoInput) {
    return (
        <div id='infoTemplate-MainDiv'>
            <div id='infoTemplate-HeaderDiv'>
                <h3>
                    {props.title}
                </h3>
                <img src={props.img_url} alt="logo" id='infoTemplate-Icon'/>
            </div>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </div>
    );
}

export default InfoTemplate;