import React from 'react';
import "./Main.css"
import SpinWheel from "../Spinwheel/Spinwheel"
// import RouletteWheel from "../Speenweel2/Speenweel2"




function Main(){
    return(
        <div className="main-container">
            <div className="outer-blur"></div>
            {/* <p className="attempts">ATTEMPTS: 2</p>  */}
            <SpinWheel />
            {/* <RouletteWheel /> */}
        </div>
        
    )
}

export default Main
