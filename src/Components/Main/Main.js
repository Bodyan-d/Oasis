import "./Main.css"
import Spinwheel from "../Spinwheel/Spinwheel"



function Main(){
    return(
        <div className="main-container">
            <div className="outer-blur"></div>
            <p className="attempts">ATTEMPTS: 2</p>
            <Spinwheel/>
        </div>
        
    )
}

export default Main