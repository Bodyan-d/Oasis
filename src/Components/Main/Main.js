import React from 'react';
import "./Main.css"
import SpinWheel from "../Spinwheel/Spinwheel"

function Main(){
    return(
        <div className="main-container">
            <div className="outer-blur"></div>
            <SpinWheel />
        </div>
        
    )
}

export default Main
